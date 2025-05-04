// Mock data (replace with API call later)
const blogData = {
    'first-blog': {
        slug: 'first-blog',
        title: 'Introduction to Math Basics',
        content: '<p>This is a sample blog post about math basics. <strong>Learn addition, subtraction, and more!</strong></p><ul><li>Addition</li><li>Subtraction</li></ul>',
        author: { fullName: 'Teacher A' },
        createdAt: new Date(),
        image: 'https://via.placeholder.com/300x200',
    },
    'second-blog': {
        slug: 'second-blog',
        title: 'Science for Beginners',
        content: '<p>This is another sample blog post about science for beginners. <em>Explore the basics of physics!</em></p>',
        author: { fullName: 'Teacher B' },
        createdAt: new Date(),
        image: 'https://via.placeholder.com/300x200',
    },
};

export default function BlogDetail({ params }) {
    const { slug } = params;
    const blog = blogData[slug];

    if (!blog) return <p className="text-red-500">Blog not found</p>;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-2">By {blog.author.fullName}</p>
            <p className="text-gray-500 text-sm mb-4">
                {new Date(blog.createdAt).toLocaleDateString()}
            </p>
            <div className="prose" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
    );
}