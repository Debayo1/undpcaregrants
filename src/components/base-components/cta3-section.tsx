"use client";
import CountUp from "react-countup";

export const Cta3Section = () => {
  return (
    <div className="mt-[90px] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8">
      <div className="flex flex-col gap-1">
        <h4 className="font-bold text-dark-100/50">Our About</h4>
        <div className="flex flex-col gap-2">
          <h4 className="text-[28px] lg:text-[40px] leading-7 lg:leading-10">
            Review
          </h4>
          <div className="h-[2.5px] rounded-full w-[85px] bg-yellow-50" />
        </div>
      </div>
      {/*  */}
      <div className="grid grid-cols-1 476:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div className="flex flex-col gap-1 px-4 py-4 items-center border-[1.8px] border-blue-50">
          <h3 className="flex items-center gap-1 text-lg font-bold">
            <CountUp enableScrollSpy end={165} />
            <span>+</span>
          </h3>
          <p className="text-dark-100/50 text-center">AWARD WINNING</p>
        </div>
        {/*  */}
        <div className="flex flex-col gap-1 px-4 py-4 items-center border-[1.8px] border-blue-50">
          <h3 className="flex items-center gap-1 text-lg font-bold">
            <CountUp enableScrollSpy end={254} />
            <span>+</span>
          </h3>
          <p className="text-dark-100/50 text-center">SUCCESSFUL CASES</p>
        </div>
        {/*  */}
        <div className="flex flex-col gap-1 px-4 py-4 items-center border-[1.8px] border-blue-50">
          <h3 className="flex items-center gap-1 text-lg font-bold">
            <CountUp enableScrollSpy end={2000000} separator="," duration={1} />
            <span>+</span>
          </h3>
          <p className="text-dark-100/50 text-center">COST FOR CLIENTS</p>
        </div>
        {/*  */}
        <div className="flex flex-col gap-1 px-4 py-4 items-center border-[1.8px] border-blue-50">
          <h3 className="flex items-center gap-1 text-lg font-bold">
            <CountUp enableScrollSpy end={145} />
            <span>%</span>
          </h3>
          <p className="text-dark-100/50 text-center">HAPPY CLIENTS</p>
        </div>
        {/*  */}
      </div>
    </div>
  );
};
