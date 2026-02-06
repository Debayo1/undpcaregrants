"use client";
import { MainDiv } from "@/components/base-components/main-div";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const AboutUsPage = () => {
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
          About Us
        </h3>
        <div className="px-4 476:px-10 sm:px-12 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-[1fr_auto] bg-light-50 py-12 gap7 md:gap-16">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] sm:text-[34px] font-semibold text-dark-100 pb-2 border-b-[2px] border-b-dark-100/65 mb-3">
                Information about us
              </h3>
              <p className="text-lg sm:text-xl text-dark-100/70">
                A Short Summary of The UNDP Grants (United Nations Development
                Programme Grants), What is a grant? A grant is a way the
                government funds your ideas and projects to provide public
                services and stimulate the economy. Grants support critical
                recovery initiatives, innovative research, and many other
                programs listed in the Catalog of Federal Domestic Assistance
                (CFDA). A grant is one of many different forms of federal
                financial assistance. Federal financial assistance is a broad
                term to refer to the various ways the U.S. government
                redistributes resources to eligible recipients. On Grants.gov
                you will find grant and cooperative agreement opportunities from
                federal agencies that award grants. The Grant Lifecycle The
                grant process follows a linear lifecycle that includes creating
                the funding opportunity, applying, making award decisions, and
                successfully implementing the award. Check out the Grant
                Lifecycle page to find out what the applicant and the
                grant-making agency do in the lifecycle.
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] sm:text-[34px] font-semibold text-blue-50 pb-2 border-b-[2px] border-b-dark-100/65 mb-3">
                Detailed Information about UNDP
              </h3>
              <div className="flex flex-col gap-2">
                <p className="text-lg sm:text-xl text-dark-100/70">
                  Finding Grant Programs If you are just entering the realm of
                  grants and government funding, it can feel overwhelming trying
                  to find the right program for you or your organization. When
                  considering grants, these programs can be broadly categorized
                  as those awarded by the federal government and those awarded
                  by non-federal entities. Within these two categories are a
                  variety of funding sources and program types.
                </p>
                <p className="text-lg sm:text-xl text-dark-100/70">
                  Federal Grants, Funding & Benefit Programs To sort through the
                  federal grant programs, the authoritative source is the
                  Catalog of Federal Domestic Assistance (CFDA). This catalog
                  lists all of the available funding programs to all levels of
                  government, nonprofit organizations, for-profit businesses,
                  and other eligible entities. Search Grants within
                  udpcaregrants.com allows you to search, filter, and apply for
                  specific opportunities to receive funding from one of these
                  programs.
                </p>
                <p className="text-lg sm:text-xl text-dark-100/70">
                  Non-Federal Grant Programs There are a large number of
                  nonprofit organizations and for-profit businesses that also
                  provide grants or other types of funding assistance.
                </p>
                <p className="text-lg sm:text-xl text-dark-100/70">
                  Note: The information below is not exhaustive, and
                  udpcaregrants.com is not affiliated with, nor endorsing, any
                  of these resources. They are provided as a convenience to
                  prospective grant applicants.
                </p>
                <p className="text-lg sm:text-xl text-dark-100/70">
                  The Foundation Center Click to View Exit Disclaimer maintains
                  a comprehensive database on U.S. and global grant-makers and
                  their funding opportunities. It also operates research,
                  education, and training programs designed to advance knowledge
                  of philanthropy at every level.
                </p>
                <p className="text-lg sm:text-xl text-dark-100/70">
                  The Funding Information Network Click to View Exit Disclaimer
                  facilitates access to grant resources and publications to
                  under-resourced entities and populations.
                </p>
                <p className="text-lg sm:text-xl text-dark-100/70">
                  State and regional directories can also be found with some
                  research. Try using the Community Foundation Locator Click to
                  View Exit Disclaimer to find a grant-making foundation in your
                  region. You may also use your preferred web search engine to
                  find your state’s grant or foundation directory. Local
                  libraries may have access to subscription-based search engines
                  or the Foundation Center Cooperating Collections, so visit
                  your library to work with them for assistance.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] sm:text-[34px] font-semibold text-blue-50 pb-2 border-b-[2px] border-b-dark-100/65 mb-3">
                Who is Eligible?
              </h3>
              <div className="flex flex-col gap-2">
                <p className="text-lg sm:text-xl text-dark-100/70">
                  Who is Eligible? Determining whether you are eligible to apply
                  for and receive a federal grant is very important.
                </p>
                <p className="text-lg sm:text-xl text-dark-100/70">
                  If you are not legally eligible for a specific funding
                  opportunity, you would waste a lot of time and money
                  completing the application process when you cannot actually
                  receive the grant. When considering eligibility, the first
                  step is to know what type of organization you represent (or
                  whether you are applying as an individual).
                </p>
                <p className="text-lg sm:text-xl text-dark-100/70">
                  If you already know whether you will apply on behalf of your
                  organization or as an individual, then you are ready to check
                  your eligibility. There are many types of organizations
                  generally eligible to apply for funding opportunities on
                  udpcaregrants.com. Each type of organization listed in the
                  categories below is a specific search criterion in Search
                  Grants. Individual applicants are welcome too! Government
                  Organizations State governments County governments City or
                  township governments Special district governments Native
                  American tribal governments (federally recognized)
                </p>
              </div>
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

export default AboutUsPage;
