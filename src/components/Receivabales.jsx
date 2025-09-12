"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function AccountSections() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (key, index) => {
    setOpenIndex(openIndex === `${key}-${index}` ? null : `${key}-${index}`);
  };

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

  return (
    <div className="space-y-10 px-4 md:px-2 mb-10 mt-[6%]">
      <div className="bg-[#1976D2] w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] py-[4%] space-y-4 rounded-xl">
        {/* Bottom Two Rows */}
        <div className="flex flex-col md:flex-row justify-center max-w-8xl gap-4 md:gap-20 w-[90%] mx-auto">
          <div className="bg-[#F3F3F3] p-4 lg:p-6 rounded-md text-left lg:flex-1 lg:w-auto md:w-[340px] h-auto md:h-[217px]">
            <h4 className="lg:text-[36px] md:text-[26px] text-fluid-body font-semibold text-[#1976D2] leading-tight break-words">
              Custom Invoice Templates
            </h4>
            <p className="lg:text-[18px] md:text-[14px] text-fluid-small mt-2 lg:leading-relaxed text-[#808080] break-words">
              Add your logo, adjust fields, and localize content—no developer needed.
            </p>
          </div>
          <div className="bg-[#F3F3F3] p-4 lg:p-6 rounded-md text-left lg:flex-1 lg:w-auto md:w-[340px] h-auto md:h-[217px]">
            <h4 className="lg:text-[36px] md:text-[26px] text-fluid-body font-semibold text-[#1976D2] leading-tight break-words">
              Comprehensive Audit Trails
            </h4>
            <p className="lg:text-[18px] md:text-[14px] text-fluid-small mt-2 lg:leading-relaxed text-[#808080] break-words">
              Every transaction and e-invoice is tracked, always audit-ready for ZATCA and KSA requirements.
            </p>
          </div>
        </div>

        <div className="space-y-10 px-4 md:px-2 mb-10">
          {/* ================= Account Receivables ================= */}
          <section className="bg-[#E8F1FB] font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20 md:mt-[6%]">
            {/* Left Side */}
            <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
              <h2 className="text-[#1976D2] text-[24px] md:text-[30px] lg:text-[40px] font-semibold leading-snug lg:leading-tight">
                Account Receivables-
                <span className="tracking-tight md:text-[30px] lg:text-[36px] md:mb-6 lg:mb-10 block text-[#1976D2] font-normal">
                  Accelerate your cash flow
                </span>
              </h2>
              <p className="mt-3 text-[14px] md:text-[16px] lg:text-[20px] lg:max-w-[520px] lg:leading-relaxed md:tracking-wide break-words">
                Stay on top of collections and improve working capital - without chasing payments manually.
              </p>
              <div className="mt-4 space-y-4 md:space-y-4 lg:space-y-6 md:mt-6 lg:mt-10">
                {receivableDropdowns.map((item, index) => (
                  <div key={index} className="max-w-[250px] md:max-w-[300px] lg:max-w-[400px]">
                    <div
                      onClick={() => toggleDropdown("rec", index)}
                      className="flex justify-between items-center cursor-pointer border-b border-black pb-1"
                    >
                      <span className="font-normal text-[16px] md:text-[14px] lg:text-[16px] md:font-medium">{item.title}</span>
                      <FaChevronDown
                        className={`transition-transform ${openIndex === `rec-${index}` ? "rotate-180" : ""
                          }`}
                      />
                    </div>
                    {openIndex === `rec-${index}` && (
                      <p className="text-[12px] md:text-[12px] lg:text-[14px] mt-1">{item.content}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 mt-10 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end">
              <video className="rounded-lg w-full md:h-[300px] lg:h-auto xl:h-[420px] object-contain" autoPlay muted loop>
                <source src="videos/account-receivables.mp4" type="video/mp4" />
              </video>
            </div>
          </section>

          {/* ================= Account Payables ================= */}
          <section className="bg-[#E8F1FB] font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20 md:mt-[6%]">
            {/* Left Side */}
            <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
              <h2 className="text-[#1976D2] text-[24px] md:text-[30px] lg:text-[42px] font-semibold leading-snug lg:leading-tight">
                Accounts Payables -
                <span className="tracking-tight md:text-[30px] lg:text-[42px] md:mb-6 lg:mb-10 block text-[#1976D2] font-normal">
                  Control of Vendor Spend
                </span>
              </h2>
              <p className="mt-3 text-[14px] md:text-[16px] lg:text-[20px] lg:max-w-[520px] lg:leading-relaxed md:tracking-wide break-words">
                Eliminate late fees, maintain supplier trust, and get full visibility into every dirham out.
              </p>
              <div className="mt-4 space-y-4 md:space-y-4 lg:space-y-6 md:mt-6 lg:mt-10">
                {payableDropdowns.map((item, index) => (
                  <div key={index} className="max-w-[250px] md:max-w-[300px] lg:max-w-[400px]">
                    <div
                      onClick={() => toggleDropdown("pay", index)}
                      className="flex justify-between items-center cursor-pointer border-b border-black pb-1"
                    >
                      <span className="font-normal text-[16px] md:text-[14px] lg:text-[16px] md:font-medium">{item.title}</span>
                      <FaChevronDown
                        className={`transition-transform ${openIndex === `pay-${index}` ? "rotate-180" : ""
                          }`}
                      />
                    </div>
                    {openIndex === `pay-${index}` && (
                      <p className="text-[12px] md:text-[12px] lg:text-[14px] mt-1">{item.content}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 mt-10 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end">
              <video className="rounded-lg w-full md:h-[300px] lg:h-auto xl:h-[420px] object-contain" autoPlay muted loop>
                <source src="videos/account-payables.mp4" type="video/mp4" />
              </video>
            </div>
          </section>


          {/* ================= Smart Expense Management ================= */}
          <section className="bg-[#E8F1FB] font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto 
  md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20 md:mt-[6%]">
            {/* Left Side */}
            <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
              <h2 className="text-[#1976D2] text-[24px] md:text-[30px] lg:text-[42px] font-normal leading-snug lg:leading-tight">
                Smart <span className="font-semibold">Expense Management</span>
              </h2>
              <p className="mt-3 text-[14px] md:text-[16px] lg:text-[20px] lg:max-w-[520px] lg:leading-relaxed md:tracking-wide break-words">
                Control spending, eliminate manual errors, and boost accountability. Modernize every step of
                expense processing with automation, policy enforcement, and real-time tracking.
              </p>
              <div className="mt-4 space-y-4 md:space-y-4 lg:space-y-6 md:mt-6 lg:mt-10">
                {expenseDropdowns.map((item, index) => (
                  <div key={index} className="max-w-[250px] md:max-w-[300px] lg:max-w-[400px]">
                    <div
                      onClick={() => toggleDropdown("exp", index)}
                      className="flex justify-between items-center cursor-pointer border-b border-black pb-1"
                    >
                      <span className="font-normal text-[16px] md:text-[14px] lg:text-[16px] md:font-medium">{item.title}</span>
                      <FaChevronDown
                        className={`transition-transform ${openIndex === `exp-${index}` ? "rotate-180" : ""
                          }`}
                      />
                    </div>
                    {openIndex === `exp-${index}` && (
                      <p className="text-[12px] md:text-[12px] lg:text-[14px] mt-1">{item.content}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 mt-10 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end">
              <video className="rounded-lg w-full md:h-[300px] lg:h-auto xl:h-[420px] object-contain" autoPlay muted loop>
                <source src="videos/smart-expense.mp4" type="video/mp4" />
              </video>
            </div>
          </section>
        </div>
      </div>

      <div className="px-4 md:px-2 mb-10 ">
        {/* ================= Financial Statements ================= */}
        <section className="bg-[#E8F1FB] font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto 
  md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20 md:my-[4%] space-x-4">

          {/* Left Side */}
          <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
            <h2 className="text-[#1976D2] text-[24px] md:text-[30px] lg:text-[42px] font-normal leading-snug lg:leading-tight">
              Financial Statements –
              <span className="tracking-tight md:text-[30px] lg:text-[42px] block text-[#1976D2] font-semibold">
                Audit-Ready, Always-On
              </span>
            </h2>
            <p className="mt-3 text-[14px] md:text-[16px] lg:text-[20px] lg:max-w-[520px] lg:leading-relaxed md:tracking-wide break-words">
              Move beyond monthly closings—generate real-time, regulation-ready financials anytime.
            </p>
            <div className="mt-4 space-y-4 md:space-y-4 lg:space-y-6 md:mt-6 lg:mt-10">
              {financialDropdowns.map((item, index) => (
                <div key={index} className="max-w-[250px] md:max-w-[300px] lg:max-w-[400px]">
                  <div
                    onClick={() => toggleDropdown("fin", index)}
                    className="flex justify-between items-center cursor-pointer border-b border-black pb-1"
                  >
                    <span className="font-normal text-[16px] md:text-[14px] lg:text-[16px] md:font-medium">
                      {item.title}
                    </span>
                    <FaChevronDown
                      className={`transition-transform ${openIndex === `fin-${index}` ? "rotate-180" : ""}`}
                    />
                  </div>
                  {openIndex === `fin-${index}` && (
                    <p className="text-[12px] md:text-[12px] lg:text-[14px] mt-1">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 mt-10 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end">
            <video
              className="rounded-lg w-full md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
              autoPlay muted loop
            >
              <source src="videos/financial-statements.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
      </div>


    </div>
  );
}
