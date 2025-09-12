"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function AccountSections() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (key, index) => {
    setOpenIndex(openIndex === `${key}-${index}` ? null : `${key}-${index}`);
  };



  // Finance Operations
  const operationsDropdowns = [
    { title: "Live Financial Dashboards", content: "Sample content for Live Financial Dashboards." },
    { title: "Automated Bank Reconciliation", content: "Sample content for Automated Bank Reconciliation." },
    { title: "Advanced Reporting", content: "Sample content for Advanced Reporting." },
    { title: "Multi-Entity, Multi-Currency", content: "Sample content for Multi-Entity, Multi-Currency." },
    { title: "Customizable Chart of Accounts", content: "Sample content for Chart of Accounts." },
  ];

  // Seamless Integration
  const integrationDropdowns = [
    { title: "Instant ERP Integration", content: "Sample content for ERP Integration." },
    { title: "API & Marketplace", content: "Sample content for API & Marketplace." },
    { title: "No Vendor Lock-in", content: "Sample content for No Vendor Lock-in." },
  ];

  // Robust Control
  const controlDropdowns = [
    { title: "Role-Based Access", content: "Sample content for Role-Based Access." },
    { title: "Automated Audit Logs", content: "Sample content for Automated Audit Logs." },
    { title: "Disaster Recovery & Data Security", content: "Sample content for Disaster Recovery & Data Security." },
  ];

  return (
    <div className="bg-[#1976D2] py-[4%] rounded-xl">
      <div className="space-y-10 px-4 md:px-2 mb-10">
        {/* ================= Finance Operations ================= */}
        <section className="bg-[#E8F1FB] font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20">

          {/* Left Side */}
          <div className="flex-1 md:max-w-[520px]">
            <h2 className="text-[#1976D2] text-[22px] md:text-[38px] font-semibold leading-snug">
              Transform Your{" "}
              <span className="tracking-tight md:text-[38px] md:mb-10 block text-[#1976D2] font-normal">
                Finance Operations
              </span>
            </h2>
            <p className="mt-3 text-[14px] md:text-[20px] md:leading-relaxed md:tracking-wide">
              Modern accounting isn’t about debits and credits—it’s about business
              control, speed, and insight.
            </p>

            <div className="mt-4 space-y-4 md:space-y-6 md:mt-10">
              {operationsDropdowns.map((item, index) => (
                <div key={index} className="max-w-[250px] md:max-w-[400px]">
                  <div
                    onClick={() => toggleDropdown("ops", index)}
                    className="flex justify-between items-center cursor-pointer border-b border-black pb-1"
                  >
                    <span className="font-normal text-[15px] md:text-[16px] md:font-medium">{item.title}</span>
                    <FaChevronDown
                      className={`transition-transform ${openIndex === `ops-${index}` ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                  {openIndex === `ops-${index}` && (
                    <p className="text-[12px] md:text-[14px] mt-1">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 mt-8 md:mt-0 md:flex md:justify-start md:items-end">
            <video className="rounded-lg w-full lg:h-[420px] object-contain " autoPlay muted loop>
              <source src="videos/transform-operations.mp4" type="video/mp4" />
            </video>
          </div>
        </section>


        {/* ================= Seamless Integration ================= */}
        <section className="bg-[#E8F1FB] font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20 md:mt-[6%]">

          {/* Left Side */}
          <div className="flex-1 md:max-w-[520px]">
            <h2 className="text-[#1976D2] text-[22px] md:text-[38px] font-semibold leading-snug">
              Seamless Integration{" "}
              <span className="tracking-tight md:text-[38px] md:mb-10 block text-[#1976D2] font-normal">
                Enterprise Scalability
              </span>
            </h2>
            <p className="mt-3 text-[14px] md:text-[20px] md:leading-relaxed md:tracking-wide">
              Grow with confidence - Accqrate Books is built for business evolution, not just accounting.
            </p>

            <div className="mt-4 space-y-4 md:space-y-6 md:mt-10">
              {integrationDropdowns.map((item, index) => (
                <div key={index} className="max-w-[250px] md:max-w-[400px]">
                  <div
                    onClick={() => toggleDropdown("int", index)}
                    className="flex justify-between items-center cursor-pointer border-b border-black pb-1"
                  >
                    <span className="font-normal text-[15px] md:text-[16px] md:font-medium">{item.title}</span>
                    <FaChevronDown
                      className={`transition-transform ${openIndex === `int-${index}` ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                  {openIndex === `int-${index}` && (
                    <p className="text-[12px] md:text-[14px] mt-1">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 mt-8 md:mt-0 md:flex md:justify-start md:items-end">
            <video className="rounded-lg w-full md:h-[420px] object-contain" autoPlay muted loop>
              <source src="videos/seamless-integration.mp4" type="video/mp4" />
            </video>
          </div>
        </section>


        {/* ================= Robust Control ================= */}
        <section className="bg-[#E8F1FB] font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20 md:mt-[6%]">

          {/* Left Side */}
          <div className="flex-1 md:max-w-[520px]">
            <h2 className="text-[#1976D2] text-[22px] md:text-[38px] font-semibold leading-snug">
              Robust Control,{" "}
              <span className="tracking-tight md:text-[38px] md:mb-10 block text-[#1976D2] font-normal">
                Total Compliance
              </span>
            </h2>
            <p className="mt-3 text-[14px] md:text-[20px] md:leading-relaxed md:tracking-wide">
              Mitigate risk, enforce policy, and maintain visibility.
            </p>

            <div className="mt-4 space-y-4 md:space-y-6 md:mt-10">
              {controlDropdowns.map((item, index) => (
                <div key={index} className="max-w-[250px] md:max-w-[400px]">
                  <div
                    onClick={() => toggleDropdown("ctrl", index)}
                    className="flex justify-between items-center cursor-pointer border-b border-black pb-1"
                  >
                    <span className="font-normal text-[15px] md:text-[16px] md:font-medium">{item.title}</span>
                    <FaChevronDown
                      className={`transition-transform ${openIndex === `ctrl-${index}` ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                  {openIndex === `ctrl-${index}` && (
                    <p className="text-[12px] md:text-[14px] mt-1">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 mt-8 md:mt-0 md:flex md:justify-start md:items-end">
            <video className="rounded-lg w-full md:h-[420px] object-contain " autoPlay muted loop>
              <source src="videos/robust-control.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
      </div>

    </div>
  );
}
