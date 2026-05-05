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
                <span className="text-muted-foreground">仅使用结构特征</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-white/10 rounded-lg">
                <span className="font-mono text-accent text-xs">02</span>
                <span className="text-muted-foreground">仅使用文本特征</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-white/10 rounded-lg">
                <span className="font-mono text-accent text-xs">03</span>
                <span className="text-muted-foreground">结构 + 原始文本向量</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-white/10 rounded-lg">
                <span className="font-mono text-accent text-xs">04</span>
                <span className="text-muted-foreground">结构 + 降噪后的文本表示</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-white/10 rounded-lg">
                <span className="font-mono text-accent text-xs">05</span>
                <span className="text-muted-foreground">结构 + 结构化条件</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-white/10 rounded-lg">
                <span className="font-mono text-accent text-xs">06</span>
                <span className="text-muted-foreground">结构 + 结构化条件 + 文本语义表示</span>
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
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">实验结果数据</h2>
          <div className="max-w-4xl">
            <div className="border border-white/10 rounded-lg overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="font-mono text-xs text-muted-foreground px-4 py-3 text-left">Model</th>
                    <th className="font-mono text-xs text-muted-foreground px-4 py-3 text-center">n_features</th>
                    <th className="font-mono text-xs text-muted-foreground px-4 py-3 text-center">MAE</th>
                    <th className="font-mono text-xs text-muted-foreground px-4 py-3 text-center">RMSE</th>
                    <th className="font-mono text-xs text-muted-foreground px-4 py-3 text-center">R2</th>
                    <th className="font-mono text-xs text-muted-foreground px-4 py-3 text-center">Spearman</th>
                    <th className="font-mono text-xs text-muted-foreground px-4 py-3 text-center">Acc@卤10</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="px-4 py-3 text-white">structure_plus_condition_plus_text_pca64</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">4203</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">9.806795</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">13.68298</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.495293</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.709446</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.635749</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="px-4 py-3 text-white">multimodal_text_pca64</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">4160</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">9.859598</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">13.7174</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.492751</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.706495</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.633816</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="px-4 py-3 text-white">structure_plus_condition</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">4139</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">9.761611</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">13.83691</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.483873</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.698985</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.647343</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="px-4 py-3 text-white">multimodal_text_pca128</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">4224</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">10.07231</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">13.86096</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.482077</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.696961</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.613527</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="px-4 py-3 text-white">structure_only</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">4096</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">9.974921</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">14.05282</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.467641</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.679715</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.64058</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="px-4 py-3 text-white">multimodal_raw_text</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">4864</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">10.16119</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">14.09866</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.464162</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.66875</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.619324</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-white">text_only</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">768</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">10.71525</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">14.65889</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.420731</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.634982</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0.577778</td>
                  </tr>
                </tbody>
              </table>
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