import React from "react";

const ExperienceHero = () => {
  return (
    <section className="w-full bg-blue-700 py-56 relative">

      {/* WRAPPER */}
      <div className="w-full relative flex justify-center">

        {/* IMAGE */}
        <div className="w-full h-[50vh] overflow-hidden">
          <img
            src="/images/hero.jpg"
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT OVERLAY */}
        <h1
          className="
            absolute 
            right-[10%] 
            top-0 
            translate-y-[-50%]
            w-3xl

            text-[80px] md:text-[120px]
            font-black uppercase tracking-none leading-none

            text-transparent
            [-webkit-text-stroke:4px_white]
            [paint-order:stroke]

          "
        >
          LUNAR
          INTERACTIVE
        </h1>

      </div>

    </section>
  );
};

export default ExperienceHero;