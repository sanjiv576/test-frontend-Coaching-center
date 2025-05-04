'use client';

import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');

    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p></p>',
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            if (html === '<p></p>') {
                editor.commands.setContent('');
            }
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const content = editor?.getHTML() || '';
        const contentText = editor?.getText() || '';
        if (!title || !contentText) {
            setError('Title and content are required');
            return;
        }
        console.log('Blog submitted:', { title, content });
        window.location.href = '/blogs';
    };

    if (!editor) return null;

    return (
        <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border p-2 rounded"
                        placeholder="Enter blog title"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Content</label>
                    <div className="border p-2 rounded mb-2">
                        <button
                            type="button"
                            onClick={() => editor.chain().focus().toggleBold().run()}
                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            Bold
                        </button>
                        <button
                            type="button"
                            onClick={() => editor.chain().focus().toggleItalic().run()}
                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 ml-1"
                        >
                            Italic
                        </button>
                        <button
                            type="button"
                            onClick={() => editor.chain().focus().toggleBulletList().run()}
                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 ml-1"
                        >
                            Bullet List
                        </button>
                    </div>
                    <EditorContent
                        editor={editor}
                        className="border p-2 rounded min-h-[200px] prose"
                        placeholder="Write your blog content here..."
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Publish
                </button>
            </form>
        </div>
    );
};

export default BlogForm;