export const zh = {
  nav: {
    about: '关于我',
    experience: '工作经历',
    projects: '核心项目',
    skills: '技术栈',
    contact: '联系方式'
  },
  hero: {
    name: '张文婧',
    title: 'AI 产品经理 | 9 年互联网经验 | 游戏 / LLM / Agent 方向',
    description: '拥有 9 年互联网全链路经验的 AI 产品经理，现就职于香港绿洲游戏网络科技有限公司 Refantasia 项目组。具备「工程师 + 产品经理」复合背景，独立完成 5 个真实 AI 产品的定义与交付，并独立设计了 31 个 Claude Code Skills 组成的 AI Agent 全流程开发工作流体系。',
    email: 'wenuurrii@gmail.com',
    phone: '185-1317-7315',
    education: '西安电子科技大学',
    ielts: '雅思 5.5'
  },
  about: {
    title: '个人优势',
    items: [
      {
        title: '罕见的跨岗复合背景',
        desc: '从前端开发、前端开发组长，到 Game Panel 后端 / GameSDK 研发，再到 AI 产品经理，在现公司连续多年因稳定交付与跨团队协作能力获得公司委以重任。既能读懂代码、评审技术方案，又能从运营视角定义 AI 产品价值，是真正意义上的"技术型 AI PM"。'
      },
      {
        title: '完整的 AI 产品闭环落地能力',
        desc: '独立主导并落地 5 个真实 AI 产品——增长 / 降本 / 洞察三板斧 + CSP 深度案例 + AI Agent 工作流体系，覆盖 B 端 + C 端、文本 + 图像、结构化 + 创意的完整 AI 产品矩阵。面向多服务器、9 种语言、35 张业务表的正式服数据完成 PRD、指标评测、技术评审、灰度上线与 A/B 测试。'
      },
      {
        title: 'AI Agent 系统编排与 Pipeline 设计能力',
        desc: '独立设计 31 个 Claude Code Skills 组成的 AI Agent 全流程开发工作流体系，覆盖 iOS App 从产品想法到 App Store 上架的 S0–S14 共 14 个阶段；支持双并行区开发（Git Worktree 代码隔离）、L1/L2/L3 三级变更管理和 Harness 三文件跨会话状态持久化。'
      },
      {
        title: 'LLM / Agent / RAG 全技术栈实战',
        desc: '熟练使用 GPT-5.4 / Claude Opus 4.6 / Qwen3.6 / DeepSeek-V3.2 等主流模型，能独立设计 Prompt 工程、RAG 检索、JSON Schema 校验、Agent 工作流、Text-to-SQL 语义层、多模型路由与成本控制方案。'
      },
      {
        title: '深度的 ComfyUI / SDXL 图像工程能力',
        desc: '独立搭建 25 节点 ComfyUI v3 多阶段流水线，使用 130 张平衡采样自训 SDXL LoRA，独创「双 Pass 手部修复 + OpenPose 骨架 ControlNet reroute」解决 SDXL 手指畸形，完成 Next.js 全栈生产级集成。'
      },
      {
        title: '英语听说读写实战能力 (雅思 5.5)',
        desc: '2023 年在高强度研发工作节奏下利用业余时间自考雅思 5.5，具备可直接用于工作场景的英语听、说、读、写能力，能与海外团队就 LLM、Agent、多语言本地化等议题顺畅沟通。'
      },
      {
        title: '自驱力与快速学习能力',
        desc: '2023 年在 LLM 技术浪潮兴起时，主动识别游戏运营侧四大真实痛点（流失难归因、活动拼 JSON、查数靠排期、排期靠 Excel），自发学习 LLM / RAG / Agent / ComfyUI 全套技术栈并产出可运行的 PoC，随后被公司任命为 AI 产品经理。'
      }
    ]
  },
  experience: {
    title: '工作经历',
    jobs: [
      {
        company: '香港绿洲游戏网络科技有限公司 · Refantasia 项目组',
        role: 'AI 产品经理',
        date: '2020.08 – 至今',
        desc: '主导 Refantasia AI 产品化落地，面向多服务器、9 种语言、35 张业务表的正式服数据，独立完成增长 / 降本 / 洞察三板斧 + CSP 深度案例共 4 个 AI 产品，以及 31 个 Claude Code Skills 组成的 AI Agent 全流程开发工作流体系。曾在同公司先后担任前端开发组长与 Game Panel 后端 / GameSDK 研发，主导 Game Panel 从 0 到 1 的系统搭建。产品背书：Refantasia（Google Play 50 万+ 下载，运营 3 周年）。'
      },
      {
        company: '字节跳动',
        role: '前端开发工程师',
        date: '2019.10 – 2020.08',
        desc: '参与法务相关系统建设，处理复杂流程型业务需求，负责前端方案设计与上线交付。与后端、法务、产品多方协作，锤炼了大体量内部系统的流程理解与跨部门沟通能力，为后续转型 AI PM 打下业务抽象基础。'
      },
      {
        company: '北京哥伦布时代科技 / 北京爱亲股份',
        role: '前端开发工程师',
        date: '2017.06 – 2019.09',
        desc: '负责业务前端开发与迭代交付，参与多个产品从 0 到 1 的前端工程搭建与上线。完成早期工程能力积累，建立了对产品、设计、后端协作的完整工程师视角。'
      }
    ]
  },
  projects: {
    title: '核心 AI 项目经历',
    items: [
      {
        name: 'AI 运营内容生成 Copilot（文本 + 图像双通道）',
        tags: ['降本层', 'RAG + Agent', 'ComfyUI v3 + SDXL 自训 LoRA', 'Next.js 15'],
        bg: '跨服节日活动从初稿到 9 语言上线平均要 5 天（3 天卡在翻译与术语 QA），运营 50% 时间用来手工拼 JSON；换装 / banner 图依赖美术排期 2-3 天。',
        solution: '文本通道：RAG 检索 12608 条版本化配置 + 59016 条多语言词条 + 142 份邮件模板，5 个 Agent Tool，独创「术语强制替换」机制保证关键术语 100% 一致。图像通道：APK 解包 → 749 资产 → 130 张平衡采样自训 SDXL LoRA，25 节点 ComfyUI v3 工作流，Next.js / React 全栈集成。',
        result: '活动 TTP 由 5 天缩短到 0.5 天；本地化一次通过率 70% → 95%；JSON Schema 首过率 ≥ 90%；换装生成单批 4 张 3–8 分钟，成本 ¥3–6/张，人工盲评一致性 ≥ 80%；端到端在阿里云 + 七牛 + OneThingAI A100 生产可跑。'
      },
      {
        name: 'AI Agent 全流程开发工作流体系（独立设计）',
        tags: ['Claude Code Skills', 'Agent 编排', 'Git Worktree', 'Pipeline 设计'],
        bg: '从 0 到 1 做一个 iOS App 涉及调研、PRD、设计、架构、开发、联调、测试、发版等十个阶段，AI 辅助编程工具虽然能写代码，但缺乏跨阶段的编排能力——每次新会话都要重复交代上下文、手动串联依赖。',
        solution: '将完整开发流程拆解为 S0–S14 共 14 个阶段，落地 31 个 Claude Code Skills；设计双并行区（S4 UI + 架构、S8/S9 前端 + 后端）用 Git Worktree 做代码物理隔离；L1/L2/L3 三级变更管理 + 回退路径矩阵；Harness 三文件体系（AGENTS.md / progress.md / decisions.md）解决跨会话记忆丢失问题。',
        result: '该工作流已在多个 Expo + React Native iOS 项目中实际使用，将「从想法到可提审版本」的周期从数周压缩到天级别；31 个 Skill 的编排关系、变更管理和状态持久化机制形成了一套可复用的 AI Agent Pipeline 设计范式。'
      },
      {
        name: 'AI 玩家流失预警与智能挽回系统',
        tags: ['增长层', 'LLM + 特征工程', 'A/B 测试', 'Next.js 15 / MySQL 8.4'],
        bg: '正式服大量付费角色分布在多个数据库，长期只能靠「全员普发礼包 + 回档赠送」粗放挽回，既浪费预算又错过高价值流失用户；付费流失缺乏可追溯的归因依据。',
        solution: '从 64 列行为 JSON 抽取 5 维度 36 个流失信号（付费 / 社交 / 进度 / 养成 / 竞技），设计「在线时长新鲜度衰减函数」解决历史快照评分虚高问题；规则层产出确定性证据链，gpt-5.4 做归因复核并生成中 / 英 / 日 3 语言个性化挽回邮件与奖励包；内置 DataSourceBadge / SqlPeek / LlmTrace 三件套支持全链路可审计。',
        result: '归因预测召回率 ≥ 70%、精确率 ≥ 50%；LLM 归因与人工盲评一致率 85%；日批 P95 ≤ 30 分钟，LLM 日成本 ≤ $50；搭建 6 段漏斗 + ROI 趋势对比的 A/B/C 看板。'
      },
      {
        name: 'AI 游戏数据对话式 BI',
        tags: ['洞察层', 'Text-to-SQL', '两阶段 Intent 编译器', '9 层 SQL 沙箱'],
        bg: '35 张业务表、40+ 长文本 JSON 字段，运营 / 策划 / 管理层 / 客服每天 5-10 个临时查询全部排给研发，SLA 1-2 天；同一「流失」指标全公司有 3 种口径。',
        solution: '核心壁垒为「两阶段架构」：Stage1 LLM 只产出结构化 Intent JSON，Stage2 确定性 SQL 编译器把 Intent 翻译为语法安全的 SQL；5 实体 YAML 语义层预定义 JOIN 条件与虚拟列；沉淀 30+ 条全公司统一口径术语表；内置 9 层 SQL 沙箱；4 角色 RBAC + 客户端 PII 脱敏。',
        result: '研发排期 1440 分钟 → 10 秒自助查询，提速 ~8000 倍；语义路径 SQL 正确率 100%；fallback Text-to-SQL 首过率 ≥ 85%；越权拦截 100%、审计日志 100%。'
      },
      {
        name: 'AI 活动排期助手（深度案例）',
        tags: ['LLM 协同', '四层防幻觉', '可拖拽排期网格', '1:1 Excel 导出'],
        bg: '跨服活动月度排期历史依赖运营手工填 Excel：13 类活动 + 模板变体 + 复杂的「参与服务器集合」，一张表要拉 0.5-1 天，每月仍有 1-2 次冲突，约束规则全在老运营的脑子里。',
        solution: '从真实 DB 动态拉取 13 类组合；gpt-5.4 + 12 条硬规则；设计四层防幻觉防线（Prompt 约束、Allowlist 注入、Parse 层、严格白名单校验）；@dnd-kit 可拖拽网格；Excel 导出按活动类型分 sheet，单元格合并、服务器行结构、冻结窗格均与运营真实表 1:1 对齐。',
        result: '月度排期耗时 1-2 天 → MVP ≤ 60 分钟 → 成熟期 ≤ 35 分钟；硬约束违反 0、LLM 幻觉率 0；Excel 导出与历史真实表 100% 一致；对历史记录回归严格 IoU ≥ 70%、宽松 IoU ≥ 85%。'
      }
    ]
  },
  skills: {
    title: '技术栈与工具',
    items: [
      'GPT-5.4 / 5.4 Mini',
      'Claude Opus 4.6 / Sonnet 4.6',
      'Qwen3.6-Plus',
      'DeepSeek-V3.2 / R1',
      'Prompt 工程',
      'RAG',
      'Agent 工作流',
      'JSON Schema 校验',
      '多模型路由',
      '成本控制',
      'ComfyUI',
      'SDXL / Flux',
      '自训 LoRA (kohya_ss)',
      'IP-Adapter',
      'ControlNet',
      'FaceDetailer',
      'Perfect Hands LoRA',
      'InspyrenetRembg',
      'Dify',
      'Coze',
      'LangChain',
      'Chrome Extension',
      'OR-Tools CP-SAT',
      'Next.js / React',
      'Python',
      'MySQL',
      'Claude Code Skills',
      'Git Worktree',
      'Expo + React Native',
      'Node.js',
      'Prisma',
      'Pencil.dev',
      'PRD 撰写',
      '指标体系',
      'A/B 测试',
      '用户调研',
      '竞品分析',
      'STAR 述职',
      'OKR'
    ]
  }
};
