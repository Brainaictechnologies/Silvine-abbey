import Link from "next/link";
import React from "react";

const Article2 = () => {
  return (
    <div>
      <h4>
        02 We serve established financial institutions and companies as our
        clients. In our assessment process, clients demonstrate a company&apos;s
        financial background by providing audited accounts and showcasing the
        revenues from the previous year. It is anticipated that the revenues
        from the previous year (whether personal, corporate, or combined)
        surpass the face value of the required Collateral Guarantee service,
        which can be verified through audited accounts.
        <br />
        <br />
        Our clients are backed by reputable banks. The borrower&apos;s bank
        serves as the custodian for the lender of the securities for the
        agreed-upon duration. The borrower&apos;s bank must support the
        transaction with an irrevocable financial commitment to pay an agreed
        lending fee upon delivery and verification of the Collateral Guarantee
        and to serve as the custodian for the lender of the securities for the
        agreed-upon period. The client&apos;s bank offers four conditional
        payment options for receiving the Collateral Guarantee service: (A)
        Conditional Irrevocable Pay Order (ICPO) endorsed by the borrower&apos;s
        bank, (B) Unconditional Promissory Note payable within 180 days and
        endorsed by the receiving bank, (C) Conditional payment via SWIFT MT103,
        (D) Conditional Documentary Credit sent via SWIFT MT 700. Key Points to
        Remember:
        <ul className="list-none ">
          <li>
            - The Borrower must meet qualification criteria, and their company
            must demonstrate substance.
          </li>
          <li>
            - The Borrower&apos;s bank must issue a conditional payment
            commitment.
          </li>
        </ul>
        <Link href={`tel: +234 703 531 0665`} className="mt-4 inline-block">
          Schedule a call
        </Link>
      </h4>
    </div>
  );
};

export default Article2;
