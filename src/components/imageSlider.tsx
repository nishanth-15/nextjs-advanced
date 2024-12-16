"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ImageSlider() {
  const settings = {
    dots: true,
  };

  return (
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
  );
}
