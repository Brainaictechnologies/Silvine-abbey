"use client";
import { useRouter } from "next/navigation";
import React from "react";

// Define the type for a blog postz
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
    title:
      "Businesses often seek Credit Enhancement when a bank or seller harbors reservations about a client's financial history or collateral adequacy.",
    date: "April 17, 2024",
    content:
      "While banks extend Credit Enhancement Support, it's typically reserved for well-established companies boasting robust financial standings. Establishing enduring, trust-based relationships with substantial and reputable clientele is paramount for banks. To garner bank support, qualification is imperative. Banks adhere to specific protocols when evaluating applications, focusing on the borrower's Capacity, Collateral, Capital, Character, and General Conditions. These fundamentals constitute the bedrock of credit analysis for loan applications or financial service provision. The strength of your financial business background directly impacts the terms you can secure. Conversely, a weak financial and business history severely diminishes prospects for bank support. In banking reality, those least reliant on bank assistance often receive seamless, favorable service.",
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
const SingleBlogPage = () => {
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
