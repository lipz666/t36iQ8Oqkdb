"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Link from "next/link"

const statements = [
  "AI for Science Researcher",
  "Organic Chemistry Enthusiast",
  "Breaking the经验 Barrier",
]

export function About() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 })

  return (
    <section ref={containerRef} className="relative py-32 md:py-0" id="about">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-8 md:px-12 mb-0 py-20"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">01 — ABOUT</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">About Me</h2>
      </motion.div>

      {/* About Content */}
      <div className="px-8 md:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left Column - Avatar & Contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-48 rounded-lg mb-8 overflow-hidden border border-white/20">
              <img
                src="/个人照片.png"
                alt="李佩泽"
                className="w-full h-auto"
              />
            </div>
            <h3 className="font-sans text-2xl md:text-3xl font-light mb-4">李佩泽</h3>
            <p className="text-muted-foreground mb-6">
              兰州大学 2023级化学萃英班<br />
              入选教育部"<span className="text-accent font-medium">基础学科拔尖人才培养计划</span>"
            </p>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-muted-foreground">
                <span className="text-white mr-2">EMAIL</span>
                <a href="mailto:lipz2023@lzu.edu.cn" className="hover:text-accent transition-colors">
                  lipz2023@lzu.edu.cn
                </a>
              </p>
              <p className="text-muted-foreground">
                <span className="text-white mr-2">PHONE</span>
                <span>15326093193</span>
              </p>
              <p className="text-muted-foreground">
                <span className="text-white mr-2">GITHUB</span>
                <a href="https://github.com/lipz666" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  lipz666
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right Column - Bio & Research */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <h4 className="font-mono text-xs tracking-[0.3em] text-accent mb-4">RESEARCH DIRECTIONS</h4>
              <div className="space-y-3">
                <p className="text-lg md:text-xl text-white/90">反应产率预测</p>
                <p className="text-lg md:text-xl text-white/90">计算机辅助合成设计 (CASP)</p>
                <p className="text-lg md:text-xl text-white/90">自然语言处理 (NLP)</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h4 className="font-mono text-xs tracking-[0.3em] text-accent mb-4">BIO</h4>
              <p className="text-muted-foreground leading-relaxed">
                AI for Science 研究者，有机化学狂热爱好者。致力于通过机器学习技术
                捕捉有机反应中化合物结构与产率之间的关系，推动化学研究的智能化转型。
                入选教育部"基础学科拔尖人才培养计划"。
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative flex items-center overflow-hidden py-0 gap-0 h-16">
        <motion.div style={{ x: smoothX }} className="flex gap-16 md:gap-24 px-8 md:px-12 whitespace-nowrap">
          {statements.map((statement, index) => (
            <motion.p
              key={index}
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-light tracking-tight text-white/90"
              style={{
                WebkitTextStroke: index % 2 === 0 ? "none" : "1px rgba(255,255,255,0.3)",
                color: index % 2 === 0 ? "inherit" : "transparent",
              }}
            >
              {statement}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-16 mx-8 md:mx-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
      />
    </section>
  )
}
