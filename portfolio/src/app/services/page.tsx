"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Layers,
  Smartphone,
  Cloud,
  PenTool,
  Workflow,
  HeadphonesIcon,
  ArrowRight,
} from "lucide-react";
import AnimatedPage from "../../components/animations/AnimatedPage";

const services = [
  {
    slug: "frontend-development",
    icon: Code2,
    title: "Frontend Development",
    tagline: "Pixel-perfect interfaces that perform.",
    description:
      "React, Next.js, Tailwind CSS, and Framer Motion - I build fast, accessible, and visually compelling UIs that users love to interact with.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    accent: "from-blue-500 to-cyan-400",
    iconBg: "bg-blue-500/10 text-blue-400",
  },
  {
    slug: "backend-api-development",
    icon: Server,
    title: "Backend & API Development",
    tagline: "Scalable, secure, and well-documented APIs.",
    description:
      "Django, FastAPI, Express.js, and Node.js - I design and develop robust backend systems with clean architecture and efficient data handling.",
    tags: ["Django", "FastAPI", "Express.js", "PostgreSQL", "MongoDB"],
    accent: "from-emerald-500 to-teal-400",
    iconBg: "bg-emerald-500/10 text-emerald-400",
  },
  {
    slug: "fullstack-web-app",
    icon: Layers,
    title: "Fullstack Web App",
    tagline: "End-to-end product, zero compromise.",
    description:
      "From database schema to deployed UI - I own the full stack. Ideal for startups and founders who need a complete product built fast and right.",
    tags: ["Next.js", "Django", "PostgreSQL", "Docker", "Vercel"],
    accent: "from-violet-500 to-purple-400",
    iconBg: "bg-violet-500/10 text-violet-400",
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Native feel, cross-platform reach.",
    description:
      "React Native with Expo - I build polished mobile apps for iOS and Android with smooth animations, offline support, and a great UX.",
    tags: ["React Native", "Expo", "TypeScript", "iOS", "Android"],
    accent: "from-pink-500 to-rose-400",
    iconBg: "bg-pink-500/10 text-pink-400",
  },
  {
    slug: "devops-cloud-setup",
    icon: Cloud,
    title: "DevOps & Cloud Setup",
    tagline: "Ship faster, sleep better.",
    description:
      "CI/CD pipelines, Docker, Kubernetes, Terraform, and AWS - I set up the infrastructure layer so your team can focus on building.",
    tags: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Terraform"],
    accent: "from-orange-500 to-amber-400",
    iconBg: "bg-orange-500/10 text-orange-400",
  },
  {
    slug: "landing-page-figma-to-ui",
    icon: PenTool,
    title: "Landing Page / Figma to UI",
    tagline: "Your design, brought to life precisely.",
    description:
      "Have a Figma mockup or a vague idea? I convert designs into production-ready, responsive, animated web pages with meticulous attention to detail.",
    tags: ["Figma", "Next.js", "Tailwind CSS", "Responsive", "Animations"],
    accent: "from-fuchsia-500 to-pink-400",
    iconBg: "bg-fuchsia-500/10 text-fuchsia-400",
  },
  {
    slug: "workflow-automation",
    icon: Workflow,
    title: "Workflow Automation (Make.com)",
    tagline: "Your busywork, on autopilot.",
    description:
      "Make.com scenarios that connect your apps, no full backend needed. I automate lead capture, notifications, data sync, and repetitive ops tasks so nothing falls through the cracks.",
    tags: ["Make.com", "n8n", "Zapier", "Webhooks", "CRM Sync", "Low/No-Code", "API Automation"],
    accent: "from-indigo-500 to-blue-400",
    iconBg: "bg-indigo-500/10 text-indigo-400",
  },
  {
    slug: "virtual-assistance",
    icon: HeadphonesIcon,
    title: "Virtual Assistance",
    tagline: "Your operations, handled professionally.",
    description:
      "Social media management, CRM updates, email management, cold outreach, calendar management, and executive support - I keep your business running smoothly behind the scenes.",
    tags: ["Social Media", "CRM", "Cold Calls", "Calendar", "Admin"],
    accent: "from-sky-500 to-indigo-400",
    iconBg: "bg-sky-500/10 text-sky-400",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesPage() {
  return (
    <AnimatedPage>
      <div className="min-h-screen px-4 py-16 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-violet-500 text-sm font-semibold tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            What I do
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Services
          </motion.h1>
          <motion.p
            className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From idea to deployment - I help startups, founders, and businesses
            build digital products that work.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.slug} variants={cardVariants}>
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="h-full relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 transition-all duration-300 hover:border-violet-400 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1">
                    {/* Gradient glow on hover */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${service.accent} rounded-2xl`}
                    />

                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${service.iconBg} mb-5`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {service.title}
                    </h2>
                    <p className={`text-sm font-medium bg-gradient-to-r ${service.accent} bg-clip-text text-transparent mb-3`}>
                      {service.tagline}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-sm font-medium text-violet-600 dark:text-violet-400 group-hover:gap-2 transition-all">
                      <span>View details</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-base">
            Not sure which service fits your project?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-0.5"
          >
            Let&apos;s talk <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </AnimatedPage>
  );
}