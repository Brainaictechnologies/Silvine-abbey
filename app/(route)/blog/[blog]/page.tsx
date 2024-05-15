import Image from "next/image";
import React from "react";
import { DefautValue, blogPosts } from "@/constants/constants";

// Define the type for a blog post

// Single blog page component
const SingleBlogPage = ({ params }: { params: { blog: string } }) => {
  const singleblog =
    blogPosts.find((blog) => blog.id === params.blog) ?? DefautValue;

  return (
    <div className="bg-gray-100 min-h-screen py-12 mt-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">{singleblog.title}</h1>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={singleblog.imageUrl}
            alt="Blog Post"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="p-6">
            <p className="text-gray-700">{singleblog?.date}</p>
            <p className="mt-4">{singleblog?.content}</p>
            <p className="mt-4 ">{singleblog?.subtitle1}</p>
            <p className="mt-4 ">{singleblog?.content1}</p>
            <p className="mt-4 ">{singleblog?.subtitle2}</p>
            <p className="mt-4 ">{singleblog?.content2}</p>
            <p className="mt-4 ">{singleblog?.subtitle3}</p>
            <p className="mt-4 ">{singleblog?.content3}</p>
            <p className="mt-4 ">{singleblog?.subtitle4}</p>
            <p className="mt-4 ">{singleblog?.content4}</p>
            <p className="mt-4 ">{singleblog?.subtitle5}</p>
            <p className="mt-4 ">{singleblog?.content5}</p>
            <p className="mt-4 ">{singleblog?.subtitle6}</p>
            <p className="mt-4 ">{singleblog?.content6}</p>
            <p className="mt-4 ">{singleblog?.subtitle7}</p>
            <p className="mt-4 ">{singleblog?.content7}</p>
            <p className="mt-4 ">{singleblog?.subtitle8}</p>
            <p className="mt-4 ">{singleblog?.content8}</p>
            <p className="mt-4 ">{singleblog?.subtitle9}</p>
            <p className="mt-4 ">{singleblog?.content9}</p>
            <p className="mt-4 ">{singleblog?.subtitle10}</p>
            <p className="mt-4 ">{singleblog?.content10}</p>
            <p className="mt-4 ">{singleblog?.subtitle11}</p>
            <p className="mt-4 ">{singleblog?.content11}</p>
            <p className="mt-4 ">{singleblog?.subtitle12}</p>
            <p className="mt-4 ">{singleblog?.content12}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
