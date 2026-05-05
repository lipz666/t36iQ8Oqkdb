"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

const subProjects = [
  {
    id: "reaction-condition-encoding",
    title: "反应条件编码",
    subtitle: "Reaction Condition Encoding",
    description: "将反应文本中的实验条件描述直接编码为语义向量，并与分子结构表示融合，用于反应产率预测",
  },
  {
    id: "ai-material-design",
    title: "AI材料设计",
    subtitle: "性能 → 结构",
    description: "让模型直接理解自然语言形式的性能需求，并输出相应的材料结构与设计方案",
  },
]

export default function SemcondPage() {
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
          <p className="font-mono text-xs tracking-[0.3em] text-accent mb-4">MODULE 03</p>
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6">
            SemCond 技术
          </h1>
          <p className="font-mono text-xl md:text-2xl text-muted-foreground italic mb-8">
            Semantic Conditions
          </p>
          <div className="max-w-3xl">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-white">SemCond（Semantic Conditions）</strong>是我们提出的一种面向 <strong className="text-accent">AI for Science</strong> 的核心技术，用于将科学实验文本直接转化为模型可用的条件表示。
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">简介</h2>
          <div className="max-w-4xl">
            <p className="text-muted-foreground leading-relaxed mb-6">
              与传统方法需要先将实验文本抽取成结构化字段不同，SemCond 可以直接利用自然语言中的实验条件、操作步骤和性能需求，实现高效、可扩展的科学建模。
            </p>
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
              <p className="text-white/90 text-lg">
                <strong className="text-accent">核心理念：</strong>让实验文本本身成为机器学习的条件模态，而不依赖完整的结构化数据。
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 flex justify-center"
        >
          <div className="rounded-lg overflow-hidden border border-white/10 max-w-3xl w-full">
            <img
              src="/semcond/sem.png"
              alt="SemCond技术流程图"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
        <p className="text-center text-muted-foreground text-sm mb-8">
          SemCond技术流程图 - 实验文本经过编码器和PCA处理后输入机器学习模型
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">技术实现</h2>
          <div className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="border border-white/10 rounded-lg p-6">
                <p className="font-mono text-accent text-xs mb-4">STEP 01</p>
                <h3 className="font-sans text-lg font-light mb-3 text-white">文本编码</h3>
                <p className="text-sm text-muted-foreground">
                  使用 all-mpnet-base-v2 语言模型，将实验文本编码为高维向量，捕捉条件语义信息。
                </p>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <p className="font-mono text-accent text-xs mb-4">STEP 02</p>
                <h3 className="font-sans text-lg font-light mb-3 text-white">降维处理</h3>
                <p className="text-sm text-muted-foreground">
                  对高维向量进行 PCA 降维，去除噪声并提高训练效率。
                </p>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <p className="font-mono text-accent text-xs mb-4">STEP 03</p>
                <h3 className="font-sans text-lg font-light mb-3 text-white">模型训练</h3>
                <p className="text-sm text-muted-foreground">
                  将降维后的语义向量输入随机森林等传统机器学习模型进行训练。
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">技术特点</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            <div className="border border-white/10 rounded-lg p-4 flex items-start gap-3">
              <span className="font-mono text-accent text-xs mt-1">01</span>
              <div>
                <p className="text-white text-sm font-medium mb-1">Extraction-free</p>
                <p className="text-xs text-muted-foreground">无需复杂的结构化字段抽取，减少噪声和信息丢失</p>
              </div>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex items-start gap-3">
              <span className="font-mono text-accent text-xs mt-1">02</span>
              <div>
                <p className="text-white text-sm font-medium mb-1">语义丰富</p>
                <p className="text-xs text-muted-foreground">语言模型捕捉实验文本的隐含条件和上下文信息</p>
              </div>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex items-start gap-3">
              <span className="font-mono text-accent text-xs mt-1">03</span>
              <div>
                <p className="text-white text-sm font-medium mb-1">通用可扩展</p>
                <p className="text-xs text-muted-foreground">可直接应用于反应预测、材料性质预测或生成式科学任务</p>
              </div>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex items-start gap-3">
              <span className="font-mono text-accent text-xs mt-1">04</span>
              <div>
                <p className="text-white text-sm font-medium mb-1">可与传统模型结合</p>
                <p className="text-xs text-muted-foreground">降维后的向量可作为特征输入任意机器学习模型</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/10 pt-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-8">SUB MODULES</h2>
          <div className="space-y-6">
            {subProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/semcond/${project.id}`}
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
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 pt-16 border-t border-white/10"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-6">CORE PROBLEMS SOLVED</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-white/10 rounded-lg p-6">
              <p className="font-sans text-4xl font-light text-accent mb-2">01</p>
              <h3 className="font-sans text-lg font-light mb-2">信息损失</h3>
              <p className="text-sm text-muted-foreground">很多实验细节无法被固定字段完整表达</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <p className="font-sans text-4xl font-light text-accent mb-2">02</p>
              <h3 className="font-sans text-lg font-light mb-2">抽取噪声</h3>
              <p className="text-sm text-muted-foreground">文本转结构化过程会引入解析误差</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <p className="font-sans text-4xl font-light text-accent mb-2">03</p>
              <h3 className="font-sans text-lg font-light mb-2">数据浪费</h3>
              <p className="text-sm text-muted-foreground">字段缺失导致大量样本无法进入训练流程</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}