'use client';

import React from 'react';
import Link from 'next/link';

const BlogCard = ({ blog }) => {
    return (
        <div className="border rounded-lg shadow-md p-4 bg-white">
            <img
                src={blog.image || 'https://via.placeholder.com/300x200'}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="mt-2">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-gray-600 text-sm">By {blog.author?.fullName || 'Unknown'}</p>
                <p className="text-gray-500 text-sm">
                    {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                <Link href={`/blogs/${blog.slug}`} className="text-blue-500 hover:underline">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;