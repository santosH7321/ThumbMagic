'use client'

import {
  DribbbleIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon
} from "lucide-react";

import { motion } from "framer-motion";
import type { IFooterLink } from "../types";
import { Link } from "react-router-dom";

export default function Footer() {

  const productLinks: IFooterLink[] = [
    { name: "Generate", href: "/generate" },
    { name: "Pricing", href: "/pricing" },
    { name: "Features", href: "/features" },
    { name: "Reviews", href: "/testimonials" }
  ];

  const resourceLinks: IFooterLink[] = [
    { name: "Blog", href: "/blog" },
    { name: "Help Center", href: "/help" },
    { name: "Guides", href: "/guides" },
    { name: "API", href: "/api" }
  ];

  const companyLinks: IFooterLink[] = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms", href: "/terms" }
  ];

  return (
    <footer className="relative mt-40 border-t border-white/10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-175 bg-pink-600/20 blur-[200px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <Link to="/">
              <img
                src="/logo.svg"
                alt="ThumbMagic logo"
                className="w-28 sm:w-32"
              />
            </Link>

            <p className="text-slate-400 mt-5 text-sm leading-relaxed max-w-xs">
              AI-powered thumbnail generator helping creators boost
              click-through rates and grow faster.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {[DribbbleIcon, LinkedinIcon, TwitterIcon, YoutubeIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-pink-500 hover:border-pink-500/40 transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

          </motion.div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
          <FooterColumn title="Company" links={companyLinks} />

        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-slate-500">

          <p>
            © {new Date().getFullYear()} ThumbMagic. All rights reserved.
          </p>

          <div className="flex gap-6 flex-wrap justify-center">
            <Link to="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              Terms
            </Link>
            <Link to="/cookies" className="hover:text-white transition">
              Cookies
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links
}: {
  title: string;
  links: IFooterLink[];
}) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >

      <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wide">
        {title}
      </h3>

      <ul className="space-y-3 text-sm text-slate-400">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.href}
              className="hover:text-white transition"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

    </motion.div>
  );
}