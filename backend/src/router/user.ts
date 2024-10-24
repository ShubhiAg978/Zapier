import { Router } from "express";
import { authMiddleware } from "../middleware";
import { SigninSchema, SignupSchema } from "../types";
import { prismaClient } from "../db";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../config";
import argon2 from "argon2";
// import { sendEmail } from "../utils/email"; 

const router = Router();

router.post("/signup", async (req, res) => {
    const body = req.body;
    const parsedData = SignupSchema.safeParse(body);

    if (!parsedData.success) {
        console.log(parsedData.error);
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }

    // Check if the user already exists
    const userExists = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.username
        }
    });

    if (userExists) {
        return res.status(403).json({
            message: "User already exists"
        });
    }

    // Hash the password using Argon2
    let hashedPassword;
    try {
        hashedPassword = await argon2.hash(parsedData.data.password);
    } catch (err) {
        console.error("Error hashing password:", err);
        return res.status(500).json({
            message: "Server error while hashing the password"
        });
    }

    // Create a new user with the hashed password
    const newUser = await prismaClient.user.create({
        data: {
            email: parsedData.data.username,
            password: hashedPassword,  // Store the hashed password
            name: parsedData.data.name
        }
    });

    // Send verification email (optional)
    // await sendEmail({
    //     to: newUser.email,
    //     subject: "Verify your email",
    //     html: `<p>Please verify your account by clicking the link below:</p>
    //            <a href="http://example.com/verify?token=${newUser.verificationToken}">Verify your email</a>`
    // });

    return res.json({
        message: "Please verify your account by checking your email"
    });
});


// Signin route
router.post("/signin", async (req, res) => {
    const body = req.body;
    const parsedData = SigninSchema.safeParse(body);

    if (!parsedData.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }

    // Find the user by email
    const user = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.username
        }
    });

    if (!user) {
        return res.status(403).json({
            message: "Sorry, credentials are incorrect"
        });
    }

    // Verify the password using argon2.verify
    let passwordValid;
    try {
        passwordValid = await argon2.verify(user.password, parsedData.data.password); 
        // user.password is the hashed password from the DB
    } catch (err) {
        console.error("Error verifying password:", err);
        return res.status(500).json({
            message: "Server error during password verification"
        });
    }

    if (!passwordValid) {
        return res.status(403).json({
            message: "Sorry, credentials are incorrect"
        });
    }

    // Sign the JWT
    const token = jwt.sign({
        id: user.id
    }, JWT_PASSWORD);

    return res.json({
        message: "Login successful",
        token: token,
    });
});

// Protected route to get user info
router.get("/", authMiddleware, async (req, res) => {
    // Extract user id from auth middleware
    // @ts-ignore
    const id = req.id;

    const user = await prismaClient.user.findFirst({
        where: { id },
        select: {
            name: true,
            email: true
        }
    });

    return res.json({
        user
    });
});

// Logout route
router.get("/logout", async (req, res) => {
    res.json({
            message: "Logout successful",
        });
});

export const userRouter = router;
