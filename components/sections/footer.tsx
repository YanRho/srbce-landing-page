"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#040a30] text-white py-8">
      <div className="container mx-auto px-6">
        {/* Footer Top */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <div className="text-2xl font-bold mb-4 lg:mb-0">
            SRB Construction & Engineering Services
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} SRB Construction & Engineering Services.
            All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <Link
              href="https://www.facebook.com/srbce.services"
              target="_blank"
              className="hover:text-[#5eb4f7]"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
