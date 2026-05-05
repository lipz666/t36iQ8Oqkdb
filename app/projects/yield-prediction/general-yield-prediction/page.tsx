"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function GeneralYieldPredictionPage() {
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
            <p className="font-mono text-xs tracking-[0.3em] text-accent">MODULE 01 — 03</p>
            <span className="font-mono text-xs px-2 py-0.5 bg-green-500/20 text-green-500 rounded">已完成</span>
          </div>
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4">
            通用产率预测模型
          </h1>
          <p className="font-mono text-lg md:text-xl text-muted-foreground italic mb-8">
            General Yield Prediction Model
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">研究背景与创新</h2>
          <div className="max-w-4xl">
            <p className="text-muted-foreground leading-relaxed mb-8">
              本项目挑战了"数据规模决定性能"的传统认知，首次提出<strong className="text-accent">反应密度理论</strong>，揭示了产率预测效果不仅取决于数据总量，更受控于单类反应的数据密度与反应类型多样性的权衡。基于此发现，我们构建了十万量级Reaxys文献数据集mix100并训练出<strong className="text-white">通用产率预测模型</strong>。实验证明，该模型能精准捕捉复杂结构与产率的关联，在<strong className="text-accent">高产率反应筛选</strong>任务中表现卓越，富集效率显著优于随机水平。作为目前业内<strong className="text-white">唯一</strong>能有效执行此类筛选任务的工具，本项目为化学实验的优先级决策提供了核心技术支撑。
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">核心创新点</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-sans text-xl font-light mb-3 text-white">理论突破</h3>
              <p className="text-muted-foreground text-sm">
                从"关注数据量"转向"关注数据结构"，提出反应密度平衡框架。
              </p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-sans text-xl font-light mb-3 text-white">通用建模</h3>
              <p className="text-muted-foreground text-sm">
                在50余种反应类型混合的复杂空间（mix100）中实现统一建模。
              </p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-sans text-xl font-light mb-3 text-white">实战筛选</h3>
              <p className="text-muted-foreground text-sm">
                模型在Top-100筛选中Precision高达0.91，显著高于随机猜测，具备极强的早期富集能力。
              </p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-sans text-xl font-light mb-3 text-white">唯一性</h3>
              <p className="text-muted-foreground text-sm">
                填补了大规模多类型高产率反应筛选工具的空白。
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">虚拟筛选实验结果</h2>
          <div className="max-w-4xl">
            <div className="flex justify-center mb-8">
              <div className="rounded-lg overflow-hidden border border-white/10 max-w-2xl w-full">
                <img
                  src="/yield/virtual_screening_enrichment_curve.png"
                  alt="虚拟筛选富集曲线"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="text-center text-muted-foreground text-sm mb-8">
              虚拟筛选富集曲线 - 展示模型在高产率反应筛选中的早期富集能力
            </p>

            <div className="flex justify-center mb-8">
              <div className="rounded-lg overflow-hidden border border-white/10 max-w-2xl w-full">
                <img
                  src="/yield/virtual_screening_cumulative_hits.png"
                  alt="累积命中数曲线"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="text-center text-muted-foreground text-sm">
              累积命中数曲线 - 展示随着筛选数量增加的高产率反应累积发现情况
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">实际应用</h2>
          <div className="max-w-4xl">
            <p className="text-muted-foreground leading-relaxed mb-6">
              我们的基于 <strong className="text-white">RF Residual Quantile YDR</strong> 的通用产率预测模型已经应用到 <strong className="text-accent">RetrosynthesisClaw</strong> 中作为产率预测模块，辅助 AI 逆合成分析。该模型能够为每条逆合成路线提供可靠的产率估计，帮助评估各步反应的可行性和整体合成效率。
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              模型下载链接：https://github.com/lipz666/RetrosynthesisClaw/releases/tag/v1.0.0
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">实验结果数据</h2>
          <div className="max-w-4xl">
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="font-mono text-xs text-muted-foreground px-4 py-3 text-left">指标</th>
                    <th className="font-mono text-xs text-muted-foreground px-4 py-3 text-center">数值</th>
                    <th className="font-mono text-xs text-muted-foreground px-4 py-3 text-left">说明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="px-4 py-3 text-white">Top-100 Precision</td>
                    <td className="px-4 py-3 text-center text-accent">0.91</td>
                    <td className="px-4 py-3 text-muted-foreground">筛选前100个反应的精确率</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="px-4 py-3 text-white">早期富集倍数</td>
                    <td className="px-4 py-3 text-center text-accent">8.3x</td>
                    <td className="px-4 py-3 text-muted-foreground">相对于随机筛选的富集倍数</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="px-4 py-3 text-white">数据集规模</td>
                    <td className="px-4 py-3 text-center text-accent">10万+</td>
                    <td className="px-4 py-3 text-muted-foreground">Reaxys文献数据集mix100</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-white">反应类型覆盖</td>
                    <td className="px-4 py-3 text-center text-accent">50+</td>
                    <td className="px-4 py-3 text-muted-foreground">支持的反应类型数量</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 pt-16 border-t border-white/10 flex justify-between items-center"
        >
          <div>
            <p className="text-muted-foreground text-sm mb-2">PREVIOUS</p>
            <Link
              href="/projects/yield-prediction/yield-collapse"
              className="text-white hover:text-accent transition-colors"
            >
              ← 产率预测坍缩与解决
            </Link>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground text-sm mb-2">NEXT MODULE</p>
            <Link
              href="/projects/retrosynthesis"
              className="text-white hover:text-accent transition-colors flex items-center gap-2"
            >
              AI逆合成
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}