"use client";

import { FaChevronDown } from "react-icons/fa";
import { LoadingContext } from "../utils/LoadingContext";
import Skeleton from "./skeleton";
import useInView from "../utils/useInView";
import { useState, useContext, useRef, JSX } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

interface DropdownItem {
  title: string;
  content: string;
}

export default function AccountSections(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const { loading } = useContext(LoadingContext);
  const financialRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useInView(financialRef, { threshold: 0 });

  const toggleDropdown = (key: string, index: number) => {
    setOpenIndex(openIndex === `${key}-${index}` ? null : `${key}-${index}`);
  };

  // Seamless Integration
  const integrationDropdowns: DropdownItem[] = [
    { title: "Instant ERP Integration", content: "Sample content for ERP Integration." },
    { title: "API & Marketplace", content: "Sample content for API & Marketplace." },
    { title: "No Vendor Lock-in", content: "Sample content for No Vendor Lock-in." },
  ];

  // Robust Control
  const controlDropdowns: DropdownItem[] = [
    { title: "Role-Based Access", content: "Sample content for Role-Based Access." },
    { title: "Automated Audit Logs", content: "Sample content for Automated Audit Logs." },
    { title: "Disaster Recovery & Data Security", content: "Sample content for Disaster Recovery & Data Security." },
  ];

  if (loading || !isVisible) {
    return (
      <div ref={financialRef} className="rounded-[40px] max-w-[1440px] mx-auto">
        <div className="px-4">
          {/* Finance Operations Skeleton */}
          <section className="bg-[#E8F1FB] font-inter md:h-auto lg:h-auto xl:h-[615px] px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20">
            <div className="flex-1 md:max-w-[520px]">
              <Skeleton height="38px" width="70%" className="mb-4" />
              <Skeleton height="24px" width="90%" className="mb-6" />
              <Skeleton height="20px" width="100%" className="mb-4" />

              <div className="mt-4 space-y-4 md:space-y-6 md:mt-10">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="max-w-[250px] md:max-w-[400px] my-6">
                    <div className="flex justify-between items-center border-b border-gray-300 pb-1">
                      <Skeleton height="16px" width="80%" />
                      <Skeleton height="16px" width="16px" className="rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 mt-8 md:mt-0 md:flex md:justify-start md:items-end">
              <Skeleton height="420px" className="rounded-lg w-full" />
            </div>
          </section>

          {/* Seamless Integration Skeleton */}
          <section className="bg-[#E8F1FB] my-6 font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20">
            <div className="flex-1 md:max-w-[520px]">
              <Skeleton height="38px" width="70%" className="mb-4" />
              <Skeleton height="24px" width="90%" className="mb-6" />
              <Skeleton height="20px" width="100%" className="mb-4" />

              <div className="mt-4 space-y-4 md:space-y-6 md:mt-10">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="max-w-[250px] md:max-w-[400px]">
                    <div className="flex justify-between items-center border-b border-gray-300 pb-1">
                      <Skeleton height="16px" width="80%" />
                      <Skeleton height="16px" width="16px" className="rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 mt-8 md:mt-0 md:flex md:justify-start md:items-end">
              <Skeleton height="420px" className="rounded-lg w-full" />
            </div>
          </section>

          {/* Robust Control Skeleton */}
          <section className="bg-[#E8F1FB] my-6 font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20">
            <div className="flex-1 md:max-w-[520px]">
              <Skeleton height="38px" width="70%" className="mb-4" />
              <Skeleton height="24px" width="90%" className="mb-6" />
              <Skeleton height="20px" width="100%" className="mb-4" />

              <div className="mt-4 space-y-4 md:space-y-6 md:mt-10">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="max-w-[250px] md:max-w-[400px]">
                    <div className="flex justify-between items-center border-b border-gray-300 pb-1">
                      <Skeleton height="16px" width="80%" />
                      <Skeleton height="16px" width="16px" className="rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 mt-8 md:mt-0 md:flex md:justify-start md:items-end">
              <Skeleton height="420px" className="rounded-lg w-full" />
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[40px] py-[24px] md:py-[32px]">
        {/* ================= Seamless Integration ================= */}
        <section className="bg-[#E8F1FB] font-inter md:h-auto lg:h-auto xl:h-[615px] p-6 md:p-[32px] rounded-xl md:rounded-2xl mx-auto md:flex">
          {/* Left Side */}
          <div className="flex-1 md:max-w-[520px]">
            <h2 className="text-[#1976D2] text-[20px] font-medium md:text-[30px] pb-6 leading-snug">
              Seamless Integration{" "}
              <span className="tracking-tight text-[20px] font-medium md:text-[30px] block text-[#1976D2]">
                Enterprise Scalability
              </span>
            </h2>
            <p className="pb-6 md:pb-[32px] text-[14px] md:text-[18px] md:leading-relaxed md:tracking-wide">
              Grow with confidence - Accqrate Books is built for business evolution, not just accounting.
            </p>

            {/* Accordion */}
            <Accordion type="single" collapsible className="w-full max-w-[400px]">
              {integrationDropdowns.map((item, index) => (
                <AccordionItem key={index} value={`integration-${index}`}>
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
              <source src="videos/Seamless_integration.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* ================= Robust Control ================= */}
        <section className="bg-[#E8F1FB] mt-6 md:mt-[32px] font-inter md:h-auto lg:h-auto xl:h-[615px] pt-6 px-6 md:px-[32px] md:pt-[32px] rounded-xl md:rounded-2xl mx-auto md:flex">
          {/* Left Side */}
          <div className="flex-1 md:max-w-[520px]">
            <h2 className="text-[#1976D2] mb-6 text-[20px] font-medium md:text-[30px] leading-snug">
              Robust Control,{" "}
              <span className="tracking-tight block text-[#1976D2] text-[20px] font-medium md:text-[30px]">
                Total Compliance
              </span>
            </h2>
            <p className="pb-6 md:pb-[32px] text-[14px] md:text-[18px] md:leading-relaxed md:tracking-wide">
              Mitigate risk, enforce policy, and maintain visibility.
            </p>

            {/* Accordion */}
            <Accordion type="single" collapsible className="w-full max-w-[400px]">
              {controlDropdowns.map((item, index) => (
                <AccordionItem key={index} value={`control-${index}`}>
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
              <source src="videos/robust-control.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
      </div>
    </div>
  );
}
