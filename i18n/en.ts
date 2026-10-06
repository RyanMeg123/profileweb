export const en = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact'
  },
  hero: {
    name: 'Wenjing Zhang',
    title: 'AI Product Manager | 9 Yrs Exp | Game / LLM / Agent',
    description: 'AI Product Manager with 9 years of full-stack internet experience, currently at Oasis Games (Hong Kong) Refantasia project team. A hybrid "Engineer + PM" background, having independently defined and delivered 5 real AI products, and independently designed an AI Agent full-lifecycle development workflow system composed of 31 Claude Code Skills.',
    email: 'wenuurrii@gmail.com',
    phone: '185-1317-7315',
    education: 'Xidian University',
    ielts: 'IELTS 5.5'
  },
  about: {
    title: 'Advantages',
    items: [
      {
        title: 'Rare Cross-Role Background',
        desc: 'From Frontend Dev, Frontend Lead, to Game Panel Backend / GameSDK Dev, and finally AI PM. Repeatedly entrusted with key responsibilities at the same company due to years of stable delivery and cross-team collaboration. Capable of reading code, reviewing tech specs, and defining AI product value from an operations perspective. A true "Technical AI PM".'
      },
      {
        title: 'Full AI Product Lifecycle Capability',
        desc: 'Independently led and delivered 5 real AI products: Growth / Cost-Reduction / Insight Trio + CSP deep case + AI Agent workflow system. Covers B2B + B2C, Text + Image, Structured + Creative. Completed PRD, metric evaluation, tech review, gray release, and A/B testing against production data across multi-server, 9 languages, and 35 business tables.'
      },
      {
        title: 'AI Agent Orchestration & Pipeline Design',
        desc: 'Independently designed an AI Agent full-lifecycle development workflow system composed of 31 Claude Code Skills, covering iOS App S0–S14, 14 stages from idea to App Store release. Supports dual parallel zones (Git Worktree isolation), L1/L2/L3 three-tier change management, and Harness 3-file cross-session state persistence.'
      },
      {
        title: 'Full Stack LLM / Agent / RAG',
        desc: 'Proficient with GPT-5.4 / Claude Opus 4.6 / Qwen3.6 / DeepSeek-V3.2. Capable of independently designing Prompt Engineering, RAG retrieval, JSON Schema validation, Agent workflows, Text-to-SQL semantic layers, multi-model routing, and cost control schemes.'
      },
      {
        title: 'Deep ComfyUI / SDXL Image Engineering',
        desc: 'Independently built a 25-node ComfyUI v3 multi-stage pipeline. Trained SDXL LoRA on 130 balanced-sampled assets. Pioneered "Dual-Pass Hand Fix + OpenPose ControlNet reroute" to solve SDXL finger deformity. Completed Next.js full-stack production integration.'
      },
      {
        title: 'Practical English Skills (IELTS 5.5)',
        desc: 'Self-studied and achieved IELTS 5.5 during high-intensity R&D work in 2023. Capable of using English at work — listening, speaking, reading, writing — and communicating smoothly with overseas teams on LLM, Agent, and multi-language localization topics.'
      },
      {
        title: 'Self-Driven & Fast Learner',
        desc: 'In 2023, proactively identified four real pain points on the game operations side (churn attribution, event JSON assembly, data query scheduling, Excel scheduling), self-taught the full LLM / RAG / Agent / ComfyUI stack, and delivered runnable PoCs. Subsequently appointed as AI Product Manager by the company.'
      }
    ]
  },
  experience: {
    title: 'Experience',
    jobs: [
      {
        company: 'Oasis Games (Hong Kong) · Refantasia Team',
        role: 'AI Product Manager',
        date: '2020.08 – Present',
        desc: 'Led Refantasia AI productization. Independently delivered the Growth / Cost-Reduction / Insight Trio + CSP deep case (4 AI products), plus an AI Agent full-lifecycle workflow system composed of 31 Claude Code Skills, against production data across multi-server, 9 languages, and 35 business tables. Previously served at the same company as Frontend Lead, then Game Panel Backend / GameSDK Dev, leading Game Panel from 0 to 1. Product backing: Refantasia (Google Play 500K+ downloads, 3 years in operation).'
      },
      {
        company: 'ByteDance',
        role: 'Frontend Engineer',
        date: '2019.10 – 2020.08',
        desc: 'Participated in the construction of legal-related systems, handled complex process-oriented business requirements. Collaborated across backend, legal, and product teams — sharpening process understanding and cross-department communication for large internal systems, laying the business-abstraction foundation for later transition to AI PM.'
      },
      {
        company: 'Columbus Era Tech / Aiqin',
        role: 'Frontend Engineer',
        date: '2017.06 – 2019.09',
        desc: 'Responsible for business frontend development and iterative delivery. Participated in the 0 to 1 frontend engineering setup and launch of multiple products. Built up early engineering capability and established a complete engineer perspective on product, design, and backend collaboration.'
      }
    ]
  },
  projects: {
    title: 'Core AI Projects',
    items: [
      {
        name: 'AI Operations Content Copilot (Text + Image Dual Channel)',
        tags: ['Cost Reduction', 'RAG + Agent', 'ComfyUI v3 + Self-trained SDXL LoRA', 'Next.js 15'],
        bg: 'Cross-server festival events took 5 days on average from draft to 9-language release (3 days stuck on translation & terminology QA). Operations spent 50% of time manually assembling JSON; outfit / banner art relied on 2-3 days of art scheduling.',
        solution: 'Text channel: RAG retrieval of 12608 versioned configs + 59016 multi-language terms + 142 email templates, 5 Agent Tools, with a pioneering "forced terminology replacement" mechanism ensuring 100% consistency of key terms. Image channel: APK unpack → 749 assets → 130 balanced-sampled images for self-trained SDXL LoRA, 25-node ComfyUI v3 workflow, full Next.js / React stack integration.',
        result: 'Event TTP shortened from 5 days to 0.5 days; localization first-pass rate 70% → 95%; JSON Schema first-pass rate ≥ 90%; outfit generation 4 images per batch in 3-8 min, ¥3-6/image, blind-eval consistency ≥ 80%; end-to-end production-ready on Aliyun + Qiniu + OneThingAI A100.'
      },
      {
        name: 'AI Agent Full-Lifecycle Workflow System (Independent Design)',
        tags: ['Claude Code Skills', 'Agent Orchestration', 'Git Worktree', 'Pipeline Design'],
        bg: 'Building an iOS App from 0 to 1 spans research, PRD, design, architecture, development, integration, testing, and release. AI coding tools can write code but lack cross-stage orchestration — each new session requires re-stating context and manually wiring dependencies.',
        solution: 'Decomposed the full development flow into S0–S14 (14 stages), implemented as 31 Claude Code Skills. Designed dual parallel zones (S4 UI + architecture; S8/S9 frontend + backend) with Git Worktree physical isolation. L1/L2/L3 three-tier change management + rollback path matrix. Harness 3-file system (AGENTS.md / progress.md / decisions.md) solves cross-session memory loss.',
        result: 'The workflow has been used in multiple real Expo + React Native iOS projects, compressing "idea to submittable build" from weeks to days. The orchestration, change management, and state persistence mechanisms across the 31 Skills form a reusable AI Agent Pipeline design paradigm.'
      },
      {
        name: 'AI Player Churn Prediction & Retention System',
        tags: ['Growth', 'LLM + Feature Engineering', 'A/B Testing', 'Next.js 15 / MySQL 8.4'],
        bg: 'A large base of paying characters spread across multiple databases in production. Retention long relied on coarse "blanket gift packs + rollback gifts", wasting budget and missing high-value churners. Paid churn lacked traceable attribution.',
        solution: 'Extracted 36 churn signals across 5 dimensions (Pay / Social / Progress / Progression / Competitive) from 64-column behavior JSON. Designed an "online-time recency decay function" to fix inflated historical snapshot scores. The rule layer produces deterministic evidence chains; gpt-5.4 performs attribution review and generates 3-language (CN / EN / JP) personalized retention emails + reward packs. Built-in DataSourceBadge / SqlPeek / LlmTrace trio for end-to-end auditability.',
        result: 'Attribution recall ≥ 70%, precision ≥ 50%; LLM attribution vs. human blind-eval agreement 85%; daily batch P95 ≤ 30 min, LLM daily cost ≤ $50; built a 6-stage funnel + ROI trend A/B/C dashboard.'
      },
      {
        name: 'AI Game Data Conversational BI',
        tags: ['Insights', 'Text-to-SQL', 'Two-Stage Intent Compiler', '9-Layer SQL Sandbox'],
        bg: '35 business tables with 40+ long-text JSON fields. Operations / planning / management / customer support had 5-10 ad-hoc queries daily, all scheduled to R&D (SLA 1-2 days). The same "churn" metric had 3 different definitions company-wide.',
        solution: 'Core moat is the "Two-Stage architecture": Stage 1 LLM outputs only structured Intent JSON; Stage 2 deterministic SQL compiler translates Intent into syntax-safe SQL. 5-entity YAML semantic layer predefines JOIN conditions and virtual columns. 30+ unified terminology definitions. Built-in 9-layer SQL sandbox. 4-role RBAC + client-side PII redaction.',
        result: 'R&D queue of 1440 min → 10-second self-service, ~8000× speedup; semantic-path SQL correctness 100%; fallback Text-to-SQL first-pass ≥ 85%; unauthorized-access interception 100%, full audit logs.'
      },
      {
        name: 'AI Event Scheduling Assistant (Deep Case)',
        tags: ['LLM Synergy', '4-Layer Anti-Hallucination', 'Draggable Schedule Grid', '1:1 Excel Export'],
        bg: "Cross-server monthly event scheduling long relied on manual Excel by operations: 13 activity types + template variants + complex \"participating server sets\". One sheet took 0.5-1 day and still had 1-2 conflicts/month. All constraints lived in veteran operators' heads.",
        solution: "Dynamically pulled 13 (type, template_id) combinations from the real DB. gpt-5.4 + 12 hard rules. Designed a 4-layer anti-hallucination defense (Prompt constraints, Allowlist injection, Parse layer, strict whitelist validation). @dnd-kit draggable grid. Excel export splits by activity type per sheet, with cell merging, server-row structure, and frozen panes aligned 1:1 to operations' real Feb-2023 sheet.",
        result: 'Monthly scheduling 1-2 days → MVP ≤ 60 min → mature ≤ 35 min; hard-constraint violations 0, LLM hallucination rate 0; Excel export 100% matches historical real sheets; regression on historical records: strict IoU ≥ 70%, lenient IoU ≥ 85%.'
      }
    ]
  },
  skills: {
    title: 'Tech Stack & Tools',
    items: [
      'GPT-5.4 / 5.4 Mini',
      'Claude Opus 4.6 / Sonnet 4.6',
      'Qwen3.6-Plus',
      'DeepSeek-V3.2 / R1',
      'Prompt Engineering',
      'RAG',
      'Agent Workflow',
      'JSON Schema Validation',
      'Multi-model Routing',
      'Cost Control',
      'ComfyUI',
      'SDXL / Flux',
      'Self-trained LoRA (kohya_ss)',
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
      'PRD Writing',
      'Metrics System',
      'A/B Testing',
      'User Research',
      'Competitor Analysis',
      'STAR Method',
      'OKR'
    ]
  }
};
