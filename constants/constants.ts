import About from "@/app/assets/About.png";
import Business from "@/components/assets/business.jpeg";
import Successfull from "@/components/assets/successful.jpeg";
import Qualify from "@/components/assets/qualifying.jpeg";
import Advice from "@/components/assets/advice.jpeg";
import { StaticImageData } from "next/image";

export const navLinks = [
  { key: 1, name: "Home", path: "/" },
  { key: 2, name: "Our product", path: "about-us" },
  { key: 3, name: "Get to know us", path: "management" },
  { key: 4, name: "Careers", path: "careers" },
  { key: 5, name: "Latest News", path: "blog" },
  { key: 5, name: "Contact Us", path: "contact-us" },
];

export const article = [
  { id: "01", name: "article1", image: About },
  { id: "02", name: "article2", image: About },
  { id: "03", name: "article3", image: About },
  { id: "04", name: "article4", image: About },
];

export type BlogPostData = {
  id: string;
  title: string;
  subtitle1?: string;
  subtitle2?: string;
  subtitle3?: string;
  subtitle4?: string;
  subtitle5?: string;
  subtitle6?: string;
  subtitle7?: string;
  subtitle8?: string;
  subtitle9?: string;
  subtitle10?: string;
  subtitle11?: string;
  subtitle12?: string;
  date: string;
  content: string;
  content1?: string;
  content2?: string;
  content3?: string;
  content4?: string;
  content5?: string;
  content6?: string;
  content7?: string;
  content8?: string;
  content9?: string;
  content10?: string;
  content11?: string;
  content12?: string;
  imageUrl: StaticImageData;
};

