"use client";
import { MotionDiv, MotionPresence } from "@/utils/motion-exports";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const MobileNav = ({
  setShowNav,
}: {
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  //
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  //
  return (
    <MotionDiv
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      className="overflow-hidden fixed left-0 right-0 top-[99px] flex 997:hidden flex-col bg-light-50 w-full"
    >
      <Link
        className={`mobile-nav-link ${pathname === "/" && "active-navlink-2"}`}
        href="/"
        onClick={() => setShowNav(false)}
      >
        Home
      </Link>
      <div className="!w-full" onClick={() => setShowDropdown(!showDropdown)}>
        <div className="mobile-nav-link cursor-pointer !w-full">UNDP INFO</div>
        <MotionPresence>
          {showDropdown && (
            <MotionDiv
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden w-full flex flex-col"
            >
              <Link
                className="mobile-nav-link"
                href="/accountability-reporting"
                onClick={() => {
                  setShowNav(false);
                  setShowDropdown(false);
                }}
              >
                Accountability & Reporting
              </Link>
              <Link
                className="mobile-nav-link"
                href="/community-outreach"
                onClick={() => {
                  setShowNav(false);
                  setShowDropdown(false);
                }}
              >
                Community Outreach
              </Link>
              <Link
                className="mobile-nav-link"
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
        className={`mobile-nav-link ${
          pathname.startsWith("/about-us") && "active-navlink-2"
        }`}
        href="/about-us"
        onClick={() => setShowNav(false)}
      >
        About Us
      </Link>
      <Link
        className={`mobile-nav-link ${
          pathname.startsWith("/apply") && "active-navlink-2"
        }`}
        href="/apply"
        onClick={() => setShowNav(false)}
      >
        Apply
      </Link>
      <Link
        className={`mobile-nav-link ${
          pathname.startsWith("/policy-legislation") && "active-navlink-2"
        }`}
        href="/policy-legislation"
        onClick={() => setShowNav(false)}
      >
        Policy & Legislation
      </Link>
      <Link
        className={`mobile-nav-link ${
          pathname.startsWith("/feedback") && "active-navlink-2"
        }`}
        href="/feedback"
        onClick={() => setShowNav(false)}
      >
        Feedback
      </Link>
    </MotionDiv>
  );
};
