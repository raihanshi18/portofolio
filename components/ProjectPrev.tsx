"use client";

import React from "react";

const ProjectPrev = () => {
    return (
        <section className="w-full bg-blue-700 flex items-center justify-center py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16 lg:px-24">
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-start gap-8 sm:gap-12 md:gap-16 lg:gap-20">

                {/* IMAGE */}
                <div className="w-full md:w-[70%] overflow-hidden shadow-2xl">
                    <img
                        src="/images/project/preview.webp"
                        alt="preview"
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* RIGHT SIDE */}
                <div className="w-full md:w-[30%] flex flex-col gap-4 sm:gap-6">
                    <h3 className="text-white text-xl sm:text-2xl font-semibold">
                        Lunar Company Profile
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                        Website company profile berbasis sistem terintegrasi dengan backend untuk manajemen konten,
                        autentikasi, dan pengolahan data secara efisien.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ProjectPrev;