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
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="w-full min-h-screen bg-blue-700 flex items-center justify-center">

      {/* CONTAINER SAMA DENGAN ATAS */}
      <div className="w-[80%] flex items-center justify-center gap-20">

        {/* IMAGE (DIKASIH OFFSET BIKIN CENTER FEEL) */}
        <div className="w-[78%] pl-4w aspect-[4/3] overflow-hidden shadow-2xl translate-x-6">
          <img
            src={slides[index].image}
            alt="slide"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[30%] flex flex-col gap-6">

          {/* NAV */}
          <div className="flex items-center gap-4 text-sm">
            <button onClick={prev}>←</button>
            <span>
              {index + 1} / {slides.length}
            </span>
            <button onClick={next}>→</button>
          </div>

          {/* DESKRIPSI */}
          <div className="space-y-2 text-sm text-gray-200 leading-relaxed">
            <p className="font-medium">
              make it easy
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default SliderBanner;