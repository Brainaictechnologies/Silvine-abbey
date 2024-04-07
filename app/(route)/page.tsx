"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Hero from "@/components/Hero/Hero";
import silvineLogo from "@/app/assets/silvinelogo.png";
import blueSilvine from "@/app/assets/bluesilvine.png";
import blackSilvine from "@/app/assets/blackSilvine.png";
import Portfolio from "@/app/assets/portfolio-bg.png";
import svg from "@/app/assets/svgcapital.png";
import Autoby from "@/app/assets/svgcapital.png";
import Brainiac from "@/app/assets/brainiac.png";
import Sgi from "@/app/assets/sgi.png";
import Advox from "@/app/assets/advx.png";
import Arrowleft from "@/app/assets/arrow_left.png";
import Investment from "@/app/assets/SilvineInvestimen.png";
import Solution from "@/app/assets/Silvinesolution.png";
import LongleftArrow from "@/app/assets/longarrow.png";
import GMD from "@/app/assets/GMD.jpg";
import Leaders from "@/components/Our-leaders/Leaders";

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation after a short delay (e.g., 100ms)
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="w-full ">
      {/* <div className={`form-container ${fadeIn ? "slide-in" : ""}`}> */}
      <Hero />
      {/* </div> */}
      <div className="max-w-screen-xl sm:mx-auto mx-6 ">
        <h1 className="mb-2 mt-10 text-2xl font-bold px-6">Our Impact</h1>
        <p className="text-[10px]  text-gray-900 px-6">
          Fufilling Promise: Unveiling the transformative impact on our
          inovators
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-6 mx-auto">
          <div className="bg-[#29337b] text-white p-6 ">
            <h1 className="py-4 text-2xl">Our Ambition</h1>
            <p>
              We aspire to become leaders in the global market. This involves
              building a strong reputation, attracting top talents, and
              consistently delivering superior investment performance. To get to
              that point of global recognition it involves strategic planning,
              adapting to changing market conditions, and making decisions that
              support our partners stability and longevity.
            </p>
          </div>
          <div className="w-full h-fullpt-6 px-4 border ">
            <h1 className="py-4 text-2xl">
              Ready to Level Up? See If Your Business Qualifies for Funding!
            </h1>
            <p className="text-gray-500">
              Our Capital raising methods includes issuing stocks, bonds,
              obtaining loans, seeking venture capital and private equity
              investments. The choice of method depends on a company&apos;s
              financial structure, risk tolerance, and strategic goals. Our
              effectively executed capital raising, contributes to a
              company&apos;s financial strength, enabling it to pursue
              opportunities and navigate challenges in the dynamic business
              landscape. We provide adequate capital to allows Nigerian
              businesses expand their operations, invest in research and
              development, and adopt innovative technologies. This, in turn,
              fosters economic growth and competitiveness...
            </p>

            <div className="grid grid-cols-3 gap-0 w-full  items-end mx-0 mt-12 h-72  ">
              <div className="bg-[#0d6efd] text-white transition-all duration-300  space-y-6 h-16 hover:space-y-0 hover:h-[17rem] md:hover:h-60 grid mx-auto overflow-hidden ">
                <h1 className=" md:mb-2  text-sm md:text-base font-bold mt-5  text-center px-1">
                  Capital Raising
                </h1>
                <p className="text-center text-xs md:text-base">
                  Silvine is positioned to promoting global trade by providing
                  financial instruments necessary to facilitate transactions and
                  mitigate risks
                </p>
              </div>
              <div className="bg-[#052c65] text-white  transition-all duration-300  h-16 space-y-8 hover:space-y-0 hover:h-[17rem] md:hover:h-60 px-2  mx-auto overflow-hidden">
                <h1 className="md:mb-2  text-sm md:text-base font-bold  text-center mt-4 px-1">
                  Trade Financing
                </h1>
                <p className="text-center text-xs md:text-base">
                  Capital Raising Silvine investment is built on trust &
                  credibility and infused in our DNA? is the 5droitness to
                  delivering financial solutions to various businesses.
                </p>
              </div>
              <div className="bg-[#8692ea] text-white transition-all duration-500  h-16 hover:h-fit grid place-items-center overflow-hidden px-2">
                <h1 className="md:mb-3  text-sm md:text-base font-bold my-6  text-center px-1">
                  Project Develpment
                </h1>
                <p className="text-center text-xs sm:text-base">
                  We help secure funding from investors, lenders, or government
                  agencies. Ensuring compliance with financial regulatory
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" ">
        <div className="max-w-screen-lg  grid max-[500px]:grid-cols-1 grid-cols-3 mt-32 mb-10 h-72 gap-4 place-items-center  mx-8 sm:mx-12 md:mx-auto lg:px-6 ">
          <div className="bg-[#FBF9F7] py-8 px-6 shadow-md hover:mb-8 duration-200 ">
            <h1 className="font-extrabold py-4">
              Silvine fin-solution (Capital raising)
            </h1>
            <p className="text-[10px]">
              Our team has a solid track record of raising capital for companies
              looking to expand their businesses or fund structural investments
              to increase shareholder value.
            </p>
            <p className="text-[10px]">
              For a client to receive a fully cash-backed, divisible, and
              assignable Bank Guarantee or Standby Letter of Credit issued by a
              leading global bank, the client must meet financial qualification
              criteria. These instruments are arranged through licensed
              securities dealers and transmitted via SWIFT MT760..
            </p>
          </div>
          <div className="bg-gray-100 py-8 px-6 shadow-md hover:mb-10 duration-300 ">
            <h1 className="font-extrabold py-4">Silvine Investment</h1>
            <p className="text-[10px]">
              Every company and investor possesses unique and specific
              requirements. At Silvine our primary focus is matchmaking,
              ensuring that the risk/reward profile of investments aligns
              closely with the preferences of each individual investor. Each
              company and investor has a distinct set of needs. our core
              objective is to act as matchmakers, ensuring that the risk/reward
              profile of investments closely matches the preferences of every
              individual investor.
            </p>
          </div>
          <div className="bg-[#FEFDFC] py-8 px-6 shadow-md hover:mb-10 duration-300 ">
            <h1 className="font-extrabold py-4">
              SVG Capital (Corporate finance)
            </h1>
            <p className="text-[10px]">
              With a proven track record in advising companies across diverse
              sectors like real estate, offshore, energy, transportation, and
              more, we bring a wealth of experience to the table. We specialize
              in helping companies in financial distress. Our team has a proven
              ability to advise on restructuring, turnaround strategies, and
              insolvency/bankruptcy situations. Our strength lies in mediating
              between banks, financial institutions, and shipowners to find
              workable solutions for all parties involved.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 w-full gap-4 mt-20 mb-20 place-items-center">
        <div className="hidden lg:block">
          <Image src={silvineLogo} alt="Silvine" width={370} height={100} />
        </div>
        <div className="flex flex-col gap-4 pt-8 leading-5 shodow-sm md:row-span-2 w-full px-8 sm:px-24 lg:px-4">
          <Image src={blackSilvine} alt="Black Silvine logo" className="" />
          <p className="text-sm">
            committed to helping you make the most of all your resources. Our
            mission is clear, to provide comprehensive investment services that
            enable you to achieve your goals. To give you the finest prospects,
            we keep ahead of the curve and adjust to the shifting dynamics of
            the market on a regular basis. We build relationships on trust. At
            Silvine Investment we use your success to measure our own
          </p>
        </div>
        <div className="hidden sm:block ">
          <Image
            src={blueSilvine}
            alt="Blue silvine"
            width={370}
            height={100}
            className="hidden lg:block"
          />
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6">
        <h1 className="mb-2 mt-10 text-2xl font-bold">Portfolio</h1>
        <p className="text-[10px]  mb-6">
          Our Portfolio Showcasing Excellence: A Visual Chronicle of Our Diverse
        </p>

        <div className="relative w-full h-full mb-6 aspect-square md:aspect-[70/45] lg:aspect-[75/30]">
          <div className="block w-full">
            <Image
              src={Portfolio}
              alt="Portfolio"
              fill
              className="block w-full"
            />
          </div>

          <div className="absolute sm:top-0 sm:left-0 grid place-items-center w-full h-full  ">
            <div className=" grid grid-cols-1 sm:grid-cols-2  px-4 lg:px-6 h-full place-items-center gap-0 md:gap-6 mt-[-1rem] ">
              <div className="text-white">
                <h1 className=" py-3 font-bold">Overview</h1>
                <p className="">
                  By maintaining a disciplined and research-driven approach, we
                  strive to deliver consistent value and financial growth for
                  our clients. Our portfolio comprises a mix of equities,
                  fixed-income securities, and alternative investments,
                  carefully curated to align with our clients&apos; financial
                  goals and risk tolerance.
                </p>
              </div>

              <div className=" mt-[-2.6rem] grid grid-cols-3 items-start md:items-center gap-6 py-12 w-full">
                <Image
                  src={svg}
                  alt="svg capital"
                  className="flex items-start justify-start"
                />
                <Image
                  src={Autoby}
                  alt="Auto buy"
                  className="flex items-start justify-start"
                />
                <Image
                  src={Brainiac}
                  alt="Brainiac"
                  className="flex items-start justify-start"
                />
                <Image
                  src={Advox}
                  alt="Brainiac"
                  className="flex items-start justify-start"
                />
                <Image
                  src={Sgi}
                  alt="SGI"
                  className="flex items-start justify-start"
                />
              </div>
            </div>
            <div className="hidden md:grid  grid-cols-5 items-end text-white absolute bottom-0  ">
              {/* <p className="bg-[#8692ea] h-24 text-center flex items-center justify-center text-xl w-40 font-[500]">
                Real Estate
              </p> */}
              <p className="bg-white text-black h-24 text-center flex items-center justify-center text-xl w-40 font-[500]">
                Venture & Growth Funds
              </p>
              <p className="bg-black  h-24 text-center flex items-center justify-center text-xl w-40 font-[500]">
                Financial instruments
              </p>
              <p className="bg-green-500 h-16 flex items-center text-xl justify-center w-40 font-[500] ">
                Direct Investment
              </p>
              <p className="bg-black h-24 text-center flex items-center justify-center text-xl w-40 font-[500] ">
                Buyout Funds
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 bg-[#FEFDFC] mb-8">
        <div className="flex items-center justify-between border-b py-4">
          <div>
            <h1 className="font-bold text-2xl">News</h1>
            <p className=" text-[#666460]">
              Stay Informed: Discover the Latest Updates and Insights in Our
              News Hub
            </p>
          </div>
          <Image src={Arrowleft} alt="Arrow left" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-16 place-items-center sm:place-items-start  mb-6 ">
          <div className="w-full border-r px-6 shadow-sm ">
            <p className="mt-12">11/12/2023</p>
            <h1 className="py-4">SILVINE INVESTMENTS</h1>
            <Image src={Investment} alt="Silvine Investment" />
            <h3 className="text-[#4A5CE0] py-2 font-bold">
              Silvine Investment announces partnership of Saudi Arab...
            </h3>
            <p className="text-[#666460]">
              Silvien Investment a wholly owned company by Public Investment
              Fund (PIF) signed a partners...
            </p>
            <p className="flex gap-4 mt-16 mb-6">
              <Link href="/management" className="flex gap-4">
                Read More <Image src={LongleftArrow} alt="Long right arrow" />
              </Link>
            </p>
          </div>
          <div className="w-full px-6 ">
            <p className="mt-12">11/08/2023</p>
            <h1 className="py-4">SILVINE FIN-SOLUTIONS</h1>
            <Image src={Solution} alt="Silvine Investment" className="" />
            <h3 className="text-[#4A5CE0] py-2 font-bold">
              Lendo Secures $28M in Series B Funding Led by Silvine f...
            </h3>
            <p className="text-[#666460]">
              Silvine Fin-Solution Investments a wholly owned company by Public
              Investment Fund (PIF) signed a partners...
            </p>

            <p className=" mt-16 mb-6">
              <Link href="/management" className="flex gap-4">
                Read More <Image src={LongleftArrow} alt="Long right arrow" />
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Leaders />
    </main>
  );
}
