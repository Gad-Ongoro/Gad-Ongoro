"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Lock, MoreHorizontal, RefreshCw, Smartphone, Globe, Construction } from "lucide-react";
import AnimatedPage from "../../components/animations/AnimatedPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

const webProjects = [
  {
    name: "AgriTech E-Commerce",
    description: `GoFoods, a service provider platform for users to buy and sell products online.`,
    link: "https://gofoods-six.vercel.app/",
    githubLink: "https://github.com/Gad-Ongoro/lisha",
  },
  {
    name: "OG Estates - Property Management",
    description: "OG Estates is a full-stack multi-tenant SaaS property management solution developed using Next.js (frontend) and Node.js + PostgreSQL (backend) to optimize real estate workflows. The centralized dashboard supports property tracking, occupancy analytics, maintenance management, lease handling, and secure online payments. Leveraging automation and real-time data updates, GoVault improves operational efficiency by up to 40%, reduces average maintenance turnaround times by 35%, and enhances landlord-tenant transparency by 50%+, all within a scalable, cloud-based architecture.",
    link: "https://govault-vx.onrender.com/home",
    githubLink: "https://godevtech.vercel.app/projects/property-management-system",
  },
  {
    name: "Settings Page - Alpine.js",
    description: "Developed a settings page converting a Figma design to a web UI/UX using Alpine.js for enhanced interactivity and dynamic behavior.",
    link: "https://splendorous-panda-7ef3ed.netlify.app/",
    githubLink: "https://github.com/Gad-Ongoro/user-settings-page",
  },
  {
    name: "GoDev-Tech",
    description: "Developed a full-stack web application on tech articles, using Django (Python) and Next.js (TypeScript).",
    link: "https://godevtech.vercel.app/",
    githubLink: "https://github.com/Gad-Ongoro/tech_articles_client",
  },
  // {
  //   name: "Bank Management",
  //   description: "A web app that allows users to manage their bank accounts, deposits, and withdrawals.",
  //   link: "https://go-bank-seven.vercel.app/",
  //   githubLink: "https://github.com/Gad-Ongoro/GO_Bank",
  // },
]

const mobileProjects = [
  {
    name: "OG Estates",
    tagline: "Modern Real Estate, In Your Pocket",
    description:
      "A cross-platform mobile app for property discovery, listings management, and tenant-landlord communication. Built with React Native and Expo, OG Estates brings a seamless real estate experience to iOS and Android.",
    tech: ["React Native", "Expo", "TypeScript"],
    githubLink: "https://github.com/Gad-Ongoro",
    status: "In Development",
    screenshots: ['/msgs_screen.png', '/OGEstates_iOS.jpeg', '/gobot.png'],
  },
];

// Placeholder phone screenshot
function PhonePlaceholder({ index }: { index: number }) {
  const labels = ["Home", "Listings", "Details"];
  const icons = ["", "", ""];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-violet-950 to-slate-900">
      <span className="text-4xl">{icons[index] ?? ""}</span>
      <span className="text-violet-300 text-xs font-mono tracking-widest uppercase">{labels[index] ?? "Screen"}</span>
      <div className="w-10 h-0.5 bg-violet-500/40 rounded-full" />
      <span className="text-slate-500 text-xs">Coming soon</span>
    </div>
  );
}

