import React from 'react'

const ExperienceDesc = () => {
    return (
        <section className="w-full bg-blue-700 text-white flex justify-center items-center px-6 sm:px-10 md:px-16 py-16 sm:py-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16 w-full max-w-6xl">

                {/* LEFT */}
                <div className="space-y-4 sm:space-y-6 transition-all duration-500">
                    <h2 className="text-lg sm:text-xl font-semibold leading-snug">
                        Lunar Interactive adalah studio digital yang bergerak di bidang
                        game-based learning.
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed">
                        Kami mengembangkan pengalaman belajar yang interaktif dan
                        menyenangkan melalui pendekatan berbasis game, menggabungkan
                        teknologi dengan edukasi untuk menciptakan dampak yang lebih efektif.
                    </p>
                </div>

                {/* MIDDLE */}
                <div className="space-y-4 sm:space-y-6 transition-all duration-500">
                    <p className="text-sm sm:text-base leading-relaxed">
                        Setiap sistem dikembangkan dengan arsitektur modular yang berfokus
                        pada stabilitas dan skalabilitas. Saya membangun back-end yang terstruktur dan mudah dikembangkan.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="space-y-5 sm:space-y-6 transition-all duration-500">
                    <div>
                        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest opacity-60 mb-1">Peran</p>
                        <p className="text-sm sm:text-base">
                            Back-end Developer
                        </p>
                    </div>

                    <div>
                        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest opacity-60 mb-1">Fokus</p>
                        <p className="text-sm sm:text-base">
                            Sistem Backend, API Development, Database Management
                        </p>
                    </div>

                    <div>
                        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest opacity-60 mb-1">Teknologi</p>
                        <p className="text-sm sm:text-base">
                            Laravel, MySQL
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ExperienceDesc