"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { StackImage } from "@/types/app.types";

const STACK_IMAGES: StackImage[] = [
    {
        id: 0,
        src: "https://images.pexels.com/photos/6028500/pexels-photo-6028500.jpeg",
        alt: "Luxury private celebration with elegant decor",
        rotate: -6,
        position: "left-0 top-10",
    },
    {
        id: 1,
        src: "https://images.pexels.com/photos/17931471/pexels-photo-17931471.jpeg",
        alt: "High-end wedding reception setup",
        rotate: 4,
        position: "right-0 top-24",
    },
    {
        id: 2,
        src: "https://images.pexels.com/photos/12689019/pexels-photo-12689019.jpeg",
        alt: "Elite gala event with architectural lighting",
        rotate: -2,
        position: "left-16 bottom-0",
    },
];

export default function Hero() {
    const { scrollY } = useScroll();
    const yParallax = useTransform(scrollY, [0, 500], [0, -80]);

    const [activeId, setActiveId] = useState<number>(2);

    const handleClick = useCallback((id: number) => {
        setActiveId(id);
    }, []);

    return (
        <section
            aria-label="Luxury Event Hero Section"
            className="relative min-h-screen w-full flex items-center overflow-hidden bg-background"
        >
            <div className="container mx-auto px-6 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="h-[1px] w-12 bg-primary" />
                                <span className="tracking-[0.4em] uppercase text-[10px] font-bold text-primary">
                                    Est. 2026 • Global Elite
                                </span>
                            </div>

                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] mb-8 text-foreground">
                                Events <br />
                                <span className="relative text-primary">
                                    Redefined
                                    <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-primary/40" />
                                </span>
                            </h1>

                            <p className="max-w-md text-muted-foreground text-lg font-light leading-relaxed mb-12">
                                We curate legacies for the world’s most discerning hosts,
                                turning imagination into breathtaking realities.
                            </p>

                            <div className="flex flex-wrap gap-8 items-center">
                                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-16 px-10 transition-all duration-300">
                                    <span className="flex items-center gap-2 tracking-widest uppercase text-xs">
                                        Start Your Journey
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </Button>

                                <button
                                    type="button"
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                        <Play className="w-3 h-3 fill-current" />
                                    </div>
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                                        The Experience
                                    </span>
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT STACK */}
                    <div className="lg:col-span-5 relative h-[650px] w-full hidden lg:block">
                        <motion.div
                            style={{ y: yParallax }}
                            className="relative w-full h-full"
                        >
                            {STACK_IMAGES.map((img) => {
                                const isActive = img.id === activeId;

                                return (
                                    <motion.button
                                        key={img.id}
                                        type="button"
                                        onClick={() => handleClick(img.id)}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{
                                            opacity: 1,
                                            scale: isActive ? 1.05 : 1,
                                            rotate: isActive ? 0 : img.rotate,
                                            zIndex: isActive ? 50 : img.id,
                                        }}
                                        transition={{ duration: 0.6 }}
                                        className={`absolute ${img.position} w-[65%] h-[65%] shadow-2xl focus:outline-none`}
                                    >
                                        <div className="relative w-full h-full overflow-hidden border border-primary/10 bg-secondary">
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 500px"
                                                className={`object-cover transition-all duration-700 ${isActive
                                                        ? "grayscale-0 scale-100"
                                                        : "grayscale-[20%] scale-110"
                                                    }`}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </motion.div>
                    </div>

                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[20vw] font-serif font-bold text-primary/[0.03] select-none pointer-events-none">
                LUXURY
            </div>
        </section>
    );
}
