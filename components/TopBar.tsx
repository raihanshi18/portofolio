'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

type NavItem = {
    id: string
    number: string
    label: string
}

const navItems: NavItem[] = [
    { id: 'about', number: '01', label: 'about' },
    { id: 'journal', number: '02', label: 'journal' },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeItem, setActiveItem] = useState<string | null>(null)
    const [visibleItem, setVisibleItem] = useState<string | null>(null)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const pathname = usePathname()
    const isExperience = pathname === '/experience'
    const isProject = pathname === '/project'

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
            )
            const atBottom = window.innerHeight + window.scrollY >= scrollHeight - 50
            if (atBottom) {
                setIsScrolled(false)
            } else {
                setIsScrolled(window.scrollY > 50)
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleSetActive = (id: string) => {
        if (id === activeItem) return

        if (activeItem && activeItem !== id) {
            setIsTransitioning(true)
            setTimeout(() => {
                setActiveItem(id)
                setVisibleItem(id)
                setIsTransitioning(false)
            }, 350)
        } else {
            setActiveItem(id)
            setVisibleItem(id)
        }
    }

    const handleClose = () => {
        setIsOpen(false)
        setIsTransitioning(true)
        setTimeout(() => {
            setActiveItem(null)
            setVisibleItem(null)
            setIsTransitioning(false)
        }, 400)
    }

    return (
        <>
            {/* ── OVERLAY MENU ── */}
            <div
                className={`fixed inset-0 z-40 bg-linear-to-r from-blue-700 to-blue-600/60 text-white font-clash overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isOpen
                    ? 'translate-y-0 opacity-100 pointer-events-auto'
                    : 'translate-y-full opacity-0 pointer-events-none'
                    }`}
            >
                <div className="px-24 pt-14 flex items-start gap-16">
                    <h1
                        onClick={handleClose}
                        className="text-7xl font-black leading-none cursor-pointer hover:text-transparent hover:[-webkit-text-stroke:2px_white] hover:[paint-order:stroke] duration-500 select-none"
                    >
                        HAN<br />ABDUR<br />SHI.
                    </h1>

                    <div className="flex flex-col gap-2 mt-2">
                        {navItems.map((item) => {
                            const isActive = activeItem === item.id
                            return (
                                <p
                                    key={item.id}
                                    onClick={() => !isActive && handleSetActive(item.id)}
                                    className={`text-md transition-transform flex items-center gap-3 select-none ${isActive
                                        ? 'cursor-default hover:scale-95'
                                        : 'cursor-pointer hover:scale-95'
                                        }`}
                                >
                                    <span className="opacity-60">{item.number}</span>
                                    {item.label}
                                    {isActive && (
                                        <span className="ml-1 tracking-widest opacity-80">—</span>
                                    )}
                                </p>
                            )
                        })}
                    </div>
                </div>

                <div className="px-24 mt-12 overflow-hidden">
                    {/* ABOUT */}
                    <div className={`transition-all duration-350 ease-[cubic-bezier(0.76,0,0.24,1)] ${activeItem === 'about' && !isTransitioning
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-6 pointer-events-none absolute'
                        }`}>
                        <div className="max-w-xl">
                            <div className="overflow-hidden">
                                <p className={`text-4xl font-bold mb-4 transition-all duration-500 delay-[50ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${activeItem === 'about' && !isTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                                    About
                                </p>
                            </div>
                            <div className="overflow-hidden">
                                <p className={`text-lg leading-relaxed transition-all duration-500 delay-[120ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${activeItem === 'about' && !isTransitioning ? 'translate-y-0 opacity-80' : 'translate-y-full opacity-0'}`}>
                                    ackend Developer berbasis di Bandung, Jawa Barat.
                                    Berfokus pada pengembangan sistem yang efisien, scalable, dan terstruktur dengan baik.
                                    Memiliki pengalaman menggunakan teknologi seperti JavaScript, PHP, Laravel, dan MySQL untuk membangun API serta mengelola database secara optimal.

                                    Saya memiliki ketertarikan dalam merancang arsitektur backend, mengoptimalkan performa aplikasi, serta memastikan keamanan dan 
                                    keandalan sistem. Selain itu, saya terus belajar dan mengeksplorasi teknologi baru untuk menciptakan solusi backend yang robust 
                                    dan siap digunakan di dunia nyata.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* JOURNAL */}
                    <div className={`transition-all duration-350 ease-[cubic-bezier(0.76,0,0.24,1)] ${activeItem === 'journal' && !isTransitioning
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-6 pointer-events-none absolute'
                        }`}>
                        <div className="max-w-xl">
                            <div className="overflow-hidden">
                                <p className={`text-4xl font-bold mb-4 transition-all duration-500 delay-[50ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${activeItem === 'journal' && !isTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                                    Journal
                                </p>
                            </div>
                            <div className="overflow-hidden">
                                <p className={`text-lg leading-relaxed transition-all duration-500 delay-[120ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${activeItem === 'journal' && !isTransitioning ? 'translate-y-0 opacity-80' : 'translate-y-full opacity-0'}`}>
                                    Thoughts, experiments, and notes from the studio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom info bar dalam overlay */}
                <div className={`absolute bottom-0 left-0 w-full px-24 py-10 transition-all duration-700 delay-200 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="flex justify-between items-start text-md">
                        <div className="grid grid-cols-3 gap-x-20 gap-y-2">
                            <p>Student of Software Engineering</p>
                            <p>Bandung, West Java</p>
                            <p />
                            <p>Back-end Developer</p>
                            <p className="font-medium hover:scale-95 cursor-pointer transition-transform">
                                <a href="mailto:raihanshiddiq18@gmail.com">raihanshiddiq18@gmail.com</a>
                            </p>
                        </div>
                        <div className="text-left text-md space-y-1">
                            <p className="hover:scale-95 cursor-pointer transition-transform">
                                <a href="https://github.com/raihanshi18"><span className="mr-4 opacity-60">03</span>github</a>
                            </p>
                            <p className="hover:scale-95 cursor-pointer transition-transform">
                                <a href="https://www.instagram.com/raihanshi_/"><span className="mr-4 opacity-60">04</span>instagram</a>
                            </p>
                            <p className="hover:scale-95 cursor-pointer transition-transform">
                                <a href="https://www.linkedin.com/in/raihanshi/"><span className="mr-4 opacity-60">05</span>linkedin</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── CLOSE BUTTON ── */}
            <button
                onClick={handleClose}
                className={`fixed top-8 right-10 z-50 text-white font-clash text-2xl transition-all duration-500 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0 pointer-events-none'}`}
                aria-label="Close menu"
            >
                ✕
            </button>

            {/* ── LOGO KIRI ATAS — hanya di /experience ── */}
            {(isExperience || isProject) && (
                <div className={`fixed top-0 left-0 px-24 pt-10 z-50 text-white font-clash transition-all duration-500 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <h1 className={`text-7xl font-black leading-none cursor-pointer select-none transition-all duration-500 ${isScrolled
                            ? 'text-transparent [-webkit-text-stroke:2px_white] [paint-order:stroke]'
                            : 'hover:text-transparent hover:[-webkit-text-stroke:2px_white] hover:[paint-order:stroke]'
                        }`}>
                        <a href="/">HAN<br />ABDUR<br />SHI.</a>
                    </h1>
                </div>
            )}

            {/* ── BOTTOM NAVBAR ── */}
            <nav
                className={`fixed bottom-0 left-0 w-full px-24 py-10 mb-2 text-white z-50 font-clash transition-all duration-500 ${isOpen || isScrolled
                        ? 'opacity-0 pointer-events-none translate-y-4'
                        : 'opacity-100 translate-y-0'
                    }`}
            >
                <div>
                    {!isExperience || isProject && (
                        <div className="w-[400px]">
                            <h1 className="text-7xl font-black leading-none pb-4 cursor-pointer hover:text-transparent hover:[-webkit-text-stroke:2px_white] hover:[paint-order:stroke] duration-500 select-none">
                                <a href="/">HAN<br />ABDUR<br />SHI.</a>
                            </h1>
                        </div>
                    )}

                    <div className="flex justify-between items-start">
                        <div>
                            <div className={`${!isExperience ? 'mt-6' : ''} text-md grid grid-cols-3 gap-x-20 gap-y-2`}>
                                <p>Student of Software Engineering</p>
                                <p>Bandung, West Java</p>
                                <p
                                    className="hover:scale-95 cursor-pointer transition-transform"
                                    onClick={() => { setIsOpen(true); setActiveItem('about'); setVisibleItem('about') }}
                                >
                                    <span className="mr-4 opacity-60">01</span>about
                                </p>
                                <p>Back-end Developer</p>
                                <p className="font-medium hover:scale-95 cursor-pointer transition-transform">
                                    <a href="mailto:raihanshiddiq18@gmail.com">raihanshiddiq18@gmail.com</a>
                                </p>
                                <p
                                    className="hover:scale-95 cursor-pointer transition-transform"
                                    onClick={() => { setIsOpen(true); setActiveItem('journal'); setVisibleItem('journal') }}
                                >
                                    <span className="mr-4 opacity-60">02</span>journal
                                </p>
                            </div>
                        </div>

                        <div className="text-left text-md space-y-1">
                            <p className="hover:scale-95 cursor-pointer transition-transform">
                                <a href="https://github.com/raihanshi18"><span className="mr-4 opacity-60">03</span>github</a>
                            </p>
                            <p className="hover:scale-95 cursor-pointer transition-transform">
                                <a href="https://www.instagram.com/raihanshi_/"><span className="mr-4 opacity-60">04</span>instagram</a>
                            </p>
                            <p className="hover:scale-95 cursor-pointer transition-transform">
                                <a href="https://www.linkedin.com/in/raihanshi/"><span className="mr-4 opacity-60">05</span>linkedin</a>
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar