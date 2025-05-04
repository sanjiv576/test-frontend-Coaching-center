'use client';

import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Mock user data (replace with API call later)
            setUser({ role: 'teacher', fullName: 'Teacher A', email: 'teacher@example.com' });
        }
    }, []);

    const login = async (email, password) => {
        // Mock login logic (replace with API call later)
        if (email && password) {
            localStorage.setItem('token', 'mock-token');
            setUser({ role: 'teacher', fullName: 'Teacher A', email });
            router.push('/teacher');
        } else {
            throw new Error('Please fill in all fields');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};