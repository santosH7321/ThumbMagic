'use client'

import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialsData } from "../data/testimonial";
import type { ITestimonial } from "../types";
import Marquee from "react-fast-marquee";

export default function TestimonialSection() {

  const duplicatedData = [...testimonialsData, ...testimonialsData];

  return (
    <section
      id="testimonials"
      className="relative py-32 overflow-hidden"
    >

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-175 bg-pink-600/20 blur-[200px] -z-10" />
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionTitle
          text1="Testimonials"
          text2="Loved by Creators"
          text3="see how our AI thumbnails are helping channels explode their views. "
        />
      </div>

      <div className="relative mt-16">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-linear-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-linear-to-l from-black to-transparent z-10" />
        <Marquee
          speed={30}
          gradient={false}
          pauseOnHover
        >
          <div className="flex py-6">
            {duplicatedData.map((testimonial: ITestimonial, index: number) => (
              <TestimonialCard
                key={`row1-${index}`}
                index={index}
                testimonial={testimonial}
              />
            ))}
          </div>
        </Marquee>

        <Marquee
          speed={30}
          direction="right"
          gradient={false}
          pauseOnHover
        >
          <div className="flex py-6">
            {duplicatedData.map((testimonial: ITestimonial, index: number) => (
              <TestimonialCard
                key={`row2-${index}`}
                index={index}
                testimonial={testimonial}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}