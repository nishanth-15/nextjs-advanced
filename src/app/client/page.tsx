"use client";

// import { serverSideFunction } from "@/lib/server-utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Page() {
  //Below code will throw a error since we trying to invoke a server function inside a client component
  // const result = serverSideFunction();

  const settings = {
    dots: true,
  };
  
  return (
    <>
      <h1>Client page</h1>
      {/* <p>{result}</p> */}
      <div className="image-slider-container">
        <Slider {...settings}>
          {Array.from({ length: 4 }).map((_, key) => {
            return (
              <div key={key}>
                <Image
                  height={200}
                  width={400}
                  alt="Picsum photo"
                  src="https://picsum.photos/400/200"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
