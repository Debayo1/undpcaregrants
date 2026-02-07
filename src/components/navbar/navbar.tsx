"use client";
import { Fragment } from "react";
import { MotionDiv, MotionPresence } from "@/utils/motion-exports";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { EnvelopeIcon } from "@/icons/envelope-icon";
import { usePathname } from "next/navigation";
import { CancelIcon } from "@/icons/cancel-icon";
import { BarsIcon } from "@/icons/bars-icon";
import { MobileNav } from "./mobile-nav";

export const Navbar = () => {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  //
  const [showNav, setShowNav] = useState<boolean>(false);
  //
  return (
    <Fragment>
      <div className="overflow-auto flex justify-between items-center gap-4 py-3 px-4 476:px-10 sm:px-12 md:px-16 lg:px-24 bg-yellow-50">
        <Link
          href="/covid-19"
          className="text-[13px] leading-3 whitespace-nowrap"
        >
          The UNDP is continuing to support our community during the coronavirus
          (COVID-19) pandemic.
        </Link>
        {/* <a
          href="mailto:jessicamatt91@gmail.com"
          className="flex items-center gap-2 text-[13px] leading-3 whitespace-nowrap"
        >
          <EnvelopeIcon />
          <span>jessicamatt91@gmail.com</span>
        </a> */}
      </div>
      <nav className="relative z-50 flex justify-between items-center py-2 px-4 476:px-10 sm:px-12 md:px-16 lg:px-24 border-b border-b-red-50">
        <Image src="/logo.webp" width={80} height={80} alt="logo" />
        <div className="hidden 997:flex justify-between items-center gap-6">
          <Link
            className={`py-2 text-dark-100 font-bold leading-5 text-[14px] transition-all duration-300 hover:text-blue-50 border-b-[2px] border-b-transparent hover:border-blue-50 ${pathname === "/" && "active-navlink"
              }`}
            href="/"
            onClick={() => setShowNav(false)}
          >
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span
              className={`py-2 text-dark-100 font-bold text-[14px] cursor-pointer transition-all duration-300 hover:text-blue-50 border-b-[2px] border-b-transparent hover:border-blue-50 ${showDropdown && "active-navlink"
                }`}
            >
              UNDP INFO
            </span>
            <MotionPresence>
              {showDropdown && (
                <MotionDiv
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden w-[250px] absolute top-[32px] left-0 flex flex-col bg-light-50 shadow-[0px_4px_12px_0px_rgba(255,255,255,0.6)]"
                >
                  <Link
                    className="transition-all duration-500 hover:bg-dark-100/70 hover:text-light-50 
                    text-dark-100 font-bold text-[14px] py-[14px] px-5"
                    href="/accountability-reporting"
                    onClick={() => {
                      setShowNav(false);
                      setShowDropdown(false);
                    }}
                  >
                    Accountability & Reporting
                  </Link>
                  <Link
                    className="transition-all duration-500 hover:bg-dark-100/70 hover:text-light-50 
                    text-dark-100 font-bold text-[14px] py-[14px] px-5"
                    href="/community-outreach"
                    onClick={() => {
                      setShowNav(false);
                      setShowDropdown(false);
                    }}
                  >
                    Community Outreach
                  </Link>
                  <Link
                    className="transition-all duration-500 hover:bg-dark-100/70 hover:text-light-50 
                    text-dark-100 font-bold text-[14px] py-[14px] px-5"
                    href="/security-statement"
                    onClick={() => {
                      setShowNav(false);
                      setShowDropdown(false);
                    }}
                  >
                    Security Statement
                  </Link>
                </MotionDiv>
              )}
            </MotionPresence>
          </div>
          <Link
            className={`py-2 text-dark-100 font-bold leading-5 text-[14px] transition-all duration-300 hover:text-blue-50 border-b-[2px] border-b-transparent hover:border-blue-50 ${pathname.startsWith("/about-us") && "active-navlink"
              }`}
            href="/about-us"
            onClick={() => setShowNav(false)}
          >
            About Us
          </Link>
          <Link
            className={`py-2 text-dark-100 font-bold leading-5 text-[14px] transition-all duration-300 hover:text-blue-50 border-b-[2px] border-b-transparent hover:border-blue-50 ${pathname.startsWith("/apply") && "active-navlink"
              }`}
            href="/apply"
            onClick={() => setShowNav(false)}
          >
            Apply
          </Link>
          <Link
            className={`py-2 text-dark-100 font-bold leading-5 text-[14px] transition-all duration-300 hover:text-blue-50 border-b-[2px] border-b-transparent hover:border-blue-50 ${pathname.startsWith("/policy-legislation") && "active-navlink"
              }`}
            href="/policy-legislation"
            onClick={() => setShowNav(false)}
          >
            Policy & Legislation
          </Link>
          <Link
            className={`py-2 text-dark-100 font-bold leading-5 text-[14px] transition-all duration-300 hover:text-blue-50 border-b-[2px] border-b-transparent hover:border-blue-50 ${pathname.startsWith("/feedback") && "active-navlink"
              }`}
            href="/feedback"
            onClick={() => setShowNav(false)}
          >
            Feedback
          </Link>
          <Link
            className="ml-6 py-2 px-5 text-light-50 rounded bg-red-100 font-bold leading-5 text-[14px]"
            href="/apply"
            onClick={() => setShowNav(false)}
          >
            Apply Now
          </Link>
        </div>
        <div
          className="block 997:hidden border-[2.3px] p-[2.5px] border-blue-50 rounded-[2px]"
          onClick={() => setShowNav(!showNav)}
        >
          {showNav ? <CancelIcon /> : <BarsIcon />}
        </div>
        <MotionPresence>
          {showNav && <MobileNav setShowNav={setShowNav} />}
        </MotionPresence>
      </nav>
    </Fragment>
  );
};
