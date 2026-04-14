import React from 'react'
import Navbar from './navbar'

const HeroText = () => {
  return (
    <div
      className="
        flex w-full h-screen items-center justify-end text-black overflow-hidden z-50
      "
    >
      <div
        className="
          flex flex-col font-black uppercase tracking-tighter text-right pr-40 leading-none
          [perspective:1000px] [perspective-origin:50%_50%]
        "
      >
        {/* EXPERIENCE */}
        <h1
          className="
            text-[130px]
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
            text-[130px]
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