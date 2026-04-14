import Navbar from "@/components/navbar";
import ProjectDesc from "@/components/ProjectDesc";
import ProjectHero from "@/components/ProjectHero";
import ProjectPrev from "@/components/ProjectPrev";
import SliderBanner from "@/components/SliderBanner";
import React from "react";

const Page = () => {
    return (
        <main className="w-full bg-blue-700 text-white overflow-x-hidden">

            {/* HERO */}
            <ProjectHero />

            {/* DESC */}
            <ProjectDesc />

            {/* PREVIEW */}
            <ProjectPrev />

            {/* SLIDER */}
            <SliderBanner />

            {/* NEXT — EXPERIENCE */}
            <section className="w-full flex justify-end py-24 sm:py-32 md:py-40 lg:py-52 px-6 sm:px-16 md:px-24 lg:px-40">
                <div className="flex flex-col font-black uppercase tracking-tighter text-right leading-none [perspective:1000px]">

                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-3 sm:mb-4">
                        Next
                    </span>

                    <h1
                        className="
                            cursor-pointer
                            text-[60px] sm:text-[90px] md:text-[120px] lg:text-[160px] xl:text-[200px]
                            text-transparent
                            [-webkit-text-stroke:1.5px_white] sm:[-webkit-text-stroke:2px_white]
                            [paint-order:stroke]
                            transition-all duration-500
                            origin-right
                            [transform:rotateX(-2deg)_rotateY(-28deg)]
                            hover:[transform:rotateX(-2deg)_rotateY(-10deg)]
                            hover:text-white
                        "
                    >
                        <a href="/experience">EXPERIENCE</a>
                    </h1>

                </div>
            </section>

            {/* NAVBAR */}
            <Navbar />

        </main>
    );
};

export default Page;