'use client'

import Link from 'next/link';
import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { BACKEND_URL } from "@/app/config";
import { toast } from 'sonner';


const SignInForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
        username: email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      router.push("/dashboard");
    } catch (error) {
      console.error('An error occurred during the request setup', error);
      setError('An unexpected error occurred.');
    }
  };

  return (
    <>
      <form onSubmit={loginHandler}>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
            <input
              id="email"
              type="email"
              className="form-input w-full text-gray-300"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
            <input
              id="password"
              type="password"
              className="form-input w-full text-gray-300"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <div className="flex justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-gray-400 ml-2">Keep me signed in</span>
              </label>
              <div>
                <Link href="/reset-password" className="text-purple-600 hover:text-gray-200 ml-2 transition duration-150 ease-in-out">Forgot Password?</Link>
              </div>
            </div>
          </div>
        </div>
        {error && (
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <div className="text-red-500">{error}</div>
            </div>
          </div>
        )}
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-3">
            <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" type="submit">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default SignInForm;
