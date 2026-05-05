"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function RFIsAllYouNeedPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-16">
      <div className="px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/projects/yield-prediction"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-xs tracking-wider">BACK TO YIELD PREDICTION</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <p className="font-mono text-xs tracking-[0.3em] text-accent">MODULE 01 — 01</p>
            <span className="font-mono text-xs px-2 py-0.5 bg-accent/20 text-accent rounded">论文撰写中</span>
          </div>
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4">
            RF is all you need
          </h1>
          <p className="font-mono text-lg md:text-xl text-muted-foreground italic mb-8">
            SOTA Yield Prediction Model
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">研究背景</h2>
          <div className="max-w-4xl">
            <p className="text-muted-foreground leading-relaxed mb-8">
              反应产率预测是化学合成中至关重要的任务，直接影响实验路线选择、资源消耗和实验效率。现有研究主要通过改进反应表征（reaction encoder）和深度学习模型来提升预测性能，但几乎普遍使用默认多层感知机（MLP）作为解码器，忽略了解码器在最终精度中可能起到的关键作用。这导致现有方法在性能提升时往往被错误归因于表征能力，而未充分考虑解码器选择的影响。
            </p>
            <div className="flex justify-center mb-8">
              <div className="rounded-lg overflow-hidden border border-white/10 max-w-2xl w-full">
                <img
                  src="/yield/1.png"
                  alt="RF模型架构图"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="text-center text-muted-foreground text-sm mb-8">
              RF模型架构图 - 分子结构经ECFP2编码后输入随机森林进行产率预测
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">项目内容</h2>
          <div className="max-w-4xl">
            <p className="text-muted-foreground leading-relaxed mb-8">
              本项目系统评估了解码器在产率预测任务中的作用，并证明<strong className="text-white">随机森林（RF）</strong>是该任务的最优解码器，实现了领域<strong className="text-accent">SOTA</strong>性能。
            </p>

            <h3 className="font-sans text-xl font-light mb-4 text-white">1. 打破 Benchmark</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              在 USPTO500MT 数据集上，我们使用单一 RF 基线就达到了或超越了当前深度学习模型的预测精度，刷新了该任务的标准。
            </p>

            <div className="border border-white/10 rounded-lg overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="font-mono text-xs text-muted-foreground px-4 py-3 text-left">Method</th>
                    <th className="font-mono text-xs text-muted-foreground px-4 py-3 text-center">MAE</th>
                    <th className="font-mono text-xs text-muted-foreground px-4 py-3 text-center">RMSE</th>
                    <th className="font-mono text-xs text-muted-foreground px-4 py-3 text-center">R²</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="px-4 py-3 text-white">YieldBERT</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.191</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.245</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.054</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="px-4 py-3 text-white">T5Chem</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.190</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.249</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.025</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="px-4 py-3 text-white">log-RRIM I</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.179</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.228</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.183</td>
                  </tr>
                  <tr className="bg-accent/10">
                    <td className="px-4 py-3 text-accent font-medium">RF</td>
                    <td className="px-4 py-3 text-center text-accent">0.174</td>
                    <td className="px-4 py-3 text-center text-accent">0.217</td>
                    <td className="px-4 py-3 text-center text-accent">0.257</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-sans text-xl font-light mb-4 text-white">2. Decoder-swap 实验</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              在 HDA 数据集上固定反应表征，仅替换解码器（RF 与 MLP），明确显示性能提升完全来源于 RF 的解码能力，而非表征优化。
            </p>
            <div className="flex justify-center mb-8">
              <div className="rounded-lg overflow-hidden border border-white/10 max-w-2xl w-full">
                <img
                  src="/yield/2.png"
                  alt="Decoder-swap实验结果"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="text-center text-muted-foreground text-sm mb-8">
              实验结果
            </p>

            <h3 className="font-sans text-xl font-light mb-4 text-white">3. 任务结构分析与多模型比较</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              系统分析局部相似反应邻域的产率差异，发现任务存在显著局部非平滑性和标签冲突。在高冲突区域对比多种回归模型，RF 始终表现最稳健，显著优于平滑回归器（MLP、Ridge、SVR 等），解释了其在该任务中表现卓越的原因。
            </p>

            <div className="flex justify-center mb-8">
              <div className="rounded-lg overflow-hidden border border-white/10 max-w-3xl w-full">
                <img
                  src="/yield/3.png"
                  alt="任务结构分析图"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="text-center text-muted-foreground text-sm mb-8">
              产率预测更倾向于基于树的划分而非平滑全局回归
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">核心结论</h2>
          <div className="max-w-4xl">
            <p className="text-muted-foreground leading-relaxed">
              通过上述方法，本项目不仅在产率预测任务上实现了<strong className="text-accent">领域最强性能</strong>，而且揭示了任务本身对树模型的天然适配性，明确了"<strong className="text-white">RF is all you need</strong>"的结论。这为反应产率预测研究提供了新的标杆，也为模型选择和任务建模提供了明确的指导。
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-16 border-t border-white/10 flex justify-between items-center"
        >
          <div>
            <p className="text-muted-foreground text-sm mb-2">PREVIOUS</p>
            <Link
              href="/projects/yield-prediction"
              className="text-white hover:text-accent transition-colors"
            >
              ← 产率预测模型总览
            </Link>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground text-sm mb-2">NEXT</p>
            <Link
              href="/projects/yield-prediction/yield-collapse"
              className="text-white hover:text-accent transition-colors flex items-center gap-2"
            >
              产率预测坍缩与解决
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}