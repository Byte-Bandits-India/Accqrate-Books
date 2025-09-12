"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../styles/header.module.css";

const menus = [
  {
    id: "accqrate",
    title: "Accqrate-erp.com",
    href: "#",
    items: [
      "Home",
      "Success Stories",
      "E-Invoicing solution",
      "Business solution",
      "ERP solution",
      "Testimonials",
    ],
  },
  {
    id: "about",
    title: "About",
    href: "#",
    items: [
      "Company",
      "Demo Videos",
      "Careers",
      "Blogs",
      "Announcements",
      "Webinars",
      "Partner with Us",
      "FAQs",
    ],
  },
  {
    id: "featured",
    title: "Featured Modules",
    href: "#",
    items: [
      "E-Invoicing Software",
      "E-Invoicing Middleware",
      "Accounting Solutions",
      "Sales Management",
      "Purchase Management",
      "Inventory Management",
      "Fixed Asset Management",
    ],
  },
  {
    id: "more",
    title: "More Modules",
    href: "#",
    items: [
      "Production Management",
      "Document Management",
      "HR & Payroll",
      "Services",
      "POS",
      "CRM",
    ],
  },
  {
    id: "safety",
    title: "Data & Safety Management",
    href: "#",
    items: [
      "Data Security",
      "Disaster Recovery",
      "Enhancements and Upgrades",
      "Application Support and Maintenance",
      "Terms and Conditions",
      "Privacy Policy",
      "Contact Support",
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    href: "#",
    items: ["SAP suits", "Oracle suits", "Microsoft suits", "VAT Calculator"],
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
          className="w-5 h-5"
        />
       <span className="text-black truncate text-sm lg:text-base">
          {languages.find((l) => l.name === selectedLanguage)?.display} / {countries.find((c) => c.name === selectedCountry)?.code}
        </span>
        <i className="fa-solid fa-angle-down ml-1"></i>
      </button>

      {show && (
        <div
          className={`absolute ${align === "right" ? "right-0" : "left-0"} top-full mt-2 -full max-w-xs w-60 bg-white rounded-md shadow-lg z-50 p-4 text-sm text-gray-700`}
        >
          {/* Languages */}
          <div className="mb-2 font-semibold text-black">Select Language</div>
          <div className="flex flex-wrap gap-2 mb-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`px-3 py-1 rounded-full transition ${
                  selectedLanguage === lang.name
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
                <img src={country.flag} alt={country.name} className="w-5 h-5 mr-2" />
                <span className="text-black">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState("Arabic");
  const [selectedCountry, setSelectedCountry] = useState("Saudi Arabia");
  const [showLangCountryDropdown, setShowLangCountryDropdown] = useState(false);

  const dropdownTimeoutRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
        setShowLangCountryDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (id) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }, 150);
  };

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <header className={`${styles.header}  w-full bg-white shadow`}>
      <div className="w-full py-2 md:py-3 px-3 md:px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="logo-container">
            <Link href="/" className="shrink-0">
              <img
                src="/images/logo.svg"
                alt="Accqrate Logo"
                className="h-8 md:h-9 lg:h-10 w-auto cursor-pointer max-w-[80px] sm:max-w-[100px] md:max-w-[140px]"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center justify-around max-w-[1100px] text-[14px] text-gray-600 flex-1"
          >
            {menus.map(({ title, href, id, items }) => (
    <div
      key={id}
      className="relative"
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={href}
        className={`pb-1 border-b-2 ${
          activeDropdown === id
            ? "border-pink-600 text-black"
            : "border-transparent hover:border-pink-600 hover:text-pink-600 transition"
        }`}
      >
        {title}
      </Link>
      {activeDropdown === id && (
        <ul className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          {items.map((item, idx) => (
            <li
              key={idx}
              className={`px-4 py-2 cursor-pointer whitespace-nowrap ${
                activeSubmenu === item
                  ? "text-pink-600 font-semibold"
                  : "text-gray-700"
              }`}
              onMouseEnter={() => setActiveSubmenu(item)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  ))}
</nav>

{/* Right Section (only ≥1024px) */}
<div className="hidden lg:flex items-center gap-3 shrink-0">
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
    className="hidden lg:inline-block text-white py-2 px-4 rounded-full text-sm font-bold"
    style={{ backgroundColor: "#C2185C" }}
  >
    REQUEST DEMO
  </Link>
</div>

{/* Mobile/Tablet Section (<1024px) */}
<div className="flex md:flex lg:hidden items-center gap-3">
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
    className={`${styles.hamburger} shrink-0 text-gray-700 text-xl`}
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
        <div className="lg:hidden fixed top-[60px] left-0 w-full h-screen overflow-y-auto bg-white border-t border-gray-200 px-6 py-4 z-[999]">
          {menus.map(({ id, title, items }) => (
            <div key={id} className="mb-4">
              <button
                className="w-full text-left font-semibold text-gray-800 py-2 flex justify-between items-center"
                onClick={() => toggleSection(id)}
              >
                {title}
                <i
                  className={`fa-solid fa-angle-down transition-transform duration-200 ${
                    expandedSections[id] ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              {expandedSections[id] && (
                <ul className="pl-4 mt-2">
                  {items.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-600 text-sm py-2 border-b border-gray-200 cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mt-6">
            <Link
              href="/request-demo"
              className="block w-full text-center text-white py-2 rounded-full text-sm font-bold"
              style={{ backgroundColor: "#C2185C" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              REQUEST DEMO
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;