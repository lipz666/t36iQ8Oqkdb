"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

const subProjects = [
  {
    id: "rf-is-all-you-need",
    title: "RF is all you need",
    subtitle: "SOTA Model",
    description: "基于随机森林的领域最强产率预测模型，在精度层面取得SOTA（当前最优）",
    status: "论文撰写中",
  },
  {
    id: "yield-collapse",
    title: "产率预测坍缩现象与解决",
    subtitle: "Collapse Phenomenon",
    description: "首次总结并定义产率预测坍塌的普遍现象，并提出通用的解决方法",
    status: "论文撰写中",
  },
  {
    id: "general-yield-prediction",
    title: "通用产率预测模型",
    subtitle: "General Model",
    description: "首次提出反应密度相关理论，训练出能够有效筛选高产率反应的通用产率预测模型",
    status: "已完成",
  },
]

export default function YieldPredictionPage() {
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
          <p className="font-mono text-xs tracking-[0.3em] text-accent mb-4">MODULE 01</p>
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6">
            产率预测模型
          </h1>
          <p className="font-mono text-xl md:text-2xl text-muted-foreground italic mb-8">
            Yield Prediction Models
          </p>
          <div className="max-w-3xl">
            <p className="text-muted-foreground leading-relaxed">
              反应产率预测是 AI for Chemistry 中最核心、也最具挑战性的任务之一。本项目致力于通过机器学习，
              捕捉有机反应中化合物结构与产率之间的关系。目前在精度层面已经在该领域取得SOTA（当前最优），
              在理论层面，我们首次总结并定义了产率预测坍塌的普遍现象，并提出了通用的解决方法。
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
              src="/yield/主图.png"
              alt="产率预测模型示意图"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
        <p className="text-center text-muted-foreground text-sm mb-8">
          产率预测
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
                href={`/projects/yield-prediction/${project.id}`}
                className="group block border border-white/10 rounded-lg p-6 md:p-8 hover:border-accent/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                      <span className="font-mono text-xs px-2 py-0.5 bg-accent/20 text-accent rounded">
                        {project.status}
                      </span>
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
          <h2 className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-6">KEY HIGHLIGHTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-white/10 rounded-lg p-6">
              <p className="font-sans text-4xl font-light text-accent mb-2">SOTA</p>
              <p className="text-sm text-muted-foreground">领域最优产率预测精度</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <p className="font-sans text-4xl font-light text-accent mb-2">First</p>
              <p className="text-sm text-muted-foreground">首次定义产率预测坍缩现象</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <p className="font-sans text-4xl font-light text-accent mb-2">Novel</p>
              <p className="text-sm text-muted-foreground">提出反应密度相关理论</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}