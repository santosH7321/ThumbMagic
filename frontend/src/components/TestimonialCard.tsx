'use client'

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { TestimonialCardProps } from "../types";

export default function TestimonialCard({
  testimonial,
  index,
}: TestimonialCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="
        group
        relative
        w-80
        shrink-0
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-md
        p-6
        mx-4
        hover:-translate-y-3
        hover:border-pink-500/40
        transition-all
        duration-300
      "
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-linear-to-br from-pink-500/10 to-purple-500/10 pointer-events-none" />

      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border border-white/10"
        />

        <div>
          <div className="flex items-center gap-1">
            <p className="text-white font-medium text-sm">
              {testimonial.name}
            </p>
            <CheckCircle2 className="w-4 h-4 text-blue-500" />
          </div>

          <span className="text-xs text-slate-400">
            {testimonial.handle}
          </span>
        </div>
      </div>

      <p className="text-sm text-slate-300 mt-5 leading-relaxed line-clamp-3">
        {testimonial.quote}
      </p>

    </motion.div>
  );
}