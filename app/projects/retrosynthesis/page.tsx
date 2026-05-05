"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

const subProjects = [
  {
    id: "retrosynthesis-claw",
    title: "RetrosynthesisClaw",
    subtitle: "LLM Agent 可解释逆合成",
    description: "通过LLM-Agent协作，将逆合成拆解为分子解析、策略生成、路线规划和可行性评估等环节，为每步反应提供清晰的逻辑解释与设计依据",
  },
  {
    id: "reactivity-promoted-rl",
    title: "基于 Reactivity Promoted 强化学习的无模板基 AI 逆合成",
    subtitle: "RL-based Template-free Retrosynthesis",
    description: "引入RPF模块对反应可行性进行显式判断，并结合产率预测，通过强化学习方法引导模型生成更可行的逆合成分析",
  },
]

export default function RetrosynthesisPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-16">
      <div className="px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-xs tracking-wider">BACK TO PROJECTS</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-accent mb-4">MODULE 02</p>
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6">
            AI逆合成
          </h1>
          <p className="font-mono text-xl md:text-2xl text-muted-foreground italic mb-8">
            AI Retrosynthesis
          </p>
          <div className="max-w-3xl">
            <p className="text-muted-foreground leading-relaxed">
              在现代化学与制药研发中，逆合成设计是从目标分子回溯可行合成路线的核心环节。
              项目核心融合了两大创新技术：一方面通过LLM-Agent协作提升可解释性；
              另一方面引入强化学习方法实现无模板的智能逆合成分析。
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 flex justify-center"
        >
          <div className="rounded-lg overflow-hidden border border-white/10 max-w-3xl w-full">
            <img
              src="/retro/re.png"
              alt="AI逆合成系统示意图"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
        <p className="text-center text-muted-foreground text-sm mb-8">
          AI逆合成系统架构图 - 输入目标分子，输出多条可行的合成路线
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-white/10 pt-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-8">SUB MODULES</h2>
          <div className="space-y-6">
            {subProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/retrosynthesis/${project.id}`}
                className="group block border border-white/10 rounded-lg p-6 md:p-8 hover:border-accent/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                    </div>
                    <h3 className="font-sans text-2xl md:text-3xl font-light tracking-tight group-hover:text-accent transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="font-mono text-sm text-accent mb-4">{project.subtitle}</p>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors mt-2" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-16 border-t border-white/10"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-6">KEY INNOVATIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-white/10 rounded-lg p-6">
              <p className="font-sans text-4xl font-light text-accent mb-2">Multi-Agent</p>
              <p className="text-sm text-muted-foreground">LLM-Agent 协作框架</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <p className="font-sans text-4xl font-light text-accent mb-2">Interpretable</p>
              <p className="text-sm text-muted-foreground">可解释的逆合成决策</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <p className="font-sans text-4xl font-light text-accent mb-2">Template-free</p>
              <p className="text-sm text-muted-foreground">无模板基逆合成</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <p className="font-sans text-4xl font-light text-accent mb-2">RL-powered</p>
              <p className="text-sm text-muted-foreground">强化学习引导生成</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}