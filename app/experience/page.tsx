import ExperienceDesc from "@/components/ExperienceDesc";
import ExperienceHero from "@/components/ExperienceHero";
import Navbar from "@/components/navbar";
import SliderBanner from "@/components/SliderBanner";
import TopBar from "@/components/TopBar";
import React from "react";

const Page = () => {
    return (
        <main className="w-full bg-blue-700 text-white overflow-x-hidden">

            {/* <div className="w-[400px] fixed font-clash px-28 pt-10 z-50">
                <h1 className="text-7xl font-black leading-none cursor-pointer hover:text-transparent hover:[-webkit-text-stroke:2px_white] hover:[paint-order:stroke] duration-500 select-none">
                    <a href="/"></a>HAN<br />ABDUR<br />SHI.
                </h1>
            </div> */}

            {/* HERO */}
            <ExperienceHero />

            {/* EXPERIENCE */}
            <ExperienceDesc />

            {/* SLIDER */}
            <SliderBanner />

            {/* NEXT PROJECT */}
            <section className="w-full flex justify-end pt-28 px-40 pb-96">

                <div className="w-[80%] flex justify-end items-end">

                    <div className="flex flex-col font-black uppercase tracking-tighter text-right leading-none [perspective:1000px]">

                        <span className="text-6xl text-white mb-4">
                            Next
                        </span>

                        <h1
                            className="
                cursor-pointer
                text-[160px] md:text-[200px]
                text-transparent
                [-webkit-text-stroke:2px_white]
                [paint-order:stroke]
                transition-all duration-500
                origin-right
                [transform:rotateX(-2deg)_rotateY(-28deg)]
                hover:[transform:rotateX(-2deg)_rotateY(-10deg)]
                hover:text-white
              "
                        >
                            <a href="/project">PROJECT</a>
                        </h1>

                    </div>

                </div>

            </section>

            {/* NAVBAR */}
            <TopBar />

        </main>
    );
};

export default Page;