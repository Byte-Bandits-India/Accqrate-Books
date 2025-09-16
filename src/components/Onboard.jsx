"use client";

import React, { useContext, useRef } from "react";
import { LoadingContext } from "../utils/LoadingContext";
import Skeleton from "../components/skeleton";
import useInView from "../utils/useInView";
import { FaChevronDown } from "react-icons/fa";

export default function FeatureSection() {
  const { loading } = useContext(LoadingContext);
  const onboardRef = useRef(null);
  const isVisible = useInView(onboardRef);

  if (loading || !isVisible) {
    return (
      <section
        ref={onboardRef}
        className="w-full max-w-[1440px] mx-auto font-inter flex flex-col items-center justify-center text-center py-10 mt-10 px-4"
      >
        {/* Heading skeletons */}
        <Skeleton height="28px" width="70%" className="mb-4 mx-auto" />
        <Skeleton height="22px" width="50%" className="mb-4 mt-4 mx-auto" />
        <Skeleton height="22px" width="60%" className="mb-4 mx-auto" />

        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-16 mt-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-[320px] md:w-[340px] h-[270px] md:h-[400px] rounded-xl p-4 bg-[#F2F2F2] shadow"
            >
              <Skeleton className="w-full h-32 md:h-48 rounded-lg mb-4" />
              <Skeleton className="w-3/4 h-5 rounded mb-2" />
              <Skeleton className="w-full h-4 rounded mb-2" />
              <Skeleton className="w-5/6 h-4 rounded" />
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#F2F2F2] font-inter -mx-4 md:mx-auto w-screen md:max-w-7xl md:rounded-lg md:h-[560px] px-6 py-10">
          <Skeleton height="28px" width="70%" className="mb-4 mx-auto" />
          <Skeleton height="20px" width="50%" className="mb-8 mx-auto" />
          <div className="flex flex-col gap-4 max-w-xs md:mt-14 mx-auto md:grid md:grid-cols-3 md:max-w-5xl md:gap-12">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative group bg-[#dddcdc] rounded-md w-full h-[200px] overflow-hidden"
              >
                <div className="absolute top-full left-1/2 w-full h-full rounded-full bg-[#1976D2] -translate-x-1/2 scale-90"></div>
                <Skeleton
                  height="28px"
                  width="80%"
                  className="relative z-10 mx-auto mt-8"
                />
                <Skeleton
                  height="16px"
                  width="90%"
                  className="absolute inset-0 flex items-center justify-center text-center opacity-50 mx-auto my-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }



  return (
    <>
      <div className="px-4  mx-auto">
        {/* Heading */}
        <h2 className="text-[24px] font-inter text-[000000] text-center mb-3">
          Effortless <span className="text-[#1976D2]">Onboarding</span> &
          Flexible Deployment
        </h2>

        {/* --- Shared description --- */}
        <p className="mt-4 md:mt-8 mb-12 text-[#000000B2] lg:text-fluid-body text-[14px] text-center max-w-3xl mx-auto">
          Accqrate Books is fully cloud-native – no complex installations, no
          specialized IT needed. Set up your accounting in minutes, not weeks.
        </p>

        <div className="flex flex-col md:flex-row justify-center mx-auto gap-6 items-center lg:gap-16 ">
          {/* Card 1 */}
          <div className="bg-white text-center md:w-[340px] w-[320px] h-[270px] md:h-[400px]  rounded-xl shadow-md p-4 flex flex-col justify-start">
            <video
              className="rounded-lg w-full md:h-[190px] h-[165px] object-cover mb-2"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="videos/cloud-first.mp4" type="video/mp4" />
            </video>
            <h3 className="lg:text-[24px] text-fluid-body mt-2 lg:mb-6 font-medium">
              Cloud-first or On-Prem
            </h3>
            <p className="lg:text-[20px] text-fluid-small text-[#808080] max-w-xl">
              Choose cloud for instant launch, or on-premises for full data
              control.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-center md:w-[340px] w-[320px] h-[270px] md:h-[400px] rounded-xl shadow-md p-4 flex flex-col justify-start">
            <video
              className="rounded-lg w-full md:h-[190px] h-[165px] object-cover mb-2"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="videos/all-devices.mp4" type="video/mp4" />
            </video>
            <h3 className="lg:text-[24px] text-fluid-body mt-2 lg:mb-6  font-medium">
              Works on all devices
            </h3>
            <p className="lg:text-[20px] text-fluid-small text-[#808080] ">
              Manage accounts from desktop, laptop, tablet, or mobile.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-center md:w-[340px] w-[320px] h-[270px] md:h-[400px] rounded-xl shadow-md p-4 flex flex-col justify-start">
            <video
              className="rounded-lg w-full md:h-[190px] h-[165px] object-cover mb-2"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="videos/no-special-hardware.mp4" type="video/mp4" />
            </video>
            <h3 className="lg:text-[24px] mt-2 lg:mb-6 font-medium">
              No special hardware
            </h3>
            <p className="lg:text-[20px] text-fluid-small text-[#808080]">
              Access your books anywhere – your data is always secure, always
              available.
            </p>
          </div>
        </div>

        {/* -------- New Section: Zero-Friction Setup -------- */}
        <div className="mt-6 md:12 font-inter -mx-4 md:mx-auto w-screen md:max-w-7xl md:rounded-lg md:h-[560px] px-2 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10">
          {/* Heading */}
          <h2 className="text-[24px] sm:text-[22px] md:text-fluid-h2 font-semibold text-[#000000] text-center mb-3 sm:mb-4">
            <span className="text-[#1976D2]">Zero-Friction</span> Setup
          </h2>
          <p className="text-center text-[#000000] text-[14px] sm:text-[14px] md:text-fluid-body max-w-5xl mx-auto mb-6 sm:mb-8">
            As your business grows, Accqrate Retail grows with you. Flip the
            switch to add procurement, finance, HR and supply-chain modules—no
            data migration, no downtime.
          </p>

          <div
            className="flex flex-col gap-3
                sm:grid sm:grid-cols-2 sm:gap-6
                md:grid md:grid-cols-3 md:max-w-5xl md:mt-14 mx-auto md:gap-12"
          >
            {/* Card 1 */}
            <div
              className="flex items-start md:items-center justify-between bg-gradient-to-r from-[#E6E6E6] to-[#C8C8C8]
      w-full max-w-full sm:max-w-[320px] md:max-w-[354px] h-[110px] sm:h-[120px] md:h-[137px]
      rounded-lg px-3 sm:px-4 py-3"
            >
              {/* Left side - Icon + Text */}
              <div className="flex flex-col items-start gap-1 sm:gap-2 md:flex-row md:items-center md:gap-3 px-4 py-2">
                <img
                  src="/images/Mask group.png"
                  alt="Instant Access Icon"
                  className="w-[40px] h-[40px]"
                />
                <span className="text-black text-[18px] font-normal mt-1 text-left">
                  Instant Access
                </span>
              </div>

              {/* Right side - Dropdown Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400 self-start mt-1 md:self-auto md:mt-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Card 2 */}
            <div
              className="flex items-start md:items-center justify-between bg-gradient-to-r from-[#E6E6E6] to-[#C8C8C8]
      w-full max-w-full sm:max-w-[320px] md:max-w-[354px] h-[110px] sm:h-[120px] md:h-[137px]
      rounded-lg px-3 sm:px-4 px-4 py-2"
            >
              <div className="flex flex-col items-start gap-1 sm:gap-2 md:flex-row md:items-center md:gap-3 p-2">
                <img
                  src="/images/Mask group (1).png"
                  alt="Automated Data Migration Icon"
                  className="w-[40px] h-[40px]"
                />
                <span className="text-[#000000] text-[18px] font-normal mt-1 text-left">
                  Automated Data Migration
                </span>
              </div>

              {/* Right side - Dropdown Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400 self-start mt-1 md:self-auto md:mt-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Card 3 */}
            <div
              className="flex items-start md:items-center justify-between bg-gradient-to-r from-[#E6E6E6] to-[#C8C8C8]
      w-full max-w-full sm:max-w-[320px] md:max-w-[354px] h-[110px] sm:h-[120px] md:h-[137px]
      rounded-lg sm:px-4 px-4 py-2"
            >
              <div className="flex flex-col items-start gap-1 sm:gap-2 md:flex-row md:items-center md:gap-3 p-2">
                <img
                  src="/images/Mask group (2).png"
                  alt="Role based access Icon"
                  className="w-[40px] h-[40px]"
                />
                <span className="text-black text-[18px] font-normal mt-1 text-left">
                  Role-Based User Setup
                </span>
              </div>

              {/* Right side - Dropdown Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400 self-start mt-1 md:self-auto md:mt-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-8 sm:-mt-20 -mx-2 sm:-mx-4 w-screen px-4 sm:px-6">
          <div
            className="bg-gradient-to-r from-[#E6E6E6] to-[#C8C8C8] rounded-lg mx-auto
      p-4 sm:p-6 md:p-10
      max-w-full sm:max-w-2xl md:max-w-4xl lg:w-[1126px]
      h-auto sm:h-[110px] md:h-[129px] lg:h-[182px]
      flex flex-col justify-center"
          >
            <p className="text-[13px] sm:text-[15px] md:text-[30px] font-normal text-black text-center">
              “We set up 5 new outlets in under an hour—no IT team needed.”
            </p>
            <p className="mt-2 sm:mt-3 text-[11px] sm:text-sm md:text-base text-gray-700 text-right">
              — Retail Owner, Jeddah
            </p>
          </div>
        </div>

        {/* -------- New Section: ZATCA Compliance -------- */}
        <div className="mt-14 max-w-[1440px] mx-auto font-inter text-center px-4">
          <h2 className="lg:hidden text-[24px] md:text-[24px] font-semibold mb-3">
            100% <span className="text-[#1976D2]">ZATCA</span> Phase 2 <br />
            E-Invoicing Compliance
          </h2>
          <h2 className="hidden lg:block text-fluid-h2 mt-20  font-medium mb-12">
            100% <span className="text-[#1976D2]">ZATCA</span> Phase 2 E-Invoicing
            Compliance
          </h2>

          <p className=" text-center  mb-8 md:mb-16 text-fluid-body lg:text-[20px] leading-relaxed">
            Compliance is non-negotiable. With Accqrate Books, you’re always
            audit-ready.
          </p>
          <div className="flex flex-col md:grid md:grid-cols-3 justify-center items-center md:items-stretch gap-12 md:gap-8 lg:gap-12 md:mt-16 ">
            {/* Seamless Integration */}
            <div
              className="md:bg-[#E4E4E4] relative group rounded-xl shadow-lg overflow-hidden cursor-pointer p-6 
                  md:h-[360px] lg:h-[320px] xl:h-[300px] 
                  flex flex-col items-center justify-center text-center"
            >
              {/* Circle hover background */}
              <div
                className="absolute top-full left-1/2 w-full h-full rounded-full bg-[#1976D2] 
                    -translate-x-1/2 scale-90 transition-all duration-700 ease-in-out 
                    group-hover:top-1/2 group-hover:scale-[2.2] z-0"
              ></div>

              {/* Default content */}
              <div
                className="transition-opacity duration-500 
                    w-full max-w-[280px] md:max-w-[300px] lg:max-w-[260px] xl:max-w-[240px] 
                    mx-auto flex flex-col items-center justify-center 
                    group-hover:opacity-0 text-center"
              >
                <h4
                  className="lg:text-[28px] xl:text-[24px] text-fluid-body 
                     font-semibold md:font-normal text-[#1976D2] mb-4 leading-tight"
                >
                  Seamless Integration
                </h4>
                <img
                  src="images/seamless.webp"
                  alt="Seamless Integration"
                  className="h-[200px] md:h-[225px] lg:h-[180px] xl:h-[160px] 
               mx-auto rounded-lg object-cover"
                />
              </div>

              {/* Hover content */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center px-4 
                    text-white opacity-0 transition-opacity duration-500 
                    group-hover:opacity-100 text-center"
              >
                <h4 className="text-fluid-body font-bold mb-2">
                  Seamless Integration
                </h4>
                <p className="text-fluid-small leading-relaxed">
                  Phase 2 E-invoicing Integration – Generate, validate and
                  transmit XML e-invoices directly to ZATCA.
                </p>
              </div>
            </div>

            {/* Digital Archive */}
            <div
              className="md:bg-[#E4E4E4] relative group rounded-xl shadow-lg overflow-hidden cursor-pointer p-6 
                  md:h-[360px] lg:h-[320px] xl:h-[300px] 
                  flex flex-col items-center justify-center text-center"
            >
              <div
                className="absolute top-full left-1/2 w-full h-full rounded-full bg-[#1976D2] 
                    -translate-x-1/2 scale-90 transition-all duration-700 ease-in-out 
                    group-hover:top-1/2 group-hover:scale-[2.2] z-0"
              ></div>

              <div
                className="transition-opacity duration-500 
                    w-full max-w-[280px] md:max-w-[300px] lg:max-w-[260px] xl:max-w-[240px] 
                    mx-auto flex flex-col items-center justify-center 
                    group-hover:opacity-0 text-center"
              >
                <h4 className="lg:text-[28px] xl:text-[24px] text-fluid-body font-semibold md:font-normal text-[#1976D2] mb-4 leading-tight">
                  Digital Archive
                </h4>
                <video
                  className="h-[200px] md:h-[225px] lg:h-[180px] xl:h-[160px] 
               mx-auto rounded-lg object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src="videos/digital-archive.mp4" type="video/mp4" />
                </video>
              </div>

              <div
                className="absolute inset-0 flex flex-col items-center justify-center px-4 
                    text-white opacity-0 transition-opacity duration-500 
                    group-hover:opacity-100 text-center"
              >
                <h4 className="text-fluid-body font-bold mb-2">
                  Digital Archive
                </h4>
                <p className="text-fluid-small leading-relaxed">
                  Securely store all e-invoices with audit trails and QR code
                  integration.
                </p>
              </div>
            </div>

            {/* Regulation Ready */}
            <div
              className="md:bg-[#E4E4E4] relative group rounded-xl shadow-md overflow-hidden cursor-pointer p-6 
                  md:h-[360px] lg:h-[320px] xl:h-[300px] 
                  flex flex-col items-center justify-center text-center"
            >
              <div
                className="absolute top-full left-1/2 w-full h-full rounded-full bg-[#1976D2] 
                    -translate-x-1/2 scale-90 transition-all duration-700 ease-in-out 
                    group-hover:top-1/2 group-hover:scale-[2.2] z-0"
              ></div>

              <div
                className="transition-opacity duration-500 
                    w-full max-w-[280px] md:max-w-[300px] lg:max-w-[260px] xl:max-w-[240px] 
                    mx-auto flex flex-col items-center justify-center 
                    group-hover:opacity-0 text-center"
              >
                <h4
                  className="lg:text-[28px] xl:text-[24px] text-fluid-body 
                     font-semibold md:font-normal text-[#1976D2] mb-4 leading-tight"
                >
                  Regulation-Ready
                </h4>
                <video
                  className="h-[200px] md:h-[225px] lg:h-[180px] xl:h-[160px] 
               mx-auto rounded-lg object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src="videos/regulation-ready.mp4" type="video/mp4" />
                </video>
              </div>

              <div
                className="absolute inset-0 flex flex-col items-center justify-center px-4 
                    text-white opacity-0 transition-opacity duration-500 
                    group-hover:opacity-100 text-center"
              >
                <h4 className="text-fluid-body font-bold mb-2">
                  Regulation-Ready
                </h4>
                <p className="text-fluid-small leading-relaxed">
                  Real-time updates keep you in sync with KSA rules.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
