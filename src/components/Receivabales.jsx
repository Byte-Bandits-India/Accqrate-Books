"use client";

import { useContext, useRef } from "react";
import { LoadingContext } from "../utils/LoadingContext";
import Skeleton from "../components/skeleton";
import useInView from "../utils/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionCard
} from "@/components/ui/accordion";

export default function AccountSections() {
  const { loading } = useContext(LoadingContext);
  const receivableRef = useRef(null);
  const isVisible = useInView(receivableRef, { threshold: 0 });

  const receivableDropdowns = [
    { title: "Automated Invoicing", content: "Sample content for Automated Invoicing." },
    { title: "Payment Tracking", content: "Sample content for Payment Tracking." },
    { title: "Receipts & Reconciliations", content: "Sample content for Receipts & Reconciliations." },
    { title: "Aging Analysis", content: "Sample content for Aging Analysis." },
  ];

  const payableDropdowns = [
    { title: "Smart Invoice Capture", content: "Sample content for Smart Invoice Capture." },
    { title: "Approval Routing", content: "Sample content for Approval Routing." },
    { title: "Automated Payments", content: "Sample content for Automated Payments." },
    { title: "Supplier Payments", content: "Sample content for Supplier Payments." },
    { title: "Payable Dashboard", content: "Sample content for Payable Dashboard." },
  ];

  const expenseDropdowns = [
    { title: "AI-Powered Capture", content: "Sample content for AI-Powered Capture." },
    { title: "Policy Enforcement", content: "Sample content for Policy Enforcement." },
    { title: "Approval Workflows", content: "Sample content for Approval Workflows." },
    { title: "Live Dashboards", content: "Sample content for Live Dashboards." },
    { title: "Mobile-Friendly", content: "Sample content for Mobile-Friendly." },
  ];

  const financialDropdowns = [
    { title: "Live Financials", content: "Sample content for Live Financials." },
    { title: "Regulatory Formats", content: "Sample content for Regulatory Formats." },
    { title: "Drill Down Detail", content: "Sample content for Drill Down Detail." },
    { title: "Division & Consolidation", content: "Sample content for Division & Consolidation." },
    { title: "Export & Share", content: "Sample content for Export & Share." },
  ];

  const operationsDropdowns = [
    { title: "Live Financial Dashboards", content: "Sample content for Live Financial Dashboards." },
    { title: "Automated Bank Reconciliation", content: "Sample content for Automated Bank Reconciliation." },
    { title: "Advanced Reporting", content: "Sample content for Advanced Reporting." },
    { title: "Multi-Entity, Multi-Currency", content: "Sample content for Multi-Entity, Multi-Currency." },
    { title: "Customizable Chart of Accounts", content: "Sample content for Chart of Accounts." },
  ];

  // --- Skeleton ---
  if (loading || !isVisible) {
    return (
      <section
        ref={receivableRef}
        className="space-y-6 my-6 max-w-[1440px] mx-auto"
      >
        {/* Skeleton code remains unchanged */}
        {/* ... */}
      </section>
    );
  }

  // --- Main Content ---
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[40px] py-[24px] md:py-[32px]">
        {/* ================= Account Receivables ================= */}
        <section className="bg-[#E8F1FB]  mb-6 md:mb-[32px] font-inter md:h-auto lg:h-auto xl:h-[615px] p-6 md:p-[32px] rounded-xl md:rounded-2xl mx-auto md:flex">
          {/* Left Side */}
          <div className="flex-1 md:max-w-[520px]">
            <h2 className="text-[#1976D2] pb-6 text-[20px] font-medium md:text-[30px] leading-snug">
              Account Receivables{" "}
              <span className="tracking-tight text-[20px] md:text-[30px] font-medium block text-[#1976D2]">
                Accelerate your cash flow
              </span>
            </h2>
            <p className="pb-6 md:pb-[32px] text-[14px] md:text-[18px] md:leading-relaxed md:tracking-wide">
              Stay on top of collections and improve working capital - without chasing payments manually.
            </p>

            {/* Accordion */}
            <Accordion type="single" collapsible className="w-full max-w-[400px]">
              {receivableDropdowns.map((item, index) => (
                <AccordionItem key={index} value={`rec-${index}`}>
                  <AccordionTrigger className="text-[16px] md:text-[14px] lg:text-[16px] font-normal md:font-medium">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-[12px] md:text-[12px] lg:text-[14px]">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Side */}
          <div className="flex-1 mt-6 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end">
            <video
              className="rounded-lg w-full md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
              autoPlay
              muted
              loop
            >
              <source src="videos/account-receivables.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* ================= Accounts Payables ================= */}
        <section className="bg-[#E8F1FB] font-inter md:h-auto lg:h-auto xl:h-[615px] p-6 md:p-[32px] rounded-xl md:rounded-2xl mx-auto md:flex">
          {/* Left Side */}
          <div className="flex-1 md:max-w-[520px]">
            <h2 className="text-[#1976D2] text-[20px] font-medium md:text-[30px] pb-6 leading-snug">
              Accounts Payables{" "}
              <span className="tracking-tight text-[20px] font-medium md:text-[30px] block text-[#1976D2]">
                Control of Vendor Spend
              </span>
            </h2>
            <p className="pb-6 md:pb-[32px] text-[14px] md:text-[18px] md:leading-relaxed md:tracking-wide">
              Eliminate late fees, maintain supplier trust, and get full visibility into every dirham out.
            </p>

            {/* Accordion */}
            <Accordion type="single" collapsible className="w-full max-w-[400px]">
              {payableDropdowns.map((item, index) => (
                <AccordionItem key={index} value={`pay-${index}`}>
                  <AccordionTrigger className="text-[16px] md:text-[14px] lg:text-[16px] font-normal md:font-medium">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-[12px] md:text-[12px] lg:text-[14px]">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Side */}
          <div className="flex-1 mt-6 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end">
            <video
              className="rounded-lg w-full md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
              autoPlay
              muted
              loop
            >
              <source src="videos/Accounts_payables.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
      </div>

      <div className="bg-[#E8F1FB]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-[40px] py-[24px] md:py-[32px]">
          {/* ================= Smart Expense Management ================= */}
          <section className="bg-[#E8F1FB] mb-6 md:mb-[32px] font-inter md:h-auto lg:h-auto xl:h-[615px] p-6 md:p-[32px] rounded-xl md:rounded-2xl mx-auto md:flex">
            {/* Left Side */}
            <div className="flex-1 md:max-w-[520px]">
              <h2 className="text-[#1976D2] mb-6 text-[20px] font-medium md:text-[30px] leading-snug">
                Smart Expense Management
              </h2>
              <p className="pb-6 md:pb-[32px] text-[14px] md:text-[18px] md:leading-relaxed md:tracking-wide">
                Control spending, eliminate manual errors, and boost accountability. Modernize every step of expense processing with automation, policy enforcement, and real-time tracking.
              </p>

              {/* Accordion */}
              <Accordion type="single" collapsible className="w-full max-w-[400px]">
                {expenseDropdowns.map((item, index) => (
                  <AccordionItem key={index} value={`exp-${index}`}>
                    <AccordionTrigger className="text-[16px] md:text-[14px] lg:text-[16px] font-normal md:font-medium">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-[12px] md:text-[12px] lg:text-[14px]">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Right Side */}
            <div className="flex-1 mt-6 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end">
              <video
                className="rounded-lg w-full md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
                autoPlay
                muted
                loop
              >
                <source src="videos/Smart_expense_management.mp4" type="video/mp4" />
              </video>
            </div>
          </section>

          {/* ================= Financial Statements ================= */}
          <section className="bg-white mt-6 md:mt-[32px] font-inter md:h-auto lg:h-auto xl:h-[615px] p-6 md:p-[32px] rounded-xl md:rounded-2xl mx-auto md:flex">
            {/* Left Side */}
            <div className="flex-1 md:max-w-[520px]">
              <h2 className="text-[#1976D2] mb-6 text-[20px] font-medium md:text-[30px] leading-snug">
                Financial Statements{" "}
                <span className="tracking-tight block text-[#1976D2] text-[20px] font-medium md:text-[30px]">
                  Audit-Ready, Always-On
                </span>
              </h2>
              <p className="pb-6 md:pb-[32px] text-[14px] md:text-[18px] md:leading-relaxed md:tracking-wide">
                Move beyond monthly closings—generate real-time, regulation-ready financials anytime.
              </p>

              {/* Accordion */}
              <Accordion type="single" collapsible className="w-full max-w-[400px]">
                {financialDropdowns.map((item, index) => (
                  <AccordionItem key={index} value={`fin-${index}`}>
                    <AccordionTrigger className="text-[16px] md:text-[14px] lg:text-[16px] font-normal md:font-medium">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-[12px] md:text-[12px] lg:text-[14px]">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Right Side */}
            <div className="flex-1 mt-6 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end">
              <video
                className="rounded-lg w-full md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
                autoPlay
                muted
                loop
              >
                <source src="videos/Financial_statements.mp4" type="video/mp4" />
              </video>
            </div>
          </section>

          {/* ================= Finance Operations ================= */}
          <section className="bg-[#E8F1FB] mt-6 md:mt-[32px] font-inter md:h-auto lg:h-auto xl:h-[615px] p-6 md:p-[32px] rounded-xl md:rounded-2xl mx-auto md:flex">
            {/* Left Side */}
            <div className="flex-1 md:max-w-[520px]">
              <h2 className="text-[#1976D2] pb-6 text-[20px] md:text-[30px] font-medium leading-snug">
                Transform Your{" "}
                <span className="tracking-tight text-[20px] font-medium md:text-[30px] block text-[#1976D2]">
                  Finance Operations
                </span>
              </h2>
              <p className="pb-6 md:pb-[32px] text-[14px] md:text-[18px] md:leading-relaxed md:tracking-wide">
                Modern accounting isn’t about debits and credits—it’s about business
                control, speed, and insight.
              </p>

              {/* Accordion */}
              <div>
                <Accordion type="single" collapsible className="w-full max-w-[400px]">
                  {operationsDropdowns.map((item, index) => (
                    <AccordionItem key={index} value={`rec-${index}`}>
                      <AccordionTrigger className="text-[16px] md:text-[14px] lg:text-[16px] font-normal md:font-medium">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-[12px] md:text-[12px] lg:text-[14px]">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 mt-6 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end">
              <video
                className="rounded-lg w-full md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
                autoPlay
                muted
                loop
              >
                <source src="videos/Transform_your_finance_operations.mp4" type="video/mp4" />
              </video>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

/* --- Reusable Subcomponent --- */
function SectionWithAccordion({ title, subtitle, description, items, video, className }) {
  return (
    <>
      <div className="my-6 md:my-[32px]">
        <section className={`${className ? className : "bg-[#E8F1FB]"} border border-[#CECECE] py-6 px-6 md:p-[32px] rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-[32px] lg:px-10`}>
          {/* Left Side */}
          <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
            <h2 className="text-[#1976D2] text-[20px] md:text-[24px] lg:text-[40px] leading-snug lg:leading-tight pb-6 md:pb-[32px] tracking-[-2%] ">
              {title}{" "}
              {subtitle && (
                <span className="tracking-tight block text-[#1976D2] font-normal text-[20px] md:text-[28px] lg:text-[32px]">
                  {subtitle}
                </span>
              )}
            </h2>
            <p className="text-[14px] md:text-[18px] pb-6 md:pb-[32px] lg:text-[20px] lg:leading-relaxed break-words">
              {description}
            </p>

            {/* Accordion */}
            <div className="md:mt-6 lg:mt-10">
              <Accordion type="single" collapsible className="w-full max-w-[400px]">
                {items.map((item, index) => (
                  <AccordionItem key={index} value={`${title}-${index}`}>
                    <AccordionTrigger className="text-[16px] md:text-[14px] lg:text-[16px] font-medium text-left">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-[12px] md:text-[12px] lg:text-[14px]">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 mt-6 lg:mt-0 flex justify-center items-center">
            <video
              className="rounded-lg w-full max-w-[500px] md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
              autoPlay
              muted
              loop
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </section>
      </div>
    </>
  );
}
