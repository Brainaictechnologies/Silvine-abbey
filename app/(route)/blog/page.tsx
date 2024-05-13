"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { blogPosts } from "@/constants/constants";

// Define the type for a blog postz

// Blog page component
const SingleBlogPage = () => {
  const router = useRouter();
  // const [openBlog, setOpenBlog] = useState(false);
  return (
    <div className="bg-gray-100 min-h-screen py-12 mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Welcome to My Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Loop over blog posts and render each one */}
          {blogPosts.map((blogPost) => (
            <div
              onClick={() => router.push(`/blog/${blogPost.id}`)}
              key={blogPost.id}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={blogPost.imageUrl}
                alt="Blog Post"
                width={500}
                height={500}
                className="w-full h-56 object-center"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{blogPost.title}</h2>
                <p className="text-gray-700">{blogPost.date}</p>
                <p className="mt-4 truncate">{blogPost.content}</p>

                {/* Add more content as needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SingleBlogPage;
