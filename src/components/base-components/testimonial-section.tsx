import Image from "next/image";

export const TestimonialSection = () => {
  return (
    <div className="py-[100px] bg-light-100 mx-auto mt-[90px] text-center">
      <div className="flex flex-col gap-2">
        <h4 className="text-lg md:text-xl text-dark-100/60">
          Customers reviews
        </h4>
        <h1 className="text-2xl md:text-4xl text-dark-100 font-bold tracking-wider">
          TESTIMONIAL
        </h1>
      </div>
      {/*  */}
      <div className="w-[90%] 576:w-[500px] md:w-[90%] mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 justify-items-center items-stretch gap-8">
        <div className="flex flex-col gap-4">
          <div className="relative bg-blue-50 p-8">
            <p className="text-left text-light-50">
              This benefit has changed my life in a lot of ways, I was homeless
              when I heard about the United Nations Development Programme
              Grants, I took the risk of claiming it, now my life will never be
              the same again because I have been able to buy a house, car and
              start up a good business for myself
            </p>
            <div className="absolute w-[18px] h-[18px] -bottom-[8px] left-8 rotate-45 bg-blue-50" />
          </div>
          <div className="flex items-center gap-2">
            <Image src="/img13.png" alt="img13" width={60} height={60} />
            <p className="text-lg font-semibold text-dark-100">
              THOMAS MAIOLINO
            </p>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-4">
          <div className="relative bg-blue-50 p-8">
            <p className="text-left text-light-50">
              I really wish more people would get this benefit because it has
              help me a lot a time when all hope seems to be lost, I hope more
              people get this benefit, so in case you lucky to have your name in
              the winners list, I will advise you do whatever it takes to get
              your benefit also.
            </p>
            <div className="absolute w-[18px] h-[18px] -bottom-[8px] left-8 rotate-45 bg-blue-50" />
          </div>
          <div className="flex items-center gap-2">
            <Image src="/img8.png" alt="img13" width={60} height={60} />
            <p className="text-lg font-semibold text-dark-100">JAMES GIRARDO</p>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-4">
          <div className="relative bg-blue-50 p-8">
            <p className="text-left text-light-50">
              I believe all winners of this benefit is as doubtful as I was when
              I first found out about my name been on the winners list, claiming
              mine is something I ordinarily wouldn’t have done but my instinct
              told made me to and I have never regretted following my instinct
              because it led me to the greatest success of my life.
            </p>
            <div className="absolute w-[18px] h-[18px] -bottom-[8px] left-8 rotate-45 bg-blue-50" />
          </div>
          <div className="flex items-center gap-2">
            <Image src="/img11.png" alt="img13" width={60} height={60} />
            <p className="text-lg font-semibold text-dark-100">KINDA JANE</p>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-4">
          <div className="relative bg-blue-50 p-8">
            <p className="text-left text-light-50">
              I was in a very deep dept when I found out about this United
              Nations Development Programme Grants, I have lost all hope of been
              able to pay off the dept, I have resigned to losing my home and
              business to the dept, but the benefit safe me from that. Now I
              have been able to pay off my debt, kept my house and invested more
              on my business.
            </p>
            <div className="absolute w-[18px] h-[18px] -bottom-[8px] left-8 rotate-45 bg-blue-50" />
          </div>
          <div className="flex items-center gap-2">
            <Image src="/img10.png" alt="img13" width={60} height={60} />
            <p className="text-lg font-semibold text-dark-100">FAYE THOMPSON</p>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-4">
          <div className="relative bg-blue-50 p-8">
            <p className="text-left text-light-50">
              I just lost my job at the time I found out about the United
              Nations Development Programme Grants, my three children in college
              were almost at the verge of dropping out, all hope was I lost but
              all thanks to the United Nations Development Programme Grants. I
              was able to pay off my three children college fee till they
              graduate and also have enough for myself to start a good business,
              I wont to work for anymore.
            </p>
            <div className="absolute w-[18px] h-[18px] -bottom-[8px] left-8 rotate-45 bg-blue-50" />
          </div>
          <div className="flex items-center gap-2">
            <Image src="/img12.png" alt="img13" width={60} height={60} />
            <p className="text-lg font-semibold text-dark-100">DOUG MOORE</p>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-4">
          <div className="relative bg-blue-50 p-8">
            <p className="text-left text-light-50">
              Even though I don’t need the benefit because I am working and I
              get a good pay but when I learnt about the United Nations
              Development Programme Grants I though it is a fake beneficiary
              program but I applied for it while expecting nothing in return but
              to my greatest astonishment I got my benefit delivered to me, I
              was like one of the 10 world wonders.
            </p>
            <div className="absolute w-[18px] h-[18px] -bottom-[8px] left-8 rotate-45 bg-blue-50" />
          </div>
          <div className="flex items-center gap-2">
            <Image src="/img9.png" alt="img13" width={60} height={60} />
            <p className="text-lg font-semibold text-dark-100">
              THEO DAVIS MCGEE
            </p>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};
