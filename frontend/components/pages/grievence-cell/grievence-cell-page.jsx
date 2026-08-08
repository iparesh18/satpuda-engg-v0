"use client";

import { Link } from "react-router-dom";
import { Header, Footer } from "../../index.js";
import { Button } from "../../ui/button.jsx";
import { ChevronRight } from "lucide-react";

const COMPLAINT_REGISTRATION_LINKS = {
  student: "https://docs.google.com/forms/d/e/1FAIpQLSfyrxFakLBGzlvtUPBDEOordsU2hFC2x8ysStuvIhYGMmJoQA/viewform?usp=dialog",
  parent: "https://docs.google.com/forms/d/e/1FAIpQLScMJmtyMLaRbHKnyB-gZ2PfexMiRqKNQA2fBJsbg24vfd7XBw/viewform?usp=publish-editor",
  staff: "https://docs.google.com/forms/d/e/1FAIpQLSfkUS_2IFYSrMWCMcpjVby9inBS1n9dHp8tMeEaDvJl12wr0Q/viewform?usp=publish-editor",
};

const OBJECTIVES = [
  "This AICTE approved Technical Institution should be able to receive and dispose of the grievances online.",
  "The Institutions has a notice board/flex board fixed near the office of the Principal, indicating the details of online Grievance Redressal Mechanism i.e. URL of the online Grievance Redressal Portal, names, contact nos. and e-mail IDs of members of the Grievance committee, to ensure publicity/awareness of the establishment of Grievance Redress Mechanism/Students Grievances Portal. This would help speedy redressal of the grievances and obviate/reduce the urge to lodge the grievance on the portal.",
  "An online monthly status report regarding the number of grievances received, disposed off and pending on the last day of the previous month will be informed to AICTE.",
  "Non-registration of grievances on the portal of the Institution resulting in more number of grievances being registered on the pg.portal of Central Government which would be an indication that the grievance redress mechanism of the respective institution/organisation is not working properly to the satisfaction of the petitioners.",
];

const COMPLAINT_OPTIONS = [
  { label: "For Student Complaint Registration", key: "student" },
  { label: "For Parent Complaint Registration", key: "parent" },
  { label: "For Staff Complaint Registration", key: "staff" },
];

export default function GrievenceCellPage() {
  return (
    <div>
      <Header />

      <main className="bg-background pb-16 sm:pb-20">
        <section className="relative overflow-hidden border-b border-border/70 py-12 sm:py-16">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-accent/10" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground font-medium">Grievance Cell</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-foreground mb-3">
              Grievance Cell
            </h1>
            <div className="h-1 w-12 bg-primary rounded-full mb-5" />
            <p className="text-muted-foreground max-w-4xl leading-relaxed">
              The Ministry of Human Resource Development [MHRD], Government of India has emphasized that there is a
              need to structure the mechanism for online registration as well as disposal of the grievances of
              students,/faculty/stakeholders in every Institution approved by AICTE. In view of the above, our college
              put in place an online mechanism for registering and disposing of grievances. This mechanism has the
              following objectives to be fulfilled:
            </p>
          </div>
        </section>

        <section className="pt-8 sm:pt-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl border border-border/60 shadow-lg p-5 sm:p-8">
              <ol className="list-decimal pl-5 sm:pl-6 space-y-5 text-foreground">
                {OBJECTIVES.map((objective, index) => (
                  <li key={`objective-${index}`} className="text-sm sm:text-base leading-relaxed marker:font-semibold marker:text-primary">
                    {objective}
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 sm:mt-10 bg-card/70 rounded-3xl border border-border/70 shadow-sm p-5 sm:p-8">
              <h2 className="text-2xl sm:text-3xl text-foreground mb-5">Complaint Registration</h2>

              <div className="space-y-4">
                {COMPLAINT_OPTIONS.map((option) => {
                  const targetUrl = COMPLAINT_REGISTRATION_LINKS[option.key];
                  const isPlaceholder = targetUrl.trim().length === 0;

                  return (
                    <div
                      key={option.key}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3"
                    >
                      <p className="text-sm sm:text-base text-foreground">{option.label}</p>
                      <Button asChild className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                        <a
                          href={targetUrl}
                          onClick={(event) => {
                            if (isPlaceholder) {
                              event.preventDefault();
                            }
                          }}
                          aria-disabled={isPlaceholder}
                        >
                          Click Here
                        </a>
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}