import Image from "next/image";
import React from "react";
import LongleftArrow from "@/app/assets/longarrow.png";
import GMD from "@/app/assets/GMD.jpg";

const Leaders = () => {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="border-b pb-10">
          <h1 className="font-bold text-lg sm:text-2xl md:text-4xl py-3 tracking-widest">
            Meet Our Leadership
          </h1>
          <p className=" text-[#666460] pb-3">
            Guiding Visionaries: Introducing the Minds Behind Our Leadership
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  place-items-center  gap-6">
          <div className="w-full border-r px-6 bg-[#FEFDFC]">
            <h1 className="py-6">OUR AMBITION</h1>
            <p className="font-[500] text-[#666460] tracking-wide py-4 text-[18px]">
              Our board comprises exceptionally reputable and extensively
              qualified leaders who contribute their exceptional experience and
              expertise for the advancement of our company.
            </p>

            <p className="font-[500] text-[#666460] tracking-wide py-4 text-[18px]">
              Their expertise provide valuable insights, strategic guidance, and
              help make informed decisions that contribute to the success and
              growth of Silvine Investment
            </p>

            <p className="flex gap-4 mt-16 mb-6">
              Meet more of our leadership{" "}
              <Image src={LongleftArrow} alt="Long right arrow" />
            </p>
          </div>
          <div className="w-full  sm:pr-16 ">
            <Image
              src={GMD}
              alt="GMD"
              width={200}
              height={200}
              className="mx-auto"
            />
            <h1 className="text-center pt-2">
              Me <span className=" font-bold text-[#4354CC]">Stephen .O.</span>
            </h1>
            <p className="text-center font-bold">C.E.O</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
