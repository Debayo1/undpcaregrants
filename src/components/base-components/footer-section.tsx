import { BookIcon } from "@/icons/book-icon";
import { EnvelopeIcon } from "@/icons/envelope-icon";
import { FacebookIcon } from "@/icons/facebook-icon";
import { GooglePlusIcon } from "@/icons/google-plus-icon";
import { TwitterIcon } from "@/icons/twitter-icon";
import { UserShieldIcon } from "@/icons/user-shield-icon";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export const FooterSection = () => {
  return (
    <Fragment>
      <div className="px-4 476:px-10 sm:px-12 md:px-16 lg:px-24 flex flex-wrap 887:flex-nowrap justify-between items-start gap-12 py-[80px] bg-blue-50">
        <h1 className="text-2xl font-bold text-light-50">Contact</h1>
        <div className="flex flex-wrap 576:flex-nowrap items-stretch gap-6 text-light-50">
          <div className="mb-5 w-[90%] mx-auto">
            <h4>Media</h4>
            <div className="flex flex-col gap-4 p-4 border border-light-50">
              <BookIcon />
              <h2 className="text-lg font-bold">Write Us</h2>
              <p>
                Do you have a question, feedback or a complaint? Let us help you
                find the right answer. Contact Us
              </p>
            </div>
          </div>
          {/*  */}
          <div className="mb-5 w-[90%] mx-auto">
            <h4>Report suspicious activities</h4>
            <div className="flex flex-col gap-4 p-4 border border-light-50">
              <UserShieldIcon />
              <h2 className="text-lg font-bold">Security</h2>
              <p>
                The Internet has revolutionized the way we do business. It
                allows us to interact with you in a way to offer information
              </p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <div className="px-4 476:px-10 sm:px-12 md:px-16 lg:px-24 bg-dark-200 py-[90px] text-light-50">
        <div className="grid grid-cols-1 476:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col gap-2">
            <Link href="/terms-of-service">UNDP Laws</Link>
            <Link href="/policy-legislation">Privacy</Link>
            <Link href="#">Links</Link>
            <Link href="/feedback">Contacts</Link>
            <Link href="/terms-of-service">Terms of service</Link>
          </div>
          <div className="flex flex-col gap-2 text-light-50/60">
            <Link href="#">Accountability & Reporting</Link>
            <Link href="#">Community Outreach</Link>
            <Link href="#">Links</Link>
            <Link href="#">Security Statements</Link>
          </div>
          <div className="flex flex-col gap-3">
            <Image src="/logo.webp" alt="logo" width={150} height={150} />
            <p className="text-base">Find Us</p>
            <p>Contact Us</p>
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] flex justify-center items-center bg-light-50 rounded-full">
                <FacebookIcon />
              </div>
              <div className="w-[30px] h-[30px] flex justify-center items-center bg-light-50 rounded-full">
                <TwitterIcon />
              </div>
              <div className="w-[30px] h-[30px] flex justify-center items-center bg-light-50 rounded-full">
                <GooglePlusIcon />
              </div>
            </div>
            {/* <a
              href="mailto:jessicamatt91@gmail.com"
              className="flex items-center gap-2"
            >
              <EnvelopeIcon className="fill-light-50/80" />
              <span>jessicamatt91@gmail.com</span>
            </a> */}
            <a href="tel:6614382332" className="text-light-50/60">
              (661) 438-2332
            </a>
          </div>
        </div>
        {/*  */}
        <p className="text-light-50 text-center">
          COPYRIGHT &copy; {new Date().getFullYear()}, UNDP GRANTS. ALL RIGHTS
          RESERVED.
        </p>
      </div>
    </Fragment>
  );
};
