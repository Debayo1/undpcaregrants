import Image from "next/image";
import Link from "next/link";

export const Cta1Section = () => {
  return (
    <div className="py-[100px] bg-light-100/60 flex flex-col justify-center">
      <div className="w-[90%] 376:w-[300px] mx-auto bg-light-50 flex flex-col gap-3 px-2 py-3">
        <Image
          src="/img2.jpg"
          alt="cta 1 image"
          width={700}
          height={300}
          className="w-full object-cover"
        />
        <div className="flex flex-col gap-2 items-center">
          <h3 className="text-base md:text-lg font-semibold text-dark-100">
            Personal Grant
          </h3>
          <h3 className="text-base md:text-lg font-semibold text-dark-100">
            Business Grant
          </h3>
          <h3 className="text-base md:text-lg font-semibold text-dark-100">
            Educational Grant
          </h3>
          <h3 className="text-base md:text-lg font-semibold text-dark-100">
            Healthcare Grant
          </h3>
          <h3 className="text-base md:text-lg font-semibold text-dark-100">
            Home Development Grant
          </h3>
        </div>
        <Link
          className="text-center bg-blue-50 text-light-50 font-bold rounded py-2 px-2"
          href="/apply"
        >
          Apply
        </Link>
      </div>
    </div>
  );
};
