"use client";
import { MainDiv } from "@/components/base-components/main-div";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const AccountabilityReportingPage = () => {
  useEffect(() => {
    gsap.fromTo(
      ".img_right",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".img_right",
        },
      }
    );
  }, []);

  //
  return (
    <MainDiv className="py-12 !px-0 bg-light-100">
      <div>
        <h3 className="px-4 476:px-10 sm:px-12 md:px-16 lg:px-24 text-[20px] sm:text-[39px] font-semibold text-dark-50 mb-4">
          Accountability & Reporting
        </h3>
        <div className="px-4 476:px-10 sm:px-12 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-[1fr_auto] bg-light-50 py-12 gap7 md:gap-16">
          <div className="flex flex-col gap-4">
            <p className="text-base text-dark-100 font-normal tracking-wider">
              We are committed to maintaining an unbiased support, and ensuring
              all individuals and companies participate in the system fairly and
              ethically.
            </p>
            {/*  */}
            <ul className="list-disc ml-8 flex flex-col gap-8">
              <li className="text-base text-dark-100 font-normal tracking-wider">
                We collect customer feedback to ensure our service lives up to
                our goal of being fast, easy, caring, right and clear, and learn
                how we can improve
              </li>
              <li className="text-base text-dark-100 font-normal tracking-wider">
                The UNDP help the individuals learn about their responsibilities
                in the this system, to prevent fraud and program abuse
              </li>
              <li className="text-base text-dark-100 font-normal tracking-wider">
                Our Annual Report provides an overview of each year&apos;s
                operational highlights and our financial performance
              </li>
              <li className="text-base text-dark-100 font-normal tracking-wider">
                The lays out the foundation for removing barriers for people
                with disabilities and developing standards for making accessible
                for everyone. The UNDP Accessibility Plan outlines the
                UNDP&apos;s efforts in this regard.
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="flex flex-col gap-4">
            <Image
              src="/img39.jpg"
              alt="img39"
              width={500}
              height={500}
              className="img_right w-[90%] sm:w-[300px] mx-auto"
            />
            <Image
              src="/img32.jpg"
              alt="img39"
              width={500}
              height={500}
              className="img_right w-[90%] sm:w-[300px] mx-auto"
            />
            <Image
              src="/img40.jpg"
              alt="img39"
              width={500}
              height={500}
              className="img_right w-[90%] sm:w-[300px] mx-auto"
            />
            <Image
              src="/img41.jpg"
              alt="img39"
              width={500}
              height={500}
              className="img_right w-[90%] sm:w-[300px] mx-auto"
            />
            <Image
              src="/img40.jpg"
              alt="img39"
              width={500}
              height={500}
              className="img_right w-[90%] sm:w-[300px] mx-auto"
            />
          </div>
        </div>
      </div>
    </MainDiv>
  );
};

export default AccountabilityReportingPage;
