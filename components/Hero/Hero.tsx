"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Herobcg from "@/app/assets/bcg.jpeg";
import Mobilebcg from "@/app/assets/mobile-hero.png";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const [showText, setShowText] = useState("");
  const windowObj = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState(() => {
    if (windowObj) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
  });

  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation after a short delay (e.g., 100ms)
    const timeout = setTimeout(() => {
      setSlideIn(true);
    }, 100);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

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
    <section className="w-full max-w-screen-2xl mx-auto h-full relative ">
      <div className="max-w-screen-2xl  w-full h-[70vh] sm:h-[100vh] mx-auto relative aspect-[70/20] sm:aspect-square">
        <Image
          src={
            windowSize?.width && windowSize?.width <= 640 ? Mobilebcg : Herobcg
          }
          alt="Hero Image"
          fill
          className="w-full"
        />
      </div>

      <div className="max-w-[1440px] mx-auto">
        <div //sm:left-[3%] left-0
          className={`absolute z-20 max-w-[1440px] mx-auto top-[8rem] sm:top-[14rem] pl-5  w-full  text-center sm:text-start `}
        >
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
        </div>
      </div>
      <div
        className={`absolute  w-full bottom-0 right-0 h-fit md:h-60  text-white  flex flex-col justify-end md:flex-row items-end  gap-2 md:gap-0 z-20 overflow-hidden  form-container1 ${
          slideIn ? "slide-right" : ""
        } `}
      >
        <div className="bg-white  p-6 md:p-3 text-black ml-8 md:ml-0 relative w-24 h-20 flex md:flex-col gap-6 items-center hover:w-[22rem] md:w-64  transition-all duration-500  md:gap-0 md:h-16 md:hover:h-36 md:hover:w-64 overflow-hidden  ">
          <h1 className="py-4 font-bold">Trade Finance</h1>
          <p className="text-xs md:pb-4 ">
            Silvine is positioned to promoting global trade by providing
            financial instruments necessary to facilitate transactions and
            mitigate risks
          </p>
        </div>
        <div className="bg-black  p-6 md:p-3 text-white ml-8 md:ml-0 relative w-24 h-20 flex md:flex-col gap-6 items-center hover:w-[22rem]  md:w-64  transition-all duration-500  md:gap-0 md:h-16 md:hover:h-36 md:hover:w-64 overflow-hidden  ">
          <h1 className="py-4"> Capital Raising</h1>
          <p className="text-xs md:pb-4">
            Capital Raising Silvine investment is built on trust & credibility
            and infused in our DNA? is the adroitness to delivering financial
            solutions to various businesses.
          </p>
        </div>
        <div className="bg-[#29337b] p-6 md:p-3 text-white ml-8 md:ml-0 relative w-24 h-20 flex md:flex-col gap-6 items-center hover:w-[22rem]  md:w-64  transition-all duration-500  md:gap-0 md:h-16 md:hover:h-36 md:hover:w-64 overflow-hidden  ">
          <h1 className="py-4">Project Development</h1>
          <p className="text-xs md:pb-4 ">
            We help secure funding from investors, lenders, or government
            agencies. Ensuring compliance with financial regulatory
            requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
