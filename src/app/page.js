import BlogCard from './components/BlogCard';

// Mock data (replace with API call later)
const blogs = [
    {
        slug: 'first-blog',
        title: 'Introduction to Math Basics',
        content: 'This is a sample blog post...',
        author: { fullName: 'Teacher A' },
        createdAt: new Date(),
        image: 'https://via.placeholder.com/300x200',
    },
    {
        slug: 'second-blog',
        title: 'Science for Beginners',
        content: 'This is another sample blog post...',
        author: { fullName: 'Teacher B' },
        createdAt: new Date(),
        image: 'https://via.placeholder.com/300x200',
    },
];

export default function Home() {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.map((blog) => (
                    <BlogCard key={blog.slug} blog={blog} />
                ))}
            </div>
        </div>
    );
}