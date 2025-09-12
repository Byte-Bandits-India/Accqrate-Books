"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function AutomationSection() {
  const dropdowns = [
    {
      label: "AI Bank Reconciliation",
      content:
        "Automates the reconciliation of bank statements with transactions, saving hours of manual work.",
    },
    {
      label: "Auto-Invoice Conversion",
      content:
        "Automatically converts invoices into structured formats ready for compliance and accounting.",
    },
    {
      label: "Expense Classification",
      content:
        "Uses AI to classify and categorize expenses, ensuring accurate reporting and compliance.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleDropdown = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Section */}
      <div className="bg-[#D9D9D9] -mx-4 md:w-screen md:-mx-8 md:rounded-lg md:p-8 p-4 rounded-2xl">
        <div className=" bg-white md:h-[615px] mx-auto text-left border border-gray-200 rounded-2xl shadow-md p-6">
          <h2 className="text-[24px] md:text-[38px] font-semibold text-[#1976D2] mb-4">
            AI-Driven Automation
          </h2>
          <p className=" mb-6 text-[14px] md:text-[20px] md:leading-relaxed md:tracking-wide">
            Let AI handle the repetitive—free your team for what matters.
          </p>

          <div className="space-y-4 w-[280px] text-[14px] md:text-[16px] md:font-medium md:space-y-6 md:mt-10">
            {dropdowns.map((dropdown, idx) => (
              <div key={idx} className="border-b border-black">
                <button
                  onClick={() => toggleDropdown(idx)}
                  className="w-full flex justify-between items-center py-2 text-left focus:outline-none"
                >
                  <span>{dropdown.label}</span>
                  <span className="">
                    {openIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                {openIndex === idx && (
                  <p className="mt-2 text-[14px]">{dropdown.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      
      {/* Bottom Section */}
<div className="mt-16 mx-auto px-2 font-inter md:max-w-5xl ">
  {/* Heading */}
  <div className="text-center mb-10 md:mb-4 md:flex md:justify-center">
    <h2 className="text-[24px] md:text-[38px] font-semibold">
      Support, Training, &
    </h2>
    <h2 className="text-[24px] md:text-[38px] font-semibold text-[#1976D2] mb-6 md:ml-2">
      Onboarding
    </h2>
  </div>

  <div>
    <p className="text-fluid-small lg:text-[20px] mb-8 md:mb-16 text-center text-base leading-relaxed">
      Expert onboarding for ZATCA compliance software— get your team ready for
      e-invoicing in KSA, fast.
    </p>
  </div>

  {/* Unified Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
    {/* Box 1 - On Demand Training */}
    <div className="relative w-[300px] h-[370px] md:h-[400px] md:max-w-[340px]">
      <div
        className="absolute inset-0 bg-[#1875D1] rounded-xl p-[2.5px]"
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
        }}
      >
        <div
          className="relative w-full h-full bg-white rounded-lg flex flex-col text-left"
          style={{
            clipPath:
              "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
          }}
        >
          <div className="h-[185px] m-4 rounded-lg shadow-md md:hidden border border-grey-400">
             <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[125px] mt-8 md:h-[200px] object-cover rounded-t-lg"
          >
            <source src="/videos/on-demand-training.mp4" type="video/mp4" />
          </video>
          </div>
           <video
            autoPlay
            loop
            muted
            playsInline
            className="md:block hidden w-full h-[125px]  md:h-[200px] object-cover rounded-t-lg"
          >
            <source src="/videos/on-demand-training.mp4" type="video/mp4" />
          </video>

          <div className="p-2 flex-1">
            <h3 className="font-semibold text-fluid-body text-center">
              On Demand Training
            </h3>
            <p className="text-[#737373] text-fluid-small mt-2 text-center">
              Learn Accqrate Books in under 60 minutes; video modules for every
              type.
            </p>
            <p className="absolute bottom-1 left-2 md:text-fluid-body text-[#1976D2] font-bold leading-tight text-[12px] inline-block">
              Book An <br /> Appointment
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20">
        <div
          className="absolute inset-0 bg-[#1976D2] rounded-lg"
          style={{
            clipPath: "polygon(100% 100%, 54% 100%, 67% 91%, 100% 91%)",
          }}
        />
        <div className="absolute right-8 bottom-2 md:right-10 md:bottom-1 text-white text-lg font-bold">
          <FaArrowRightLong className="text-[20px] md:text-[30px]" />
        </div>
      </div>
    </div>

    {/* Box 2 - Local Support */}
    <div className="relative w-[300px] h-[370px] md:h-[400px] md:max-w-[340px]">
      <div
        className="absolute inset-0 bg-[#1875D1] rounded-xl p-[2.5px]"
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
        }}
      >
        <div
          className="relative w-full h-full bg-white rounded-lg flex flex-col text-left"
          style={{
            clipPath:
              "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
          }}
        >
          <div className="h-[185px] m-4 rounded-lg shadow-md md:hidden border border-grey-400">
            <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[125px] mt-6 md:h-[200px] object-cover rounded-t-lg"
          >
            <source src="/videos/local-support.mp4" type="video/mp4" />
          </video>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hidden md:block w-full h-24 md:h-[200px] object-cover rounded-t-lg"
          >
            <source src="/videos/local-support.mp4" type="video/mp4" />
          </video>

          <div className="p-2 flex-1">
            <h3 className="font-bold text-fluid-body text-center">
              24/7 Local Support
            </h3>
            <p className="text-[#737373] text-fluid-small mt-2 text-center">
              In English & Arabic—phone, WhatsApp, email, or chat.
            </p>
            <p className="absolute bottom-4 left-2 text-[#1976D2] md:text-fluid-body text-left font-bold text-[12px] inline-block">
              +971505515388
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20">
        <div
          className="absolute inset-0 bg-[#1976D2] rounded-lg"
          style={{
            clipPath: "polygon(100% 100%, 54% 100%, 67% 91%, 100% 91%)",
          }}
        />
        <div className="absolute right-8 bottom-2 md:right-10 md:bottom-1 text-white text-sm font-bold">
          <FaArrowRightLong className="text-[20px] md:text-[30px]" />
        </div>
      </div>
    </div>

    {/* Box 3 - Knowledge Center */}
    <div className="relative w-[300px] h-[370px] md:h-[400px] md:max-w-[340px]">
      <div
        className="absolute inset-0 bg-[#1875D1] rounded-xl p-[2.5px]"
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
        }}
      >
        <div
          className="relative w-full h-full bg-white rounded-lg flex flex-col text-left"
          style={{
            clipPath:
              "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
          }}
        >
          <div className="h-[185px] m-4 rounded-lg shadow-md md:hidden border border-grey-400">
             <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[125px] mt-6 md:h-[200px] object-cover rounded-t-lg"
          >
            <source src="/videos/knowledge-center.mp4" type="video/mp4" />
          </video>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hidden md:block w-full h-24 md:h-[200px] object-cover rounded-t-lg"
          >
            <source src="/videos/knowledge-center.mp4" type="video/mp4" />
          </video>

          <div className="p-2 flex-1">
            <h3 className="font-bold text-fluid-body text-center">
              Knowledge Center
            </h3>
            <p className="text-[#737373] text-fluid-small mt-2 text-center">
              Step-by-step Guides for every process.
            </p>
            <p className="absolute bottom-1 left-2 text-[#1976D2] md:text-fluid-body font-bold leading-tight text-[12px] inline-block">
              Knowledge <br /> Center
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20">
        <div
          className="absolute inset-0 bg-[#1976D2] rounded-lg"
          style={{
            clipPath: "polygon(100% 100%, 54% 100%, 67% 91%, 100% 91%)",
          }}
        />
        <div className="absolute right-8 bottom-2 md:right-10 md:bottom-1 text-white text-sm font-bold">
          <FaArrowRightLong className="text-[20px] md:text-[30px]" />
        </div>
      </div>
    </div>
  </div>
</div>







      {/* Why Choose Section */}
      <div className="mt-20 bg-[#F2F2F2] p-6  -mx-4 font-inter  text-center">
        <h2 className="text-[24px] md:text-[38px] font-bold mb-4">
          Why Choose Accqrate <span className="text-[#1976D2]"><br />Books</span>?
        </h2>

        <img
          src="/images/why-choose.svg"
          alt="Why Choose Accqrate Books"
          className="mx-auto mb-6 w-[300px] md:w-[400px] h-auto"
        />

        <ul className="text-left md:text-[18px] md:space-y-6 md:mt-10 space-y-4 px-4 text-[14px] list-disc list-inside">
          <li>Stay Ahead of ZATCA Compliance by Design: Never worry about last-minute regulations or audits.</li>
          <li>Modern Cloud Accounting: Access your accounting software anywhere. Simplify financial management for every team member.</li>
          <li>Device and Vendor Freedom: Use any device, integrate any bank, no hardware lock-in.</li>
          <li>Future-Proof Scaling: Move from startup to multi-entity enterprise—no reimplementation, no data loss.</li>
          <li>Total Business Control: Real-time insights, automation, and bulletproof security.</li>
          <li>Flexible price: Flexible plans for every business, from startups to enterprises. Your data stays secure on our Saudi e-invoicing platform with cloud accounting software benefits.</li>
        </ul>
      </div>
    </div>
  );
}
