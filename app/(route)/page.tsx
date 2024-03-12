import Hero from "@/components/Hero/Hero";
import Image from "next/image";
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
  return (
    <main className="w-full ">
      <Hero />
      <div className="max-w-screen-xl sm:mx-auto mx-6 ">
        <h1 className="mb-2 mt-10 text-2xl font-bold px-6">Our Impact</h1>
        <p className="text-[10px] font-[100] text-gray-500 px-6">
          Fufilling Promise: Unveiling the transformative impact on our
          inovators
        </p>
        <h1 className="py-4 text-2xl">Our Ambition</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-6 mx-auto">
          <div className="bg-[#29337b] text-white p-6">
            <p>
              We aspire to become leaders in the global market. This involves
              building a strong reputation, attracting top talents, and
              consistently delivering superior investment performance. To get to
              that point of global recognition it involves strategic planning,
              adapting to changing market conditions, and making decisions that
              support our partners stability and longevity.
            </p>
          </div>
          <div className="py-6 px-4 border ">
            <h1 className="py-4 text-2xl">Our Focus</h1>
            <p className="text-gray-500">
              Our Capital raising methods includes issuing stocks, bonds,
              obtaining loans, seeking venture capital and private equity
              investments. The choice of method depends on a company's financial
              structure, risk tolerance, and strategic goals. Our effectively
              executed capital raising, contributes to a company's financial
              strength, enabling it to pursue opportunities and navigate
              challenges in the dynamic business landscape. We provide adequate
              capital to allows Nigerian businesses expand their operations,
              invest in research and development, and adopt innovative
              technologies. This, in turn, fosters economic growth and
              competitiveness...
            </p>

            {/* <div className="mt-4 flex ">
              <p className="bg-blue-500">Capital Raising</p>
              <p>Trade Financing</p>
              <p>Project Develpment</p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex ">
        <p></p>
        <p></p>
      </div>
      <div className=" ">
        <div className="max-w-screen-lg  grid max-[500px]:grid-cols-1 grid-cols-3 mt-32 mb-10  gap-4 place-items-center  mx-8 sm:mx-12 md:mx-auto lg:px-6 ">
          <div className="bg-[#FBF9F7] py-8 px-6 shadow-md hover:bg-black ">
            <h1 className="font-extrabold py-4">Silvine Fin-Solution</h1>
            <p className="text-[10px]">
              We offer client abroad a range of access classes accross regional
              and international market
            </p>
          </div>
          <div className="bg-gray-100 py-8 px-6 shadow-md">
            <h1 className="font-extrabold py-4">Silvine Investment</h1>
            <p className="text-[10px]">
              We offer client abroad a range of access classes accross regional
              and international market
            </p>
          </div>
          <div className="bg-[#FEFDFC] py-8 px-6 shadow-md">
            <h1 className="font-extrabold py-4">SVG capital</h1>
            <p className="text-[10px]">
              We offer client abroad a range of access classes accross regional
              and international market
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
        <div className="hidden sm:block">
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
        <p className="text-[10px] font-[100] text-gray-500 mb-6">
          Our Portfolio Showcasing Excellence: A Visual Chronicle of Our Diverse
        </p>

        <div className="relative w-full h-full mb-6">
          <div className=" ">
            <Image
              src={Portfolio}
              alt="Portfolio"
              className="aspect-[70/35] hidden sm:block"
            />
          </div>

          <div className="sm:absolute top-0 left-0 grid grid-cols-1 sm:grid-cols-2 px-4 lg:px-6 h-full place-items-center gap-6 bg-[#1F275E] sm:bg-transparent">
            <div className="text-white">
              <h1 className=" py-3 font-bold">Overview</h1>
              <p className="">
                By maintaining a disciplined and research-driven approach, we
                strive to deliver consistent value and financial growth for our
                clients. Our portfolio comprises a mix of equities, fixed-income
                securities, and alternative investments, carefully curated to
                align with our clients' financial goals and risk tolerance.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 py-12 w-full">
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
              Read More <Image src={LongleftArrow} alt="Long right arrow" />
            </p>
          </div>
          <div className="w-full px-6 ">
            <p className="mt-12">11/08/2023</p>
            <h1 className="py-4">SILVINE FIN-SOLUTIONS</h1>
            <Image src={Solution} alt="Silvine Investment" />
            <h3 className="text-[#4A5CE0] py-2 font-bold">
              Lendo Secures $28M in Series B Funding Led by Silvine f...
            </h3>
            <p className="text-[#666460]">
              Silvine Fin-Solution Investments a wholly owned company by Public
              Investment Fund (PIF) signed a partners...
            </p>

            <p className="flex gap-4 mt-16 mb-6">
              Read More <Image src={LongleftArrow} alt="Long right arrow" />
            </p>
          </div>
        </div>
      </div>

      <Leaders />
    </main>
  );
}
