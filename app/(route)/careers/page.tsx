import React from "react";
import Career from "@/app/assets/careers-news.png";
import Image from "next/image";

const Careers = () => {
  return (
    <section className="mt-32 w-full h-full  ">
      <div className=" mb-12 px-10">
        <h1 className="text-4xl font-bold py-4">Careers</h1>
        <p className="text-gray-500 text-xs">
          Stay Informed and be the first to unique opportunities at Silvine
          investment
        </p>
      </div>
      <div className=" bg-[#0D1027]  text-white w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-2xl mx-auto pl-6 gap-6 md:gap-0 md:pl-10 place-items-center">
          <div className="pr-10 md:pr-24 order-2 md:order-1">
            <h1 className="my-8">EMPLOYMENT</h1>
            <p className="py-4 font-bold">
              Silvine Investment offers a challenging and rewarding environment,
              and a positive culture in which team members achieve success
              together. By doing so, the firm takes pride in the distinctive
              quality and collaborative mindset of its entire organization.
            </p>
            <p className="py-2 font-bold">
              We aspire to be a global influential investors, and to contribute
              to the strength of the Nigerian economy. At Silvine, we strive to
              attract and invest in high caliber employees who enjoy a high
              level of professionalism and ambitious in line with our mission to
              continually stand out.
            </p>
            <p className="text-xs text-gray-400">
              Apply to silvine investments
            </p>
          </div>
          <div className="w-full order-1 md:order-2">
            <Image
              src={Career}
              alt="Career image"
              className=" w-[90%] md:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
