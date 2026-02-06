"use client";
import { MainDiv } from "@/components/base-components/main-div";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
const PolicyLegislationPage = () => {
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
                Privacy Policy
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-lg sm:text-xl text-dark-100/70">
                Your privacy is important to us. It is United Nations
                Development Programme Grants’s policy to respect your privacy
                regarding any information we may collect from you across our
                website,{" "}
                <Link href="/" className="text-pink-500">
                  https://udpcaregrants.com
                </Link>
                , and other sites we own and operate.
              </p>
              <p className="text-lg sm:text-xl text-dark-100/70">
                We only ask for personal information when we truly need it to
                provide a service to you. We collect it by fair and lawful
                means, with your knowledge and consent. We also let you know why
                we&apos;re collecting it and how it will be used.
              </p>
              <p className="text-lg sm:text-xl text-dark-100/70">
                We only retain collected information for as long as necessary to
                provide you with your requested service. What data we store,
                we&apos;ll protect within commercially acceptable means to
                prevent loss and theft, as well as unauthorised access,
                disclosure, copying, use or modification.
              </p>
              <p className="text-lg sm:text-xl text-dark-100/70">
                We don&apos;t share any personally identifying information
                publicly or with third-parties, except when required to by law.
              </p>
              <p className="text-lg sm:text-xl text-dark-100/70">
                Our website may link to external sites that are not operated by
                us. Please be aware that we have no control over the content and
                practices of these sites, and cannot accept responsibility or
                liability for their respective privacy policies.
              </p>
              <p className="text-lg sm:text-xl text-dark-100/70">
                You are free to refuse our request for your personal
                information, with the understanding that we may be unable to
                provide you with some of your desired services.
              </p>
              <p className="text-lg sm:text-xl text-dark-100/70">
                Your continued use of our website will be regarded as acceptance
                of our practices around privacy and personal information. If you
                have any questions about how we handle user data and personal
                information, feel free to contact us.
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

export default PolicyLegislationPage;
