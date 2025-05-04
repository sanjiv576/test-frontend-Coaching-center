'use client';

import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function TeacherProfile() {
    const { user } = useContext(AuthContext);

    if (!user) return <p>Loading...</p>;

    return (
        <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Teacher Profile</h2>
            <div className="space-y-2">
                <p><strong>Full Name:</strong> {user.fullName}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role}</p>
            </div>
        </div>
    );
}