"use client";
import { MainDiv } from "@/components/base-components/main-div";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
const Covid19Page = () => {
  const [tab, setTab] = useState<number>(1);
  //
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
          Covid-19
        </h3>
        <div className="px-4 476:px-10 sm:px-12 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-[1fr_auto] bg-light-50 py-12 gap7 md:gap-16">
          {/*  */}
          <div>
            <div className="h-[300px] flex flex-col items-center justify-center py-8 px-3 bg-covidbg bg-cover bg-center bg-fixed">
              <h3 className="font-semibold text-light-50 text-2xl md:text-4xl">
                Coronavirus disease (COVID-19) outbreak
              </h3>
            </div>
            {/*  */}
            <div className="mt-5">
              <div className="flex items-center gap-3">
                <h3
                  className={`${
                    tab === 1
                      ? "text-green-500 border-x-slate-300 border-t-slate-300 bg-light-50 border-x border-t"
                      : "text-blue-50"
                  } font-semibold text-xl px-3 py-2 cursor-pointer -mb-[1.5px]`}
                  onClick={() => setTab(1)}
                >
                  Overview
                </h3>
                <h3
                  className={`${
                    tab === 2
                      ? "text-green-500 border-x-slate-300 border-t-slate-300 bg-light-50 border-x border-t"
                      : "text-blue-50"
                  } font-semibold text-xl px-3 py-2 cursor-pointer -mb-[1.5px]`}
                  onClick={() => setTab(2)}
                >
                  Prevention
                </h3>
                <h3
                  className={`${
                    tab === 3
                      ? "text-green-500 border-x-slate-300 border-t-slate-300 bg-light-50 border-x border-t"
                      : "text-blue-50"
                  } font-semibold text-xl px-3 py-2 cursor-pointer -mb-[1.5px]`}
                  onClick={() => setTab(3)}
                >
                  Symptoms
                </h3>
              </div>
              {/*  */}
              <div className="border border-slate-300 p-4">
                {tab === 1 ? (
                  <div className="flex flex-col gap-2">
                    <p className="text-sm sm:text-base text-dark-100/70">
                      Coronavirus disease (COVID-19) is an infectious disease
                      caused by a newly discovered coronavirus.
                    </p>
                    <p className="text-sm sm:text-base text-dark-100/70">
                      Most people infected with the COVID-19 virus will
                      experience mild to moderate respiratory illness and
                      recover without requiring special treatment. Older people,
                      and those with underlying medical problems like
                      cardiovascular disease, diabetes, chronic respiratory
                      disease, and cancer are more likely to develop serious
                      illness.
                    </p>
                    <p className="text-sm sm:text-base text-dark-100/70">
                      The best way to prevent and slow down transmission is be
                      well informed about the COVID-19 virus, the disease it
                      causes and how it spreads. Protect yourself and others
                      from infection by washing your hands or using an alcohol
                      based rub frequently and not touching your face.
                    </p>
                    <p className="text-sm sm:text-base text-dark-100/70">
                      The COVID-19 virus spreads primarily through droplets of
                      saliva or discharge from the nose when an infected person
                      coughs or sneezes, so it&apos;s important that you also
                      practice respiratory etiquette (for example, by coughing
                      into a flexed elbow).
                    </p>
                    <p className="text-sm sm:text-base text-dark-100/70">
                      At this time, there are no specific vaccines or treatments
                      for COVID-19. However, there are many ongoing clinical
                      trials evaluating potential treatments. WHO will continue
                      to provide updated information as soon as clinical
                      findings become available.
                    </p>
                  </div>
                ) : tab === 2 ? (
                  <div className="flex flex-col gap-2">
                    <p className="text-sm sm:text-base text-dark-100/70">
                      To prevent infection and to slow transmission of COVID-19,
                      do the following:
                    </p>
                    {/*  */}
                    <ul className="list-disc list-inside pl-5 text-sm sm:text-base text-dark-100/70">
                      <li>
                        Wash your hands regularly with soap and water, or clean
                        them with alcohol-based hand rub.
                      </li>
                      <li>
                        Maintain at least 1 metre distance between you and
                        people coughing or sneezing. Avoid touching your face.
                      </li>
                      <li>
                        Cover your mouth and nose when coughing or sneezing.
                      </li>
                      <li>Stay home if you feel unwell.</li>
                      <li>
                        Refrain from smoking and other activities that weaken
                        the lungs.
                      </li>
                      <li>
                        Practice physical distancing by avoiding unnecessary
                        travel and staying away from large groups of people.
                      </li>
                    </ul>
                  </div>
                ) : tab === 3 ? (
                  <div className="flex flex-col gap-2">
                    <p className="text-sm sm:text-base text-dark-100/70">
                      The COVID-19 virus affects different people in different
                      ways. COVID-19 is a respiratory disease and most infected
                      people will develop mild to moderate symptoms and recover
                      without requiring special treatment. People who have
                      underlying medical conditions and those over 60 years old
                      have a higher risk of developing severe disease and death.
                    </p>
                    <p className="text-sm sm:text-base text-dark-100/70">
                      Common symptoms include:
                    </p>
                    {/*  */}
                    <ul className="list-disc list-inside pl-5 text-sm sm:text-base text-dark-100/70">
                      <li>Fever</li>
                      <li>Tiredness</li>
                      <li>Dry cough</li>
                    </ul>
                    <p className="text-sm sm:text-base text-dark-100/70">
                      Other symptoms include:
                    </p>
                    <ul className="list-disc list-inside pl-5 text-sm sm:text-base text-dark-100/70">
                      <li>Shortness of breath</li>
                      <li>Aches and pains</li>
                      <li>Sore throat</li>
                      <li>
                        And very few people will report diarrhoea, nausea or a
                        runny nose.
                      </li>
                    </ul>
                    <p className="text-sm sm:text-base text-dark-100/70">
                      People with mild symptoms who are otherwise healthy should
                      self-isolate and contact their medical provider or a
                      COVID-19 information line for advice on testing and
                      referral.
                    </p>
                    <p className="text-sm sm:text-base text-dark-100/70">
                      People with fever, cough or difficulty breathing should
                      call their doctor and seek medical attention.
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
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

export default Covid19Page;