// Phone frame component
function PhoneFrame({ children, index }: { children: React.ReactNode; index: number }) {
  return (
    <motion.div
      className="relative flex-shrink-0"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Phone outer shell */}
      <div className="relative w-[180px] h-[410px] rounded-[2rem] bg-gradient-to-b from-slate-700 to-slate-800 p-[3px] shadow-2xl shadow-violet-900/40">
        {/* Inner bezel */}
        <div className="w-full h-full rounded-[2rem] bg-slate-900 overflow-hidden relative">
          {/* Notch */}
          {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-800 rounded-b-xl z-10 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-slate-600" />
          </div> */}
          {/* Screen content */}
          <div className="w-full h-full">{children}</div>
        </div>
        {/* Side button */}
        <div className="absolute right-[-4px] top-20 w-1 h-10 bg-slate-600 rounded-r-md" />
        {/* Volume buttons */}
        <div className="absolute left-[-4px] top-16 w-1 h-7 bg-slate-600 rounded-l-md" />
        {/* <div className="absolute left-[-4px] top-26 w-1 h-7 bg-slate-600 rounded-l-md mt-10" /> */}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = React.useState<"web" | "mobile">("mobile");
  const [activeTab, setActiveTab] = React.useState(0);
  const [iframeSrc, setIframeSrc] = React.useState(webProjects[0].link);
  const [projectDescription, setProjectDescription] = React.useState(webProjects[0].description);
  const [projectGitHubLink, setProjectGitHubLink] = React.useState(mobileProjects[0].githubLink);

  const selectProject = (index: number) => {
    setActiveTab(index);
    setIframeSrc(webProjects[index].link);
    setProjectDescription(webProjects[index].description);
    setProjectGitHubLink(webProjects[index].githubLink);
  };

  return (
    <AnimatedPage>
      {/* Category Toggle */}
      <div className="flex justify-center pt-6 pb-2">
        <div className="relative flex items-center bg-slate-100 dark:bg-slate-800/60 border border-violet-200 dark:border-violet-800/40 rounded-full p-1 gap-1 shadow-inner">
          {/* sliding pill */}
          <motion.div
            className="absolute top-1 bottom-1 rounded-full bg-violet-600 shadow-lg shadow-violet-500/30"
            animate={{ left: activeCategory === "mobile" ? 4 : "50%", right: activeCategory === "mobile" ? "50%" : 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
          <button
            onClick={() => setActiveCategory("mobile")}
            className={`relative z-10 flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeCategory === "mobile" ? "text-white" : "text-slate-500 hover:text-violet-700"
            }`}
          >
            <Smartphone className="w-4 h-4" />
            Mobile Projects
          </button>

          <button
            onClick={() => setActiveCategory("web")}
            className={`relative z-10 flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeCategory === "web" ? "text-white" : "text-slate-500 hover:text-violet-700"
            }`}
          >
            <Globe className="w-4 h-4" />
            Web Projects
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* MOBILE SECTION */}
        {activeCategory === "mobile" && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35 }}
            className="max-w-4xl mx-auto px-4 py-8"
          >
            {mobileProjects.map((app) => (
              <div key={app.name} className="flex flex-col gap-8">
                {/* App header */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 border border-amber-300 rounded-full px-3 py-1 text-xs font-semibold mb-4">
                    <Construction className="w-3 h-3" />
                    {app.status}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{app.name}</h2>
                  <p className="text-violet-600 font-medium mt-1">{app.tagline}</p>
                </div>

                {/* Phone mockups */}
                <div className="flex justify-center items-end gap-6 md:gap-10 py-4">
                  {app.screenshots.map((src, i) => (
                    <div
                      key={i}
                      className={`transition-transform duration-300 ${i === 1 ? "scale-110 z-10" : "scale-95 opacity-80"}`}
                    >
                      <PhoneFrame index={i}>
                        {src ? (
                          <img src={src} alt={`${app.name} screen ${i + 1}`} className="w-full h-full object-cover" />
                        ) : (
                          <PhonePlaceholder index={i} />
                        )}
                      </PhoneFrame>
                    </div>
                  ))}
                </div>

                {/* Description & tech */}
                <div className="bg-white dark:bg-slate-800/50 border border-violet-200 dark:border-violet-800/40 rounded-2xl p-6 text-center shadow-sm">
                  <p className="text-gray-600 dark:text-zinc-300 leading-relaxed mb-5">{app.description}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {app.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border border-violet-300 dark:border-violet-700 rounded-full px-3 py-1 text-xs font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={app.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* WEB SECTION */}
        {activeCategory === "web" && (
          <motion.div
            key="web"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35 }}
          >
            {/* Project Navigation */}
            <div className="flex flex-wrap justify-center gap-2 p-4 backdrop-blur-[5px]">
              {webProjects.map((project, index) => (
                <button
                  key={index}
                  className={`m-2 p-1 border rounded text-gray-950 text-xl bg-violet-200 hover:bg-violet-300 transition-all duration-100 ease-in-out ${
                    activeTab === index ? "bg-violet-300" : ""
                  }`}
                  onClick={() => selectProject(index)}
                >
                  {project.name}
                </button>
              ))}
            </div>

            {/* Project Description */}
            <div className="p-4 border-y border-violet-300 backdrop-blur-[1px]">
              <h3 className="text-gray-950 text-center font-medium text-xl md:text-2xl mb-4">{projectDescription}</h3>
              <p className="text-center text-gray-950 m-2">
                View project on{" "}
                <a
                  href={projectGitHubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 inline-flex items-center ml-1"
                >
                  GitHub <Github className="w-4 h-4 ml-1" />
                </a>
              </p>
              <div className="text-center mb-2">
                <a
                  className="text-blue-600 inline-flex items-center"
                  href={iframeSrc}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in new tab <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Browser Chrome */}
            <div className="text-gray-900 flex flex-col w-full max-w-5xl mx-auto overflow-hidden rounded-lg border border-violet-300 my-5 shadow-2xl bg-background">
              <div className="flex items-center px-2 py-1 bg-muted/40 border-b">
                <div className="flex items-center gap-1.5 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 flex items-center overflow-x-auto scrollbar-hide">
                  {webProjects.map((project, index) => (
                    <div
                      key={index}
                      className={`flex items-center min-w-[140px] max-w-[200px] h-8 px-3 py-1 mr-1 rounded-t-lg cursor-pointer ${
                        activeTab === index ? "bg-gray-300" : "bg-muted hover:bg-gray-200"
                      }`}
                      onClick={() => selectProject(index)}
                    >
                      <span className="truncate text-sm">{project.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address Bar */}
              <div className="flex items-center gap-2 px-4 py-2 border-b">
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full">
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full">
                  <RefreshCw className="w-4 h-4" />
                </Button>
                <div className="flex-1 flex items-center px-3 py-1.5 bg-muted/50 rounded-full border">
                  <Lock className="w-4 h-4 mr-2 text-green-600" />
                  <Input
                    className="flex-1 h-5 p-0 text-sm bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    value={iframeSrc}
                    readOnly
                  />
                </div>
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>

              {/* iframe */}
              <div className="flex-1 min-h-[400px] bg-white">
                <iframe src={iframeSrc} className="w-full h-[500px]" title="web-projects" frameBorder="0" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedPage>
  );
}