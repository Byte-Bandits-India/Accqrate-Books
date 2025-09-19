"use client";

import Image from "next/image";
import React, { useContext, useRef } from "react";
import { LoadingContext } from "../utils/LoadingContext";
import Skeleton from "../components/skeleton";
import useInView from "../utils/useInView";

export default function Hero() {
  const { loading } = useContext(LoadingContext);
  const heroRef = useRef(null);
  const isVisible = useInView(heroRef);

  const topRow = [
    { src: "/images/1.png", name: "Education" },
    { src: "/images/2.png", name: "Construction & Engineering" },
    { src: "/images/3.png", name: "Logistics" },
    { src: "/images/4.png", name: "Insurance" },
    { src: "/images/5.png", name: "Conglomerate" },
    { src: "/images/6.png", name: "Pharmacy" },
    { src: "/images/7.png", name: "Energy" },
    { src: "/images/8.png", name: "Conglomerate" },
    { src: "/images/9.png", name: "Insurance" },
    { src: "/images/10.png", name: "Packaging solutions" },
    { src: "/images/11.png", name: "Food & Beverage" },
    { src: "/images/12.png", name: "Trading" },
    { src: "/images/13.png", name: "Chemicals" },
  ];

  const bottomRow = [
    { src: "/images/14.png", name: "Hospitality and Tourism" },
    { src: "/images/15.png", name: "FMCD" },
    { src: "/images/16.png", name: "Oil & Gas" },
    { src: "/images/17.png", name: "Home Appliances" },
    { src: "/images/18.png", name: "Manufacturing" },
    { src: "/images/19.png", name: "Construction & Engineering" },
    { src: "/images/20.png", name: "Education" },
    { src: "/images/21.png", name: "Conglomerate" },
    { src: "/images/22.png", name: "Electrical Industries Co." },
    { src: "/images/23.png", name: "Aerospace & Defense" },
    { src: "/images/24.png", name: "Retail" },
    { src: "/images/25.png", name: "Ecommerce" },
    { src: "/images/26.png", name: "Fashion" },
  ];

  if (loading || !isVisible) {
    return (
      <section
        id="heroSection"
        ref={heroRef}
        className="w-full font-inter flex flex-col items-center justify-center text-center py-10 mt-10 px-4"
      >
        {/* Heading skeletons */}
        <Skeleton height="40px" width="60%" className="mb-6 mx-auto" />
        <Skeleton height="28px" width="70%" className="mb-4 mx-auto" />
        <Skeleton height="20px" width="80%" className="mb-4 mx-auto" />

        <Skeleton height="22px" width="50%" className="mb-4 mt-4 mx-auto" />
        <Skeleton height="22px" width="60%" className="mb-4 mx-auto" />

        {/* Buttons skeleton */}
        <div className="flex gap-4 mt-8">
          <Skeleton height="50px" width="160px" className="rounded-full" />
          <Skeleton height="50px" width="160px" className="rounded-full" />
        </div>

        {/* Video skeleton */}
        <Skeleton
          height="400px"
          width="100%"
          className="mt-12 max-w-7xl rounded-xl"
        />

        {/* Trusted text skeleton */}
        <Skeleton
          height="24px"
          width="70%"
          className="mt-12 mx-auto mb-6"
        />

        {/* Logo marquee skeleton */}
        <div className="w-screen bg-[#E6F4FF] relative">
          <div className="max-w-5xl overflow-hidden py-6 mx-auto">
            <div className="flex flex-col gap-6">
              {/* Top Row Skeleton */}
              <div className="flex animate-scrollLeft w-max flex-shrink-0">
                {[...Array(13)].map((_, i) => (
                  <div
                    key={`top-skeleton-${i}`}
                    className="flex flex-col items-center mx-4"
                  >
                    <Skeleton
                      width="135px"
                      height="56px"
                      className="h-14 md:h-16 md:w-60"
                    />
                    <Skeleton
                      height="12px"
                      width="80px"
                      className="mt-2"
                    />
                  </div>
                ))}
              </div>

              {/* Bottom Row Skeleton */}
              <div className="flex animate-scrollRight w-max flex-shrink-0">
                {[...Array(13)].map((_, i) => (
                  <div
                    key={`bottom-skeleton-${i}`}
                    className="flex flex-col items-center mx-4"
                  >
                    <Skeleton
                      width="135px"
                      height="56px"
                      className="h-14 md:h-16 md:w-60"
                    />
                    <Skeleton
                      height="12px"
                      width="80px"
                      className="mt-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="heroSection"
      ref={heroRef}
      className="w-full font-inter flex flex-col items-center justify-center text-center py-8 mt-10 px-4"
    >
      {/* Headings */}
      <h1 className="text-fluid-h1 font-semibold text-[#333333]">
        Accqrate <span className="text-[#1976D2]">Books</span>
      </h1>
      <h2 className="text-[20px] md:text-[24px] lg:text-[30px] mt-5 font-medium text-[#333333] tracking-wide max-w-[800px]">
        <span className="text-[#1976D2] font-semibold md:font-medium ">ZATCA Approved</span>{" "}
        Accounting Software for Saudi Arabia
      </h2>
      <p className="text-[14px] md:text-[16px] lg:text-[20px] tracking-tight md:font-semibold md:leading-10 mt-4 max-w-[800px] text-[#333333]">
        Run your entire business accounting—faster,<br className="hidden md:block" /> smarter, always ZATCA Phase-2 ready.
      </p>

      {/* Supporting text */}
      <p className="text-[#737373] text-fluid-small mt-4 max-w-[800px] md:hidden">
        Launch your store in minutes, manage everything in one place—from sales to stock,
        from any device.
      </p>
      <p className="text-[#737373] hidden md:block text-fluid-body mt-4 max-w-[800px]">
        Manage accounts, automate ZATCA compliance, and unlock actionable insights
        from anywhere, on any device.
      </p>

      {/* Buttons */}
      <div className="mt-8 md:mt-12 flex flex-col md:flex-row gap-4 md:text-lg">
        <button className="bg-[#1976D2] text-white px-16 py-4 rounded-full font-semibold">
          REQUEST A DEMO
        </button>
        <button className="border border-[#1976D2] text-[#1976D2] px-16 py-4 rounded-full font-semibold">
          CONTACT SALES
        </button>
      </div>

      {/* Dashboard Video */}
      <div className="mt-4 md:mt-6 w-full max-w-7xl rounded-xl overflow-hidden">
        <video autoPlay loop muted playsInline poster="/images/video-poster.jpg" className="w-full h-auto">
          <source src="/videos/Hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Trusted text */}
      <div className="py-6 mt-6">
        <h3 className="text-[14px] md:text-[16px] lg:text-[20px] px-2 lg:hidden font-medium text-[#333333] text-center mx-auto">
          Trusted by <span className="text-[#1976D2] font-bold">5,000+</span> Saudi and GCC companies for ZATCA e-invoicing compliance
          and business accounting.
        </h3>
      </div>

      <div className="hidden lg:block bg-[#E6F4FF] py-6 -mx-4 mt-16 w-screen">
        <h3 className="text-fluid-small md:text-fluid-body lg:text-fluid-h2 max-w-7xl font-bold text-center mx-auto">
          Trusted by <span className="text-[#1976D2] font-bold">5,000+</span> Saudi and GCC companies for ZATCA e-invoicing compliance
          and business accounting.
        </h3>
      </div>

      {/* Logo Marquee */}
      <div className="w-screen bg-[#E6F4FF] relative">
        <div className="max-w-5xl overflow-hidden py-6 mx-auto">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-14 md:w-20 bg-gradient-to-r from-[#E6F4FF] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-14 md:w-20 bg-gradient-to-l from-[#E6F4FF] to-transparent" />

          <div className="flex flex-col gap-6">
            <div className="flex animate-scrollLeft w-max flex-shrink-0">
              {[...topRow, ...topRow].map((logo, i) => (
                <div key={`top-${i}`} className="flex flex-col items-center mx-4">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={135}
                    height={48}
                    className="h-14 md:h-16 md:w-60 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                  />
                  <p className="mt-2 text-xs md:text-sm text-gray-700 font-medium">{logo.name}</p>
                </div>
              ))}
            </div>

            <div className="flex animate-scrollRight w-max flex-shrink-0">
              {[...bottomRow, ...bottomRow].map((logo, i) => (
                <div key={`bottom-${i}`} className="flex flex-col items-center mx-4">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={135}
                    height={48}
                    className="h-14 md:h-16 md:w-60 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                  />
                  <p className="mt-2 text-xs md:text-sm text-gray-700 font-medium">{logo.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
