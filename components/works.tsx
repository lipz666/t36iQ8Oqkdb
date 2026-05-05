"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import Link from "next/link"

const projects = [
  {
    title: "产率预测模型",
    subtitle: "Yield Prediction",
    description: "领域最强SOTA模型，首次定义产率预测坍缩现象并提出通用解决方法",
    tags: ["Machine Learning", "Chemistry", "SOTA"],
    href: "/projects/yield-prediction",
  },
  {
    title: "AI逆合成",
    subtitle: "AI Retrosynthesis",
    description: "LLM-Agent协作的可解释逆合成规划与强化学习无模板逆合成",
    tags: ["LLM Agent", "Reinforcement Learning", "CASP"],
    href: "/projects/retrosynthesis",
  },
  {
    title: "SemCond技术",
    subtitle: "Semantic Conditions",
    description: "实验文本语义编码，将自然语言实验条件直接转化为语义向量",
    tags: ["NLP", "Semantic Encoding", "Materials"],
    href: "/projects/semcond",
  },
]

export function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  return (
    <section className="relative py-32 px-8 md:px-12 md:py-24" id="works">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">02 — RESEARCH</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Research Projects</h2>
      </motion.div>

      <div ref={containerRef} onMouseMove={handleMouseMove} className="relative">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative border-t border-white/10 py-8 md:py-12"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link
              href={project.href}
              data-cursor-hover
              className="group flex flex-col md:flex-row md:items-start justify-between gap-4"
            >
              <span className="font-mono text-xs text-muted-foreground tracking-widest order-1 md:order-none mt-2">
                0{index + 1}
              </span>

              <div className="flex-1">
                <motion.h3
                  className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight group-hover:text-white/70 transition-colors duration-300"
                  animate={{
                    x: hoveredIndex === index ? 20 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {project.title}
                </motion.h3>
                <p className="font-mono text-sm text-accent mt-2 tracking-wider">{project.subtitle}</p>
                <p className="text-muted-foreground mt-4 max-w-xl text-sm md:text-base">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-2 flex-wrap order-2 md:order-none md:mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-wider px-3 py-1 border border-white/20 rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.div
                className="hidden md:flex items-center mt-2"
                animate={{
                  x: hoveredIndex === index ? 10 : 0,
                  opacity: hoveredIndex === index ? 1 : 0.5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        ))}

        <motion.div
          className="absolute pointer-events-none z-50 w-64 h-40 md:w-80 md:h-48 overflow-hidden rounded-lg"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-320%",
          }}
          animate={{
            opacity: hoveredIndex !== null ? 1 : 0,
            scale: hoveredIndex !== null ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          {hoveredIndex !== null && (
            <motion.div
              className="w-full h-full bg-gradient-to-br from-accent/30 to-transparent flex items-center justify-center"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <span className="font-sans text-6xl font-light text-white/30">{projects[hoveredIndex].title[0]}</span>
            </motion.div>
          )}
          <div className="absolute inset-0 bg-[#2563eb]/10 mix-blend-overlay" />
        </motion.div>
      </div>

      <div className="border-t border-white/10" />
    </section>
  )
}