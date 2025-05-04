'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from '@/context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">Coaching Center</Link>
                <div className="space-x-4">
                    <Link href="/" className="hover:underline">Home</Link>
                    {user ? (
                        <>
                            <Link href="/teacher" className="hover:underline">Teacher Panel</Link>
                            <button onClick={logout} className="hover:underline">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="hover:underline">Login</Link>
                            <Link href="/register" className="hover:underline">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;