import React from 'react'

const ExperienceDesc = () => {
    return (
        <section className="w-full bg-blue-700 text-white justify-center items-center flex py-36 px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-[80%]">

                {/* LEFT */}
                <div className="space-y-6 group transition-all duration-500">
                    <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                        Lunar Interactive adalah studio digital yang bergerak di bidang
                        game-based learning.
                    </h2>
                    <p className="text-xl leading-relaxed">
                        Kami mengembangkan pengalaman belajar yang interaktif dan
                        menyenangkan melalui pendekatan berbasis game, menggabungkan
                        teknologi dengan edukasi untuk menciptakan dampak yang lebih efektif.
                    </p>
                </div>

                {/* MIDDLE */}
                <div className="space-y-6 group transition-all duration-500">
                    <p className="text-xl leading-relaxed">
                        Setiap sistem dikembangkan dengan arsitektur modular yang berfokus
                        pada stabilitas dan skalabilitas. Saya membangun back-end yang terstruktur dan mudah dikembangkan.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="space-y-6 group transition-all duration-500">
                    <div>
                        <p className="text-xl font-bold">Website</p>
                        <h3 className="text-lg font-medium">
                            www.lunarinteractive.dev
                        </h3>
                    </div>

                    <div>
                        <p className="text-xl font-bold">Peran</p>
                        <p className="">
                            Back-end Developer
                        </p>
                    </div>

                    <div>
                        <p className="text-xl font-bold">Fokus</p>
                        <p className="">
                            Sistem Backend, API Development, Database Management
                        </p>
                    </div>

                    <div>
                        <p className="text-xl font-bold">Teknologi</p>
                        <p className="">
                            Laravel, MySQL
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ExperienceDesc