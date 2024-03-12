"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Herobcg from "@/app/assets/home-bg.png";
import Mobilebcg from "@/app/assets/mobile-hero.png";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const windowObj = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState(() => {
    if (windowObj) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
  });

  const handleResize = () => {
    if (typeof window !== "undefined") {
      // Client-side-only code
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  };

  useEffect(() => {
    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount to prevent memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full h-full relative">
      <div className="max-w-screen-2xl mx-auto relative ">
        <Image
          src={
            windowSize?.width && windowSize?.width <= 640 ? Mobilebcg : Herobcg
          }
          alt="Hero Image"
          className="h-[100vh] mx-auto"
        />
      </div>
      <div className="absolute z-20 top-[8rem] sm:left-[5rem] left-0 w-full sm:w-fit text-center sm:text-start">
        <h1 className=" text-[28px] md:text-4xl tracking-wide text-white md:mb-2  sm:py-0 font-bold">
          Unleashing the Power of{" "}
          <span className="text-[#29337b] font-bold block sm:inline py-3">
            <ReactTyped
              strings={["Trade::", "Finance::", "Investment::"]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />
          </span>
        </h1>
        <p className="text-white  sm:text-sm font-light md:mb-6 py-2 md:py-0">
          Silvine strategies transform futures
        </p>
        <h1 className="text-white  sm:text-sm py-2 md:py-0">
          Silvine Investment
        </h1>
        <p className="text-white  sm:text-sm font-extralight py-2 sm:py-0">
          Empowering your financial Journey
        </p>

        <p className=" sm:text-sm md:mt-8 text-white md:border-b border-white w-full sm:w-fit md:max-w-[45rem]">
          Read the company strategy
        </p>
      </div>
      {/* <div className="absolute bottom-0 right-0 z-20 w-fit md:max-w-[55rem] text-white flex flex-col md:flex-row  gap-2 md:gap-0">
        <div className="bg-white p-6 md:p-3 text-black ml-8 md:ml-0 ">
          <h1>Trade Finance</h1>
          <p>
            Silvine is positioned to promoting global trade by providing
            financial instruments necessary to facilitate transactions and
            mitigate risks
          </p>
        </div>
        <div className="bg-black p-6 md:p-3 ml-8 md:ml-0">
          <h1> Capital Raising</h1>
          <p>
            Capital Raising Silvine investment is built on trust & credibility
            and infused in our DNA? is the adroitness to delivering financial
            solutions to various businesses.
          </p>
        </div>
        <div className="bg-[#29337b] p-6 md:p-3 ml-8 md:ml-0">
          <h1>Project Development</h1>
          <p>
            We help secure funding from investors, lenders, or government
            agencies. Ensuring compliance with financial regulatory
            requirements.
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
