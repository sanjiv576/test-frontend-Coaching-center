'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from '../../context/AuthContext';

export default function TeacherPanel() {
    const { user } = useContext(AuthContext);

    if (!user || user.role !== 'teacher') {
        return <p className="text-red-500">Access denied</p>;
    }

    return (
        <div className="container mx-auto p-4 flex">
            <div className="w-1/4 bg-gray-200 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Teacher Panel</h3>
                <nav className="space-y-2">
                    <Link href="/teacher/add-blog" className="block text-blue-500 hover:underline">
                        Add Blog
                    </Link>
                    <Link href="/teacher/profile" className="block text-blue-500 hover:underline">
                        Profile
                    </Link>
                </nav>
            </div>
            <div className="w-3/4 p-4">
                <h2 className="text-2xl font-bold">Welcome, {user.fullName}</h2>
            </div>
        </div>
    );
}