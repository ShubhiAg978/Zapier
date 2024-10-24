'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const ButtonSection: React.FC = () => {
  const router = useRouter();

  // Function to check if the user is authenticated
  const isAuthenticated = (): boolean => {
    // Replace this logic with your actual authentication check
    return !!localStorage.getItem('token'); // Example: checking for a token in localStorage
  };

  const handleButtonClick = () => {
    if (isAuthenticated()) {
      router.push('/dashboard'); // Redirect to the dashboard if authenticated
    } else {
      router.push('/signin'); // Redirect to the sign-in page if not authenticated
    }
  };

  return (
    <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
      <div data-aos="fade-up" data-aos-delay="400">
        <button
          className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
          onClick={handleButtonClick}
        >
          Get started free
        </button>
      </div>
    </div>
  );
};

export default ButtonSection;
