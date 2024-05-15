import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <section className="mt-32 mb-4">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className=" mb-12 ">
          <h1 className="text-4xl font-bold ">FAQS</h1>
          <p className="text-gray-500 text-xs">
            Answers to your most frequently asked questions on
          </p>
        </div>

        <div className="mb-16">
          <h1 className="uppercase py-6">Our Company FAQ&apos;s</h1>
          <h1> What does Silvine do?</h1>
          <p className="font-bold text-gray-800 max-w-[60rem]">
            We strictly arrange collateral at the moment for importers
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
                <h1>1. What is Trade Finance</h1>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Trade finance refers to banking instruments aimed at
                  mitigating risks for both buyers and sellers engaged in
                  international trade. Given the significant time lapse between
                  shipping and receipt of goods, coupled with the involvement of
                  multiple countries, inherent risks are inherent in global
                  transactions. Trade finance intervenes to enable parties to
                  minimize the risk of financial loss. Additionally, trade
                  finance aids in cost reduction, supply chain optimization, and
                  fostering confidence between buyers and sellers Effective
                  trade finance arrangements for sellers guarantee appealing
                  sales terms and enhance competitiveness. Consequently, this
                  can result in larger orders and improved economies of scale.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="text-start py-4">
              <AccordionTrigger className="">
                <h1> 2. In what ways does trade finance mitigate risk?</h1>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Exporters face the risk of non-payment for shipped goods. To
                  mitigate this, they may demand pre-payment, which then
                  transfers the risk to the importer. Moreover, international
                  trade carries inherent risks such as exchange rate
                  fluctuations, legal complexities, language barriers, and
                  potential political instability. Additionally, assessing the
                  creditworthiness of overseas counterparts poses challenges.
                  Trade finance intervenes to ensure payment and shipment,
                  subject to specific conditions being fulfilled.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="text-start py-4 hover:no-underline"
            >
              <AccordionTrigger className="">
                <h1> 3 What Types of trade finance exist?</h1>
              </AccordionTrigger>
              <AccordionContent>
                <h1>There are three primary types of trade finance:</h1>
                <ul className="list-disc space-y-6">
                  <li className="py-1">1. Letters of credit</li>
                  <li className="py-1">
                    2. Bonds, guarantees, and standby credits
                  </li>
                  <li className="py-1">
                    3. Structured trade finance transactions
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="text-start">
              <AccordionTrigger className="">
                <h1>4 What is letter of credit in trade finance?</h1>
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                <p>
                  A letter of credit is a contractual agreement wherein a bank
                  commits to making payment to an exporter upon presentation of
                  specified documents demonstrating the shipment of the goods.
                  Letters of credit are commonly used as a payment method in
                  international trade, albeit less frequently in domestic trade.
                </p>
                <p>
                  The buyer initiates letters of credit by arranging with their
                  bank (the issuing bank). Upon delivery of the goods to the
                  carrier, the seller submits the requisite documents (typically
                  a bill of lading) evidencing the shipment to the issuing bank.
                  Subsequently, the bank examines these documents, and if they
                  comply with the stipulated requirements, the bank disburses
                  payment to the seller and furnishes the buyer with proof of
                  payment documents. With these documents in hand, the buyer can
                  claim the goods from the carrier.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="text-start">
              <AccordionTrigger className="">
                <h1>5 What do bonds and guarantees entail in trade finance?</h1>
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                <p>
                  Bonds and guarantees offer an alternative method to safeguard
                  against potential scenarios such as non-shipment by the
                  exporter or non-payment by the importer. The issuer of the
                  bond or guarantee pledges to fulfill the obligations of the
                  exporter or importer in the event of default. The primary
                  distinction between letters of credit and bonds lies in their
                  function: a letter of credit serves as a payment mechanism
                  whereby the bank assumes the buyer&apos;s payment obligations
                  for the goods, whereas a bond does not trigger payment to the
                  exporter unless the importer defaults on their payment duty.
                  However, in both cases, the bank steps in to make payment to
                  the seller on behalf of the buyer. In trade finance, bonds or
                  guarantees typically involve two banks: one situated in the
                  buyer&apos;s country and the other in the seller&apos;s
                  country. This arrangement ensures that the seller can refrain
                  from pursuing a foreign bank to enforce payment demands.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="text-start">
              <AccordionTrigger className="">
                <h1>6 What is a Standby Letter of Credit (SBLC / SLOC)?</h1>
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                <p>
                  A Standby Letter of Credit (SBLC / SLOC) represents a
                  commitment by a bank to guarantee payment on behalf of a
                  client, even in situations where the client is unable to
                  fulfill the payment obligation. It serves as a final fallback
                  option from the bank and is ideally intended to remain unused.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="text-start">
              <AccordionTrigger className="">
                <h1>
                  7 How is a contractual SBLC utilized and what is its
                  mechanism?
                </h1>
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                <p>
                  An SBLC serves as a protective measure for the beneficiary,
                  aiming to mitigate risks inherent in trade transactions.
                  Essentially, it acts as a guarantee of payment issued by a
                  bank on behalf of a client. Commonly regarded as a "payment of
                  last resort," an SBLC is invoked under specific circumstances
                  to prevent contracts from remaining unfulfilled, particularly
                  in scenarios where a business undergoes bankruptcy or fails to
                  meet financial obligations. Moreover, the presence of an SBLC
                  is often interpreted as a demonstration of good faith,
                  providing assurance of the buyer&apos;s creditworthiness and
                  capacity to fulfill payment obligations. To establish an SBLC,
                  a brief underwriting process is typically conducted to assess
                  the credit quality of the requesting party. Subsequently,
                  notification is forwarded to the bank of the party seeking the
                  Letter of Credit, usually the seller. In the event of default,
                  the counterparty may recoup a portion of the financing through
                  the issuing bank under an SBLC. This utilization of Standby
                  Letter of Credits serves to instill confidence in companies.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="text-start">
              <AccordionTrigger className="">
                <h1>
                  8. What constitutes a negotiable or transferable letter of
                  credit
                </h1>
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                <p>
                  Letters of credit are occasionally labeled as negotiable or
                  transferable. The issuing bank will make payments to either
                  the beneficiary or a bank designated by the beneficiary. With
                  the beneficiary holding this authority, they can transfer or
                  assign the proceeds of a letter of credit to another company.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="text-start">
              <AccordionTrigger className="">
                <h1>
                  9. What are the methods for financing a Standby Letter of
                  Credit?
                </h1>
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                <p>
                  To issue a standby letter of credit, banks generally
                  necessitate a cash pledge as collateral. This service incurs a
                  fee, typically calculated as a percentage of the letter of
                  credit&apos;s value
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="text-start">
              <AccordionTrigger className="">
                <h1>
                  10. Is it possible for non-payment to occur with an SBLC?
                </h1>
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                <p>
                  Payment under an SBLC will occur if the issuing bank remains
                  operational and the beneficiary satisfies the conditions
                  outlined in the letter.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="text-start">
              <AccordionTrigger className="">
                <h1>11.What if the bank fails or I don&apos;t trust it?</h1>
              </AccordionTrigger>
              <AccordionContent className="max-w-[60rem]">
                <p>
                  If there is legitimate concern regarding the bank&apos;s
                  reliability in making payments, a confirmed letter of credit
                  may be utilized. This involves a "stronger" bank confirming
                  the letter of credit.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
