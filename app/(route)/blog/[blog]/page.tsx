import React from "react";

// Define the type for a blog post

// Single blog page component
const SingleBlogPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 mt-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">{"Second Blog Post"}</h1>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={"https://via.placeholder.com/500"}
            alt="Blog Post"
            width={500}
            height={500}
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <p className="text-gray-700">{"April 5, 2022"}</p>
            <p className="mt-4">
              {
                "Nullam eleifend elit ac ante egestas, nec sagittis enim ullamcorper. Phasellus condimentum dolor sed magna tincidunt, et faucibus mauris pretium Nullam eleifend elit ac ante egestas, nec sagittis enim ullamcorper. Phasellus condimentum dolor sed magna tincidunt, et faucibus mauris pretium Nullam eleifend elit ac ante egestas, nec sagittis enim ullamcorper. Phasellus condimentum dolor sed magna tincidunt, et faucibus mauris pretium Nullam eleifend elit ac ante egestas, nec sagittis enim ullamcorper. Phasellus condimentum dolor sed magna tincidunt, et faucibus mauris pretium Nullam eleifend elit ac ante egestas, nec sagittis enim ullamcorper. Phasellus condimentum dolor sed magna tincidunt, et faucibus mauris pretium."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
