import Image from "next/image";
import React from "react";

// Define the type for a blog post
type BlogPost = {
  singlePost: {
    id: string;
    title: string;
    date: string;
    content: string;
    imageUrl: string;
  };
};

// Single blog page component
const SingleBlogPage = ({ singlePost }: BlogPost) => {
  // Extract the blog post id from the URL params

  // Find the blog post with the matching id
  //   const blogPost = blogPosts.find((post) => post.id === parseInt(id, 10));

  // If no matching blog post is found, display a message
  //   if (!blogPost) {
  //     return <div className="text-center text-red-500">Blog post not found</div>;
  //   }

  //       {
  //     id: "4",
  //     title: "Second Blog Post",
  //     date: "April 5, 2022",
  //     content:
  //       "Nullam eleifend elit ac ante egestas, nec sagittis enim ullamcorper. Phasellus condimentum dolor sed magna tincidunt, et faucibus mauris pretium.",
  //     imageUrl: "https://via.placeholder.com/500", // Replace with actual image URL
  //   },

  return (
    <div className="bg-gray-100 min-h-screen py-12 mt-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">
          {singlePost?.title || "Second Blog Post"}
        </h1>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={singlePost?.imageUrl || "https://via.placeholder.com/500"}
            alt="Blog Post"
            width={500}
            height={500}
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <p className="text-gray-700">
              {singlePost?.date || "April 5, 2022"}
            </p>
            <p className="mt-4">
              {singlePost?.content ||
                "Nullam eleifend elit ac ante egestas, nec sagittis enim ullamcorper. Phasellus condimentum dolor sed magna tincidunt, et faucibus mauris pretium Nullam eleifend elit ac ante egestas, nec sagittis enim ullamcorper. Phasellus condimentum dolor sed magna tincidunt, et faucibus mauris pretium Nullam eleifend elit ac ante egestas, nec sagittis enim ullamcorper. Phasellus condimentum dolor sed magna tincidunt, et faucibus mauris pretium Nullam eleifend elit ac ante egestas, nec sagittis enim ullamcorper. Phasellus condimentum dolor sed magna tincidunt, et faucibus mauris pretium Nullam eleifend elit ac ante egestas, nec sagittis enim ullamcorper. Phasellus condimentum dolor sed magna tincidunt, et faucibus mauris pretium."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
