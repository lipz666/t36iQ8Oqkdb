"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function YieldCollapsePage() {
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
            <p className="font-mono text-xs tracking-[0.3em] text-accent">MODULE 01 — 02</p>
            <span className="font-mono text-xs px-2 py-0.5 bg-accent/20 text-accent rounded">论文撰写中</span>
          </div>
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4">
            产率预测坍缩与解决方法
          </h1>
          <p className="font-mono text-lg md:text-xl text-muted-foreground italic mb-8">
            Yield Prediction Collapse & Resolution
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
              反应产率预测是计算机辅助合成规划的核心任务，直接决定了筛选候选反应的效率与成本。然而在模型报道和真实训练中，我们发现了一个普遍的现象：<strong className="text-white">产率预测塌缩</strong>。即模型预测值会系统性地向中等产率区间收缩，导致高产率反应被低估、低产率反应被高估。这种现象使得模型虽然平均误差（MAE）较低，却在实际筛选中失去了对高价值反应的区分度与分布还原能力。因此，找出解决产率预测系统性坍缩的方法，是产率预测模型能否实际应用的关键。
            </p>
            <div className="flex justify-center mb-8">
              <div className="rounded-lg overflow-hidden border border-white/10 max-w-3xl w-full">
                <img
                  src="/yield/预测坍塌示意图.png"
                  alt="预测坍缩现象图"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="text-center text-muted-foreground text-sm mb-8">
              预测坍缩现象图 - 展示模型预测值向中等产率区间收缩的现象
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">研究内容</h2>
          <div className="max-w-4xl">
            <p className="text-muted-foreground leading-relaxed mb-8">
              本项目以"解决预测坍缩"为核心目标，提出了一套全新的具备分布感知的预测框架。
            </p>

            <div className="space-y-8">
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-sans text-xl font-light mb-3 text-accent">1. 定义并量化"预测塌缩"</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  首次系统性地总结并提出了塌缩率（Collapse Ratio）指标，论证了预测塌缩是由于条件期望回归 paradigm 所诱发的普遍性失效。
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  为量化预测坍塌现象，本文首次引入Collapse Ratio（CR）指标：
                </p>
                <div className="bg-white/5 rounded-lg p-4 mb-4 text-center">
                  <p className="text-white font-mono text-sm">CR = Var(ŷ) / Var(y)</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  其中：
                </p>
                <div className="bg-white/5 rounded-lg p-4 mb-4 text-sm text-muted-foreground font-mono">
                  <p className="mb-1">Var(ŷ) = (1/N) Σ<sub>i=1</sub><sup>N</sup>(ŷ<sub>i</sub> - ŷ̄)<sup>2</sup></p>
                  <p>Var(y) = (1/N) Σ<sub>i=1</sub><sup>N</sup>(y<sub>i</sub> - ȳ)<sup>2</sup></p>
                </div>
                <div className="flex justify-center mb-4">
                  <div className="rounded-lg overflow-hidden border border-white/10 max-w-xl w-full">
                    <img
                      src="/yield/产率预测坍缩现象.png"
                      alt="产率预测坍缩现象"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <p className="text-center text-muted-foreground text-sm">
                  产率预测坍缩的普遍性
                </p>
              </div>

              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-sans text-xl font-light mb-3 text-accent">2. 构建 Residual Quantile YDR 框架</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  提出"解耦学习"策略，利用随机森林（RF）作为 backbone 捕捉稳定的全局趋势与排名信号，同时引入残差分位数模块（Residual Quantile Module）在残差空间内恢复局部波动与分布离散度。
                </p>
                <div className="flex justify-center mb-6">
                  <div className="rounded-lg overflow-hidden border border-white/10 max-w-2xl w-full">
                    <img
                      src="/yield/Residual Quantile YDR 架构.png"
                      alt="Residual Quantile YDR框架"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <p className="text-center text-muted-foreground text-sm">
                  Residual Quantile YDR框架 - 展示解耦学习策略的架构
                </p>
              </div>

              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-sans text-xl font-light mb-3 text-accent">3. Variance Rescaling 方法</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  基于产率预测模型具备很好的产率排序能力，引入系统性恢复产率预测分布的方法 Variance Rescaling。
                </p>
                <div className="flex justify-center mb-6">
                  <div className="rounded-lg overflow-hidden border border-white/10 max-w-2xl w-full">
                    <img
                      src="/yield/Variance Rescaling效果.png"
                      alt="Variance Rescaling效果对比"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <p className="text-center text-muted-foreground text-sm mt-4">
                  Variance Rescaling效果对比 - 展示分布恢复前后的预测性能
                </p>
              </div>

              <div className="border border-white/10 rounded-lg p-6 mt-8">
                <h3 className="font-sans text-xl font-light mb-4 text-accent">Variance Rescaling 算法思路</h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Variance Rescaling 方法的核心思想是通过调整模型预测值的方差，使其与真实产率的方差相匹配，从而恢复预测分布的多样性，缓解预测坍缩问题。
                  </p>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white font-mono text-sm text-center mb-4">α = (σ²<sub>true</sub> / σ²<sub>pred</sub>)<sup>β</sup></p>
                    <p className="text-sm">
                      首先计算缩放系数 α，它是真实产率方差与预测方差比值的 β 次幂。参数 β 控制缩放强度，当 β=0.5 时，预测值的标准差将被拉伸到与真实值一致。
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white font-mono text-sm text-center mb-4">ŷ<sub>rescaled</sub> = ŷ̄<sub>pred</sub> + α · (ŷ<sub>original</sub> - ŷ̄<sub>pred</sub>)</p>
                    <p className="text-sm">
                      然后以验证集预测值的均值为中心点，对原始预测值进行线性重缩放，使预测分布的方差与真实分布对齐。
                    </p>
                  </div>
                  
                  <p>
                    最后，由于化学产率在物理上必须位于 [0, 100] 之间，重缩放后的预测值会经过截断处理，确保结果符合实际约束条件。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-16 border-t border-white/10 flex justify-between items-center"
        >
          <div>
            <p className="text-muted-foreground text-sm mb-2">PREVIOUS</p>
            <Link
              href="/projects/yield-prediction/rf-is-all-you-need"
              className="text-white hover:text-accent transition-colors"
            >
              ← RF is all you need
            </Link>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground text-sm mb-2">NEXT</p>
            <Link
              href="/projects/yield-prediction/general-yield-prediction"
              className="text-white hover:text-accent transition-colors flex items-center gap-2"
            >
              通用产率预测模型
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}