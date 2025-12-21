"use client"

import type * as React from "react"
import { Pacifico } from "next/font/google"
import Link from "next/link"
import { motion } from "framer-motion"
import { MdWorkspacePremium } from "react-icons/md"
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md"
import { FaFolderOpen } from "react-icons/fa6"
import { FaFilePdf, FaUserTie } from "react-icons/fa"
import { usePathname } from "next/navigation"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
})

interface MenuItem {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string
  iconColor: string
}

const menuItems: MenuItem[] = [
  {
    icon: <FaUserTie className="h-5 w-5" />,
    label: "Me",
    href: "/",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <MdWorkspacePremium className="h-5 w-5" />,
    label: "Qualifications",
    href: "/qualification",
    gradient: "radial-gradient(circle, rgba(100,40,200,0.15) 0%, rgba(100,40,200,0.06) 50%, rgba(100,40,200,0) 100%)",
    iconColor: "text-purple-700",
  },
  {
    icon: <BsFillBriefcaseFill className="h-5 w-5" />,
    label: "Experience",
    href: "/experience",
    gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-white-500",
  },
  {
    icon: <FaFolderOpen className="h-5 w-5" />,
    label: "Projects",
    href: "/projects",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <MdContactPhone className="h-5 w-5" />,
    label: "Contact",
    href: "/contact",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <FaFilePdf className="h-5 w-5" />,
    label: "Resume",
    href: "/Gad_Ongoro_Resume_FS.pdf",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
]

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
  active: {
    opacity: 0.5,
    scale: 1.5,
    transition: {
      opacity: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.3, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export function NavBar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href
    }

    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 flex justify-center items-center p-4">
      <motion.nav
        className="grid md:flex justify-between items-center p-2 w-screen text-gray-900 rounded-2xl backdrop-blur-lg border border-border/40 shadow-lg overflow-hidden"
        initial="initial"
        whileHover="hover"
      >
        <div>
          <div className="m-1">
            <h2 className={`${pacifico.className} text-2xl md:text-3xl text-center`}>
              {" "}
              <Link href={"/"}> Gad Ongoro </Link>{" "}
            </h2>
          </div>
        </div>
        <motion.div variants={navGlowVariants} />
        <ul className="flex items-center gap-2 relative z-10">
          {menuItems.map((item) => {
            const active = isActive(item.href)
            return (
              <motion.li key={item.label} className="relative">
                <motion.div
                  className="block rounded-xl overflow-visible group relative"
                  style={{ perspective: "600px" }}
                  whileHover="hover"
                  initial="initial"
                  animate={active ? "active" : "initial"}
                >
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none"
                    variants={glowVariants}
                    style={{
                      background: item.gradient,
                      opacity: active ? 0.5 : 0,
                      borderRadius: "16px",
                    }}
                  />
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent transition-colors rounded-xl ${
                      active ? `text-foreground font-medium` : `text-muted-foreground group-hover:text-foreground`
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center bottom",
                    }}
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        active ? item.iconColor : `group-hover:${item.iconColor} text-foreground`
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span className="hidden md:block">
                      {item.label}
                      {active && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-current"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </span>
                  </Link>
                </motion.div>
              </motion.li>
            )
          })}
        </ul>
      </motion.nav>
    </header>
  )
}
