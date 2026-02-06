"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
const Viewer = dynamic(() => import("react-viewer"), { ssr: false });

export const RecentEventSection = () => {
  //
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedImg, setSelectedImg] = useState<any>(null);
  //
  interface ImageType {
    src: string;
    alt: string;
  }
  const images = [
    { src: "/img21.jpg", alt: "img21" },
    { src: "/img19.jpg", alt: "img19" },
    { src: "/img20.jpg", alt: "img20" },
    { src: "/img14.jpg", alt: "img14" },
    { src: "/img17.jpg", alt: "img17" },
    { src: "/img16.jpg", alt: "img16" },
    { src: "/img15.jpg", alt: "img15" },
    { src: "/img18.jpg", alt: "img18" },
    { src: "/img23.jpg", alt: "img23" },
    { src: "/img24.jpg", alt: "img24" },
    { src: "/img25.jpg", alt: "img25" },
    { src: "/img26.jpg", alt: "img26" },
    { src: "/img27.jpg", alt: "img27" },
    { src: "/img28.jpg", alt: "img28" },
    { src: "/img29.jpg", alt: "img29" },
    { src: "/img30.jpg", alt: "img30" },
    { src: "/img31.jpg", alt: "img31" },
    { src: "/img32.jpg", alt: "img32" },
    { src: "/img33.jpg", alt: "img33" },
    { src: "/img34.jpg", alt: "img34" },
    { src: "/img35.jpg", alt: "img35" },
    { src: "/img36.jpg", alt: "img36" },
    { src: "/img37.jpg", alt: "img37" },
    { src: "/img38.jpg", alt: "img38" },
  ];
  //
  return (
    <div className="mt-[90px] w-[98%] mx-auto">
      <h3 className="text-center font-black text-[22px] 476:text-[26px] md:text-[32px] text-dark-100">
        Our Recent Winners and Event
      </h3>
      {/*  */}
      <div className="w-[94%] md:w-[89%] lg:w-[86%] mx-auto mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center">
        {images.map((image: ImageType, index: number) => (
          <Image
            src={image.src}
            alt={`image ${index + 1}`}
            width={1000}
            height={600}
            key={index}
            className="w-full h-[150px] !object-cover cursor-pointer"
            onClick={() => {
              setVisible(true);
              setSelectedImg(image);
            }}
          />
        ))}
      </div>
      <Viewer
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        images={[selectedImg, ...images]}
        noImgDetails
        downloadable
      />
    </div>
  );
};
