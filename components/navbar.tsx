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
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const pathname = usePathname()
    const isExperience = pathname === '/experience'
    const isProject = pathname === '/project'
    const isHome = pathname === '/'

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
            )
            const atBottom = window.innerHeight + window.scrollY >= scrollHeight - 50
            setIsScrolled(atBottom ? false : window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Lock body scroll saat overlay terbuka
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    const handleSetActive = (id: string) => {
        if (id === activeItem) return
        if (activeItem && activeItem !== id) {
            setIsTransitioning(true)
            setTimeout(() => {
                setActiveItem(id)
                setIsTransitioning(false)
            }, 350)
        } else {
            setActiveItem(id)
        }
    }

    const handleOpen = (id?: string) => {
        setIsOpen(true)
        if (id) setActiveItem(id)
    }

    const handleClose = () => {
        setIsOpen(false)
        setIsTransitioning(true)
        setTimeout(() => {
            setActiveItem(null)
            setIsTransitioning(false)
        }, 400)
    }

    return (
        <>
            {/* ═══════════════════════════════════════
                OVERLAY MENU — semua breakpoint
            ═══════════════════════════════════════ */}
            <div
                className={`fixed inset-0 z-40 bg-gradient-to-br from-blue-700 to-blue-600/70 text-white font-clash overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    isOpen
                        ? 'translate-y-0 opacity-100 pointer-events-auto'
                        : 'translate-y-full opacity-0 pointer-events-none'
                }`}
            >
                {/* Overlay header: logo + nav items */}
                <div className="px-6 sm:px-12 lg:px-24 pt-10 sm:pt-14 flex items-start gap-10 sm:gap-16">
                    <h1
                        onClick={handleClose}
                        className="text-4xl sm:text-5xl font-black leading-none cursor-pointer hover:text-transparent hover:[-webkit-text-stroke:2px_white] hover:[paint-order:stroke] duration-500 select-none"
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
                                    className={`text-sm transition-transform flex items-center gap-3 select-none ${
                                        isActive ? 'cursor-default' : 'cursor-pointer hover:scale-95'
                                    }`}
                                >
                                    <span className="opacity-60">{item.number}</span>
                                    {item.label}
                                    {isActive && <span className="ml-1 tracking-widest opacity-80">—</span>}
                                </p>
                            )
                        })}
                    </div>
                </div>

                {/* Overlay content panels */}
                <div className="px-6 sm:px-12 lg:px-24 mt-10 sm:mt-14 overflow-hidden">
                    {/* ABOUT */}
                    <div className={`transition-all duration-350 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                        activeItem === 'about' && !isTransitioning
                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 translate-y-6 pointer-events-none absolute'
                    }`}>
                        <div className="max-w-xl">
                            <p className={`text-3xl sm:text-4xl font-bold mb-4 transition-all duration-500 delay-[50ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
                                activeItem === 'about' && !isTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                            }`}>
                                About
                            </p>
                            <p className={`text-xs sm:text-sm leading-relaxed transition-all duration-500 delay-[120ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
                                activeItem === 'about' && !isTransitioning ? 'translate-y-0 opacity-80' : 'translate-y-full opacity-0'
                            }`}>
                                Backend Developer berbasis di Bandung, Jawa Barat.
                                Berfokus pada pengembangan sistem yang efisien, scalable, dan terstruktur dengan baik.
                                Memiliki pengalaman menggunakan teknologi seperti JavaScript, PHP, Laravel, dan MySQL
                                untuk membangun API serta mengelola database secara optimal. Saya memiliki ketertarikan
                                dalam merancang arsitektur backend, mengoptimalkan performa aplikasi, serta memastikan
                                keamanan dan keandalan sistem.
                            </p>
                        </div>
                    </div>

                    {/* JOURNAL */}
                    <div className={`transition-all duration-350 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                        activeItem === 'journal' && !isTransitioning
                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 translate-y-6 pointer-events-none absolute'
                    }`}>
                        <div className="max-w-xl">
                            <p className={`text-3xl sm:text-4xl font-bold mb-4 transition-all duration-500 delay-[50ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
                                activeItem === 'journal' && !isTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                            }`}>
                                Journal
                            </p>
                            <p className={`text-sm sm:text-base lg:text-lg leading-relaxed transition-all duration-500 delay-[120ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
                                activeItem === 'journal' && !isTransitioning ? 'translate-y-0 opacity-80' : 'translate-y-full opacity-0'
                            }`}>
                                Kumpulan catatan, eksperimen, dan pembelajaran saya dalam mengembangkan backend—mulai
                                dari API, database, hingga arsitektur sistem yang efisien dan scalable.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Overlay bottom info bar */}
                <div className={`absolute bottom-0 left-0 w-full px-6 sm:px-12 lg:px-24 py-8 sm:py-10 transition-all duration-700 delay-200 ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 sm:gap-0 text-[10px] sm:text-xs">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 sm:gap-x-14 lg:gap-x-20 gap-y-2">
                            <p>Student of Software Engineering</p>
                            <p>Bandung, West Java</p>
                            <p className="hidden sm:block" />
                            <p>Back-end Developer</p>
                            <p className="hover:scale-95 cursor-pointer transition-transform">
                                <a href="mailto:raihanshiddiq18@gmail.com">raihanshiddiq18@gmail.com</a>
                            </p>
                        </div>
                        <div className="space-y-1">
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

            {/* ═══════════════════════════════════════
                CLOSE BUTTON (✕)
            ═══════════════════════════════════════ */}
            <button
                onClick={handleClose}
                className={`fixed top-5 right-5 sm:top-6 sm:right-8 z-50 text-white font-clash text-2xl transition-all duration-500 ${
                    isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0 pointer-events-none'
                }`}
                aria-label="Close menu"
            >
                ✕
            </button>

            {/* ═══════════════════════════════════════
                TOP NAVBAR — sm & md saja (< 1024px)
                Logo kiri, hamburger kanan
                Logo tidak masuk ke dalam overlay/hamburger
            ═══════════════════════════════════════ */}
            <header
                className={`lg:hidden fixed top-0 left-0 w-full z-50 px-6 sm:px-10 py-5 sm:py-6 flex items-center justify-between text-white font-clash transition-all duration-500 ${
                    isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            >
                {/* Logo kiri — tidak ikut masuk hamburger */}
                <h1 className="text-2xl sm:text-3xl font-black leading-none select-none">
                    <a
                        href="/"
                        className="block hover:text-transparent hover:[-webkit-text-stroke:1.5px_white] hover:[paint-order:stroke] duration-300 transition-all"
                    >
                        HAN<br />ABDUR<br />SHI.
                    </a>
                </h1>

                {/* Hamburger button kanan */}
                <button
                    onClick={() => handleOpen()}
                    className="flex flex-col gap-[5px] cursor-pointer group shrink-0"
                    aria-label="Open menu"
                >
                    <span className="block w-6 h-[1.5px] bg-white transition-all duration-300 group-hover:w-8" />
                    <span className="block w-8 h-[1.5px] bg-white" />
                    <span className="block w-5 h-[1.5px] bg-white transition-all duration-300 group-hover:w-8" />
                </button>
            </header>

            {/* ═══════════════════════════════════════
                LOGO KIRI ATAS — /experience & /project, lg+ saja
            ═══════════════════════════════════════ */}
            {(isExperience || isProject) && (
                <div className={`hidden lg:block fixed top-0 left-0 px-24 pt-10 z-50 text-white font-clash transition-all duration-500 ${
                    isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}>
                    <h1 className={`text-5xl font-black leading-none cursor-pointer select-none transition-all duration-500 ${
                        isScrolled
                            ? 'text-transparent [-webkit-text-stroke:2px_white] [paint-order:stroke]'
                            : 'hover:text-transparent hover:[-webkit-text-stroke:2px_white] hover:[paint-order:stroke]'
                    }`}>
                        <a href="/">HAN<br />ABDUR<br />SHI.</a>
                    </h1>
                </div>
            )}

            {/* ═══════════════════════════════════════
                BOTTOM NAVBAR — lg+ saja (≥ 1024px)
            ═══════════════════════════════════════ */}
            <nav
                className={`hidden lg:block fixed bottom-0 left-0 w-full px-24 py-10 mb-2 text-white z-50 font-clash transition-all duration-500 ${
                    isOpen || isScrolled
                        ? 'opacity-0 pointer-events-none translate-y-4'
                        : 'opacity-100 translate-y-0'
                }`}
            >
                <div>
                    {isHome && (
                        <div className="w-[300px]">
                            <h1 className="text-5xl font-black leading-none cursor-pointer hover:text-transparent hover:[-webkit-text-stroke:2px_white] hover:[paint-order:stroke] duration-500 select-none">
                                <a href="/">HAN<br />ABDUR<br />SHI.</a>
                            </h1>
                        </div>
                    )}

                    <div className="flex justify-between items-start pt-3">
                        {/* Kiri: info + nav links */}
                        <div className="mt-2 text-xs grid grid-cols-3 gap-x-20 gap-y-2">
                            <p>Student of Software Engineering</p>
                            <p>Bandung, West Java</p>
                            <p
                                className="hover:scale-95 cursor-pointer transition-transform"
                                onClick={() => handleOpen('about')}
                            >
                                <span className="mr-4 opacity-60">01</span>about
                            </p>
                            <p>Back-end Developer</p>
                            <p className="hover:scale-95 cursor-pointer transition-transform">
                                <a href="mailto:raihanshiddiq18@gmail.com">raihanshiddiq18@gmail.com</a>
                            </p>
                            <p
                                className="hover:scale-95 cursor-pointer transition-transform"
                                onClick={() => handleOpen('journal')}
                            >
                                <span className="mr-4 opacity-60">02</span>journal
                            </p>
                        </div>

                        {/* Kanan: social links */}
                        <div className="text-xs space-y-1">
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