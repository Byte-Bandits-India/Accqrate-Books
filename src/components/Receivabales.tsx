"use client";

import React, { JSX, useContext, useRef } from "react";
import { LoadingContext } from "../utils/LoadingContext";
import Skeleton from "./skeleton";
import useInView from "../utils/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface DropdownItem {
  title: string;
  content: string;
}

export default function AccountSections(): JSX.Element {
  const { loading } = useContext(LoadingContext);
  const receivableRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(receivableRef, { threshold: 0 });

  const receivableDropdowns: DropdownItem[] = [
    { title: "Automated Invoicing", content: "Sample content for Automated Invoicing." },
    { title: "Payment Tracking", content: "Sample content for Payment Tracking." },
    { title: "Receipts & Reconciliations", content: "Sample content for Receipts & Reconciliations." },
    { title: "Aging Analysis", content: "Sample content for Aging Analysis." },
  ];

  const payableDropdowns: DropdownItem[] = [
    { title: "Smart Invoice Capture", content: "Sample content for Smart Invoice Capture." },
    { title: "Approval Routing", content: "Sample content for Approval Routing." },
    { title: "Automated Payments", content: "Sample content for Automated Payments." },
    { title: "Supplier Payments", content: "Sample content for Supplier Payments." },
    { title: "Payable Dashboard", content: "Sample content for Payable Dashboard." },
  ];

  const expenseDropdowns: DropdownItem[] = [
    { title: "AI-Powered Capture", content: "Sample content for AI-Powered Capture." },
    { title: "Policy Enforcement", content: "Sample content for Policy Enforcement." },
    { title: "Approval Workflows", content: "Sample content for Approval Workflows." },
    { title: "Live Dashboards", content: "Sample content for Live Dashboards." },
    { title: "Mobile-Friendly", content: "Sample content for Mobile-Friendly." },
  ];

  const financialDropdowns: DropdownItem[] = [
    { title: "Live Financials", content: "Sample content for Live Financials." },
    { title: "Regulatory Formats", content: "Sample content for Regulatory Formats." },
    { title: "Drill Down Detail", content: "Sample content for Drill Down Detail." },
    { title: "Division & Consolidation", content: "Sample content for Division & Consolidation." },
    { title: "Export & Share", content: "Sample content for Export & Share." },
  ];

  const operationsDropdowns: DropdownItem[] = [
    { title: "Live Financial Dashboards", content: "Sample content for Live Financial Dashboards." },
    { title: "Automated Bank Reconciliation", content: "Sample content for Automated Bank Reconciliation." },
    { title: "Advanced Reporting", content: "Sample content for Advanced Reporting." },
    { title: "Multi-Entity, Multi-Currency", content: "Sample content for Multi-Entity, Multi-Currency." },
    { title: "Customizable Chart of Accounts", content: "Sample content for Chart of Accounts." },
  ];

  if (loading || !isVisible) {
    return (
      <section
        ref={receivableRef}
        className="space-y-6 my-6 max-w-[1440px] mx-auto"
      >
        <Skeleton />
      </section>
    );
  }

  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[40px] py-[24px] md:py-[32px]">
        {/* Receivables */}
        <SectionWithAccordion
          title="Account Receivables"
          subtitle="Accelerate your cash flow"
          description="Stay on top of collections and improve working capital - without chasing payments manually."
          items={receivableDropdowns}
          video="videos/account-receivables.mp4"
        />

        {/* Payables */}
        <SectionWithAccordion
          title="Accounts Payables"
          subtitle="Control of Vendor Spend"
          description="Eliminate late fees, maintain supplier trust, and get full visibility into every dirham out."
          items={payableDropdowns}
          video="videos/Accounts_payables.mp4"
        />

        {/* Expenses */}
        <SectionWithAccordion
          title="Smart Expense Management"
          description="Control spending, eliminate manual errors, and boost accountability. Modernize every step of expense processing with automation, policy enforcement, and real-time tracking."
          items={expenseDropdowns}
          video="videos/Smart_expense_management.mp4"
        />

        {/* Financial Statements */}
        <SectionWithAccordion
          title="Financial Statements"
          subtitle="Audit-Ready, Always-On"
          description="Move beyond monthly closings—generate real-time, regulation-ready financials anytime."
          items={financialDropdowns}
          video="videos/Financial_statements.mp4"
          className="bg-white"
        />

        {/* Finance Operations */}
        <SectionWithAccordion
          title="Transform Your Finance Operations"
          description="Modern accounting isn’t about debits and credits—it’s about business control, speed, and insight."
          items={operationsDropdowns}
          video="videos/Transform_your_finance_operations.mp4"
        />
      </div>
    </div>
  );
}

/* Reusable Subcomponent */
interface SectionWithAccordionProps {
  title: string;
  subtitle?: string;
  description: string;
  items: DropdownItem[];
  video: string;
  className?: string;
}

function SectionWithAccordion({
  title,
  subtitle,
  description,
  items,
  video,
  className,
}: SectionWithAccordionProps): JSX.Element {
  return (
    <div className="my-6 md:my-[32px]">
      <section
        className={`${className ?? "bg-[#E8F1FB]"} border border-[#CECECE] py-6 px-6 md:p-[32px] rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-[32px] lg:px-10`}
      >
        <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
          <h2 className="text-[#1976D2] text-[20px] md:text-[24px] lg:text-[40px] leading-snug lg:leading-tight pb-6 md:pb-[32px] tracking-[-2%]">
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
  );
}
