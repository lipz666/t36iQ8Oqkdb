"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function ReactivityPromotedRLPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-16">
      <div className="px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/projects/retrosynthesis"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-xs tracking-wider">BACK TO AI RETROSYNTHESIS</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-accent mb-4">MODULE 02 — 02</p>
          <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            基于 Reactivity Promoted 强化学习的无模板基 AI 逆合成
          </h1>
          <p className="font-mono text-lg md:text-xl text-muted-foreground italic mb-8">
            Reactivity Promoted RL-based Template-free AI Retrosynthesis
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">项目简介</h2>
          <div className="max-w-4xl">
            <p className="text-muted-foreground leading-relaxed mb-8">
              基于<strong className="text-white">Reactivity Promoted</strong>强化学习的无模板AI逆合成项目聚焦于单步逆合成中的候选反应生成与筛选问题，旨在构建一个更加符合真实化学规律的无模板人工智能逆合成框架。传统无模板逆合成方法通常能够根据目标产物生成潜在的反应物组合，但在候选反应的化学可行性判断上仍然存在明显不足，容易产生结构上合理、却难以实际发生的反应路径。
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              本项目首先基于 ReactionT5V2 在 USPTO500MT 数据集上完成了微调，并进一步尝试将<strong className="text-accent">产率预测（yield prediction）</strong>引入强化学习过程，希望通过产率信号引导模型生成更优的逆合成结果。然而实验表明，这一路线存在明显局限：由于产率预测模型在训练过程中主要接触的是成功反应数据，缺乏失败反应样本，因此它更擅长判断"可行反应发生得有多好"，却无法可靠地区分"反应是否能够发生"。这使得单纯依赖 yield 作为强化学习奖励时，模型难以真正学到化学可行性边界。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              针对这一问题，项目进一步提出引入<strong className="text-white">Reaction Plausibility Functional（RPF）</strong>模块，用于显式判断候选反应是否具有发生的可能性。该模块与产率预测模块形成互补关系：前者负责判断"反应能不能发生"，后者负责判断"如果能发生，可能发生到什么程度"。在此基础上，项目最终目标是构建一个 Reactivity Promoted 强化学习框架，将反应可行性与反应程度联合纳入奖励设计中，提升无模板 AI 逆合成模型在化学合理性、候选排序质量和实际应用价值方面的表现。
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">1. 无模板逆合成模型构建</h2>
          <div className="max-w-4xl">
            <div className="border border-white/10 rounded-lg p-6 mb-6">
              <p className="text-muted-foreground leading-relaxed">
                项目以无模板逆合成为基础任务，采用<strong className="text-white">ReactionT5V2</strong>作为核心生成模型，面向目标产物预测可能的反应物组合。相较于模板法，无模板方法具有更强的表达能力和更好的扩展性，能够避免手工模板覆盖不足的问题，为复杂反应空间中的候选生成提供更灵活的解决方案。
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              在数据层面，项目基于<strong className="text-accent">USPTO500MT</strong>数据集完成了 ReactionT5V2 的微调训练，使模型具备针对目标产物生成候选反应物的能力。该步骤为后续强化学习优化提供了初始策略模型，也为项目建立了完整的 product-to-reactants 生成基础。
            </p>
            
            <div className="flex justify-center mt-8">
              <div className="rounded-lg overflow-hidden border border-white/10 max-w-3xl w-full">
                <img
                  src="/retro/loss_curve.png"
                  alt="微调损失曲线"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="text-center text-muted-foreground text-sm mt-4">
              微调损失曲线
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">2. Yield-Promoted 强化学习探索</h2>
          <div className="max-w-4xl">
            <div className="border border-white/10 rounded-lg p-6 mb-6">
              <p className="text-muted-foreground leading-relaxed">
                在初步研究阶段，项目尝试将反应产率预测作为强化学习中的奖励信号，希望模型不仅能够生成可行的候选反应，还能倾向于生成高产率方案。围绕这一目标，项目设计并测试了 yield-promoted 的强化学习流程，采用<strong className="text-white">PPO（Proximal Policy Optimization）</strong>算法对无模板逆合成模型进行优化。
              </p>
            </div>

            <h3 className="font-sans text-lg font-light mb-4 text-white">强化学习核心设置</h3>
            <div className="space-y-6 mb-8">
              <div className="border border-white/10 rounded-lg p-6">
                <h4 className="text-accent font-medium mb-3">1. Action（智能体的动作）</h4>
                <p className="text-muted-foreground leading-relaxed">
                  策略网络（ReactionT5v2）接收目标产物的 SMILES 字符串作为输入，输出自主生成的反应物 SMILES 字符串。简单来说，模型的唯一动作就是：给定产物，预测可能的反应物组合。
                </p>
              </div>
              
              <div className="border border-white/10 rounded-lg p-6">
                <h4 className="text-accent font-medium mb-3">2. State（状态）</h4>
                <p className="text-muted-foreground leading-relaxed">
                  状态定义为当前要合成的目标产物的 SMILES 字符串。模型始终基于这个状态进行决策，生成对应的反应物候选。
                </p>
              </div>
              
              <div className="border border-white/10 rounded-lg p-6">
                <h4 className="text-accent font-medium mb-3">3. Reward（奖励）</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  最终奖励采用加权多目标奖励机制，并加入 KL 散度惩罚以保证策略更新的稳定性：
                </p>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-center text-accent mb-6">
                  R = 0.45·R_yield + 0.25·R_forward + 0.20·R_valid + 0.10·R_format − β·KL
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-accent text-sm mt-1">1.</span>
                    <div>
                      <p className="text-white font-medium mb-1">R_yield - 产率奖励</p>
                      <p className="text-muted-foreground text-sm">
                        基于产率预测模型对生成反应的产率预测值，引导模型倾向于生成高产率的反应路径。
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-accent text-sm mt-1">2.</span>
                    <div>
                      <p className="text-white font-medium mb-1">R_forward - 正向反应相似度奖励</p>
                      <p className="text-muted-foreground text-sm">
                        将生成的反应物经过正向模型预测后，与原始目标产物进行结构相似度匹配，确保逆合成路径的可逆性。
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-accent text-sm mt-1">3.</span>
                    <div>
                      <p className="text-white font-medium mb-1">R_valid - 有效性奖励</p>
                      <p className="text-muted-foreground text-sm">
                        验证生成的反应物 SMILES 是否为有效的化学结构，排除非法或不合理的分子表示。
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-accent text-sm mt-1">4.</span>
                    <div>
                      <p className="text-white font-medium mb-1">R_format - 格式规范奖励</p>
                      <p className="text-muted-foreground text-sm">
                        确保输出符合标准的反应 SMILES 格式，包括正确的分隔符和多反应物表示。
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-accent text-sm mt-1">5.</span>
                    <div>
                      <p className="text-white font-medium mb-1">KL 散度惩罚（β=0.02）</p>
                      <p className="text-muted-foreground text-sm">
                        控制策略更新步长，防止新策略与旧策略产生过大偏离，保证训练过程的稳定性。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="rounded-lg overflow-hidden border border-white/10 max-w-3xl w-full">
                <img
                  src="/retro/ppo_curves.png"
                  alt="PPO曲线"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="text-center text-muted-foreground text-sm mb-8">
              PPO曲线
            </p>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
              <p className="text-white/90 leading-relaxed">
                <strong className="text-accent">实验结论：</strong>仅依赖产率预测作为奖励并不能有效提升逆合成生成的化学可靠性。其根本原因在于：现有产率预测模型主要建立在成功反应数据之上，缺乏足够的失败反应监督，因此它能够评估"已经可行的反应哪一个更优"，却难以判断"一个候选反应是否根本不可行"。这意味着产率模型本质上更像一个反应程度评估器，而不是反应可行性判别器。
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">3. 反应可行性模块 RPF（研究中）</h2>
          <div className="max-w-4xl">
            <p className="text-muted-foreground leading-relaxed mb-6">
              为解决上述问题，项目将研究重点进一步转向<strong className="text-white">RPF模块</strong>（Reactivity Plausibility Functional）的构建。该模块旨在对候选反应进行显式的可行性判断，从"反应是否能发生"这一更基础的问题出发，对逆合成生成结果进行约束。与单纯依赖数据分布的黑箱评分不同，RPF模块计划结合反应中心变化、局部反应性、位点匹配关系以及反应合理性特征，建立一个更接近真实化学反应规律的可行性评估机制。
            </p>

            <div className="border border-white/10 rounded-lg p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-4">
                <strong className="text-white">RPF定义：</strong>一个独立的反应可行性评估模块，用于对单步逆合成候选反应进行量化打分。
              </p>
              <div className="bg-black/50 rounded-lg p-4 mb-4 font-mono text-sm text-accent">
                RPF(P,R) = σ(w₁Φ_site + w₂Φ_pair - w₃Φ_reorg + w₄Φ_drive + w₅Φ_cons)
              </div>
              <p className="text-xs text-muted-foreground">
                输入：目标产物 P 和候选反应物集合 R<br />
                输出：介于 0 和 1 之间的反应合理性/反应性分数
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border border-white/10 rounded-lg p-4">
                <p className="text-sm text-accent mb-1">Φ_site</p>
                <p className="text-xs text-muted-foreground">反应中心位点的局部反应性</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <p className="text-sm text-accent mb-1">Φ_pair</p>
                <p className="text-xs text-muted-foreground">成键/断键位点配对合理性</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <p className="text-sm text-accent mb-1">Φ_reorg</p>
                <p className="text-xs text-muted-foreground">局部结构重组代价</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <p className="text-sm text-accent mb-1">Φ_drive</p>
                <p className="text-xs text-muted-foreground">反应热力学驱动力</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4 md:col-span-2">
                <p className="text-sm text-accent mb-1">Φ_cons</p>
                <p className="text-xs text-muted-foreground">前向预测与结构一致性约束</p>
              </div>
            </div>

            <h3 className="font-sans text-lg font-light mb-4 text-white">实现步骤概览</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="font-mono text-accent text-xs">01</span>
                <span className="text-muted-foreground">数据准备：整理正样本、构造负样本（随机、扰动、模型生成）并保留产率信息作为校准标签</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono text-accent text-xs">02</span>
                <span className="text-muted-foreground">反应中心识别：根据 atom mapping 或图结构比对，提取关键断键/成键原子及邻域</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono text-accent text-xs">03</span>
                <span className="text-muted-foreground">电子结构特征计算：使用 xTB 计算能量、原子电荷、键级、HOMO/LUMO 等低成本量化特征</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono text-accent text-xs">04</span>
                <span className="text-muted-foreground">特征整合与模型训练：可用 Logistic Regression、XGBoost 或 LightGBM 训练正负样本分类</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono text-accent text-xs">05</span>
                <span className="text-muted-foreground">强化学习整合：RPF 可作为 PPO 奖励函数或候选重排序模块</span>
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
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">4. Reactivity Promoted 强化学习框架</h2>
          <div className="max-w-4xl">
            <div className="bg-white/5 rounded-lg p-8">
              <p className="text-muted-foreground leading-relaxed">
                项目的最终目标是构建一个<strong className="text-white">Reactivity Promoted 强化学习框架</strong>，将反应可行性分数与产率相关分数共同引入逆合成模型的优化过程中。通过这种方式，模型在生成候选反应时不仅追求更高的产率预期，还能避免明显不可行的反应路径，从而提高候选结果的真实性、稳定性和实用价值。
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-muted-foreground mb-4">
                  <strong className="text-accent">模块分工：</strong>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-accent/30 rounded-lg p-4 bg-accent/5">
                    <p className="text-sm text-accent font-medium mb-2">RPF 模块</p>
                    <p className="text-xs text-muted-foreground">负责判断候选反应<strong className="text-white">能否发生</strong></p>
                  </div>
                  <div className="border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white font-medium mb-2">Yield 模块</p>
                    <p className="text-xs text-muted-foreground">负责判断候选反应在可行前提下<strong className="text-white">可能发生到什么程度</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">5. 项目创新点</h2>
          <div className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 border border-white/10 rounded-lg">
                <span className="font-mono text-accent text-xs mt-1">01</span>
                <p className="text-sm text-muted-foreground">从无模板逆合成生成出发，将强化学习正式引入候选反应优化过程</p>
              </div>
              <div className="flex items-start gap-3 p-4 border border-white/10 rounded-lg">
                <span className="font-mono text-accent text-xs mt-1">02</span>
                <p className="text-sm text-muted-foreground">通过实验明确揭示了 yield-promoted RL 的局限</p>
              </div>
              <div className="flex items-start gap-3 p-4 border border-white/10 rounded-lg">
                <span className="font-mono text-accent text-xs mt-1">03</span>
                <p className="text-sm text-muted-foreground">提出在逆合成强化学习中引入 RPF 反应可行性模块</p>
              </div>
              <div className="flex items-start gap-3 p-4 border border-white/10 rounded-lg">
                <span className="font-mono text-accent text-xs mt-1">04</span>
                <p className="text-sm text-muted-foreground">将"能否发生"与"发生程度"拆分为两个不同层次的问题进行建模</p>
              </div>
              <div className="flex items-start gap-3 p-4 border border-white/10 rounded-lg md:col-span-2">
                <span className="font-mono text-accent text-xs mt-1">05</span>
                <p className="text-sm text-muted-foreground">最终构建面向真实化学规律的 Reactivity Promoted 无模板 AI 逆合成框架</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 pt-16 border-t border-white/10 flex justify-between items-center"
        >
          <div>
            <p className="text-muted-foreground text-sm mb-2">PREVIOUS</p>
            <Link
              href="/projects/retrosynthesis/retrosynthesis-claw"
              className="text-white hover:text-accent transition-colors"
            >
              ← RetrosynthesisClaw
            </Link>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground text-sm mb-2">NEXT MODULE</p>
            <Link
              href="/projects/semcond"
              className="text-white hover:text-accent transition-colors flex items-center gap-2"
            >
              SemCond 技术
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}