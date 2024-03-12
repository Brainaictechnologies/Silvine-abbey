import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <section className="mt-16 mb-4">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className=" mb-12 ">
          <h1 className="text-4xl font-bold ">FAQS</h1>
          <p className="text-gray-500 text-xs">
            Answers to your most frequently asked questions on
          </p>
        </div>

        <div className="mb-16">
          <h1 className="uppercase py-6">Our Company FAQ's</h1>
          <p className="font-bold text-gray-800 max-w-[60rem]">
            We concentrate on providing trade instruments, investments and
            project development. We are a nimble and highly experienced team of
            financial professionals with a proven track record of delivering
            attractive financial returns.
          </p>
        </div>
        <div>
          <Accordion
            type="single"
            collapsible
            className=" space-y-6 text-[#85827D]"
          >
            <AccordionItem className=" text-start py-4 " value="item-1">
              <AccordionTrigger>
                What are the typical challenges for importers using trade
                finance?
              </AccordionTrigger>
              <AccordionContent>
                Complying with documentation requirements, finding financing at
                competitive rates, and navigating complex trade regulation
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="text-start py-4">
              <AccordionTrigger className="">
                How can trade finance help exporters?
              </AccordionTrigger>
              <AccordionContent>
                Receive guaranteed payment upon shipment, protect against
                non-payment, improve cash flow, and expand access to
                international buyers
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="text-start py-4 hover:no-underline"
            >
              <AccordionTrigger className="">
                What are the benefits of using trade finance?
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc space-y-6">
                  <li className="py-1">
                    Reduced risk: Minimises potential losses for both buyer and
                    seller.
                  </li>
                  <li className="py-1">
                    Improved cash flow: Provides financing at key stages of a
                    trade transaction.
                  </li>
                  <li className="py-1">
                    Faster transactions: Streamlines processes and facilitates
                    quicker trade movements.
                  </li>
                  <li className="py-1">
                    Increased access to international markets: Expands business
                    opportunities for companies of all sizes.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="text-start">
              <AccordionTrigger className="">
                What is trade finance?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                Trade finance refers to the financial instruments and products
                that facilitate international trade and commerce. It includes
                various services such as letters of credit, trade credit
                insurance, and financing options to mitigate the risks and
                challenges associated with cross-border transactions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="text-start">
              <AccordionTrigger className="">
                What is a letter of credit?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                A letter of credit is a financial instrument issued by a bank
                that guarantees a buyer's payment to a seller, provided that
                certain conditions are met. It acts as a secure method of
                payment in international trade transactions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="text-start">
              <AccordionTrigger className="">
                What is trade credit insurance
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                Trade credit insurance protects businesses against the risk of
                non-payment by their buyers. It provides coverage for losses
                arising from commercial and political risks, allowing companies
                to trade with confidence.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="text-start">
              <AccordionTrigger className="">
                How can a small business access trade finance?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                Small businesses can access trade finance through banks,
                financial institutions, or government-backed programs. They may
                explore options such as export credit insurance, working capital
                loans, and trade financing solutions specifically designed for
                small and medium-sized enterprises (SMEs).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="text-start">
              <AccordionTrigger className="">
                How does trade finance help mitigate risks in international
                trade?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                Trade finance instruments such as letters of credit, trade
                credit insurance, and guarantees help mitigate risks by
                providing financial security and ensuring that both parties in
                an international trade transaction fulfil their obligations.
                This reduces the risk of non-payment, delivery issues, and other
                uncertainties.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="text-start">
              <AccordionTrigger className="">
                What is a documentary collection?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                A documentary collection is a trade finance method where the
                exporter's bank collects payment from the importer through the
                presentation of documents. The exporter retains control of the
                goods until the importer makes the payment or accepts a bill of
                exchange.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="text-start">
              <AccordionTrigger className="">
                What are INCO terms, and why are they important in international
                trade?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                INCO terms (International Commercial Terms) are standardised
                terms used in international trade to define the responsibilities
                and obligations of buyers and sellers regarding the delivery of
                goods. They specify who is responsible for transportation,
                insurance, and other costs associated with the shipment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="text-start">
              <AccordionTrigger className="">
                How can we identify and mitigate financial risks in the project?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                Perform a comprehensive risk assessment, including market,
                credit, operational, and regulatory risks. Develop risk
                mitigation strategies and contingency plans.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12" className="text-start">
              <AccordionTrigger className="">
                What are the various sources of funding for finance projects?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                Explore options such as equity financing, debt financing,
                venture capital, and government grants. Evaluate the cost of
                capital for each source.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13" className="text-start">
              <AccordionTrigger className="">
                How do we determine the optimal capital structure for the
                project?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                Consider the mix of debt and equity that minimises the cost of
                capital while balancing financial risk.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14" className="text-start">
              <AccordionTrigger className="">
                How do we track the financial performance of the project?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                Implement key performance indicators (KPIs) and financial
                metrics. Regularly review financial reports and adjust
                strategies as needed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-15" className="text-start">
              <AccordionTrigger className="">
                What factors should be considered in the project initiation
                phase?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                Consider market demand, regulatory environment, financial
                viability, risk assessment, and alignment with the
                organisation's overall strategy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-16" className="text-start">
              <AccordionTrigger className="">
                What are the potential financial penalties for non-compliance?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                Understand the regulatory landscape and potential penalties for
                non-compliance. Allocate resources for compliance monitoring and
                reporting
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-17" className="text-start">
              <AccordionTrigger className="">
                How can stakeholders maximise returns upon project completion?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                Consider divestment strategies, profit distribution, or
                reinvestment in new opportunities to maximise returns.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-18" className="text-start">
              <AccordionTrigger className="">
                What is the due diligence process in a project financing?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem] ">
                <ul className="space-y-6">
                  <li>
                    Before we submit a project finance loan request or documents
                    to our financial partners, we perform a preliminary due
                    diligence investigation. While not the final, comprehensive
                    due diligence that will be required if the deal continues
                    forward, the preliminary due diligence investigation is
                    intended to uncover any sponsor or project deficiencies that
                    would hinder the closing of the project financing.
                  </li>
                  <li>
                    We will verify the Sponsor’s reputation, financial strength,
                    and relevant experience. We will verify the quality and
                    sufficiency of the project documents (at least those that
                    have been prepared to date), and we will analyse the project
                    and property in tandem with our site visit. Our Preliminary
                    Due Diligence Report will be prepared after the site visit
                    and provided to the lenders.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-19" className="text-start">
              <AccordionTrigger className="">
                What is capital raising?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                Capital raising refers to the process of obtaining funds to
                finance or expand a business. It typically involves securing
                investment from various sources, such as equity investors,
                lenders, or other financial institutions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-20" className="text-start">
              <AccordionTrigger className="">
                What are the main methods of capital raising?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                The main methods include issuing equity (such as through IPOs or
                private placements), taking on debt through loans or bonds, and
                utilising hybrid instruments like convertible securities
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-21" className="text-start">
              <AccordionTrigger className="">
                What role do investment banks play in capital raising?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                Investment banks often facilitate capital raising activities,
                especially in the case of IPOs. They assist with underwriting,
                marketing, and distributing securities to investors.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-22" className="text-start">
              <AccordionTrigger className="">
                How do private companies raise capital?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                Private companies can raise capital through private placements,
                venture capital funding, angel investors, and other private
                investment methods.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-23" className="text-start">
              <AccordionTrigger className="">
                What is an Initial Public Offering (IPO)?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                An IPO is the first sale of a company's stock to the public. It
                allows a privately-owned company to become publicly traded and
                raise capital from public investors.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="text-start">
              <AccordionTrigger className="">
                What factors should be considered in the project initiation
                phase?
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                Consider market demand, regulatory environment, financial
                viability, risk assessment, and alignment with the
                organisation's overall strategy.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