// Create an array of blog posts
export const blogPosts: BlogPostData[] = [
  {
    id: "1",
    title:
      "A Pre-Advice serves as the initial step in kickstarting your transaction. Its primary purpose is to confirm all the details of a financial transaction between banks",
    date: "April 17, 2024",
    content:
      "In the context of letters of credit, the issuing bank may provide a pre-advice at the request of the applicant, indicating the impending issuance or amendment of the letter of credit. Typically marked with a reference such as full details to follow, the pre-advice constitutes an irrevocable commitment by the issuing bank to issue/amend the credit as outlined in the pre-advice. This message is crucial for ensuring the security of wire transfers, especially when substantial sums of money are involved. It involves one bank notifying another bank of the issuance of documentary credit and advising the receiving bank to acknowledge receipt. The advising bank, without opening advice of credit, will also notify the beneficiary, enabling the seller to confirm the processing of the Buyer&apos;s order",
    content1:
      "A 'Pre-Advice' sent by the Provider’s bank notifies of the expected assignment of a bank instrument to your client's accounts. It should contain clear and concise information regarding each incoming payment:",
    content2: "",
    subtitle3: "The Purpose of a Pre-Advice:",
    content3:
      "Pre-advising incoming assignments enables optimization of aggregate funding requirements and maximization of returns on long balances, while also ensuring compliance with regulatory requirements governing accounts in certain jurisdictions. This allows your client’s bank to offer competitive interest rates by leveraging optimum market liquidity, thus providing further tangible benefits to clients.",
    subtitle4: "Benefits of Pre-Advising:",
    content4:
      "Receiving a Pre-Advice message allows the customer bank to match incoming funds with payment messages from remitting banks, facilitating the posting of incoming funds to accounts. Timely receipt of a Pre-Advice message ensures that incoming instruments are promptly processed before the instrument cut-off time, maximizing the value applied to themAdditionally, effective liquidity management by the client bank enhances its ability to maximize returns on funds, leading to competitive interest rates being offered Other Credit Enhancement tools include financial instruments such as Letter of Credit (L/C), Documentary Letter of Credit (DLC), Standby Letters of Credit (SBLC), Bank Guarantee (BG), Bid or Tender Bond, Ready, Willing, Able confirmation (RWA), Proof of Funds (POF), Bank Comfort Letter (BCL), Blocked Funds (BF) Certificate of Deposit (CD), and Pre-Advice via bank-to-bank SWIFT.",
    imageUrl: Advice,
  },
  {
    id: "2",
    title: " Successful Commodity Import",
    date: "April 5, 2022",
    content:
      "When dealing with a substantial transaction like a USD 48,000,000 commodity importation, having the right financial instruments in place is crucial. A standby letter of credit issued via SWIFT can provide the necessary assurance to both parties involved in the transaction.",
    content1:
      "Collateral plays a significant role in securing such transactions. The bank providing the instrument must be reliable and capable of supporting such a high-value deal. With the right standby letter of credit and collateral arrangements, successful transactions of this scale can be executed smoothly and securely. These strategic financial tools not only provide a strong level of security for all involved parties but also pave the way for seamless and efficient transactions. By leveraging standby letters of credit and carefully structured collateral arrangements, businesses can instill confidence in their partners and ensure the successful completion of large-scale transactions. The meticulous planning and attention to detail involved in setting up these mechanisms demonstrate a commitment to reliability and trustworthiness in every business deal.",
    imageUrl: Successfull,
  },
  {
    id: "3",
    title: " Businesses Seek Credit Enhancement for Financial Confidence",
    date: "April 5, 2022",
    content:
      "While banks extend Credit Enhancement Support, it's typically reserved for well-established companies boasting robust financial standings. Establishing enduring, trust-based relationships with substantial and reputable clientele is paramount for banks. To garner bank support, qualification is imperative. Banks adhere to specific protocols when evaluating applications, focusing on the borrower's Capacity, Collateral, Capital, Character, and General Conditions. These fundamentals constitute the bedrock of credit analysis for loan applications or financial service provision. The strength of your financial business background directly impacts the terms you can secure. Conversely, a weak financial and business history severely diminishes prospects for bank support. In banking reality, those least reliant on bank assistance often receive seamless, favorable service.",
    subtitle1: "Can your bank provide you with a financial instrument?",
    content1:
      "If you've ever approached your bank to obtain a Letter of Credit, you'll understand that banks are more inclined to issue such instruments to companies with ample cash reserves, investments, and financial assets in the bank to mitigate potential financial risks. However, if you find yourself in a less favorable financial position, securing an instrument isn't just a matter of negotiating terms and pricing; it becomes a question of whether the bank will issue one for you at all. Typically, banks will only offer this service if you maintain a substantial balance in your account. Otherwise, you may be required to deposit 100% or more in cash to access the same service that financially secure bank clients can often obtain at minimal cost.",
    subtitle2: "Supportive banks can secure Credit Enhancement for you.",
    content2:
      "However, if a bank client lacks substantial cash reserves or significant financial assets deposited or held in custody by the bank, it's unlikely that any bank will offer Credit Enhancement, issue financial instruments, or provide services without compensation or assurance of payment from future business proceeds. Banks are cautious about undertaking risks that aren't offset by existing wealth held with them. They typically refrain from engaging in transactions or providing financial services with the expectation of future payment. The scenario changes significantly if a client possesses ample cash reserves or significant assets within the bank.",
    subtitle3:
      "Credit Enhancement may be accessible, but rarely on your terms.",
    content3:
      "In business, Credit Enhancement is typically sought by companies unable to obtain it from their bank. It involves specialized financial structures followed by the issuance of relevant financial instruments.",
    subtitle4:
      "Considerations regarding financial instruments and the principal amount involved:",
    content4:
      "No valid financial instrument will be lent to a third party for a nominal fee if the borrower lacks the qualification, an established business, or the ability to address potential financial risks associated with Credit Enhancement instruments. If your own bank has rejected your request, what basis exists for expecting the service from an alternative provider? Consider the consequences if you default on your commitments and the instrument supporting your transaction or loan is called upon by your lender. Banks won't assume the risk of a transaction for a customer unless it's covered by cash, bankable assets, or investments deposited with the bank If your bank doesn't provide the service, obtaining a Standby Letter of Credit, Bank Guarantee, Documentary Letter of Credit, or Proof of Funds from a third party poses significant credit risk. Without effective coverage in a bankable manner, it becomes risky for any third party to extend such liabilities",
    subtitle5: "Fees and financial commitment",
    content5:
      "All banks levy fees for reserving, issuing, and transmitting bank instruments on behalf of clients. Banks won't provide these services for free or wait for payment from the client. Services are rendered only when the client already has sufficient cash in the bank to cover costs and potential risks.",
    subtitle6:
      "Credit Enhancement transactions generally fall into two categories:",
    content6:
      "1. Transactions involving borrowing and lending of fully cash-backed, assignable, and divisible bank instruments, typically starting at Euro 10 million. These transactions require a clear understanding of terms between the issuing and receiving banks, with security ensured through a conditional commitment from an acceptable receiving bank before issuance",
    content7:
      "2. Transactions based on contract and verbiage-controlled instruments issued by willing private banks, typically available for transactions starting at Euro 250,000. Flexibility depends on the willingness of a bank to engage in an enhancement transaction and the availability of the required fees deposited in cash before issuance.",
    content8:
      "The Credit Enhancement process usually begins with the appointment of a professional manager empowered through a mandate and the placement of a retainer.",
    content9:
      "Other Credit Enhancement tools include financial instruments like a letter of Credit (L/C), Documentary Letter of Credit (DLC), Standby Letters of Credit (SBLC), Bank Guarantees (BG), Bid or Tender Bonds, Ready, Willing, Able confirmations (RWA), Proof of Funds (POF), Bank Comfort Letters (BCL), Blocked Funds (BF), Certificate of Deposit (CD), and Pre-Advice via bank-to-bank SWIFT The likelihood of completing a transaction is higher for companies with substantial assets. For further discussion, please contact +2347025640059, which also works on WhatsApp.",
    imageUrl: Business,
  },
  {
    id: "4",
    title: "Qualifying for funding through an Initial Public Offering (IPO)",
    date: "April 5, 2022",
    content:
      "For a large business or project necessitates meeting specific requirements and adhering to particular procedures. Here's an overview of the fundamental basics and steps involved in the IPO process:",
    subtitle1: "1. Strong Business Performance:",
    content1:
      "Demonstrate a history of robust financial performance and growth for your business or project, including profitability, positive cash flow, and sustainable operations",
    subtitle2: "2. Business Plan and Prospectus:",
    content2:
      "Prepare a comprehensive business plan and prospectus outlining objectives, financial projections, market analysis, and growth strategy to provide potential investors with detailed information.",
    subtitle3: "3. Legal and Regulatory Compliance:",
    content3:
      "Ensure compliance with all legal and regulatory requirements associated with an IPO, including securities laws, corporate governance standards, and disclosure obligations.",
    subtitle4: "4. Engage Underwriters and Advisors:",
    content4:
      "Collaborate with reputable investment banks or underwriters to guide you through the IPO process, conduct due diligence, and determine the offering price and structure.",
    subtitle5: "5. Financial Audits and Disclosures:",
    content5:
      "Conduct thorough financial audits and prepare accurate financial statements and disclosures to provide transparency to potential investors.",
    subtitle6: "6. IPO Readiness Assessment:",
    content6:
      "Evaluate your business's readiness for going public by reviewing corporate governance practices, internal controls, risk management frameworks, and compliance procedures.",
    subtitle7: "7. SEC Registration (or Relevant Regulatory Authority):",
    content7:
      "File a registration statement with the Securities and Exchange Commission (SEC) or relevant regulatory authority, including essential information about your business, financials, and risk factors.",
    subtitle8: "8. Roadshow and Investor Presentations:",
    content8:
      "Showcase your business or project to potential investors through roadshows and presentations, addressing inquiries and generating interest in the IPO.",
    subtitle9: "9. Pricing and Allocation:",
    content9:
      "Determine the IPO price range and offering size with underwriters based on market conditions, investor demand, and valuation considerations. Allocate shares to institutional and retail investors.",
    subtitle10: "10. SEC (or Regulatory Authority) Review and Approval:",
    content10:
      "Respond to SEC comments on the registration statement, revise if necessary, and seek approval before proceeding with the IPO.",
    subtitle11: "11. Stock Exchange Listing:",
    content11:
      "Apply for listing on a stock exchange, meeting listing requirements, corporate governance standards, and compliance procedures.",
    subtitle12: "12. Finalize Legal Documentation:",
    content12:
      "Prepare and finalize legal documentation, including underwriting agreements and lock-up agreements, ensuring compliance with legal requirements.",
    imageUrl: Qualify,
  },
];

