"use client";
import { MainDiv } from "@/components/base-components/main-div";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
const TermsOfServicePage = () => {
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
          Terms of Service
        </h3>
        <div className="px-4 476:px-10 sm:px-12 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-[1fr_auto] bg-light-50 py-12 gap7 md:gap-16">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl md:text-3xl font-semibold text-dark-100 mb-3">
              United Nations Development Programme Grants Terms of Service
            </h3>
            {/*  */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-semibold text-dark-100">
                1. Terms
              </h3>
              <p className="text-base sm:text-lg text-dark-100/70">
                By accessing the website at&nbsp;
                <Link href="/" className="text-pink-500">
                  https://udpcaregrants.com
                </Link>
                , you are agreeing to be bound by these terms of service, all
                applicable laws and regulations, and agree that you are
                responsible for compliance with any applicable local laws. If
                you do not agree with any of these terms, you are prohibited
                from using or accessing this site. The materials contained in
                this website are protected by applicable copyright and trademark
                law.
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-semibold text-dark-100">
                2. Use License
              </h3>
              <p className="text-base sm:text-lg text-dark-100/70">
                <span className="select-none">1.&nbsp;&nbsp;</span>Permission is
                granted to temporarily download one copy of the materials
                (information or software) on United Nations Development
                Programme Grants&apos;s website for personal, non-commercial
                transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              {/*  */}
              <ul className="list-roman flex flex-col gap-2 pl-5 list-inside text-base sm:text-lg text-dark-100/70">
                <li>modify or copy the materials;</li>
                <li>
                  use the materials for any commercial purpose, or for any
                  public display (commercial or non-commercial);
                </li>
                <li>
                  attempt to decompile or reverse engineer any software
                  contained on United Nations Development Programme Grants’s
                  website;
                </li>
                <li>
                  remove any copyright or other proprietary notations from the
                  materials; or
                </li>
                <li>
                  transfer the materials to another person or “mirror” the
                  materials on any other server.
                </li>
              </ul>
              {/*  */}
              <p className="text-base sm:text-lg text-dark-100/70">
                <span className="select-none">2.&nbsp;&nbsp;</span>This license
                shall automatically terminate if you violate any of these
                restrictions and may be terminated by United Nations Development
                Programme Grants at any time. Upon terminating your viewing of
                these materials or upon the termination of this license, you
                must destroy any downloaded materials in your possession whether
                in electronic or printed format.
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-semibold text-dark-100">
                3. Disclaimer
              </h3>
              <p className="text-base sm:text-lg text-dark-100/70">
                <span className="select-none">1.&nbsp;&nbsp;</span>The materials
                on United Nations Development Programme Grants&apos;s website
                are provided on an &apos;as is&apos; basis. United Nations
                Development Programme Grants makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties
                including, without limitation, implied warranties or conditions
                of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>
              {/*  */}
              <p className="text-base sm:text-lg text-dark-100/70">
                <span className="select-none">2.&nbsp;&nbsp;</span>Further,
                United Nations Development Programme Grants does not warrant or
                make any representations concerning the accuracy, likely
                results, or reliability of the use of the materials on its
                website or otherwise relating to such materials or on any sites
                linked to this site.
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-semibold text-dark-100">
                4. Limitations
              </h3>
              <p className="text-base sm:text-lg text-dark-100/70">
                In no event shall United Nations Development Programme Grants or
                its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to
                business interruption) arising out of the use or inability to
                use the materials on United Nations Development Programme
                Grants&apos;s website, even if United Nations Development
                Programme Grants or a United Nations Development Programme
                Grants authorized representative has been notified orally or in
                writing of the possibility of such damage. Because some
                jurisdictions do not allow limitations on implied warranties, or
                limitations of liability for consequential or incidental
                damages, these limitations may not apply to you.
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-semibold text-dark-100">
                5. Accuracy of materials
              </h3>
              <p className="text-base sm:text-lg text-dark-100/70">
                The materials appearing on United Nations Development Programme
                Grants&apos;s website could include technical, typographical, or
                photographic errors. United Nations Development Programme Grants
                does not warrant that any of the materials on its website are
                accurate, complete or current. United Nations Development
                Programme Grants may make changes to the materials contained on
                its website at any time without notice. However United Nations
                Development Programme Grants does not make any commitment to
                update the materials.
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-semibold text-dark-100">
                6. Links
              </h3>
              <p className="text-base sm:text-lg text-dark-100/70">
                United Nations Development Programme Grants has not reviewed all
                of the sites linked to its website and is not responsible for
                the contents of any such linked site. The inclusion of any link
                does not imply endorsement by United Nations Development
                Programme Grants of the site. Use of any such linked website is
                at the user&apos;s own risk.
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-semibold text-dark-100">
                7. Modifications
              </h3>
              <p className="text-base sm:text-lg text-dark-100/70">
                United Nations Development Programme Grants may revise these
                terms of service for its website at any time without notice. By
                using this website you are agreeing to be bound by the then
                current version of these terms of service.
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-semibold text-dark-100">
                8. Governing Law
              </h3>
              <p className="text-base sm:text-lg text-dark-100/70">
                These terms and conditions are governed by and construed in
                accordance with the laws of United State of America and you
                irrevocably submit to the exclusive jurisdiction of the courts
                in that State or location.
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

export default TermsOfServicePage;
