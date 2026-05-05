"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function AIMaterialDesignPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-16">
      <div className="px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/projects/semcond"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-xs tracking-wider">BACK TO SEMCOND</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <p className="font-mono text-xs tracking-[0.3em] text-accent">MODULE 03 — 02</p>
            <span className="font-mono text-xs px-2 py-0.5 bg-accent/20 text-accent rounded">研究中</span>
          </div>
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4">
            AI材料设计
          </h1>
          <p className="font-mono text-lg md:text-xl text-muted-foreground italic mb-8">
            Performance → Structure
          </p>
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
              在材料设计领域，传统 AI 模型通常需要用户输入一组预先定义好的结构化性能参数，例如带隙、稳定性、模量、导电性或容量等，然后模型在某个特定材料体系内生成候选结构。这样的方式虽然有效，但也存在明显局限：
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-3 border border-white/10 rounded-lg">
                <span className="font-mono text-accent text-xs mt-1">01</span>
                <p className="text-sm text-muted-foreground">输入形式不够自然，必须限定为固定参数接口</p>
              </div>
              <div className="flex items-start gap-3 p-3 border border-white/10 rounded-lg">
                <span className="font-mono text-accent text-xs mt-1">02</span>
                <p className="text-sm text-muted-foreground">模型往往绑定在某一特定材料体系中，泛化能力有限</p>
              </div>
              <div className="flex items-start gap-3 p-3 border border-white/10 rounded-lg">
                <span className="font-mono text-accent text-xs mt-1">03</span>
                <p className="text-sm text-muted-foreground">很难直接利用文献中大量非结构化的性能描述与设计经验</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              我们希望将 SemCond 技术扩展到这一任务中，构建一种更通用的 <strong className="text-white">"文本到材料设计"</strong> 框架：用户输入对目标材料性能的自然语言描述，模型输出候选材料结构及设计方案。
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">CORE CONCEPT</h2>
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              <div className="text-center p-6 bg-black/30 rounded-lg border border-white/10 min-w-[180px]">
                <p className="font-mono text-xs text-muted-foreground mb-3">INPUT</p>
                <div className="text-sm space-y-1">
                  <p className="text-white/90">"高能量密度</p>
                  <p className="text-white/90">热稳定性好</p>
                  <p className="text-white/90">成本低廉"</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-accent rotate-90 md:rotate-0" />
              </div>
              <div className="text-center p-6 bg-black/30 rounded-lg border border-white/10 min-w-[180px]">
                <p className="font-mono text-xs text-muted-foreground mb-3">AI MODEL</p>
                <div className="text-accent font-medium">
                  <p>SemCond</p>
                  <p>Framework</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-accent rotate-90 md:rotate-0" />
              </div>
              <div className="text-center p-6 bg-black/30 rounded-lg border border-white/10 min-w-[180px]">
                <p className="font-mono text-xs text-muted-foreground mb-3">OUTPUT</p>
                <div className="text-sm space-y-1">
                  <p className="text-white/90">材料结构</p>
                  <p className="text-white/90">设计方案</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">核心思路</h2>
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-sans text-lg font-light mb-4 text-accent">1. 从"参数驱动"转向"语义驱动"</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  传统材料生成模型通常要求输入一组固定的结构化指标，而 SemCond 的目标是让模型能够直接理解如下类型的描述：
                </p>
                <div className="space-y-2">
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-sm text-white/80">"具有高离子电导率且热稳定性好的固态电解质"</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-sm text-white/80">"兼具高比容量和长循环寿命的正极材料"</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-sm text-white/80">"在室温下具有柔性、透明性和良好导电性的功能薄膜材料"</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  输入不再局限于少量标准化数值，而可以是更完整、更接近科研思维方式的性能需求表达。
                </p>
              </div>

              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-sans text-lg font-light mb-4 text-accent">2. 利用非结构化知识训练更通用的材料模型</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  由于 SemCond 不依赖严格完备的结构化性能标签，在训练阶段就不必把数据源限制在少数高质量表格型数据库中，而可以进一步利用：
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-xs text-white/80">文献性能描述</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-xs text-white/80">实验结果讨论</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-xs text-white/80">专利应用需求</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-xs text-white/80">设计经验文本</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  模型有机会接触更大范围、更丰富语义层次的材料知识，从而突破传统材料生成模型"只会在固定任务里工作"的限制。
                </p>
              </div>

              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-sans text-lg font-light mb-4 text-accent">3. 基于扩散模型实现材料结构生成</h3>
                <p className="text-muted-foreground leading-relaxed">
                  在生成层面，计划使用扩散模型来完成从"性能语义条件"到"候选材料结构"的映射。这一路线类似于当前图像生成模型中的"文本生成图像"，但在这里，输入的是材料性能描述，输出的是候选材料结构与设计建议。
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
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">愿景</h2>
          <div className="max-w-4xl">
            <div className="bg-white/5 rounded-lg p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                如果这一方向顺利实现，SemCond 将不仅仅是一种实验文本编码技术，而会进一步发展为一种面向 <strong className="text-accent">AI for Science</strong> 的通用语义接口：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="border border-white/10 rounded-lg p-4 text-center">
                  <p className="text-sm text-accent mb-2">预测任务</p>
                  <p className="text-xs text-muted-foreground">让模型直接理解实验条件</p>
                </div>
                <div className="border border-white/10 rounded-lg p-4 text-center">
                  <p className="text-sm text-accent mb-2">生成任务</p>
                  <p className="text-xs text-muted-foreground">让模型直接理解性能需求</p>
                </div>
                <div className="border border-white/10 rounded-lg p-4 text-center">
                  <p className="text-sm text-accent mb-2">更广泛场景</p>
                  <p className="text-xs text-muted-foreground">连接自然语言与科学结构</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                对于材料设计而言，这意味着 AI 不再只接受"固定格式参数输入"，而能够真正理解研究者的设计意图，并参与到更开放、更灵活的科学创造过程中。
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-16 border-t border-white/10 flex justify-between items-center"
        >
          <div>
            <p className="text-muted-foreground text-sm mb-2">PREVIOUS</p>
            <Link
              href="/projects/semcond/reaction-condition-encoding"
              className="text-white hover:text-accent transition-colors"
            >
              ← 反应条件编码
            </Link>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground text-sm mb-2">NEXT</p>
            <Link
              href="/#works"
              className="text-white hover:text-accent transition-colors"
            >
              返回项目总览 →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}