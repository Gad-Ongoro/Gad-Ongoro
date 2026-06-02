"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Layers,
  Smartphone,
  Cloud,
  PenTool,
  HeadphonesIcon,
  ArrowLeft,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";
import AnimatedPage from "../../../components/animations/AnimatedPage";

const services: Record<string, ServiceDetail> = {
  "frontend-development": {
    icon: Code2,
    title: "Frontend Development",
    tagline: "Pixel-perfect interfaces that perform.",
    accent: "from-blue-500 to-cyan-400",
    iconBg: "bg-blue-500/10 text-blue-400",
    overview:
      "I build modern, fast, and accessible frontend experiences using React and Next.js. Every interface I ship is responsive, animated where it counts, and optimized for performance - because how something looks and feels directly affects how much people trust it.",
    whatYouGet: [
      "Responsive layouts for mobile, tablet, and desktop",
      "Smooth animations with Framer Motion",
      "Accessible, semantic HTML with ARIA support",
      "TypeScript for maintainable, type-safe code",
      "Component library setup (shadcn/ui, MUI, or custom)",
      "SEO-optimized page structure",
      "Performance audit and optimization",
    ],
    process: [
      { step: "Discovery", detail: "We align on goals, design references, and tech constraints." },
      { step: "Wireframe Review", detail: "Review Figma designs or sketch structure together." },
      { step: "Build", detail: "Component-by-component development with regular check-ins." },
      { step: "QA & Polish", detail: "Cross-browser testing, accessibility check, animation tuning." },
      { step: "Handoff / Deploy", detail: "Clean codebase handoff or deployment to Vercel/Netlify." },
    ],
    timeline: "1 - 3 weeks depending on scope",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    startingFrom: 200,
  },
  "backend-api-development": {
    icon: Server,
    title: "Backend & API Development",
    tagline: "Scalable, secure, and well-documented APIs.",
    accent: "from-emerald-500 to-teal-400",
    iconBg: "bg-emerald-500/10 text-emerald-400",
    overview:
      "I design and build reliable backend systems - REST APIs, database schemas, authentication, and business logic. Whether you need a standalone API or a full backend layer for your product, I build it to scale and to last.",
    whatYouGet: [
      "RESTful API design with clean endpoint structure",
      "JWT / OAuth2 authentication and authorization",
      "Database design with PostgreSQL, MySQL, or MongoDB",
      "Input validation, error handling, and logging",
      "API documentation (Swagger / Postman)",
      "Rate limiting, caching, and performance tuning",
      "Unit and integration tests",
    ],
    process: [
      { step: "Requirements", detail: "Define data models, endpoints, and auth flows." },
      { step: "Schema Design", detail: "Design the database structure and relationships." },
      { step: "Build", detail: "Develop endpoints, business logic, and middleware." },
      { step: "Testing", detail: "Write tests and validate all edge cases." },
      { step: "Deploy", detail: "Deploy to Render, Railway, or your preferred cloud." },
    ],
    timeline: "1 - 4 weeks depending on complexity",
    techStack: ["Django", "FastAPI", "Express.js", "PostgreSQL", "MongoDB", "Redis", "Docker"],
    startingFrom: 250,
  },
  "fullstack-web-app": {
    icon: Layers,
    title: "Fullstack Web App",
    tagline: "End-to-end product, zero compromise.",
    accent: "from-violet-500 to-purple-400",
    iconBg: "bg-violet-500/10 text-violet-400",
    overview:
      "This is the full package - database, backend API, and frontend UI all built and shipped by me. Ideal for founders and teams who need a complete product without the overhead of managing multiple specialists.",
    whatYouGet: [
      "Full product development from schema to UI",
      "User authentication and role-based access",
      "Admin dashboard or management interface",
      "Mobile-responsive frontend",
      "CI/CD pipeline setup",
      "Cloud deployment (Vercel, Render, Railway, or AWS)",
      "Post-launch support window",
    ],
    process: [
      { step: "Scoping", detail: "Break down the product into clear features and milestones." },
      { step: "Architecture", detail: "Plan the tech stack, data models, and API contracts." },
      { step: "Backend First", detail: "Build and test the backend layer and API." },
      { step: "Frontend", detail: "Build the UI against the live API." },
      { step: "Deploy & QA", detail: "Full deployment, testing, and performance check." },
    ],
    timeline: "3 - 8 weeks depending on scope",
    techStack: ["Next.js", "Django / FastAPI", "PostgreSQL", "Docker", "Vercel", "AWS"],
    startingFrom: 500,
  },
  "mobile-app-development": {
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Native feel, cross-platform reach.",
    accent: "from-pink-500 to-rose-400",
    iconBg: "bg-pink-500/10 text-pink-400",
    overview:
      "I build cross-platform mobile apps with React Native and Expo that feel native on both iOS and Android. From smooth onboarding flows to offline-capable experiences, I focus on performance and polish.",
    whatYouGet: [
      "iOS and Android app from a single codebase",
      "Smooth navigation with Expo Router",
      "Push notifications (Expo Notifications)",
      "Local storage and offline support",
      "Backend integration with REST or GraphQL APIs",
      "App Store and Play Store submission support",
      "Splash screen, icons, and app branding",
    ],
    process: [
      { step: "Design Review", detail: "Review wireframes or define screens and user flows." },
      { step: "Setup", detail: "Initialize Expo project with TypeScript and routing." },
      { step: "Core Screens", detail: "Build screen by screen with navigation and state." },
      { step: "API Integration", detail: "Connect to backend, handle auth and data fetching." },
      { step: "Submit", detail: "Test on real devices and prepare store submissions." },
    ],
    timeline: "3 - 6 weeks depending on app complexity",
    techStack: ["React Native", "Expo", "TypeScript", "Expo Router", "REST API"],
    startingFrom: 400,
  },
  "devops-cloud-setup": {
    icon: Cloud,
    title: "DevOps & Cloud Setup",
    tagline: "Ship faster, sleep better.",
    accent: "from-orange-500 to-amber-400",
    iconBg: "bg-orange-500/10 text-orange-400",
    overview:
      "I set up the infrastructure so your team can focus on building. CI/CD pipelines, containerized deployments, cloud provisioning with Terraform, and monitoring - everything you need to ship confidently.",
    whatYouGet: [
      "CI/CD pipeline setup (GitHub Actions)",
      "Dockerized application with docker-compose",
      "Kubernetes cluster setup and Helm charts",
      "AWS or GCP infrastructure provisioning with Terraform",
      "Environment management (dev / staging / prod)",
      "Automated testing in the pipeline",
      "Basic monitoring and alerting setup",
    ],
    process: [
      { step: "Audit", detail: "Review current setup and identify gaps." },
      { step: "Plan", detail: "Agree on target infrastructure and toolchain." },
      { step: "Containerize", detail: "Dockerize the application and services." },
      { step: "Pipeline", detail: "Build the CI/CD workflow with test and deploy stages." },
      { step: "Provision", detail: "Spin up cloud resources and harden the environment." },
    ],
    timeline: "1 - 2 weeks",
    techStack: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Ansible", "AWS", "Linux"],
    startingFrom: 300,
  },
  "landing-page-figma-to-ui": {
    icon: PenTool,
    title: "Landing Page / Figma to UI",
    tagline: "Your design, brought to life precisely.",
    accent: "from-fuchsia-500 to-pink-400",
    iconBg: "bg-fuchsia-500/10 text-fuchsia-400",
    overview:
      "Have a Figma file or a rough idea? I turn it into a fast, responsive, beautifully animated landing page. Perfect for product launches, portfolios, marketing pages, or SaaS homepages.",
    whatYouGet: [
      "Pixel-accurate Figma to code conversion",
      "Fully responsive across all screen sizes",
      "Smooth scroll animations and micro-interactions",
      "Contact form with email integration",
      "SEO meta tags and Open Graph setup",
      "Deployed and live on Vercel or Netlify",
      "One round of revisions included",
    ],
    process: [
      { step: "Design Input", detail: "Share your Figma file, reference sites, or brief." },
      { step: "Breakdown", detail: "Map sections and components to build." },
      { step: "Build", detail: "Code the page section by section." },
      { step: "Animations", detail: "Add scroll reveals and hover interactions." },
      { step: "Deploy", detail: "Go live and review together." },
    ],
    timeline: "3 - 7 days",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
    startingFrom: 150,
  },
  "virtual-assistance": {
    icon: HeadphonesIcon,
    title: "Virtual Assistance",
    tagline: "Your operations, handled professionally.",
    accent: "from-sky-500 to-indigo-400",
    iconBg: "bg-sky-500/10 text-sky-400",
    overview:
      "I provide reliable virtual assistant support for busy founders and executives. From managing your inbox and calendar to handling social media and CRM updates - I keep things moving so you can focus on what matters.",
    whatYouGet: [
      "Social media scheduling and management",
      "CRM data entry and updates (HubSpot, Zoho, Notion, Airtable)",
      "Cold email and outreach campaigns",
      "Calendar management and meeting scheduling",
      "Email inbox management and drafting",
      "Research and data gathering tasks",
      "Document formatting and presentation prep",
    ],
    process: [
      { step: "Onboarding", detail: "Understand your tools, workflows, and priorities." },
      { step: "Access Setup", detail: "Secure access to required platforms." },
      { step: "Daily Operations", detail: "Handle assigned tasks on a schedule." },
      { step: "Weekly Check-in", detail: "Review completed work and adjust priorities." },
      { step: "Reporting", detail: "Weekly summary of completed tasks and next steps." },
    ],
    timeline: "Ongoing - weekly or monthly retainers available",
    techStack: ["HubSpot", "Zoho", "Notion", "Airtable", "Slack", "Google Workspace", "Calendly"],
    startingFrom: 100,
  },
};

