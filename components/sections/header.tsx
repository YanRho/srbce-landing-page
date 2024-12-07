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
              alt="logo"
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
            <DropdownMenuItem className="hover:bg-[#233df8] hover:text-[#5eb4f7] rounded">
              <a href="#about" className="block px-4 py-2">
                ABOUT
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#233df8] hover:text-[#5eb4f7] rounded">
              <a href="#gallery" className="block px-4 py-2">
                GALLERY
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#233df8] hover:text-[#5eb4f7] rounded">
              <a href="#services" className="block px-4 py-2">
                SERVICES
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#233df8] hover:text-[#5eb4f7] rounded">
              <a href="#contact" className="block px-4 py-2">
                CONTACT
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a
            href="#about"
            className="hover:text-[#5eb4f7] transition-colors duration-200"
          >
            ABOUT
          </a>
          <a
            href="#gallery"
            className="hover:text-[#5eb4f7] transition-colors duration-200"
          >
            GALLERY
          </a>
          <a
            href="#services"
            className="hover:text-[#5eb4f7] transition-colors duration-200"
          >
            SERVICES
          </a>
          <a
            href="#contact"
            className="hover:text-[#5eb4f7] transition-colors duration-200"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
