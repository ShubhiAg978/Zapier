export const metadata = {
    title: 'Login | Zapier',
    description: "Workflow automation software for everyone. Zapier automates your work across 7000+ app integrations, so you can focus on what matters.",
}

import { CheckFeature } from "@/app/(auth)/CheckFeature";
import SignInForm from './SignInForm';
import Link from 'next/link';

export default function SignIn() {

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center">
                    {/* Left side content */}
                    <div className="flex-1 text-center md:text-left md:pr-12">
                        <h2 className="font-semibold text-3xl pb-4">
                            Join millions worldwide who automate their work using Zapier.
                        </h2>
                        <div className="pb-6 pt-4">
                            <CheckFeature label={"Easy setup, no coding required"} />
                        </div>
                        <div className="pb-6">
                            <CheckFeature label={"Free forever for core features"} />
                        </div>
                        <div className="pb-6">
                            <CheckFeature label={"14-day trial of premium features & apps"} />
                        </div>
                    </div>
    
                    {/* Sign-in form */}
                    <div className="flex-1 pt-6 pb-6 px-4 border rounded shadow-md bg-gray">
                        <SignInForm />
                        <div className="text-gray-400 text-center mt-6">
                            Don’t you have an account?{" "}
                            <Link
                                href="/signup"
                                className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
      
}
