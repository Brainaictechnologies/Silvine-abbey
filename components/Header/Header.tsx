"use client";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import Silvine from "@/app/assets/Frame 555.png";
import SilvineBlack from "@/app/assets/silvineBlack.svg";
import { usePathname } from "next/navigation";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState("transparent");
  const pathName = usePathname();

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      // Client-side-only code
      setScrollPosition(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(navbarColor);

  const otherPageScroll = scrollPosition > 100 || pathName !== "/";
  return (
    <section
      className={`w-full h-28 flex items-center  fixed top-0 left-0 right-0 z-10 ${
        scrollPosition > 100 || pathName !== "/" || otherPageScroll
          ? "bg-[#F2EDE4]"
          : "bg-transparent"
      }`}
    >
      <div className="flex w-full  max-w-screen-xl mx-auto px-6 justify-between items-center ">
        <div>
          <Image
            src={
              scrollPosition > 100 || pathName !== "/" ? SilvineBlack : Silvine
            }
            alt="silvine"
          />
        </div>
        <div className="hidden md:flex space-x-3 font-bold items-center">
          {navLinks.map(({ key, name, path }) => (
            <Link
              href={path}
              key={key}
              className={
                scrollPosition > 100 || pathName !== "/"
                  ? "text-gray-800"
                  : `text-white`
              }
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
