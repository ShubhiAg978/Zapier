'use client'

import Link from 'next/link';
import { useState, FormEvent } from 'react';
import axios from 'axios';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/auth/forgot-password', { email });
      setMessage('Instructions have been sent to your email.');
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h3 mb-4">Forgot your password?</h1>
            <p className="text-l text-gray-400">We'll email you instructions on how to reset it.</p>
          </div>
          <div className="max-w-sm mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full text-gray-300"
                    placeholder="you@yourcompany.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Reset Password</button>
                </div>
              </div>
            </form>
            {message && <p className="text-center text-gray-400 mt-4">{message}</p>}
            <div className="text-gray-400 text-center mt-6">
              <Link href="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Cancel</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