interface ServiceDetail {
  icon: React.ElementType;
  title: string;
  tagline: string;
  accent: string;
  iconBg: string;
  overview: string;
  whatYouGet: string[];
  process: { step: string; detail: string }[];
  timeline: string;
  techStack: string[];
  startingFrom: number;
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) notFound();

  const Icon = service.icon;

  return (
    <AnimatedPage>
      <div className="min-h-screen px-4 py-12 max-w-4xl mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            All Services
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${service.iconBg} mb-6`}>
            <Icon className="w-7 h-7" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            {service.title}
          </h1>
          <p className={`text-lg font-medium bg-gradient-to-r ${service.accent} bg-clip-text text-transparent mb-6`}>
            {service.tagline}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-2xl">
            {service.overview}
          </p>
        </motion.div>

        {/* Pricing + Timeline banner */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="rounded-2xl border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/30 p-5">
            <p className="text-xs text-violet-500 font-semibold tracking-widest uppercase mb-1">Starting From</p>
            <p className="text-3xl font-bold text-violet-700 dark:text-violet-300">
              ${service.startingFrom}
              <span className="text-base font-normal text-violet-500 ml-1">USD</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">Final price depends on project scope</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-5">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-gray-400" />
              <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase">Typical Timeline</p>
            </div>
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">{service.timeline}</p>
          </div>
        </motion.div>

        {/* What you get */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">What you get</h2>
          <ul className="space-y-3">
            {service.whatYouGet.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + i * 0.05 }}
              >
                <CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Process */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">How it works</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
            <div className="space-y-6 pl-12">
              {service.process.map((item, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.07 }}
                >
                  {/* Step dot */}
                  <div className="absolute -left-[2.05rem] top-1 w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs font-bold">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{item.step}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Tech stack</h2>
          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="rounded-2xl border border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Ready to get started?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
            Tell me about your project and I&apos;ll get back to you within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-0.5"
          >
            Get in touch <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </AnimatedPage>
  );
}