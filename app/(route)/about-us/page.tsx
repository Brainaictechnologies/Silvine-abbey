"use client";
import Article1 from "@/components/Article/Article1";
import Article2 from "@/components/Article/Article2";
import Article3 from "@/components/Article/Article3";
import Article4 from "@/components/Article/Article4";
import Leaders from "@/components/Our-leaders/Leaders";
import { article } from "@/constants/constants";
import Image from "next/image";
import React, { useState } from "react";
import SilvineBlack from "@/app/assets/silvineBlack.svg";

const AboutUs = () => {
  const [selectedArticle, setSelecetedArticle] = useState("article1");
  const articleToRender = (selectedArticle: string) => {
    switch (selectedArticle) {
      case "article1":
        return <Article1 />;

      case "article2":
        return <Article2 />;

      case "article3":
        return <Article3 />;

      case "article4":
        return <Article4 />;
      default:
        return;
    }
  };

  const articleCards = (styles: string) => (
    <div className={`  text-center  ${styles} `}>
      {article.map((article) => (
        <div
          key={article.id}
          onClick={() => setSelecetedArticle(article.name)}
          className={`cursor-pointer border-2  shadow-sm ${
            selectedArticle === article.name
              ? "border-blue-900"
              : "border-gray-50"
          }`}
        >
          <Image
            src={article.image}
            alt={article.name}
            width={75}
            height={75}
          />
          <p className="font-bold">{article.id}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section className=" pt-28 bg-[#F2EDE4] w-full">
      <div className=" w-full ">
        <div className="border-b pb-6 px-4 sm:px-6 lg:pl-16 bg-white w-full h-32 pt-6">
          <h1 className="font-bold text-xl sm:text-2xl py-1 ">
            Investment announces partnership of Saudi Arab..
          </h1>
          <p className=" text-[#666460] pb-3">11/12/2023</p>
        </div>
        <div className=" relative bg-[#F2EDE4] py-8 w-full">
          {articleCards(
            " md:absolute  h-24 hidden md:grid grid-cols-4  md:top-10 md:right-6  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          )}
          {/* <div className="absolute hidden  md:top-10 md:right-6   text-center  h-24 sm:grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {article.map((article) => (
              <div
                onClick={() => setSelecetedArticle(article.name)}
                className={`cursor-pointer border-2  shadow-sm ${
                  selectedArticle === article.name
                    ? "border-blue-900"
                    : "border-gray-50"
                }`}
              >
                <Image
                  src={article.image}
                  alt={article.name}
                  width={75}
                  height={75}
                />
                <p className="font-bold">{article.id}</p>
              </div>
            ))}
          </div> */}

          <div className=" md:w-[40%] mx-6 md:mx-auto px-10 py-16 font-bold shadow-lg bg-white mt-4 transition-all duration-150">
            <div className="mb-4 mt-[-2rem]">
              <Image src={SilvineBlack} alt="Silvine Logo" />
            </div>
            {articleToRender(selectedArticle)}
          </div>

          <div className="px-6">
            {articleCards("flex gap-6 mt-6 w-full items-center md:hidden")}
          </div>
        </div>
      </div>
      <div className="bg-white w-full mt-4">
        <Leaders />
      </div>
    </section>
  );
};

export default AboutUs;
