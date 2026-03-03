'use client'

import SectionTitle from "../components/SectionTitle";
import { pricingData } from "../data/pricing";
import type { IPricing } from "../types";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-175 bg-pink-600/20 blur-[200px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionTitle
          text1="Pricing"
          text2="Simple, Transparent Pricing"
          text3="Choose the plan that fits your content schedule. Cancel anytime."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {pricingData.map((plan: IPricing, index: number) => (
            <motion.div
              key={index}
              {...fadeUp}
              transition={{ delay: index * 0.15 }}
              className={`
                relative
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                p-8
                flex
                flex-col
                hover:-translate-y-3
                hover:border-pink-500/40
                transition-all
                duration-300
                ${plan.mostPopular ? "scale-105 border-pink-500/50" : ""}
              `}
            >

              {plan.mostPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-pink-500 to-purple-500 text-white text-xs px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <h3 className="text-lg font-semibold text-white text-center">
                {plan.name}
              </h3>

              <div className="mt-4 text-center">
                <span className="text-4xl font-bold text-white">
                  ₹{plan.price}
                </span>
                <span className="text-slate-400 text-sm ml-1">
                  /{plan.period}
                </span>
              </div>

              <ul className="mt-8 space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <Check className="w-4 h-4 text-pink-500 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`
                  mt-10
                  w-full
                  py-3
                  rounded-full
                  font-medium
                  transition
                  ${
                    plan.mostPopular
                      ? "bg-linear-to-r from-pink-500 to-purple-500 text-white hover:opacity-90"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }
                `}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}