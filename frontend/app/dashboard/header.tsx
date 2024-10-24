'use client'

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/signin'); 
    };
    
    return (
        <header className="fixed top-0 w-full shadow-lg">
        {/* <header className="fixed top-0 w-full z-30 bg-gray-900 shadow-lg"> */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16"> 
                    <div className="shrink-0 mr-4 flex items-center">
                        <span className="text-3xl ml-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                            _zapier
                        </span>
                    </div>

                    {/* User menu */}
                    <div className="relative">
                        <button 
                            onClick={() => setMenuOpen(!menuOpen)} 
                            className="flex items-center focus:outline-none"
                        >
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="white"
                                    className="w-6 h-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A5.978 5.978 0 0112 15c1.657 0 3.156.673 4.121 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.209 0 4 1.791 4 4v2a2 2 0 002 2h-12a2 2 0 002-2v-2c0-2.209 1.791-4 4-4z" />
                                </svg>
                            </div>
                        </button>
                        {menuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                                <Link 
                                    href="/profile" 
                                    className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-t-lg transition duration-150"
                                >
                                    <svg 
                                        className="w-5 h-5 mr-2" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A5.978 5.978 0 0112 15c1.657 0 3.156.673 4.121 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.209 0 4 1.791 4 4v2a2 2 0 002 2h-12a2 2 0 002-2v-2c0-2.209 1.791-4 4-4z" />
                                    </svg>
                                    Profile
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-600 rounded-b-lg transition duration-150 w-full text-left"
                                >
                                    <svg 
                                        className="w-5 h-5 mr-2" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12h6m-3-3v6m4-18H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2z" />
                                    </svg>
                                    Sign out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
