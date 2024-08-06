import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Longarrow from "@/app/assets/longarrow.png";
import Image from "next/image";
import Facebook from "@/app/assets/facebook.png";
import Instagram from "@/app/assets/instagram (2).png";
import LinkedIn from "@/app/assets/linkedin.png";
import X from "@/app/assets/x.png";
import Link from "next/link";
import footer from "@/app/assets/footer-effect.png";

export function Footer() {
  const date = new Date();
  return (
    <section className="bg-[#0D1027] relative">
      <div className="max-w-screen-xl mx-auto pt-10 text-white px-6 pb-12">
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 place-items-center h-full w-full">
          <div className="w-full">
            <div className=" w-full sm:pr-28">
              <h1 className="text-gray-400 text-md mb-10">FAQS</h1>
              <Accordion
                type="single"
                collapsible
                className="text-gray-200 text-[12px]"
              >
                <AccordionItem
                  className="no-underline text-start "
                  value="item-1"
                >
                  <AccordionTrigger>
                    Does Silvine invest directly in capital markets?
                  </AccordionTrigger>
                  <AccordionContent>No</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="text-start">
                  <AccordionTrigger>
                    What is Silvine holding period for direct investments?
                  </AccordionTrigger>
                  <AccordionContent>NO</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="text-start">
                  <AccordionTrigger>
                    What is Silvine holding period for direct investments?
                  </AccordionTrigger>
                  <AccordionContent>NO</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="text-start">
                  <AccordionTrigger>
                    How can we share an investment opportunity with Silvine
                    Investment?
                  </AccordionTrigger>
                  <AccordionContent>NO</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <p className="mt-10 flex gap-6 items-center ">
              More frequently asked questions{" "}
              <span>
                <Image
                  src={Longarrow}
                  alt="Long arrow"
                  className="text-white"
                />
              </span>
            </p>
          </div>
          {/* <div className="h-6 w-[.1px] hiden sm:block bg-gray-100 "></div> */}
          <div className="w-full md:border-l md:border-b-gray-50  md:px-14">
            <h1 className="text-gray-400 text-md mb-10">GET IN TOUCH</h1>
            <p>
              We are always open to meeting new people, discussing innovative
              ideas, and making strong parnerships.
            </p>
            <div className="mt-10">
              <h4>Home address: </h4>
              <p className="text-[#ACA8A2] text-sm">
                1A Hughes Avenue, Alagomeji, Yaba, Lagos
              </p>
            </div>

            <div className="flex flex-col sm:flex-row  gap-6 mt-12">
              <div>
                <h1>United Kingdom Address:</h1>
                <p className="text-[#ACA8A2] text-sm">
                  p72 Mcleod Road, London, England, SE2 0BS
                </p>
              </div>
              <div>
                <h1>United States address: </h1>
                <p className="text-[#ACA8A2] text-sm">
                  30N Gould ST STE R Sheridan WY 82801
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h1 className="font-bold tracking-wide">Silvine Investment</h1>
          <p className="text-[#ACA8A2] text-sm">socials</p>
          <div className="grid sm:grid-cols-2">
            <div className="mt-10  flex flex-col sm:flex-row gap-6 sm:gap-10   ">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Link href={"https://x.com/Silvineinvest"}>
                    <Image
                      src={X}
                      alt="X"
                      className="hover:scale-[1.2] transition-all duration-100"
                    />
                  </Link>

                  <Link href={"https://www.facebook.com/silvineinvestment"}>
                    <Image
                      src={Facebook}
                      alt="FaceBook"
                      className="hover:scale-[1.2] transition-all duration-100"
                    />
                  </Link>

                  <Link
                    href={"https://www.linkedin.com/company/silvineinvestment"}
                  >
                    <Image
                      src={LinkedIn}
                      alt="LinkedIn"
                      className="hover:scale-[1.2] transition-all duration-100"
                    />
                  </Link>

                  <Link href={"https://www.instagram.com/silvineinvestment/"}>
                    <Image
                      src={Instagram}
                      alt="Instagram"
                      className="hover:scale-[1.2] transition-all duration-100"
                    />
                  </Link>
                </div>
                <Link
                  href={"mailto: Info@silvineinvestment.com"}
                  className="text-[#ACA8A2]"
                >
                  Info@silvineinvestment.com
                </Link>

                <Link
                  className="mt-6 block text-sm text-[#ACA8A2]"
                  href={`tel: +234 703 531 0665`}
                >
                  +234 703 531 0665
                </Link>
                <Link
                  className="mt-6 block text-sm text-[#ACA8A2]"
                  href={`tel:  +234 702 564 0059`}
                >
                  +234 702 564 0059
                </Link>
              </div>
              <div className="flex gap-10">
                <div className="flex flex-col  items-start gap-2 text-sm text-[#DCD8CF]">
                  <Link href={"/about-us"}>How we think</Link>
                  <Link href={"/management"}>who we are</Link>
                  <Link href={"/careers"}>Careers </Link>
                  <Link href={"/management"}>Our Partners</Link>
                </div>
                <div className=" md:hidden flex flex-col">
                  <Link href={"/contact-us"}> Contact</Link>
                  <Link href={"/faqs"}>FAQS</Link>
                </div>
              </div>
            </div>

            <div className="pl-16 border-l border-gray-50 hidden  md:flex flex-col  justify-center">
              <Link href={"/contact-us"}> Contact</Link>
              <Link href={"/faqs"}>FAQS</Link>
            </div>
          </div>
        </div>
        <p className="mt-10 text-[#ACA8A2] text-xs ">
          All rights Reserved to Silvine Ⓒ {date.getFullYear()}
        </p>
      </div>

      <Image
        src={footer}
        alt="footer effect"
        className="absolute right-0 bottom-0"
      />
    </section>
  );
}
