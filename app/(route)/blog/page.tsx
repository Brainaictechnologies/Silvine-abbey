"use client";
import { useRouter } from "next/navigation";
import React from "react";

// Define the type for a blog post
type BlogPostData = {
  id: string;
  title: string;
  date: string;
  content: string;
  imageUrl: string;
};

// Create an array of blog posts
const blogPosts: BlogPostData[] = [
  {
    id: "1",
    title: "First Blog Post",
    date: "April 1, 2022",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum lorem et enim ultricies, quis placerat felis tincidunt.",
    imageUrl: "https://via.placeholder.com/500",
  },
  {
    id: "2",
    title: "Second Blog Post",
    date: "April 5, 2022",
    content:
      "Nullam eleifend elit ac ante egestas, nec sagittis enim ullamcorper. Phasellus condimentum dolor sed magna tincidunt, et faucibus mauris pretium.",
    imageUrl: "https://via.placeholder.com/500",
  },
  {
    id: "3",
    title: "Second Blog Post",
    date: "April 5, 2022",
    content:
      "Nullam eleifend elit ac ante egestas, nec sagittis enim ullamcorper. Phasellus condimentum dolor sed magna tincidunt, et faucibus mauris pretium.",
    imageUrl: "https://via.placeholder.com/500",
  },
  {
    id: "4",
    title: "Second Blog Post",
    date: "April 5, 2022",
    content:
      "Nullam eleifend elit ac ante egestas, nec sagittis enim ullamcorper. Phasellus condimentum dolor sed magna tincidunt, et faucibus mauris pretium.",
    imageUrl: "https://via.placeholder.com/500",
  },
  {
    id: "5",
    title: "Second Blog Post",
    date: "April 5, 2022",
    content:
      "Nullam eleifend elit ac ante egestas, nec sagittis enim ullamcorper. Phasellus condimentum dolor sed magna tincidunt, et faucibus mauris pretium.",
    imageUrl: "https://via.placeholder.com/500",
  },
  {
    id: "6",
    title: "Second Blog Post",
    date: "April 5, 2022",
    content:
      "Nullam eleifend elit ac ante egestas, nec sagittis enim ullamcorper. Phasellus condimentum dolor sed magna tincidunt, et faucibus mauris pretium.",
    imageUrl: "https://via.placeholder.com/500",
  },
  {
    id: "7",
    title: "Second Blog Post",
    date: "April 5, 2022",
    content:
      "Nullam eleifend elit ac ante egestas, nec sagittis enim ullamcorper. Phasellus condimentum dolor sed magna tincidunt, et faucibus mauris pretium.",
    imageUrl: "https://via.placeholder.com/500",
  },
];

// Blog page component
export const SingleBlogPage = () => {
  const router = useRouter();
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
              <img
                src={blogPost.imageUrl}
                alt="Blog Post"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{blogPost.title}</h2>
                <p className="text-gray-700">{blogPost.date}</p>
                <p className="mt-4">{blogPost.content}</p>
                {/* Add more content as needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
