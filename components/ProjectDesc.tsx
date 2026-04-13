import React from 'react'

const ProjectDesc = () => {
    return (
        <section className="w-full bg-blue-700 text-white justify-center items-center flex py-36 px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-[80%]">

                {/* LEFT */}
                <div className="space-y-6 group transition-all duration-500">
                    <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                        Membangun website company profile yang merepresentasikan identitas dan nilai brand secara digital.
                    </h2>
                    <p className="text-xl leading-relaxed">
                        Website ini dirancang sebagai pusat informasi yang terstruktur, menghadirkan
                        pengalaman yang intuitif sekaligus mencerminkan karakter dan visi Lunar Interactive secara menyeluruh.
                    </p>
                </div>

                {/* MIDDLE */}
                <div className="space-y-6 group transition-all duration-500">
                    <p className="text-xl leading-relaxed">
                        Sistem dikembangkan menggunakan pendekatan modular dengan backend yang terstruktur,
                        memastikan performa tinggi, fleksibilitas, dan kemudahan dalam pengembangan lanjutan.
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

export default ProjectDesc