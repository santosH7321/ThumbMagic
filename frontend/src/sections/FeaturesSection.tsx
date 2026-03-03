'use client'

import SectionTitle from "../components/SectionTitle";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { featuresData } from "../data/features";
import type { IFeature } from "../types";
import { Link } from "react-router-dom";

const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function FeaturesSection() {

  return (
    <section
      id="features"
      className="relative px-6 md:px-16 lg:px-24 py-32 overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-175 bg-pink-600/20 blur-[200px] -z-10" />

      <SectionTitle
        text1="Features"
        text2="Why Choose Our AI Generator?"
        text3="Create stunning thumbnails that attract clicks — without design stress."
      />

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {featuresData.map((feature: IFeature, index: number) => {

          const Icon = feature.icon;

          return (
            <motion.div
              key={index}
              {...fadeUp}
              transition={{ delay: index * 0.15 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-2"
            >

              <div className="text-pink-500 mb-4">
                <Icon className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-linear-to-br from-pink-500/10 to-purple-500/10 pointer-events-none" />

            </motion.div>
          );
        })}
      </div>

      <div className="mt-40 max-w-6xl mx-auto">

        <motion.p
          {...fadeUp}
          className="text-slate-300 text-xl max-w-3xl"
        >
          Our AI understands what makes videos go viral and designs thumbnails accordingly.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <motion.div
            {...fadeUp}
            className="md:col-span-2 rounded-2xl overflow-hidden border border-white/10"
          >
            <img
              src="/assets/feature1.png"
              alt="AI Thumbnail Dashboard"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col justify-between"
          >
            <img
              src="/assets/feature2.png"
              alt="AI Thumbnail Result"
              className="rounded-xl mb-6"
            />

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Boost Your Views with AI-Optimized Designs
              </h3>

              <p className="text-slate-400 text-sm">
                Stop guessing and start ranking. Our AI creates thumbnails proven to capture attention.
              </p>
            </div>

            <Link
              to="/generate"
              className="group flex items-center gap-2 mt-6 text-pink-500 hover:text-pink-400 transition font-medium"
            >
              Start Generating Free
              <ArrowUpRight className="size-5 group-hover:translate-x-1 transition" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}