export const DefautValue = {
  id: "3",
  title: " Businesses Seek Credit Enhancement for Financial Confidence",
  date: "April 5, 2022",
  content:
    "While banks extend Credit Enhancement Support, it's typically reserved for well-established companies boasting robust financial standings. Establishing enduring, trust-based relationships with substantial and reputable clientele is paramount for banks. To garner bank support, qualification is imperative. Banks adhere to specific protocols when evaluating applications, focusing on the borrower's Capacity, Collateral, Capital, Character, and General Conditions. These fundamentals constitute the bedrock of credit analysis for loan applications or financial service provision. The strength of your financial business background directly impacts the terms you can secure. Conversely, a weak financial and business history severely diminishes prospects for bank support. In banking reality, those least reliant on bank assistance often receive seamless, favorable service.",
  subtitle1: "Can your bank provide you with a financial instrument?",
  content1:
    "If you've ever approached your bank to obtain a Letter of Credit, you'll understand that banks are more inclined to issue such instruments to companies with ample cash reserves, investments, and financial assets in the bank to mitigate potential financial risks. However, if you find yourself in a less favorable financial position, securing an instrument isn't just a matter of negotiating terms and pricing; it becomes a question of whether the bank will issue one for you at all. Typically, banks will only offer this service if you maintain a substantial balance in your account. Otherwise, you may be required to deposit 100% or more in cash to access the same service that financially secure bank clients can often obtain at minimal cost.",
  subtitle2: "Supportive banks can secure Credit Enhancement for you.",
  content2:
    "However, if a bank client lacks substantial cash reserves or significant financial assets deposited or held in custody by the bank, it's unlikely that any bank will offer Credit Enhancement, issue financial instruments, or provide services without compensation or assurance of payment from future business proceeds. Banks are cautious about undertaking risks that aren't offset by existing wealth held with them. They typically refrain from engaging in transactions or providing financial services with the expectation of future payment. The scenario changes significantly if a client possesses ample cash reserves or significant assets within the bank.",
  subtitle3: "Credit Enhancement may be accessible, but rarely on your terms.",
  content3:
    "In business, Credit Enhancement is typically sought by companies unable to obtain it from their bank. It involves specialized financial structures followed by the issuance of relevant financial instruments.",
  subtitle4:
    "Considerations regarding financial instruments and the principal amount involved:",
  content4:
    "No valid financial instrument will be lent to a third party for a nominal fee if the borrower lacks the qualification, an established business, or the ability to address potential financial risks associated with Credit Enhancement instruments. If your own bank has rejected your request, what basis exists for expecting the service from an alternative provider? Consider the consequences if you default on your commitments and the instrument supporting your transaction or loan is called upon by your lender. Banks won't assume the risk of a transaction for a customer unless it's covered by cash, bankable assets, or investments deposited with the bank If your bank doesn't provide the service, obtaining a Standby Letter of Credit, Bank Guarantee, Documentary Letter of Credit, or Proof of Funds from a third party poses significant credit risk. Without effective coverage in a bankable manner, it becomes risky for any third party to extend such liabilities",
  subtitle5: "Fees and financial commitment",
  content5:
    "All banks levy fees for reserving, issuing, and transmitting bank instruments on behalf of clients. Banks won't provide these services for free or wait for payment from the client. Services are rendered only when the client already has sufficient cash in the bank to cover costs and potential risks.",
  subtitle6:
    "Credit Enhancement transactions generally fall into two categories:",
  content6:
    "1. Transactions involving borrowing and lending of fully cash-backed, assignable, and divisible bank instruments, typically starting at Euro 10 million. These transactions require a clear understanding of terms between the issuing and receiving banks, with security ensured through a conditional commitment from an acceptable receiving bank before issuance",
  subtitle7: "",
  content7:
    "2. Transactions based on contract and verbiage-controlled instruments issued by willing private banks, typically available for transactions starting at Euro 250,000. Flexibility depends on the willingness of a bank to engage in an enhancement transaction and the availability of the required fees deposited in cash before issuance.",
  subtitle8: "",
  content8:
    "The Credit Enhancement process usually begins with the appointment of a professional manager empowered through a mandate and the placement of a retainer.",
  subtitle9: "",
  content9:
    "Other Credit Enhancement tools include financial instruments like a letter of Credit (L/C), Documentary Letter of Credit (DLC), Standby Letters of Credit (SBLC), Bank Guarantees (BG), Bid or Tender Bonds, Ready, Willing, Able confirmations (RWA), Proof of Funds (POF), Bank Comfort Letters (BCL), Blocked Funds (BF), Certificate of Deposit (CD), and Pre-Advice via bank-to-bank SWIFT The likelihood of completing a transaction is higher for companies with substantial assets. For further discussion, please contact +2347025640059, which also works on WhatsApp.",
  subtitle10: "",
  content10: "",
  subtitle11: "",
  content11: "",
  subtitle12: "",
  content12: "",
  imageUrl: Business,
};
