"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

const menus = [
  {
    id: "products",
    title: "Products",
    type: "mega",
    sections: [
      {
        heading: "Business Solution",
        images: "/images/NavBar/line/pro1.svg",
        subItems: [
          {
            title: "Accqrate Books",
            description: "Manage customer relationships efficiently.",
            img: "/images/NavBar/fill/Books.svg",
            href: "/products/crm",
          },
          {
            title: "Accqrate CRM",
            description: "Manage customer relationships efficiently.",
            img: "/images/NavBar/fill/crm.svg",
            href: "/products/crm",
          },
          {
            title: "Accqrate Plan360",
            description: "Automate HR workflows and employee management.",
            img: "/images/NavBar/fill/plan.svg",
            href: "/products/hr",
          },
          {
            title: "Accqrate Service",
            description: "Manage customer relationships efficiently.",
            img: "/images/NavBar/fill/service.svg",
            href: "/products/crm",
          },
          {
            title: "Accqrate People",
            description: "Manage customer relationships efficiently.",
            img: "/images/NavBar/fill/people.svg",
            href: "/products/crm",
          },
          {
            title: "Accqrate Retail",
            description: "Automate HR workflows and employee management.",
            img: "/images/NavBar/fill/retail.svg",
            href: "/products/hr",
          },
          {
            title: "Accqrate Factory",
            description: "Manage customer relationships efficiently.",
            img: "/images/NavBar/fill/Factory.svg",
            href: "/products/crm",
          },
          {
            title: "Accqrate Filehub",
            description: "Automate HR workflows and employee management.",
            img: "/images/NavBar/fill/Filehub.svg",
            href: "/products/hr",
          },
        ],
      },
      {
        heading: "Enterprise Solution",
        images: "/images/NavBar/line/pro2.svg",
        subItems: [
          {
            title: "Accqrate ONE",
            description: "End-to-end ERP for large enterprises.",
            img: "/images/NavBar/fill/one.svg",
            href: "/products/erp",
          },
        ],
      },
      {
        heading: "E-Invoicing Solution",
        images: "/images/NavBar/line/pro3.svg",
        subItems: [
          {
            title: "Standalone E-invoicing Solution",
            description: "Sample content will be replaced",
            href: "/images/",
            img: "/images/NavBar/fill/standalone.svg",
          },
          {
            title: "E-invoicing Integration Solution",
            description: "Sample content will be replaced",
            href: "/images/NavBar/fill/e-invoice.svg",
            img: "/images/NavBar/fill/e-invoice.svg",
          },
        ],
      },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    type: "simple",
    sections: [
      {
        heading: "Learn",
        description: "Expand your knowledge with our comprehensive resources",
        subItems: [
          {
            title: "About us",
            description: "Insights, tips and industry news",
            href: "/resources/blog",
            icon: "/images/NavBar/line/about.svg",
          },
          {
            title: "Blogs",
            description: "Live and recorded sessions from experts",
            href: "/resources/webinars",
            icon: "/images/NavBar/line/blog.svg",
          },
        ],
      },
      {
        heading: "Support",
        description: "Get help when you need it",
        subItems: [
          {
            title: "Announcements",
            description: "Find answers to common questions",
            href: "/resources/help",
            icon: "/images/NavBar/line/anounce.svg",
          },
          {
            title: "FAQs",
            description: "Connect with other users",
            href: "/resources/forum",
            icon: "/images/NavBar/line/faq.svg",
          },
        ],
      },
      {
        heading: "Engage",
        description: "Resources to get started quickly",
        subItems: [
          {
            title: "Webinars",
            description: "In-depth analysis and research",
            href: "/resources/whitepapers",
            icon: "/images/NavBar/line/webinars.svg",
          },
          {
            title: "VAT Calculator",
            description: "Real-world success stories",
            href: "/resources/case-studies",
            icon: "/images/NavBar/line/cal.svg",
          },
        ],
      },
    ],
  },
  {
    id: "successStories",
    title: "Success Stories",
    type: "stories",
    sections: [
      {
        heading: "Industry Solutions",
        description: "See how we've helped businesses across industries",
        subItems: [
          {
            title: "Retail & E-commerce",
            description: "Transforming retail operations",
            href: "/success-stories/retail",
            stats: "+45% efficiency",
          },
        ],
      },
    ],
  },
];

const languages = [
  { code: "ar", name: "Arabic", display: "العربية" },
  { code: "ml", name: "Malayalam", display: "Malayalam" },
  { code: "en", name: "English", display: "English" },
];

const countries = [
  { name: "Saudi Arabia", code: "SA", flag: "/images/flag-saudi-arabia.svg" },
  { name: "UAE", code: "AE", flag: "/images/flag-uae.svg" },
  { name: "Oman", code: "OM", flag: "/images/flag-oman.svg" },
  { name: "Bahrain", code: "BH", flag: "/images/flag-bahrain.svg" },
  { name: "Malaysia", code: "MY", flag: "/images/flag-malaysia.svg" },
  { name: "Mauritius", code: "MU", flag: "/images/flag-mauritius.svg" },
  { name: "Jordan", code: "JO", flag: "/images/flag-jordan.svg" },
];

const LangCountryDropdown = ({
  selectedLanguage,
  setSelectedLanguage,
  selectedCountry,
  setSelectedCountry,
  show,
  setShow,
  align = "left",
}) => {
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShow]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center justify-between gap-2 w-36 lg:w-44 px-3 py-2 rounded-md"
        onClick={() => setShow((prev) => !prev)}
      >
        <img
          src={countries.find((c) => c.name === selectedCountry)?.flag}
          alt={selectedCountry}
          className="w-[30px] h-[30px"
        />
        <span className="text-black truncate text-sm lg:text-base">
          {languages.find((l) => l.name === selectedLanguage)?.display} /{" "}
          {countries.find((c) => c.name === selectedCountry)?.code}
        </span>
        <i className="fa-solid fa-angle-down ml-1"></i>
      </button>

      {show && (
        <div
          className={`absolute ${align === "right" ? "right-0" : "left-0"
            } top-full mt-2 max-w-xs w-60 bg-white rounded-md shadow-lg z-50 p-4 text-sm text-gray-700`}
        >
          {/* Languages */}
          <div className="mb-2 font-semibold text-black">Select Language</div>
          <div className="flex flex-wrap gap-2 mb-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`px-3 py-1 rounded-full transition ${selectedLanguage === lang.name
                  ? "bg-gray-100 text-black font-semibold"
                  : "text-black"
                  }`}
                onClick={() => {
                  setSelectedLanguage(lang.name);
                  setShow(false);
                }}
                style={{ border: "1px solid black", borderRadius: "20px" }}
              >
                {lang.display}
              </button>
            ))}
          </div>

          {/* Countries */}
          <div className="mb-2 font-semibold text-black">Select Country</div>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {countries.map((country) => (
              <div
                key={country.name}
                className="flex items-center cursor-pointer p-2 rounded-md hover:bg-gray-50"
                onClick={() => {
                  setSelectedCountry(country.name);
                  setShow(false);
                }}
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-5 h-5 mr-2"
                />
                <span className="text-black">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ===================== SVG Arrow Component =====================
const Arrow45 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-3 transform -rotate-45"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("products");
  const [activeSection, setActiveSection] = useState("Business Solution");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState("Arabic");
  const [selectedCountry, setSelectedCountry] = useState("Saudi Arabia");
  const [showLangCountryDropdown, setShowLangCountryDropdown] = useState(false);

  const navRef = useRef(null);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowLangCountryDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const computeHeaderHeight = () => {
      const h = headerRef.current?.getBoundingClientRect().height || 0;
      setHeaderHeight(h);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1280) setIsMobileMenuOpen(false);
      computeHeaderHeight();
    };
    computeHeaderHeight();
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", computeHeaderHeight);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", computeHeaderHeight);
    };
  }, []);

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const activeMenuData = menus.find((menu) => menu.id === activeMenu);

  return (
    <header ref={headerRef} className="z-50 m-0 p-0 w-full bg-white lg:border">
      <div className="w-full px-6 pt-6 lg:pt-0 md:px-[32px]">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="logo-container flex items-center justify-around gap-6">
            <Link href="/" className="shrink-0">
              <img
                src="/images/logo.svg"
                alt="Accqrate Logo"
                className="h-[1.625rem] w-auto cursor-pointer max-w-[115px] sm:max-w-[100px] md:max-w-[140px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              ref={navRef}
              className="hidden lg:flex items-center justify-around xl:gap-5 2xl:gap-10 text-[14px] text-gray-600 flex-1"
            >
              <NavigationMenu className="w-full">
                <NavigationMenuList className="py-4">
                  {menus.map(({ title, id }) => (
                    <NavigationMenuItem
                      key={id}
                      onMouseEnter={() => {
                        setActiveMenu(id);
                        if (id === "products") setActiveSection("Business Solution");
                      }}
                    >
                      <NavigationMenuTrigger className="text-[0.875rem] text-gray-600 data-[state=open]:text-[#534ED3] data-[state=open]:bg-transparent hover:bg-transparent hover:text-[#534ED3] focus:bg-transparent">
                        {title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent
                        className="!fixed left-0 right-0 top-0 !w-screen !max-w-none bg-white"
                        style={{ top: headerHeight }}
                      >
                        <div className="w-[900px] xl:w-[1044px] mx-auto px-8 py-10 shadow-lg rounded-xl flex flex-col">

                          {/* CTA Buttons */}
                          <Link
                            href="/book-demo"
                            className="inline-flex items-center justify-center gap-2 h-[41px] w-[155px] rounded-[80px] text-[14px] hover:text-black"
                          >
                            Book Demo
                          </Link>

                          <span
                            role="separator"
                            aria-orientation="vertical"
                            className="self-center h-8 w-px bg-gray-300"
                          ></span>

                          <Link
                            href="/contact-sales"
                            className="inline-flex items-center justify-center gap-2 h-[41px] w-[155px] rounded-[80px] text-[14px] hover:text-black"
                          >
                            Contact Sales
                            <Arrow45 />
                          </Link>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>

          {/* Right section */}
          <div className="hidden xl:flex items-center gap-2 shrink-0">
            <LangCountryDropdown
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              show={showLangCountryDropdown}
              setShow={setShowLangCountryDropdown}
              align="right"
            />

            <Link
              href="/request-demo"
              className="hidden xl:inline-flex items-center justify-center gap-2 text-[#F05A28] h-[41px] w-[155px] rounded-[80px] text-[14px] border border-[#F05A28]"
            >
              Contact Sales
            </Link>

            <Link
              href="/request-demo"
              className="hidden xl:inline-flex items-center justify-center gap-2 text-white h-[41px] w-[155px] rounded-[80px] text-[14px] bg-[#F05A28]"
            >
              REQUEST DEMO
              <Arrow45 />
            </Link>
          </div>

          {/* Mobile / Tablet */}
          <div className="flex md:flex xl:hidden items-center gap-3">
            <LangCountryDropdown
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              show={showLangCountryDropdown}
              setShow={setShowLangCountryDropdown}
              align="right"
            />
            <button
              className="block bg-transparent border-none text-gray-700 text-2xl cursor-pointer shrink-0"
              aria-label="Toggle mobile menu"
              onClick={() => setIsMobileMenuOpen((p) => !p)}
            >
              <i className={`fa-solid ${isMobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed top-[70px] md:top-[80px] left-0 w-full h-screen overflow-y-auto bg-white px-6 md:px-[32px] py-4 z-[999]">
          <Accordion type="single" collapsible className="w-full">
            {menus.map(({ id, title, sections }) => (
              <AccordionItem key={id} value={id}>
                <AccordionTrigger className="text-gray-800 font-semibold hover:text-[#534ED3]">
                  {title}
                </AccordionTrigger>
                <AccordionContent>
                  <Accordion type="single" collapsible className="pl-4">
                    {sections.map((section, sectionIndex) => (
                      <AccordionItem key={sectionIndex} value={`${id}-${section.heading}`}>
                        <AccordionTrigger className="fflex items-center justify-start gap-2 text-gray-700 font-medium">
                          {section.images && <img src={section.images} alt={section.heading} className="w-4 h-4" />}
                          <span>{section.heading}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="pl-4 mt-2 space-y-2">
                            {section.subItems.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 text-[#737373] text-[14px] py-2 cursor-pointer border-b border-gray-200 hover:text-[#534ED3]"
                              >
                                {item.img && <img src={item.img} alt={item.title} className="w-5 h-5" />}
                                <Link href={item.href} className="flex-1">
                                  {item.title}
                                </Link>
                                <Arrow45 />
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {/* CTA Buttons */}
          <div className="mt-10 flex gap-4">
            <Link
              href="/contact-sales"
              className="block w-full text-center text-[#F05A28] border border-[#F05A28] py-3 rounded-full text-sm font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Sales
            </Link>
            <Link
              href="/book-demo"
              className="block w-full text-center text-white py-3 rounded-full text-sm font-bold bg-[#F05A28]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
