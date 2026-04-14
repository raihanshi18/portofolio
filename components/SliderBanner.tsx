"use client";

import React, { useState } from "react";

const slides = [
  { id: 1, image: "/images/experience/slide1.jpg" },
  { id: 2, image: "/images/experience/slide2.jpg" },
  { id: 3, image: "/images/experience/slide3.jpg" },
  { id: 4, image: "/images/experience/slide4.jpg" },
];

const SliderBanner = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="w-full min-h-screen bg-blue-700 flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20">

      {/* CONTAINER */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">

        {/* IMAGE */}
        <div className="w-full md:w-[70%] aspect-[4/3] overflow-hidden shadow-2xl">
          <img
            src={slides[index].image}
            alt={`slide ${index + 1}`}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-[30%] flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-4 md:gap-6">

          {/* NAV */}
          <div className="flex items-center gap-4 text-sm sm:text-base">
            <button
              onClick={prev}
              className="hover:opacity-60 transition-opacity duration-200 text-xl"
              aria-label="Previous"
            >
              ←
            </button>
            <span className="tabular-nums">
              {index + 1} / {slides.length}
            </span>
            <button
              onClick={next}
              className="hover:opacity-60 transition-opacity duration-200 text-xl"
              aria-label="Next"
            >
              →
            </button>
          </div>

          {/* DESKRIPSI */}
          <div className="space-y-2 text-sm sm:text-base text-gray-200 leading-relaxed text-right md:text-left">
            <p className="font-medium">make it easy</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default SliderBanner;