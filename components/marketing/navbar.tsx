"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"

const navItems = [
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="fixed inset-x-0 top-0 z-50 flex justify-center pt-8">
            <motion.header
                initial={false}
                animate={{
                    width: scrolled ? "70%" : "92%",
                    borderRadius: scrolled ? "999px" : "24px",
                    paddingLeft: scrolled ? "40px" : "60px",
                    paddingRight: scrolled ? "40px" : "60px",
                    paddingTop: scrolled ? "14px" : "18px",
                    paddingBottom: scrolled ? "14px" : "18px",
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden"
            >

                {/* ===== Gradient Border Wrapper ===== */}
                <div className="absolute inset-0 rounded-[inherit] p-[2px] pointer-events-none">
                    <div
                        className="h-full w-full rounded-[inherit]"
                        style={{
                            background:
                                "linear-gradient(120deg, #D4AF6A, #F2D9A6, #E6C88A, #C19A49, #D4AF6A)",
                            backgroundSize: "300% 300%",
                            animation: "luxury-border-flow 6s linear infinite",
                        }}
                    />
                </div>

                {/* ===== White Interior (REAL NAV BG) ===== */}
                <div className="absolute inset-[2px] rounded-[inherit] bg-white backdrop-blur-xl shadow-[0_15px_60px_rgba(0,0,0,0.15)]" />

                {/* ===== Content ===== */}
                <div className="relative z-10 flex items-center justify-between">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-4 font-heading text-sm tracking-[0.4em] text-primary transition duration-500 hover:drop-shadow-[0_0_14px_rgba(212,175,106,0.9)]"
                    >
                        <span className="h-2.5 w-2.5 rotate-45 bg-primary shadow-[0_0_14px_rgba(212,175,106,0.9)]" />
                        {siteConfig.name}
                    </Link>

                    {/* Nav Links */}
                    <nav className="hidden md:flex items-center gap-16 text-[11px] uppercase tracking-[0.35em]">

                        {navItems.map((item) => {
                            const isActive = pathname === item.href

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="group relative text-foreground/70 transition duration-500 hover:text-primary"
                                >
                                    {item.name}

                                    <span className="absolute -bottom-3 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-primary transition-all duration-500 group-hover:w-full" />

                                    {isActive && (
                                        <motion.span
                                            layoutId="luxury-dot"
                                            className="absolute -bottom-5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_12px_rgba(212,175,106,0.8)]"
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 25,
                                            }}
                                        />
                                    )}
                                </Link>
                            )
                        })}

                    </nav>

                    {/* CTA */}
                    <Link
                        href="/contact"
                        className="hidden md:inline-flex items-center rounded-full bg-primary/10 px-8 py-3 text-[11px] tracking-[0.3em] text-primary border border-primary/30 transition-all duration-500 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_40px_rgba(212,175,106,0.6)]"
                    >
                        Connect
                    </Link>

                </div>

            </motion.header>
        </div>
    )
}
