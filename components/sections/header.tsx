"use client";

import React from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const menuItems = [
    { href: "#about", label: "ABOUT" },
    { href: "#gallery", label: "GALLERY" },
    { href: "#services", label: "SERVICES" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <header className="bg-[#040a30] text-white py-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image
              src="/images/srbcelogo.png"
              width={50}
              height={50}
              alt="SRB Logo"
              priority
            />
          </a>
        </div>

        {/* Mobile Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="block lg:hidden text-2xl focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              ☰
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-[#040a30] text-white p-4 rounded-md shadow-lg space-y-2 w-48"
            align="end"
          >
            {menuItems.map((item) => (
              <DropdownMenuItem
                key={item.href}
                className="hover:bg-[#233df8] hover:text-[#5eb4f7] rounded"
              >
                <a href={item.href} className="block px-4 py-2">
                  {item.label}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#5eb4f7] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
