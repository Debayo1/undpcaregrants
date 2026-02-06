"use client";
import { MainDiv } from "@/components/base-components/main-div";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const SecurityStatementPage = () => {
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
          Security Statement
        </h3>
        <div className="px-4 476:px-10 sm:px-12 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-[1fr_auto] bg-light-50 py-12 gap7 md:gap-16">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] sm:text-[34px] font-semibold text-dark-100 pb-2 border-b-[2px] border-b-dark-100/65 mb-3">
                Security Statement
              </h3>
              <p className="text-lg sm:text-xl text-dark-100/70">
                The Internet has revolutionized the way we do business. It
                allows us to interact with you in a personal way to offer
                information, to add additional value, to listen to your
                opinions, and to provide services that you can access from the
                convenience of your home or office. At the same time, the
                Internet also brings legitimate concerns about privacy and
                security. The UNDP is dedicated to protecting your privacy and
                safeguarding your information. By explaining our position on
                security to you we hope you will better understand how we will
                keep your information private and secure while using it to serve
                you better.
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] sm:text-[34px] font-semibold text-dark-100 pb-2 border-b-[2px] border-b-dark-100/65 mb-3">
                Site Cetificates
              </h3>
              <p className="text-lg sm:text-xl text-dark-100/70">
                When accessing the interactive business areas of the UNDP web
                site you will be doing so through a secure server. The UNDP site
                will only allow secure browsers into the secured areas of our
                site. Your browser&apos;s secure mode will be in place at all
                times when connected to these areas of our site. You can confirm
                you are in secure mode when your browser displays a picture of a
                closed lock in the lower bar of your browser window and the web
                site address starts with “HTTPS” instead of “HTTP”. The secure
                areas of our web site have been secured with a digital
                certificate issued by VeriSign©, a widely recognized certificate
                authority (CA). To view this certificate, double click on the
                image of the closed lock icon in the lower bar of your browser
                window. A small window displaying the certificate information
                will pop up.
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] sm:text-[34px] font-semibold text-dark-100 pb-2 border-b-[2px] border-b-dark-100/65 mb-3">
                Protection of Information in Transit
              </h3>
              <p className="text-lg sm:text-xl text-dark-100/70">
                When you use the secure areas of our web site, the information
                communicated between your web browser and our web server is
                protected by encrypting the data using Secure Socket Layer (SSL)
                encryption. Our web site only supports 128-bit encryption.
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] sm:text-[34px] font-semibold text-dark-100 pb-2 border-b-[2px] border-b-dark-100/65 mb-3">
                Protection of Stored Information
              </h3>
              <p className="text-lg sm:text-xl text-dark-100/70">
                We have taken technical and procedural measures consistent with
                best practices in information security to protect stored
                information. These measures include:
              </p>
              <ul className="list-disc ml-12 text-lg sm:text-xl text-dark-100/70 flex flex-col gap-4">
                <li>
                  Utilizing a series of firewalls to protect the information and
                  computing resources
                </li>
                <li>Virus protection of all computing resources</li>
                <li>
                  Monitoring system and application logs to identify any unusual
                  activity from authorized and/or unauthorized individuals
                  accessing our systems
                </li>
                <li>
                  Providing access to information and system functions only to
                  those who have a need and a right
                </li>
                <li>
                  Physically securing the facilities where the computing
                  resources are located
                </li>
                <li>Conducting periodic 3rd party vulnerability assessments</li>
              </ul>
            </div>
            {/*  */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] sm:text-[34px] font-semibold text-dark-100 pb-2 border-b-[2px] border-b-dark-100/65 mb-3">
                Changes to Security Statement
              </h3>
              <p className="text-lg sm:text-xl text-dark-100/70">
                The UNDP reviews its security statement periodically and it may
                be subject to change.
              </p>
            </div>
            {/*  */}
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

export default SecurityStatementPage;
