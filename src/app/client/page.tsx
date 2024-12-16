"use client";

// import { serverSideFunction } from "@/lib/server-utils";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
import { useTheme } from "@/context/theme";
import { clientSideFunction } from "@/lib/client-utils";

export default function Page() {
  //Below code will throw a error since we trying to invoke a server function inside a client component
  // const result = serverSideFunction();

  const {
    colors: { primary },
  } = useTheme();

  // const settings = {
  //   dots: true,
  // };

  const result = clientSideFunction();

  return (
    <>
      <h1 style={{ color: primary }}>Client page</h1>
      <p>{result}</p>
      {/* <div className="image-slider-container">
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
      </div> */}
    </>
  );
}
