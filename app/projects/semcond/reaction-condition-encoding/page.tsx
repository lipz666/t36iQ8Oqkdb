"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function ReactionConditionEncodingPage() {
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
            <p className="font-mono text-xs tracking-[0.3em] text-accent">MODULE 03 — 01</p>
            <span className="font-mono text-xs px-2 py-0.5 bg-accent/20 text-accent rounded">研究中</span>
          </div>
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4">
            反应条件编码
          </h1>
          <p className="font-mono text-lg md:text-xl text-muted-foreground italic mb-8">
            Reaction Condition Encoding for Yield Prediction
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
              反应产率预测是 AI for Chemistry 中最核心、也最具挑战性的任务之一。决定反应产率的不仅是反应物和产物的分子结构，还包括大量实验条件信息，例如温度、时间、溶剂、催化剂、投料比例、操作顺序等。
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              然而，现实中的反应条件通常不是以完整表格形式存在，而是散落在实验 procedure、文献描述和专利文本中。传统方法通常依赖人工整理或信息抽取，将这些内容转为结构化字段后再用于建模，但这一流程成本高、误差大，而且容易因为缺失字段而浪费大量数据。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              为了解决这一问题，我们提出将反应条件文本直接编码为语义表示，使模型能够从实验语言中直接学习反应条件信息，而不必完全依赖结构化抽取。
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
              在这一项目中，我们构建了一个<strong className="text-white">多模态反应产率预测框架</strong>，将以下信息进行融合建模：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="border border-accent/30 bg-accent/5 rounded-lg p-4">
                <p className="text-sm text-accent font-medium mb-2">分子结构表示</p>
                <p className="text-xs text-muted-foreground">表征反应物/产物本身的化学结构特征</p>
              </div>
              <div className="border border-accent/30 bg-accent/5 rounded-lg p-4">
                <p className="text-sm text-accent font-medium mb-2">实验条件语义表示</p>
                <p className="text-xs text-muted-foreground">通过语言模型对反应文本进行编码，获得条件语义向量</p>
              </div>
              <div className="border border-accent/30 bg-accent/5 rounded-lg p-4">
                <p className="text-sm text-accent font-medium mb-2">结构化条件特征</p>
                <p className="text-xs text-muted-foreground">作为补充输入，与语义表示共同参与建模</p>
              </div>
            </div>

            <h3 className="font-sans text-lg font-light mb-4 text-white">实验策略对比</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              在预实验中，我们系统比较了不同建模策略：
            </p>
            <div className="space-y-3 text-sm mb-8">
              <div className="flex items-center gap-3 p-3 border border-white/10 rounded-lg">
                <span className="font-mono text-accent text-xs">01</span>
                <span className="text-muted-foreground">structure_only - 仅分子结构特征</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-white/10 rounded-lg">
                <span className="font-mono text-accent text-xs">02</span>
                <span className="text-muted-foreground">text_only - 仅实验文本特征</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-white/10 rounded-lg">
                <span className="font-mono text-accent text-xs">03</span>
                <span className="text-muted-foreground">multimodal_raw_text - 结构+原始文本向量</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-white/10 rounded-lg">
                <span className="font-mono text-accent text-xs">04</span>
                <span className="text-muted-foreground">multimodal_text_pca64 - 结构+PCA降维文本(64维)</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-white/10 rounded-lg">
                <span className="font-mono text-accent text-xs">05</span>
                <span className="text-muted-foreground">multimodal_text_pca128 - 结构+PCA降维文本(128维)</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-white/10 rounded-lg">
                <span className="font-mono text-accent text-xs">06</span>
                <span className="text-muted-foreground">structure_plus_condition - 结构+结构化条件</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-accent/30 bg-accent/5 rounded-lg">
                <span className="font-mono text-accent text-xs">07</span>
                <span className="text-white">structure_plus_condition_plus_text_pca64 - 完整多模态融合</span>
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
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">实验结果数据</h2>
          <div className="max-w-4xl">
            <div className="rounded-lg overflow-hidden border border-white/10 mb-4">
              <img
                src="/semcond/实验结果数据.png"
                alt="实验结果数据"
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-muted-foreground text-sm">
              RF在7000条来自Reaxys的DA反应数据集8:2划分测试结果
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">实验结论</h2>
          <div className="max-w-4xl">
            <div className="space-y-4">
              <div className="border border-white/10 rounded-lg p-6">
                <p className="text-white/90 leading-relaxed mb-4">
                  <strong className="text-accent">结论 1：</strong>实验文本本身包含有效的反应条件信息，并能够独立支撑一定程度的产率预测
                </p>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <p className="text-white/90 leading-relaxed mb-4">
                  <strong className="text-accent">结论 2：</strong>文本语义表示与分子结构信息具有明显互补性，二者融合后性能优于仅使用结构特征
                </p>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <p className="text-white/90 leading-relaxed mb-4">
                  <strong className="text-accent">结论 3：</strong>对文本向量进行适当压缩和降噪后，模型效果进一步提升
                </p>
              </div>
              <div className="border border-accent/30 bg-accent/5 rounded-lg p-6">
                <p className="text-white/90 leading-relaxed mb-4">
                  <strong className="text-accent">结论 4：</strong>在融合反应条件编码之后，产率预测性能得到<strong className="text-white">稳定改善</strong>，验证了 SemCond 在该任务上的可行性与价值
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">核心观点</h2>
          <div className="max-w-4xl">
            <div className="bg-white/5 rounded-lg p-8">
              <p className="text-muted-foreground leading-relaxed">
                这一结果说明，实验文本不只是辅助说明，而可以被视为一种<strong className="text-white">重要的条件模态</strong>。
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                对于缺乏完整结构化条件数据的真实科研数据集，SemCond 提供了一条更具扩展性的建模路径：直接利用文本中的条件语义，而不是被动受限于结构化字段的完整性。
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
              href="/projects/semcond"
              className="text-white hover:text-accent transition-colors"
            >
              ← SemCond 技术总览
            </Link>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground text-sm mb-2">NEXT</p>
            <Link
              href="/projects/semcond/ai-material-design"
              className="text-white hover:text-accent transition-colors flex items-center gap-2"
            >
              AI材料设计
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}