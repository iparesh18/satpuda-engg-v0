"use client";

import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Header, Footer } from "../../index.js";

const EOA_2018_2019_PDF = "/documents/eoa/EOA Report 2018-19.pdf";
const EOA_2019_2020_PDF = "/documents/eoa/EOA Report 2019-20.pdf";
const EOA_2020_2021_PDF = "/documents/eoa/EOA Report 2020-21.pdf";
const EOA_2021_2022_PDF = "/documents/eoa/EOA Report 2021-22.pdf";
const EOA_2022_2023_PDF = "/documents/eoa/EOA Report 2022-23.pdf";
const EOA_2023_2024_PDF = "/documents/eoa/EOA Report 2023-24.pdf";
const EOA_2024_2025_PDF = "/documents/eoa/EOA Report 2024-2025.PDF";
const EOA_2025_2026_PDF = "/documents/eoa/EOA Report 2025-26.PDF";
const EOA_2026_2027_PDF = "/documents/eoa/EOA Report 2026-27.PDF";

const LETTER_OF_APPROVAL_2017_2018_PDF =
  "/documents/approvals/Letter Of Approval 2017-18.pdf";
const ACADEMIC_POLICY_PDF = "";
const ANTI_RAGGING_PDF = "";
const ANTI_RAGGING_COMMITTEE_PDF =
  "/documents/policies/Anti Ragging Committee.pdf";
const BOARD_OF_GOVERNORS_PDF =
  "/documents/policies/Board of Governors.pdf";
const COMMITTEE_FOR_SC_ST_PDF =
  "/documents/policies/Committee For SC ST.pdf";
const DIGITAL_PAYMENT_FINANCIAL_TRANSACTIONS_PDF =
  "/documents/policies/Digital Payment for all Financial Transactions as per MHRD Directives.pdf";
const GRIEVANCE_REDRESSAL_COMMITTEE_PDF =
  "/documents/policies/Grievance Redressal Committee.pdf";
const IMPLEMENTATION_TEACHER_TRAINING_POLICY_PDF =
  "/documents/policies/Implementation of Teacher Training Policy.pdf";
const SAFETY_SECURITY_MEASURES_PDF =
  "/documents/policies/Implemented Safety and Security measures.pdf";
const FOOD_SAFETY_STANDARD_PDF =
  "/documents/policies/Implementing Food Safety and Standard.pdf";
const INTERNAL_COMMITTEE_IC_PDF =
  "/documents/policies/Internal Committee (IC).pdf";
const INTERNAL_QUALITY_ASSURANCE_CELL_PDF =
  "/documents/policies/Internal Quality Assurance Cell.pdf";

const eoaReports = [
  { title: "2018-2019", pdf: EOA_2018_2019_PDF },
  { title: "2019-2020", pdf: EOA_2019_2020_PDF },
  { title: "2020-2021", pdf: EOA_2020_2021_PDF },
  { title: "2021-2022", pdf: EOA_2021_2022_PDF },
  { title: "2022-2023", pdf: EOA_2022_2023_PDF },
  { title: "2023-2024", pdf: EOA_2023_2024_PDF },
  { title: "2024-2025", pdf: EOA_2024_2025_PDF },
  { title: "2025-2026", pdf: EOA_2025_2026_PDF },
  { title: "2026-2027", pdf: EOA_2026_2027_PDF },
];

const approvalLetters = [
  { title: "2017-2018", pdf: LETTER_OF_APPROVAL_2017_2018_PDF },
];

const institutionalPolicies = [

  { title: "Anti Ragging Committee", pdf: ANTI_RAGGING_COMMITTEE_PDF },
  { title: "Board of Governors", pdf: BOARD_OF_GOVERNORS_PDF },
  { title: "Committee For SC ST", pdf: COMMITTEE_FOR_SC_ST_PDF },
  { title: "Digital Payment for all Financial Transactions", pdf: DIGITAL_PAYMENT_FINANCIAL_TRANSACTIONS_PDF },
  { title: "Grievance Redressal Committee", pdf: GRIEVANCE_REDRESSAL_COMMITTEE_PDF },
  { title: "Implementation of Teacher Training Policy", pdf: IMPLEMENTATION_TEACHER_TRAINING_POLICY_PDF },
  { title: "Implemented Safety and Security measures", pdf: SAFETY_SECURITY_MEASURES_PDF },
  { title: "Implementing Food Safety and Standard", pdf: FOOD_SAFETY_STANDARD_PDF },
  { title: "ICC", pdf: INTERNAL_COMMITTEE_IC_PDF },
  { title: "Internal Quality Assurance Cell", pdf: INTERNAL_QUALITY_ASSURANCE_CELL_PDF },
];

function DocumentRow({ title, pdf }) {
  const hasPdf = pdf.trim().length > 0;

  return (
    <div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-3.5">
      <p className="text-sm font-medium text-foreground sm:text-base">{title}</p>
      <a
        href={pdf}
        target={hasPdf ? "_blank" : undefined}
        rel={hasPdf ? "noopener noreferrer" : undefined}
        onClick={(event) => {
          if (!hasPdf) {
            event.preventDefault();
          }
        }}
        className="w-fit text-sm font-semibold text-accent transition-colors hover:text-accent/80"
        aria-disabled={!hasPdf}
      >
        Click Here
      </a>
    </div>
  );
}

export default function MandatoryDisclosuresPage() {
  return (
    <div>
      <Header />

      <main className="bg-background min-h-screen pb-20">
        <section className="relative overflow-hidden border-b border-border/70 py-16 sm:py-24">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/overview/campus overview.webp"
              alt="Satpuda Campus Backdrop"
              className="h-full w-full object-cover object-center opacity-15"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-br from-[#021545]/98 via-[#021545]/95 to-[#021545]/90" />
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-foreground/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 backdrop-blur-md">
                <Link to="/" className="transition-colors hover:text-white">Home</Link>
                <ChevronRight className="h-3 w-3 text-white/40" />
                <span className="font-medium text-white">Mandatory Disclosures</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Mandatory Disclosures
              </h1>

              <div className="my-6 h-1 w-16 rounded-full bg-accent" />
            </div>
          </div>
        </section>

        <section className="pt-10 sm:pt-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-border/60 bg-white p-5 shadow-lg sm:p-8 lg:p-10">
              <div>
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">ACCREDITATIONS &amp; APPROVALS</h2>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">EOA Reports</h3>
                <div className="mt-4 divide-y divide-border/70 border-y border-border/70">
                  {eoaReports.map((report) => (
                    <DocumentRow key={report.title} title={report.title} pdf={report.pdf} />
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">Letter of Approval</h3>
                <div className="mt-4 divide-y divide-border/70 border-y border-border/70">
                  {approvalLetters.map((letter) => (
                    <DocumentRow key={letter.title} title={letter.title} pdf={letter.pdf} />
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">INSTITUTIONAL POLICIES &amp; OTHER MANDATORY DOCUMENTS</h2>
                <div className="mt-6 divide-y divide-border/70 border-y border-border/70">
                  {institutionalPolicies.map((policy) => (
                    <DocumentRow key={policy.title} title={policy.title} pdf={policy.pdf} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}