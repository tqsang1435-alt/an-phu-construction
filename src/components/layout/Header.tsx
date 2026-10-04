"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { href: "#about", label: "Giới thiệu" },
  { href: "#services", label: "Hạng mục" },
  { href: "#projects", label: "Công trình" },
  { href: "#process", label: "Quy trình" },
  { href: "#contact", label: "Liên hệ" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-wrapper">
        <Link href="#home" className="brand" aria-label="An Phú - Trang chủ">
          <Image 
            src="/images/logo.png" 
            alt="An Phú Logo" 
            width={200} 
            height={68} 
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Điều hướng chính">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
        </nav>

        <div className="header-right">
          <div className="header-status">
            <span className="status-dot"></span>
            <span>Sẵn sàng hợp tác</span>
          </div>
          <div className="header-divider"></div>
          <a href="#contact" className="header-contact-btn">
            Liên hệ <ArrowRight size={14} />
          </a>
        </div>
        
        <button 
          className="mobile-menu" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="mobile-nav-dropdown">
          {links.map((link) => (
            <Link 
              href={link.href} 
              key={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mobile-status-btn">
            <span className="status-dot" style={{marginRight: 8}}></span> Sẵn sàng hợp tác
          </a>
        </nav>
      )}
    </header>
  );
}
