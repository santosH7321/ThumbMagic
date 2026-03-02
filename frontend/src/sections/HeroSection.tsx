'use client'
import { CheckIcon, ChevronRightIcon, VideoIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {

    const navigate = useNavigate();

    const features = [
        "No design skills needed",
        "Generate in seconds",
        "High CTR proven templates",
    ];

    const fadeUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <section className="relative flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 py-32 overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-150 h-150 bg-pink-600/30 blur-[200px] -z-10" />
            <motion.div {...fadeUp}>
                <button className="group flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-sm hover:bg-white/10 transition">
                    <span className="bg-pink-600 text-white text-xs px-3 py-0.5 rounded-full">
                        NEW
                    </span>
                    <span className="text-slate-300">
                        Generate thumbnail for free
                    </span>
                    <ChevronRightIcon
                        size={16}
                        className="group-hover:translate-x-1 transition"
                    />

                </button>
            </motion.div>

            <motion.h1
                {...fadeUp}
                transition={{ delay: 0.1 }}
                className="mt-8 text-4xl md:text-6xl lg:text-7xl font-semibold max-w-4xl leading-tight"
            >
                Create Viral YouTube Thumbnails with{" "}
                <span className="bg-linear-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                    AI Power
                </span>
            </motion.h1>

            <motion.p
                {...fadeUp}
                transition={{ delay: 0.2 }}
                className="mt-6 max-w-xl text-slate-400 text-lg"
            >
                Stop wasting hours designing. Generate high-converting,
                scroll-stopping thumbnails instantly with AI.
            </motion.p>

            <motion.div
                {...fadeUp}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mt-10"
            >
                <button
                    onClick={() => navigate("/generate")}
                    className="bg-pink-600 hover:bg-pink-700 text-white px-8 h-12 rounded-full font-medium shadow-lg shadow-pink-600/30 hover:scale-105 transition"
                >
                    Generate Thumbnail
                </button>

                <button className="flex items-center justify-center gap-2 border border-white/10 px-8 h-12 rounded-full hover:bg-white/5 transition">
                    <VideoIcon size={18} />
                    Watch Demo
                </button>
            </motion.div>

            <motion.div
                {...fadeUp}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-8 mt-14"
            >
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 text-slate-400"
                    >
                        <CheckIcon className="text-pink-500 size-5" />
                        {item}
                    </div>

                ))}
            </motion.div>
        </section>
    );
}