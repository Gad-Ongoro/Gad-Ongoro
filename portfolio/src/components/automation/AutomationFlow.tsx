"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, type LucideIcon } from "lucide-react";

export interface AutomationStep {
  icon: LucideIcon;
  label: string;
  description?: string;
}

interface AutomationFlowProps {
  steps: AutomationStep[];
  compact?: boolean;
}

export default function AutomationFlow({ steps, compact = false }: AutomationFlowProps) {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-1 md:gap-0 flex-wrap">
      {steps.map((step, i) => {
        const Icon = step.icon;
        const isLast = i === steps.length - 1;

        return (
          <div key={step.label} className="flex flex-col md:flex-row items-center">
            <motion.div
              className={`rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-center shadow-sm ${
                compact ? "p-3 w-28" : "p-5 w-40"
              }`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div
                className={`inline-flex items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 mb-2 ${
                  compact ? "w-8 h-8" : "w-10 h-10"
                }`}
              >
                <Icon className={compact ? "w-4 h-4" : "w-5 h-5"} />
              </div>
              <p
                className={`font-semibold text-gray-900 dark:text-white leading-tight ${
                  compact ? "text-xs" : "text-sm"
                }`}
              >
                {step.label}
              </p>
              {!compact && step.description && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-snug">
                  {step.description}
                </p>
              )}
            </motion.div>

            {!isLast && (
              <motion.div
                className="shrink-0 text-violet-400 dark:text-violet-500"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1,
                }}
              >
                <ArrowRight className="hidden md:block w-6 h-6 mx-1" />
                <ArrowDown className="md:hidden w-6 h-6 my-1" />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}