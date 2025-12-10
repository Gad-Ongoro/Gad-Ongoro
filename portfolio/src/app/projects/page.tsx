"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Lock, MoreHorizontal, RefreshCw } from "lucide-react";
import AnimatedPage from "../../components/animations/AnimatedPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Projects() {
  const projects = [
    {
      name: "AgriTech E-Commerce",
      description: `GoFoods, a service provider platform for users to buy and sell products online.`,
      link: "https://gofoods-six.vercel.app/",
      githubLink: "https://github.com/Gad-Ongoro/lisha",
    },
    {
      name: "GoVault - Property Management",
      description: "GoVault is a full-stack multi-tenant SaaS property management solution developed using Next.js (frontend) and Node.js + PostgreSQL (backend) to optimize real estate workflows. The centralized dashboard supports property tracking, occupancy analytics, maintenance management, lease handling, and secure online payments. Leveraging automation and real-time data updates, GoVault improves operational efficiency by up to 40%, reduces average maintenance turnaround times by 35%, and enhances landlord-tenant transparency by 50%+, all within a scalable, cloud-based architecture.",
      link: "https://govault-vx.onrender.com/home",
      githubLink: "https://godevtech.vercel.app/projects/property-management-system",
    },
    {
      name: " Settings Page - Alpine.js",
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
    // {
    //   name: "SmartChoice Kenya",
    //   description: "Multi-service eCommerce platform enabling users to shop for outfits, book Airbnbs, and request cleaning services. ",
    //   link: "https://smartchoiceke.vercel.app/",
    //   githubLink: "https://github.com/Gad-Ongoro/smartchoiceke-nextjs",
    // },
  ]

  const [activeTab, setActiveTab] = React.useState(0);
  const [iframeSrc, setIframeSrc] = React.useState(projects[0].link);
  const [projectDescription, setProjectDescription] = React.useState(projects[0].description);
  const [projectGitHubLink, setProjectGitHubLink] = React.useState(projects[0].githubLink);

  const selectProject = (index: number) => {
    setActiveTab(index)
    setIframeSrc(projects[index].link)
    setProjectDescription(projects[index].description)
    setProjectGitHubLink(projects[index].githubLink)
  }

  return (
    <AnimatedPage>
      {/* Project Navigation */}
      <div className="flex flex-wrap justify-center gap-2 p-4 backdrop-blur-[5px]">
        {projects.map((project, index) => (
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
          View project on
          <a
            href={projectGitHubLink}
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-blue-600 inline-flex items-center ml-1"
          >
            GitHub <Github className="w-4 h-4 ml-1" />
          </a>
        </p>

        <div className="text-center mb-2">
          <a
            className="text-decoration-none text-blue-600 inline-flex items-center"
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
          {/* Window Controls (macOS style) */}
          <div className="flex items-center gap-1.5 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* Tab Bar */}
          <div className="flex-1 flex items-center overflow-x-auto scrollbar-hide">
            {projects.map((project, index) => (
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
            <span className="sr-only">Back</span>
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full">
            <ChevronRight className="w-4 h-4" />
            <span className="sr-only">Forward</span>
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full">
            <RefreshCw className="w-4 h-4" />
            <span className="sr-only">Refresh</span>
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
            <span className="sr-only">Menu</span>
          </Button>
        </div>

        {/* Browser Content - iframe */}
        <div className="flex-1 min-h-[400px] bg-white">
          <iframe src={iframeSrc} className="w-full h-[500px]" title="web-projects" frameBorder="0" />
        </div>
      </div>
    </AnimatedPage>
  )
}
