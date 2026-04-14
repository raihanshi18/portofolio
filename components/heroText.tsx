import React from 'react'

const HeroText = () => {
  return (
    <div className="flex w-full h-screen items-center justify-end text-black overflow-hidden z-50">
      <div
        className="
          flex flex-col font-black uppercase tracking-tighter text-right
          pr-6 sm:pr-10 md:pr-20 lg:pr-40
          leading-none
          [perspective:1000px] [perspective-origin:50%_50%]
        "
      >
        {/* EXPERIENCE */}
        <h1
          className="
            text-[42px] sm:text-[60px] md:text-[80px] lg:text-[110px] xl:text-[130px]
            transition-all duration-500
            origin-right
            [transform:rotateX(-2deg)_rotateY(-28deg)]
            hover:[transform:rotateX(-2deg)_rotateY(-10deg)]
            hover:text-transparent
            hover:[-webkit-text-stroke:2px_black]
            hover:[paint-order:stroke]
          "
        >
          <a href="/experience">EXPERIENCE</a>
        </h1>

        {/* PROJECT */}
        <h1
          className="
            text-[42px] sm:text-[60px] md:text-[80px] lg:text-[110px] xl:text-[130px]
            transition-all duration-500
            origin-right
            [transform:rotateX(-2deg)_rotateY(-28deg)]
            hover:[transform:rotateX(-2deg)_rotateY(-10deg)]
            hover:text-transparent
            hover:[-webkit-text-stroke:2px_black]
            hover:[paint-order:stroke]
          "
        >
          <a href="/project">PROJECT</a>
        </h1>
      </div>
    </div>
  )
}

export default HeroText