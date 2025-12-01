import React, { useState } from "react";
import { carouselImages } from "../constants/carouselImages";
import NavigateButton from "../ui/NavigateButton";

const CarouselButton = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center justify-center w-10 h-10 md:w-16 md:h-12 rounded-full border border-black hover:bg-white/20 transition"
    aria-label={direction === "prev" ? "Previous" : "Next"}
  >
    {direction === "prev" ? <span className="text-3xl">←</span> : <span className="text-3xl">→</span>}
  </button>
);

const Carousel = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const handlePrev = () =>
    setCenterIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));

  const handleNext = () =>
    setCenterIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));

  const visibleImages = () => {
    const arr = [];
    for (let i = -2; i <= 2; i++) {
      arr.push({
        ...carouselImages[(centerIndex + i + carouselImages.length) % carouselImages.length],
        pos: i,
      });
    }
    return arr;
  };

  const getStyle = (pos) => {
    const base = "absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-out";
    // Equal gaps above lg screens, more compact below
    const styles = {
      0: `${base} left-1/2 -translate-x-1/2 scale-100 z-30 w-[260px] h-[360px] lg:w-[350px] lg:h-[520px]`,
      "-1": `${base} left-[18%] scale-90 z-20 w-[220px] h-[300px] lg:left-[18%] lg:w-[300px] lg:h-[420px]`,
      1: `${base} right-[18%] scale-90 z-20 w-[220px] h-[300px] lg:right-[18%] lg:w-[300px] lg:h-[420px]`,
      "-2": `${base} left-[4%] scale-75 opacity-60 z-10 w-[180px] h-[260px] lg:left-[4%] lg:w-[240px] lg:h-[340px]`,
      2: `${base} right-[4%] scale-75 opacity-60 z-10 w-[180px] h-[260px] lg:right-[4%] lg:w-[240px] lg:h-[340px]`,
    };
    return styles[pos] || base;
  };

  return (
    <div className="py-16 bg-half-split w-full flex flex-col items-center justify-start">
      <div className="relative w-full max-w-[1400px] h-[650px] overflow-hidden">
        {visibleImages().map((img, index) => (
          <div key={`${img.id}-${index}`} className={getStyle(img.pos)}>
            <div className="w-full h-full overflow-hidden rounded-3xl shadow-2xl bg-white">
              <img src={img.url} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        ))}
      </div>

      <div className="container flex items-start justify-between">
        <div className="flex gap-4">
          <CarouselButton onClick={handlePrev} direction="prev" />
          <CarouselButton onClick={handleNext} direction="next" />
        </div>

        <NavigateButton text="VIEW MORE PHOTOS" to="/photos" />
      </div>
    </div>
  );
};

export default Carousel;
