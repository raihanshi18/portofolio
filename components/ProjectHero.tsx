import React from "react";

const ProjectHero = () => {
  return (
    <section className="w-full bg-blue-700 pt-36 pb-24 sm:pt-48 sm:pb-36 md:pt-60 md:pb-48 lg:pt-72 lg:pb-56 relative">

      {/* WRAPPER */}
      <div className="w-full relative flex justify-center">

        {/* IMAGE */}
        <div className="w-full h-[35vh] sm:h-[40vh] md:h-[50vh] overflow-hidden">
          <img
            src="/images/hero.jpg"
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT OVERLAY — anchor kanan, text-right supaya tidak lari ke kiri */}
        <h1
          className="
            absolute
            right-0
            top-0
            -translate-y-1/2
            pr-4 sm:pr-6 md:pr-8 lg:pr-10

            text-[36px] sm:text-[52px] md:text-[72px] lg:text-[96px] xl:text-[120px]
            font-black uppercase leading-none tracking-tight text-right

            text-transparent
            [-webkit-text-stroke:2px_white] md:[-webkit-text-stroke:3px_white] lg:[-webkit-text-stroke:4px_white]
            [paint-order:stroke]

            max-w-[60%] sm:max-w-[55%] md:max-w-[60%] lg:max-w-[65%]
          "
        >
          LUNAR<br />COMPROFILE
        </h1>

      </div>

    </section>
  );
};

export default ProjectHero;