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
    description: '拥有 9 年互联网全链路经验的 AI 产品经理。职业路径跨越「前端开发 → 前端开发组长 → 后端 / GameSDK / Game Panel 研发 → AI 产品经理」多个岗位。从纯工程师成长为能独立定义 AI 产品闭环的复合型 PM。',
    email: 'wenuurrii@gmail.com',
    phone: '185-0356-720',
    education: '西安电子科技大学',
    ielts: '雅思 5.5'
  },
  about: {
    title: '个人优势',
    items: [
      {
        title: '罕见的跨岗复合背景',
        desc: '从前端开发、前端开发组长，到后端 / GameSDK / Game Panel 研发，再到 AI 产品经理，在现公司三次因表现优异由公司主动内部转岗。既能读懂代码、评审技术方案，又能从运营视角定义 AI 产品价值，是真正意义上的"技术型 AI PM"。'
      },
      {
        title: '完整的 AI 产品闭环落地能力',
        desc: '独立主导并落地 4 + 1 个真实 AI 产品——LLM 流失归因与 Agent 挽回、RAG 运营 Copilot、Text-to-SQL 对话 BI、CSP + LLM 活动排期、Chrome 插件 C 端玩家助手，覆盖 B 端 + C 端、文本 + 图像、结构化 + 创意三条 AI 产品主线。'
      },
      {
        title: 'LLM / Agent / RAG 全技术栈实战',
        desc: '熟练使用 GPT-4o / Claude 3.5 / Qwen 等主流模型，能独立设计 Prompt 工程、RAG 检索、JSON Schema 校验、Agent 工作流、Text-to-SQL 语义层、多模型路由与成本控制方案，单次调用成本压到 ≤ $0.05。'
      },
      {
        title: '稀缺的 CSP 约束求解 + LLM 协同经验',
        desc: '使用 Google OR-Tools CP-SAT 求解器 + LLM 自然语言约束转换，将跨服活动月度排期从"运营 Excel 1-2 天手工"压缩到"5 分钟 AI 生成合规草稿 + 30 分钟人工微调"，历史金标还原度 ≥ 85%。这是主流 AI PM 鲜有触达的深水区。'
      },
      {
        title: '深度的 ComfyUI / SDXL 图像工程能力',
        desc: '独立搭建 24 节点 ComfyUI 多阶段流水线，使用 130 张游戏资产自训 SDXL LoRA，并完成 Next.js / React 生产级前后端集成。'
      },
      {
        title: '英语听说读写实战能力 (雅思 5.5)',
        desc: '2023 年在担任核心研发的高强度工作节奏下利用业余时间自考雅思 5.5，可独立阅读 OpenAI / Anthropic 官方技术文档、完成英文 PRD 撰写、与海外运营和策划用英语沟通产品需求。'
      },
      {
        title: '自驱力与快速学习能力',
        desc: '从 0 基础自学 LLM / RAG / Agent / ComfyUI / OR-Tools 全套技术栈并产出可运行的生产级作品，是"又能写代码又能写 PRD 又能坚持自我成长"的稀缺 AI PM。'
      }
    ]
  },
  experience: {
    title: '工作经历',
    jobs: [
      {
        company: '香港绿洲游戏网络科技有限公司',
        role: 'AI 产品经理',
        date: '2023.07 – 至今',
        desc: '因长期在研发岗位对运营侧痛点的深入理解和 AI 技术的快速学习能力，被公司主动调任为 AI 产品经理，主导 RF 项目组 AI 产品化落地。主导设计并推动「AI 运营三板斧」落地。独立完成「CSP + LLM 活动排期助手」深度案例。负责 AI 产品的全流程。'
      },
      {
        company: '香港绿洲游戏网络科技有限公司',
        role: '后端 / GameSDK / Game Panel 研发',
        date: '2022.11 – 2023.06',
        desc: '因前端组长岗位表现优异，被公司调入核心项目组，负责后端业务、GameSDK 接入、多项目 Game Panel 运营后台的研发。主导 Game Panel 从 0 到 1 的系统搭建。'
      },
      {
        company: '香港绿洲游戏网络科技有限公司',
        role: '前端开发组长',
        date: '2020.08 – 2022.11',
        desc: '入职即担任前端开发组长，带领 3-5 人小团队负责公司多个游戏运营平台与官网的前端研发。'
      },
      {
        company: '字节跳动',
        role: '前端开发工程师',
        date: '2019.10 – 2020.08',
        desc: '参与法务相关系统建设，处理复杂流程型业务需求，负责前端方案设计与上线交付。'
      },
      {
        company: '北京哥伦布时代科技 / 北京爱亲股份',
        role: '前端开发工程师',
        date: '2017.06 – 2019.09',
        desc: '负责业务前端开发与迭代交付，参与多个产品从 0 到 1 的前端工程搭建与上线。'
      }
    ]
  },
  projects: {
    title: '核心 AI 项目经历',
    items: [
      {
        name: 'AI 玩家流失预警与智能挽回系统',
        tags: ['增长层', 'LLM + Agent', 'A/B 测试'],
        bg: '面向 2491 名付费角色，基于 64 列行为 JSON 设计特征工程，用 GPT-4o-mini 对高风险玩家做多维度流失归因。',
        solution: '设计 Agent 工作流自动生成个性化挽回邮件，复用 59016 条多语言词典完成 9 语言投放，A/B 测试验证挽回策略有效性。',
        result: '召回率、挽回率、ROI 三项北极星指标，已在 Game Panel 作为 AI 模块灰度上线。'
      },
      {
        name: 'AI 运营内容生成 Copilot (文本 + 图像双通道)',
        tags: ['降本层', 'RAG + Prompt 工程', 'ComfyUI + SDXL LoRA'],
        bg: '运营拼 JSON 效率低、9 语言本地化周期长、活动 banner 依赖美术排期 2-3 天。',
        solution: '文本通道: RAG 检索 12608 条版本化配置 + 59016 条多语言词条。图像通道: 24 节点 ComfyUI 流水线 + 自训 SDXL LoRA + Next.js 全栈集成。',
        result: '活动上线周期、本地化一次通过率显著提升；图像通道作为简历最重工程亮点，现场可跑。'
      },
      {
        name: 'AI 游戏数据对话式 BI',
        tags: ['洞察层', 'Text-to-SQL + 语义层', 'Agent 图表生成'],
        bg: '面向 35 张业务表构建语义层与 Schema RAG，GPT-4o-mini 生成 SQL 草稿，Claude 3.5 Sonnet 复核危险 SQL。',
        solution: '运营自然语言提问即可得到图表与洞察结论，查询需求由研发排期改为自助完成，释放研发人力。',
        result: '查询需求由研发排期改为自助完成，释放研发人力。'
      },
      {
        name: 'AI 活动排期助手 (深度案例)',
        tags: ['CSP 约束求解', 'LLM 协同'],
        bg: '跨服活动月度排期长期依赖运营手工填 Excel 1-2 天，合规约束多、易出错。',
        solution: 'OR-Tools CP-SAT 做数值求解，LLM 只做「自然语言 ↔ 约束 JSON」双向转换 + 排期解释文案，单次 LLM 成本 ~$0.005。',
        result: '"5 分钟 AI 生成合规草稿 + 30 分钟人工微调"，历史金标还原度 ≥ 85%，是简历最亮技术深水区案例。'
      },
      {
        name: 'Refantasia Wiki 助手 Chrome 插件',
        tags: ['C 端 LLM 应用', 'RAG + 术语识别'],
        bg: '面向 Refantasia 全球玩家社区，hover 识别妃子 / 武将 / 装备词条，提供 4 语言对照 + AI 个性化阵容推荐。',
        solution: '计划上架 Chrome Web Store。',
        result: ''
      }
    ]
  },
  skills: {
    title: '技术栈与工具',
    items: [
      'GPT-4o / 4o-mini', 'Claude 3.5 Sonnet / Haiku', 'Qwen2.5', 'Prompt 工程', 'RAG', 'Agent 工作流', 'JSON Schema 校验', '多模型路由', '成本控制',
      'ComfyUI', 'SDXL', '自训 LoRA (kohya_ss)', 'IP-Adapter', 'ControlNet', 'FaceDetailer', 'InspyrenetRembg',
      'Dify', 'Coze', 'LangChain', 'Chrome Extension', 'OR-Tools CP-SAT', 'Next.js', 'React', 'Python', 'MySQL 8.4',
      'PRD 撰写', '指标体系', 'A/B 测试', '用户调研', '竞品分析', 'STAR 述职', 'OKR',
      'Docker', '阿里云 RDS', '七牛云 CDN', 'OneThingAI A100', 'Git', 'Obsidian Vault'
    ]
  }
};
