'use client'

import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { BACKEND_URL } from "@/app/config";

const SignUpForm = () => {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  
    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {       
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
                username: email,
                password,
                name
            });
            router.push("/signin");      
        } catch (error) {
            console.log('An error occurred during the request', error)
            setErrorMessage('Failed to sign up. Please try again later.');
        }
    };     

  return (
    <>
    <form onSubmit={submitHandler}>
        {errorMessage && <div className="text-red-600 text-center">{errorMessage}</div>}
        <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Full Name <span className="text-red-600">*</span></label>
            <input id="full-name" type="text" className="form-input w-full text-gray-300" placeholder="First and last name" required value={name}
    onChange={(e) => setName(e.target.value)} />
        </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Work Email <span className="text-red-600">*</span></label>
            <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="Email address" required value={email}
    onChange={(e) => setEmail(e.target.value)} />
        </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
            <input id="password" type="password" className="form-input w-full text-gray-300" placeholder="Password (at least 10 characters)" required value={password}
    onChange={(e) => setPassword(e.target.value)} />
        </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-6">
        <div className="w-full px-3">
            <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Get started free</button>
        </div>
        <div className="text-sm text-gray-500 text-center">
        By signing up, you agree to Zapier's terms of service and privacy policy.
        </div>
        </div>
    </form>
    </>
  )
}

export default SignUpForm

 {/* <div className="pt-4">
      <PrimaryButton
          onClick={async () => {
              try {
                  const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
                      username: email,
                      password,
                  });
                  localStorage.setItem("token", res.data.token);
                  router.push("/dashboard");
              } catch (error) {
                  console.error("Login failed:", error);
                  // Handle error (e.g., show a message to the user)
              }
          }}
          size="big"
      >
          Login
      </PrimaryButton>
    </div> */}