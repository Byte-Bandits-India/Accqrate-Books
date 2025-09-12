"use client";

import React, { useContext, useState, useEffect } from "react";
import styles from "../styles/footer.module.css";
import { LoadingContext } from "../utils/LoadingContext";
import Skeleton from "../components/skeleton";

export default function Footer() {
  const { loading } = useContext(LoadingContext);
  const [isVisible, setIsVisible] = useState(false);
  const [showSections, setShowSections] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowSections(window.innerWidth >= 1024); // Show sections only on desktop
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    const element = document.getElementById("footerSection");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const sections = [
    {
      title: "Accqrate-erp.com",
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
      title: "About",
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
      title: "Featured Modules",
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
      title: "More Modules",
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
      title: "Data & Safety Management",
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
      title: "Integrations",
      items: [
        "SAP suits",
        "Oracle suits",
        "Microsoft suits",
        "VAT Calculator",
      ],
    },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/people/Accqrate/100077291530631/", src: "/images/facebook.svg" },
    { href: "https://www.linkedin.com/showcase/accqrate", src: "/images/linkedin.svg" },
    { href: "https://twitter.com/accqrate_erp", src: "/images/twitter.svg" },
    { href: "https://www.instagram.com/accqrateerp/", src: "/images/instagram.svg" },
    { href: "https://www.youtube.com/channel/UCAzO34h3KxRrObyRor70D9A", src: "/images/youtube.svg" },
    { href: "https://www.reddit.com/user/Accqrate_ERP", src: "/images/reddit.svg" },
    { href: "https://www.snapchat.com/add/accqrate", src: "/images/snapchat.svg" },
    { href: "https://api.whatsapp.com/send/?phone=966541999357&type=phone_number&app_absent=0", src: "/images/whatsapp.svg" },
  ];

  if (loading || !isVisible) {
    return (
      <footer className={styles.footer} id="footerSection">
        <div className={styles.container}>
          {[...Array(6)].map((_, idx) => (
            <div key={idx}>
              <Skeleton height="24px" width="60%" className={styles.sectionTitle} />
              {[...Array(6)].map((_, i) => (
                <Skeleton
                  key={i}
                  height="18px"
                  width="80%"
                  className={styles.sectionItem}
                  style={{ marginBottom: "8px" }}
                />
              ))}
            </div>
          ))}
        </div>
        <div className={styles.social}>
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} height="20px" width="20px" style={{ marginLeft: "8px" }} />
          ))}
        </div>
        <Skeleton height="20px" width="40%" className={styles.copyright} />
      </footer>
    );
  }

  return (
    <footer className={styles.footer} id="footerSection">
      {showSections && (
        <div className={styles.container}>
          {sections.map((section, idx) => (
            <div key={idx} className={styles.column}>
              <h3 className={styles.sectionTitle}>{section.title}</h3>
              {section.items.map((item, i) => (
                <p key={i} className={styles.sectionItem}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      )}

    <div className={styles.bottomBar}>
  <div className={styles.social}>
    {socialLinks.map(({ href, src }, idx) => (
      <a key={idx} href={href} target="_blank" rel="noopener noreferrer">
        <img src={src} alt="social icon" className={styles.icon} />
      </a>
    ))}
  </div>

  <div className={styles.copyright}>
    © Copyright 2021 - 2025 <span className={styles.primary}>Accqrate</span>, All rights reserved.
  </div>
</div>

   
    </footer>
  );
}

