"use client";

import { LoadingContext } from "../utils/LoadingContext";
import { Skeleton } from "@/components/ui/skeleton";
import useInView from "../utils/useInView";
import { useContext, useRef } from "react";
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

export default function AccountSections(): React.JSX.Element {
  const { loading } = useContext(LoadingContext);
  const financialRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useInView(financialRef, { threshold: 0 });

  // Seamless Integration
  const integrationDropdowns: DropdownItem[] = [
    { title: "Instant ERP Integration", content: "Add procurement, inventory, payroll, and HR modules without migrations or reimplementation." },
    { title: "API & Marketplace", content: "Connect to banks, e-commerce, or any third-party — future-proof your finance stack." },
    { title: "No Vendor Lock-in", content: "Data is always yours; export, back up, and migrate on demand." },
  ];

  // Robust Control
  const controlDropdowns: DropdownItem[] = [
    { title: "Role-Based Access", content: "Define granular permissions, approve sensitive actions, and monitor changes." },
    { title: "Automated Audit Logs", content: "Every entry, change, or deletion is tracked — satisfy any auditor instantly." },
    { title: "Disaster Recovery & Data Security", content: "Bank-level encryption, real-time backups, and local data hosting for KSA." },
  ];

  if (loading || !isVisible) {
    return (
      <div ref={financialRef} className="rounded-[40px] max-w-[1440px] mx-auto">
        <div className="px-4">
          <section className="bg-[#E8F1FB] font-inter xl:h-[615px] px-4 rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-6 lg:px-10 md:mx-10 lg:mx-20">
            {/* Left Column */}
            <div className="flex-1 md:max-w-[520px]">
              {/* Title & Subtitle Skeleton */}
              <Skeleton className="h-[38px] w-[70%] mb-4 rounded-md" />
              <Skeleton className="h-[24px] w-[90%] mb-6 rounded-md" />
              <Skeleton className="h-[20px] w-full mb-4 rounded-md" />

              {/* Accordion Items Skeleton */}
              <div className="mt-4 space-y-4 md:space-y-6 md:mt-10">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="max-w-[250px] md:max-w-[400px] my-4">
                    <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                      <Skeleton className="h-[16px] w-[80%] rounded-md" />
                      <Skeleton className="h-[16px] w-[16px] rounded-full" />
                    </div>
                    {/* Optional content skeleton inside accordion */}
                    <Skeleton className="h-[12px] w-[90%] mt-2 rounded-md" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Video Skeleton */}
            <div className="flex-1 mt-8 md:mt-0 md:flex md:justify-start md:items-end">
              <Skeleton className="h-[420px] w-full rounded-lg" />
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
        <section className="bg-[#E8F1FB] font-inter xl:h-[615px] p-6 md:p-[32px] rounded-xl md:rounded-2xl mx-auto md:flex">
          {/* Left Side */}
          <div className="flex-1 md:max-w-[520px]">
            <h2 className="text-[#1976D2] text-[20px] font-medium md:text-[30px] pb-6 leading-snug">
              Seamless Integration{" "}
              <span className="tracking-tight text-[20px] font-medium md:text-[30px] block text-[#1976D2]">
                Enterprise Scalability
              </span>
            </h2>
            <p className="pb-6 md:pb-[32px] text-[14px] md:text-[18px] md:leading-relaxed md:tracking-wide">
              Grow with confidence — Accqrate Books is built for business evolution, not just accounting.
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
              aria-label="Seamless Integration demo video"
            >
              <source src="videos/Seamless_integration.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* ================= Robust Control ================= */}
        <section className="bg-[#E8F1FB] mt-6 md:mt-[32px] font-inter xl:h-[615px] pt-6 px-6 md:px-[32px] md:pt-[32px] rounded-xl md:rounded-2xl mx-auto md:flex">
          {/* Left Side */}
          <div className="flex-1 md:max-w-[520px]">
            <h2 className="text-[#1976D2] mb-6 text-[20px] font-medium md:text-[30px] leading-snug">
              Robust Control{" "}
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
          <div className="flex-1 mt-6 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end pb-6">
            <video
              className="rounded-lg w-full md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
              autoPlay
              muted
              loop
              aria-label="Robust Control demo video"
            >
              <source src="videos/robust-control.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
      </div>
    </div>
  );
}
