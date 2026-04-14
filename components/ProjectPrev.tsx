"use client";

import React, { useState } from "react";

const ProjectPrev = () => {
    return (
        <section className="w-full bg-blue-700 flex items-center justify-center py-20 px-8">
            <div className="w-[80%] flex items-start gap-20">

                {/* IMAGE */}
                <div className="w-[78%] overflow-hidden shadow-2xl">
                    <img
                        src="/images/project/preview.webp"
                        alt="slide"
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* RIGHT SIDE (NAIK KE ATAS) */}
                <div className="w-[30%] flex flex-col gap-6">
                    <h3 className="text-white text-2xl font-semibold">
                        Lunar Company Profile
                    </h3>
                    <p className="text-gray-300 text-lg">
                        Website company profile berbasis sistem terintegrasi dengan backend untuk manajemen konten, autentikasi, dan pengolahan data secara efisien.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ProjectPrev;