"use client";

export default function FeatureSection() {
  return (
    <div className="px-4">
      {/* Heading */}
      <h2 className="text-fluid-h2 font-inter font-medium text-center mb-3">
        Effortless <span className="text-[#1976D2]">Onboarding</span> &
        Flexible Deployment
      </h2>

      {/* --- Shared description --- */}
      <p className=" mt-8 mb-12 text-[#000000B2] lg:text-fluid-body text-[14px] text-center max-w-3xl mx-auto">
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
          <h3 className="lg:text-[24px] text-fluid-body mt-2 lg:mb-6 font-medium">Cloud-first or On-Prem</h3>
          <p className="lg:text-[20px] text-fluid-small text-[#808080] max-w-xl">
            Choose cloud for instant launch, or on-premises for full  data control.
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
          <h3 className="lg:text-[24px] text-fluid-body mt-2 lg:mb-6  font-medium">Works on all devices</h3>
          <p className="lg:text-[20px] text-fluid-small text-[#808080] ">
            Manage accounts from  desktop, laptop, tablet, or mobile.
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
          <h3 className="lg:text-[24px] mt-2 lg:mb-6 font-medium">No special hardware</h3>
          <p className="lg:text-[20px] text-fluid-small text-[#808080]">
            Access your books anywhere – your data is always secure, always available.
          </p>
        </div>
      </div>


      {/* -------- New Section: Zero-Friction Setup -------- */}
      <div className="mt-12 bg-[#F2F2F2] font-inter -mx-4 md:mx-auto w-screen md:max-w-7xl md:rounded-lg md:h-[560px] px-6 py-10">
        {/* Heading */}
        <h2 className="text-[24px] md:text-fluid-h2 font-semibold text-center mb-4">
          <span className="text-[#1976D2]">Zero-Friction</span> Setup
        </h2>
        <p className="text-center text-gray-700 text-[14px] md:text-fluid-body max-w-5xl mx-auto mb-8">
          As your business grows, Accqrate Retail grows with you. Flip the
          switch to add procurement, finance, HR and supply-chain modules—no
          data migration, no downtime.
        </p>

        <div className="flex flex-col gap-4 max-w-xs md:mt-14 mx-auto md:grid md:grid-cols-3 md:max-w-5xl md:gap-12">

          {/* Card 1 */}
          <div className="relative group bg-[#A7A7A7] text-white  md:h-[200px] py-6 rounded-md w-full overflow-hidden cursor-pointer flex items-center justify-center">
            {/* Expanding Circle */}
            <div className="absolute top-full left-1/2 w-full h-full rounded-full bg-[#1976D2] 
        -translate-x-1/2 scale-90 transition-all duration-700 ease-in-out 
        group-hover:top-1/2 group-hover:scale-[2.2] z-0">
            </div>
            {/* Text */}
            <span className="md:text-[26px] lg:text-[30px] relative z-10 transition-opacity duration-500 group-hover:opacity-0">
              Instant Access
            </span>
            <div className="absolute inset-0 flex items-center justify-center text-center px-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p>Login instantly and start managing your business without delays.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group bg-[#A7A7A7] text-white py-6 rounded-md w-full overflow-hidden cursor-pointer flex items-center justify-center">
            <div className="absolute top-full left-1/2 w-full h-full rounded-full bg-[#1976D2] 
        -translate-x-1/2 scale-90 transition-all duration-700 ease-in-out 
        group-hover:top-1/2 group-hover:scale-[2.2] z-0">
            </div>
            <span className="md:text-[26px] lg:text-[30px md:w-[200px] leading-tight text-center relative z-10 transition-opacity duration-500 group-hover:opacity-0">
              Role-Based User Setup
            </span>
            <div className="absolute inset-0 flex items-center justify-center text-center px-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p>Assign roles and permissions to users effortlessly.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group bg-[#A7A7A7] text-white py-6 rounded-md w-full overflow-hidden cursor-pointer flex items-center justify-center">
            <div className="absolute top-full left-1/2 w-full h-full rounded-full bg-[#1976D2] 
        -translate-x-1/2 scale-90 transition-all duration-700 ease-in-out 
        group-hover:top-1/2 group-hover:scale-[2.2] z-0">
            </div>
            <span className="md:text-[26px] lg:text-[30px md:w-[220px] leading-tight text-center relative z-10 transition-opacity duration-500 group-hover:opacity-0">
              Automated Data Migration
            </span>
            <div className="absolute inset-0 flex items-center justify-center text-center px-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p>Migrate your business data securely without downtime.</p>
            </div>
          </div>

        </div>
      </div>




      {/* Testimonial */}
      <div className="md:hidden mt-6 bg-[#F2F2F2] p-6 -mx-4 w-screen text-left">
        <p className="text-[14px] mb-2">
          “We set up 5 new outlets in under an hour—no IT team needed.”

        </p>
        <p className="text-[12px] text-black-400 text-right">
          — Retail Owner, Jeddah
        </p>
      </div>

      <div className="hidden md:block bg-[#F2F2F2] py-12 md:py-20 px-6 md:px-16 mt-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg md:text-2xl lg:text-[30px] font-normal leading-relaxed text-gray-900">
            “We transitioned our entire accounting system in one afternoon—no external consultants needed.”
          </p>
          <p className="mt-4 lg:text-[20px] md:text-base text-gray-600 text-right">
            — CFO, Riyadh
          </p>
        </div>
      </div>


      {/* -------- New Section: ZATCA Compliance -------- */}
      <div className="mt-12 font-inter text-center px-4">

        <h2 className="lg:hidden text-[24px] md:text-[24px] font-semibold mb-2">
          100% <span className="text-[#1976D2]">ZATCA</span> Phase 2 <br />
          E-Invoicing Compliance
        </h2>
        <h2 className="hidden lg:block text-fluid-h2 mt-20  font-medium mb-12">
          100% <span className="text-[#1976D2]">ZATCA</span> Phase 2 E-Invoicing Compliance
        </h2>

        <p className=" text-center  mb-8 md:mb-16 text-fluid-body lg:text-[20px] leading-relaxed">
          Compliance is non-negotiable. With Accqrate Books, you’re always
          audit-ready.
        </p>
        <div className="flex flex-col md:grid md:grid-cols-3 justify-center items-center md:items-stretch gap-12 md:gap-8 lg:gap-12 md:mt-16 ">

          {/* Seamless Integration */}
          <div className="md:bg-[#E4E4E4] relative group rounded-xl shadow-lg overflow-hidden cursor-pointer p-6 
                  md:h-[360px] lg:h-[320px] xl:h-[300px] 
                  flex flex-col items-center justify-center text-center">

            {/* Circle hover background */}
            <div className="absolute top-full left-1/2 w-full h-full rounded-full bg-[#1976D2] 
                    -translate-x-1/2 scale-90 transition-all duration-700 ease-in-out 
                    group-hover:top-1/2 group-hover:scale-[2.2] z-0"></div>

            {/* Default content */}
            <div className="transition-opacity duration-500 
                    w-full max-w-[280px] md:max-w-[300px] lg:max-w-[260px] xl:max-w-[240px] 
                    mx-auto flex flex-col items-center justify-center 
                    group-hover:opacity-0 text-center">
              <h4 className="lg:text-[28px] xl:text-[24px] text-fluid-body 
                     font-semibold md:font-normal text-[#1976D2] mb-4 leading-tight">
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
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 
                    text-white opacity-0 transition-opacity duration-500 
                    group-hover:opacity-100 text-center">
              <h4 className="text-fluid-body font-bold mb-2">Seamless Integration</h4>
              <p className="text-fluid-small leading-relaxed">
                Phase 2 E-invoicing Integration – Generate, validate and transmit XML e-invoices directly to ZATCA.
              </p>
            </div>
          </div>

          {/* Digital Archive */}
          <div className="md:bg-[#E4E4E4] relative group rounded-xl shadow-lg overflow-hidden cursor-pointer p-6 
                  md:h-[360px] lg:h-[320px] xl:h-[300px] 
                  flex flex-col items-center justify-center text-center">

            <div className="absolute top-full left-1/2 w-full h-full rounded-full bg-[#1976D2] 
                    -translate-x-1/2 scale-90 transition-all duration-700 ease-in-out 
                    group-hover:top-1/2 group-hover:scale-[2.2] z-0"></div>

            <div className="transition-opacity duration-500 
                    w-full max-w-[280px] md:max-w-[300px] lg:max-w-[260px] xl:max-w-[240px] 
                    mx-auto flex flex-col items-center justify-center 
                    group-hover:opacity-0 text-center">
              <h4 className="lg:text-[28px] xl:text-[24px] text-fluid-body font-semibold md:font-normal text-[#1976D2] mb-4 leading-tight">
                Digital Archive
              </h4>
              <video
                className="h-[200px] md:h-[225px] lg:h-[180px] xl:h-[160px] 
               mx-auto rounded-lg object-cover"
                autoPlay muted loop playsInline preload="auto"
              >
                <source src="videos/digital-archive.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 
                    text-white opacity-0 transition-opacity duration-500 
                    group-hover:opacity-100 text-center">
              <h4 className="text-fluid-body font-bold mb-2">Digital Archive</h4>
              <p className="text-fluid-small leading-relaxed">
                Securely store all e-invoices with audit trails and QR code integration.
              </p>
            </div>
          </div>

          {/* Regulation Ready */}
          <div className="md:bg-[#E4E4E4] relative group rounded-xl shadow-md overflow-hidden cursor-pointer p-6 
                  md:h-[360px] lg:h-[320px] xl:h-[300px] 
                  flex flex-col items-center justify-center text-center">

            <div className="absolute top-full left-1/2 w-full h-full rounded-full bg-[#1976D2] 
                    -translate-x-1/2 scale-90 transition-all duration-700 ease-in-out 
                    group-hover:top-1/2 group-hover:scale-[2.2] z-0"></div>

            <div className="transition-opacity duration-500 
                    w-full max-w-[280px] md:max-w-[300px] lg:max-w-[260px] xl:max-w-[240px] 
                    mx-auto flex flex-col items-center justify-center 
                    group-hover:opacity-0 text-center">
              <h4 className="lg:text-[28px] xl:text-[24px] text-fluid-body 
                     font-semibold md:font-normal text-[#1976D2] mb-4 leading-tight">
                Regulation-Ready
              </h4>
              <video
                className="h-[200px] md:h-[225px] lg:h-[180px] xl:h-[160px] 
               mx-auto rounded-lg object-cover"
                autoPlay muted loop playsInline preload="auto"
              >
                <source src="videos/regulation-ready.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 
                    text-white opacity-0 transition-opacity duration-500 
                    group-hover:opacity-100 text-center">
              <h4 className="text-fluid-body font-bold mb-2">Regulation-Ready</h4>
              <p className="text-fluid-small leading-relaxed">
                Real-time updates keep you in sync with KSA rules.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
