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
    <section className="my-6 mx-auto font-inter">
      <div className="bg-[#F2F2F2] py-[24px] md:py-8 lg:py-10">
        {/* Top Feature Cards */}
        <div className="max-w-[1000px] mx-auto pt-[24px] pb-[24px] md:pb-[40px] space-y-4 rounded-[40px]">
          <Accordion
            type="single"
            collapsible
            className="flex flex-col md:flex-row gap-4 md:gap-8 w-[90%] mx-auto"
          >
            {/* Card 1 */}
            <AccordionItem
              value="card-1"
              className="flex flex-col justify-center bg-gradient-to-r from-[#E6E6E6] to-[#C8C8C8]
      w-full h-auto rounded-lg px-4 py-4"
            >
              <AccordionTrigger className="flex justify-between items-start w-full hover:no-underline">
                {/* Left: Icon + Title */}
                <div className="flex flex-col items-start gap-2">
                  <img
                    src="/images/invoice.png"
                    alt="Custom Invoice Templates"
                    className="w-[40px] h-[40px]"
                  />
                  <span className="text-black text-[18px] font-normal">
                    Custom Invoice Templates
                  </span>
                </div>
                {/* Arrow auto-renders */}
              </AccordionTrigger>

              <AccordionContent className="px-1 pb-2 text-gray-700 text-sm">
                This is where extra details about custom invoice templates go.
              </AccordionContent>
            </AccordionItem>

            {/* Card 2 */}
            <AccordionItem
              value="card-2"
              className="flex flex-col justify-center bg-gradient-to-r from-[#E6E6E6] to-[#C8C8C8]
      w-full h-auto rounded-lg px-4 py-4"
            >
              <AccordionTrigger className="flex justify-between items-start w-full hover:no-underline">
                {/* Left: Icon + Title */}
                <div className="flex flex-col items-start gap-2">
                  <img
                    src="/images/audit.png"
                    alt="Comprehensive Audit Trails"
                    className="w-[40px] h-[40px]"
                  />
                  <span className="text-black text-[18px] font-normal">
                    Comprehensive Audit Trails
                  </span>
                </div>
                {/* Arrow auto-renders */}
              </AccordionTrigger>

              <AccordionContent className="px-1 pb-2 text-gray-700 text-sm">
                Extra details about comprehensive audit trails will be shown here.
              </AccordionContent>
            </AccordionItem>
          </Accordion>


        </div>

        {/* Bottom Sections */}
        <div>
          <div className="space-y-[24px] px-6 md:px-2 max-w-[1440px] mx-auto">
            {/* ================= Account Receivables ================= */}
            <SectionWithAccordion
              title="Account Receivables"
              subtitle="Accelerate your cash flow"
              description="Stay on top of collections and improve working capital - without chasing payments manually."
              items={receivableDropdowns}
              video="videos/account-receivables.mp4"
            />

            {/* ================= Account Payables ================= */}
            <SectionWithAccordion
              title="Accounts Payables"
              subtitle="Control of Vendor Spend"
              description="Eliminate late fees, maintain supplier trust, and get full visibility into every dirham out."
              items={payableDropdowns}
              video="videos/Accounts_payables.mp4"
            />

            {/* ================= Smart Expense Management ================= */}
            <SectionWithAccordion
              title="Smart Expense Management"
              subtitle=""
              description="Control spending, eliminate manual errors, and boost accountability. Modernize every step of expense processing with automation, policy enforcement, and real-time tracking."
              items={expenseDropdowns}
              video="videos/Smart_expense_management.mp4"
            />
          </div>
        </div>
      </div>

      {/* ================= Financial Statements ================= */}
      <div className="px-6 max-w-[1440px] mx-auto my-6">
        <SectionWithAccordion
          title="Financial Statements"
          subtitle="Audit-Ready, Always-On"
          description="Move beyond monthly closings—generate real-time, regulation-ready financials anytime."
          items={financialDropdowns}
          video="videos/Financial_statements.mp4"
        />
      </div>
    </section>
  );
}

/* --- Reusable Subcomponent --- */
function SectionWithAccordion({ title, subtitle, description, items, video }) {
  return (
    <section className="bg-[#E8F1FB] border border-[#CECECE] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20 my-6 md:my-8">
      {/* Left Side */}
      <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
        <h2 className="text-[#1976D2] text-[24px] md:text-[30px] lg:text-[40px] leading-snug lg:leading-tight">
          {title}{" "}
          {subtitle && (
            <span className="tracking-tight block text-[#1976D2] font-normal text-[20px] md:text-[28px] lg:text-[32px] mt-1">
              {subtitle}
            </span>
          )}
        </h2>
        <p className="mt-3 text-[14px] md:text-[16px] lg:text-[20px] lg:leading-relaxed break-words">
          {description}
        </p>

        {/* Accordion */}
        <div className="mt-4 md:mt-6 lg:mt-10">
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
      <div className="flex-1 mt-10 md:mt-6 lg:mt-0 flex justify-center items-center">
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
  );
}
