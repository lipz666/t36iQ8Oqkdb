"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"

export default function RetrosynthesisClawPage() {
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
          <div className="flex items-center gap-4 mb-4">
            <p className="font-mono text-xs tracking-[0.3em] text-accent">MODULE 02 — 01</p>
            <span className="font-mono text-xs px-2 py-0.5 bg-green-500/20 text-green-500 rounded">已开源</span>
          </div>
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4">
            RetrosynthesisClaw
          </h1>
          <p className="font-mono text-lg md:text-xl text-muted-foreground italic mb-8">
            LLM Agent-driven Interpretable Retrosynthesis Planning System
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
              针对传统AI逆合成方法"黑盒化"、逻辑难以追溯的痛点，本项目开发了<strong className="text-white">RetrosynthesisClaw系统</strong>。不同于仅给出路线的传统方法，本项目创新性地采用了<strong className="text-accent">LLM-Agent协作框架</strong>，将逆合成拆解为分子解析、策略生成、路线规划及可行性评估等多个智能代理环节。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              系统的核心价值在于其卓越的<strong className="text-white">可解释性</strong>：AI不仅生成多种可行的合成路径，更会针对每条路线提供详细的结构分析、关键步骤原理及合成策略说明。通过将LLM的语义推理能力与化学知识库深度结合，系统能够清晰指出每步反应的设计依据与化学合理性。这不仅为化学家提供了路线工具，更提供了可理解、可验证的合成洞察，填补了AI逆合成领域在可解释规划方面的空白。
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">技术亮点速览</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-sans text-xl font-light mb-3 text-white">深层可解释性</h3>
              <p className="text-muted-foreground text-sm">
                每条路线均包含英文合成思路（约200词）及每步反应的逻辑支撑。
              </p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-sans text-xl font-light mb-3 text-white">多代理协同</h3>
              <p className="text-muted-foreground text-sm">
                Orchestrator编排器调度 MoleculeParser、Synthesis 等多个专家Agent。
              </p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-sans text-xl font-light mb-3 text-white">高度鲁棒性</h3>
              <p className="text-muted-foreground text-sm">
                内置基于 ChemBERTa-2 的 SMILES 自动修复模型与多层次降级方案。
              </p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-sans text-xl font-light mb-3 text-white">全流程集成</h3>
              <p className="text-muted-foreground text-sm">
                支持分子可视化编辑、实时流式响应（SSE）及产率预测功能。
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
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">系统架构</h2>
          <div className="bg-white/5 rounded-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-accent flex items-center justify-center">
                  <span className="font-mono text-accent">01</span>
                </div>
                <p className="text-sm text-white/90">分子解析</p>
                <p className="text-xs text-muted-foreground mt-1">Molecule Parsing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-accent flex items-center justify-center">
                  <span className="font-mono text-accent">02</span>
                </div>
                <p className="text-sm text-white/90">策略生成</p>
                <p className="text-xs text-muted-foreground mt-1">Strategy Generation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-accent flex items-center justify-center">
                  <span className="font-mono text-accent">03</span>
                </div>
                <p className="text-sm text-white/90">路线规划</p>
                <p className="text-xs text-muted-foreground mt-1">Route Planning</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-accent flex items-center justify-center">
                  <span className="font-mono text-accent">04</span>
                </div>
                <p className="text-sm text-white/90">可行性评估</p>
                <p className="text-xs text-muted-foreground mt-1">Feasibility Evaluation</p>
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
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">使用界面</h2>
          <div className="flex justify-center mb-8">
            <div className="rounded-lg overflow-hidden border border-white/10 max-w-4xl w-full">
              <img
                src="/retro/使用界面.png"
                alt="RetrosynthesisClaw使用界面"
                className="w-full h-auto"
              />
            </div>
          </div>
          <p className="text-center text-muted-foreground text-sm">
            RetrosynthesisClaw系统界面 - 支持分子可视化编辑、合成策略分析及多路线展示
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-mono text-xs tracking-[0.3em] text-accent mb-6">项目链接</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            GitHub 仓库：https://github.com/lipz666/RetrosynthesisClaw
          </p>
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
              href="/projects/retrosynthesis"
              className="text-white hover:text-accent transition-colors"
            >
              ← AI逆合成总览
            </Link>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground text-sm mb-2">NEXT</p>
            <Link
              href="/projects/retrosynthesis/reactivity-promoted-rl"
              className="text-white hover:text-accent transition-colors flex items-center gap-2"
            >
              Reactivity Promoted 强化学习逆合成
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}