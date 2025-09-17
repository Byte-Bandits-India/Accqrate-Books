"use client";
import { useState, useContext, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { LoadingContext } from "../utils/LoadingContext";
import Skeleton from "../components/skeleton";
import useInView from "../utils/useInView";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export default function AccountSections() {
  const [openIndex, setOpenIndex] = useState(null);
  const { loading } = useContext(LoadingContext);
  const receivableRef = useRef(null);

  // <-- lowered threshold so mobile triggers when any part becomes visible
  const isVisible = useInView(receivableRef, { threshold: 0 });
 
  const toggleDropdown = (key, index) => {
    setOpenIndex(openIndex === `${key}-${index}` ? null : `${key}-${index}`);
  };

  const [isOpenCard1, setIsOpenCard1] = useState(false);
  const [isOpenCard2, setIsOpenCard2] = useState(false);

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

  // Skeleton: ref lives here (observer watches the skeleton wrapper)
  if (loading || !isVisible) {
    return (
      <section
        ref={receivableRef}
        className="space-y-10 mb-10 mt-[6%] max-w-[1440px] mx-auto"
      >
        <div className=" py-[4%] space-y-4 rounded-[40px]">
          {/* Bottom Two Rows Skeleton */}
          <div className="flex flex-col md:flex-row justify-center max-w-8xl gap-4 md:gap-20 w-[90%] py-4 mx-auto">
            {[1, 2].map((item) => (
              <div key={item} className="bg-[#F3F3F3] p-4 lg:p-6 rounded-md text-left lg:flex-1 lg:w-auto md:w-[340px] h-auto md:h-[217px]">
                <Skeleton height="36px" width="80%" className="mb-4" />
                <Skeleton height="18px" width="100%" className="mb-2" />
                <Skeleton height="18px" width="90%" />
              </div>
            ))}
          </div>

          <div className="space-y-10 px-4 md:px-2 mb-10">
            {/* Account Receivables Skeleton */}
            <section className="bg-[#E8F1FB] font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20 md:mt-[6%]">
              <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
                <Skeleton height="40px" width="70%" className="mb-4" />
                <Skeleton height="20px" width="90%" className="mb-6" />

                <div className="mt-4 space-y-4 md:space-y-4 lg:space-y-6 md:mt-6 lg:mt-10">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="max-w-[250px] md:max-w-[300px] lg:max-w-[400px]">
                      <div className="flex justify-between items-center border-b border-gray-300 pb-1">
                        <Skeleton height="16px" width="80%" />
                        <Skeleton height="16px" width="16px" className="rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 mt-10 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end">
                <Skeleton height="420px" className="rounded-lg w-full" />
              </div>
            </section>

            {/* Account Payables Skeleton */}
            <section className="bg-[#E8F1FB] font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20 md:mt-[6%]">
              <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
                <Skeleton height="42px" width="70%" className="mb-4" />
                <Skeleton height="20px" width="90%" className="mb-6" />

                <div className="mt-4 space-y-4 md:space-y-4 lg:space-y-6 md:mt-6 lg:mt-10">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="max-w-[250px] md:max-w-[300px] lg:max-w-[400px]">
                      <div className="flex justify-between items-center border-b border-gray-300 pb-1">
                        <Skeleton height="16px" width="80%" />
                        <Skeleton height="16px" width="16px" className="rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 mt-10 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end">
                <Skeleton height="420px" className="rounded-lg w-full" />
              </div>
            </section>

            {/* Smart Expense Management Skeleton */}
            <section className="bg-[#E8F1FB] font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20 md:mt-[6%]">
              <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
                <Skeleton height="42px" width="70%" className="mb-4" />
                <Skeleton height="20px" width="100%" className="mb-2" />
                <Skeleton height="20px" width="95%" className="mb-6" />

                <div className="mt-4 space-y-4 md:space-y-4 lg:space-y-6 md:mt-6 lg:mt-10">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="max-w-[250px] md:max-w-[300px] lg:max-w-[400px]">
                      <div className="flex justify-between items-center border-b border-gray-300 pb-1">
                        <Skeleton height="16px" width="80%" />
                        <Skeleton height="16px" width="16px" className="rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 mt-10 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end">
                <Skeleton height="420px" className="rounded-lg w-full" />
              </div>
            </section>
          </div>
        </div>

        <div className="px-4 md:px-2 mb-10">
          {/* Financial Statements Skeleton */}
          <section className="bg-[#E8F1FB] font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20 md:my-[4%] space-x-4">
            <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
              <Skeleton height="42px" width="70%" className="mb-4" />
              <Skeleton height="20px" width="90%" className="mb-6" />

              <div className="mt-4 space-y-4 md:space-y-4 lg:space-y-6 md:mt-6 lg:mt-10">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="max-w-[250px] md:max-w-[300px] lg:max-w-[400px]">
                    <div className="flex justify-between items-center border-b border-gray-300 pb-1">
                      <Skeleton height="16px" width="80%" />
                      <Skeleton height="16px" width="16px" className="rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 mt-10 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end">
              <Skeleton height="420px" className="rounded-lg w-full" />
            </div>
          </section>
        </div>
      </section>
    );
  }

  // Main content: no ref here (matches Onboard.jsx pattern)
  return (
    <section className="space-y-10 mb-10 mt-[6%]  mx-auto font-inter">
      <video className="w-full h-auto rounded-[40px] max-w-[1440px] mx-auto" autoPlay muted loop>
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="max-w-[1000px]  mx-auto pt-[4%] pb-[30%] md:pb-[4%] space-y-4 rounded-[40px]">
      <div className="flex flex-col md:h-[150px] h-[117px] md:flex-row gap-4 md:gap-8 w-[90%] mx-auto">
        {/* Card 1 */}
        <div
          className="rounded-xl shadow-sm w-full md:w-1/2"
          style={{
            background:
              "linear-gradient(291.97deg, #C8C8C8 20.01%, #E6E6E6 78.75%)",
          }}
        >
          {/* Card Header */}
          <button
            onClick={() => setIsOpenCard1(!isOpenCard1)}
            className="flex items-center justify-between w-full p-4"
          >
            <div className="flex-col  gap-6">
              <img
                src="/images/invoice.png"
                alt="Custom Invoice Templates"
                className="w-8 h-8"
              />
              <h4 className="text-[20px] lg:text-[24px] mt-2 font-medium text-gray-800">
                Custom Invoice Templates
              </h4>
            </div>
            <FaChevronDown
              className={`w-4 h-6 text-gray-400 mt-10 transition-transform duration-300 ${
                isOpenCard1 ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Content */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              isOpenCard1 ? "max-h-[400px] " : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 pb-4 text-gray-700">
              <p className="text-sm">
                This is where extra details about custom invoice templates go.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="rounded-xl shadow-sm w-full md:w-1/2"
          style={{
            background:
              "linear-gradient(291.97deg, #C8C8C8 20.01%, #E6E6E6 78.75%)",
          }}
        >
          <button
            onClick={() => setIsOpenCard2(!isOpenCard2)}
            className="flex items-center justify-between w-full p-4"
          >
            <div className="flex-col items-center gap-3">
              <img
                src="/images/audit.png"
                alt="Comprehensive Audit Trails"
                className="w-8 h-8"
              />
              <h4 className="text-[20px] lg:text-[24px] mt-2 font-medium text-gray-800">
                Comprehensive Audit Trails
              </h4>
            </div>
            <FaChevronDown
              className={`w-4 h-6 text-gray-400 mt-10 transition-transform duration-300 ${
                isOpenCard2 ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Content */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              isOpenCard2 ? "max-h-[400px] " : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 pb-4 text-gray-700">
              <p className="text-sm">
                Extra details about comprehensive audit trails will be shown here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="bg-[#F2F2F2] py-[20px]  space-y-10 ">
        {/* Bottom Two Rows */}
       

    <div className=" space-y-10  px-4 md:px-2 mb-10 max-w-[1440px] mx-auto ">
      {/* ================= Account Receivables ================= */}
          <section className="bg-[#E8F1FB] font-inter md:h-auto border-[#CECECE] border lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20 md:mt-[6%]">
            {/* Left Side */}
            <div className="flex-1 md:max-w-[400px] lg:max-w-[520px] ">
              <h2 className="text-[#1976D2] text-[24px] md:text-[30px] lg:text-[40px] leading-snug lg:leading-tight">
                Account Receivables-
                <span className="tracking-tight md:text-[30px] lg:text-[36px] md:mb-6 lg:mb-10 block text-[#1976D2] font-normal">
                  Accelerate your cash flow
                </span>
              </h2>
              <p className="mt-3 text-[14px] md:text-[16px] lg:text-[20px] lg:max-w-[520px] lg:leading-relaxed md:tracking-wide break-words">
                Stay on top of collections and improve working capital - without chasing payments manually.
              </p>

              {/* Accordion */}
              <div className="mt-4 md:mt-6 lg:mt-10">
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
            </div>

            {/* Right Side */}
            <div className="flex-1 mt-10 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end">
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

          {/* ================= Account Payables ================= */}
          <section className="bg-[#E8F1FB] font-inter border-[#CECECE] border md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20 md:mt-[6%]">
            {/* Left Side */}
            <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
              <h2 className="text-[#1976D2] text-[24px] md:text-[30px] lg:text-[42px] leading-snug lg:leading-tight">
                Accounts Payables -
                <span className="tracking-tight md:text-[30px] lg:text-[42px] md:mb-6 lg:mb-10 block text-[#1976D2] font-normal">
                  Control of Vendor Spend
                </span>
              </h2>
              <p className="mt-3 text-[14px] md:text-[16px] lg:text-[20px] lg:max-w-[520px] lg:leading-relaxed md:tracking-wide break-words">
                Eliminate late fees, maintain supplier trust, and get full visibility into every dirham out.
              </p>
              {/* Accordion */}
              <div className="mt-4 md:mt-6 lg:mt-10">
                <Accordion type="single" collapsible className="w-full max-w-[400px]">
                  {payableDropdowns.map((item, index) => (
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
            <div className="flex-1 mt-10 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end">
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

          {/* ================= Smart Expense Management ================= */}
          <section className="bg-[#E8F1FB] font-inter border-[#CECECE] border md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto 
  md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20 md:mt-[6%]">
            {/* Left Side */}
            <div className="flex-1 md:max-w-[400px] lg:max-w-[520px] xl:max-w-[580px]">
              <h2 className="text-[#1976D2] text-[24px] md:text-[30px] lg:text-[42px] font-normal leading-snug lg:leading-tight">
                Smart <span >Expense Management</span>
              </h2>
              <p className="mt-3 text-[14px] md:text-[16px] lg:text-[18px] lg:max-w-[520px] xl:max-w-[580px] lg:leading-relaxed md:tracking-wide break-words">
                Control spending, eliminate manual errors, and boost accountability. Modernize every step of
                expense processing with automation, policy enforcement, and real-time tracking.
              </p>
              {/* Accordion */}
              <div className="mt-4 md:mt-6 lg:mt-10">
                <Accordion type="single" collapsible className="w-full max-w-[400px] lg:max-w-[520px] xl:max-w-[580px]">
                  {expenseDropdowns.map((item, index) => (
                    <AccordionItem key={index} value={`rec-${index}`}>
                      <AccordionTrigger className="text-[16px] md:text-[14px] lg:text-[16px] font-normal md:font-medium text-left">
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
            <div className="flex-1 mt-10 md:mt-6 lg:mt-0 md:flex md:justify-center md:items-center">
              <video
                className="rounded-lg w-full max-w-[500px] md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
                autoPlay
                muted
                loop
              >
                <source src="videos/account-receivables.mp4" type="video/mp4" />
              </video>
            </div>
          </section>
        </div>
      </div>

      <div className="px-4 md:px-2 mb-10 max-w-[1440px] mx-auto">
        {/* ================= Financial Statements ================= */}
        <section className="bg-[#E8F1FB] font-inter border-[#CECECE] border md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto 
  md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20 md:my-[4%] space-x-4">

          {/* Left Side */}
          <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
            <h2 className="text-[#1976D2] text-[24px] md:text-[30px] lg:text-[42px] font-normal leading-snug lg:leading-tight">
              Financial Statements –
              <span className="tracking-tight md:text-[30px] lg:text-[42px] block text-[#1976D2] ">
                Audit-Ready, Always-On
              </span>
            </h2>
            <p className="mt-3 text-[14px] md:text-[16px] lg:text-[20px] lg:max-w-[520px] lg:leading-relaxed md:tracking-wide break-words">
              Move beyond monthly closings—generate real-time, regulation-ready financials anytime.
            </p>
            {/* Accordion */}
            <div className="mt-4 md:mt-6 lg:mt-10">
              <Accordion type="single" collapsible className="w-full max-w-[400px]">
                {financialDropdowns.map((item, index) => (
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
          <div className="flex-1 mt-10 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end">
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
      </div>
    </section>
  );
}
