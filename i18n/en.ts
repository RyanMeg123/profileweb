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
    title: 'AI Product Manager / AI Project Lead | 9 Yrs Exp | Agent / AIGC / Eval Systems',
    description: 'Engineer-turned AI Product & Project Manager with 9 years of internet experience (Frontend → Backend → AI PM). Currently Project Lead of AltFlow at Huying Tech, spearheading the 0→1 end-to-end AI interactive short-drama platform (Script → Video Production → Publishing, each module independently usable), proposing the IF-branch scheme & state_dag topology rules, and building a 25-suite evaluation gate; scaled the team from 1 to 10, led non-R&D members in AI coding to ship the Free Canvas and Editor, and reported directly to the CEO & investors. Previously led 4 AI products for Refantasia (500K+ Google Play downloads). Also independently delivered 2 iOS Apps (GetU & Non-Heritage AI Customization App, both submitted for App Store review) via a self-designed multi-role Agent engineering workflow.',
    email: 'wenuurrii@gmail.com',
    phone: '185-1317-7315',
    education: 'Xidian University',
    ielts: 'IELTS 5.5'
  },
  about: {
    title: 'Core Strengths',
    items: [
      {
        title: '0→1 Platform Leadership & Team Building',
        desc: 'Spearheaded Huying Tech’s AltFlow platform from inception to closed beta across Script, Canvas, Editor, and Publishing; scaled the team from 1 to 10 (owning headcount planning, JDs, and interviews), established Go/No-Go release gates, governed 64 tracking events and a 33-table ops center, and reported to the CEO and investors.'
      },
      {
        title: 'Rigorous AI Evaluation & Safety Gatekeeping',
        desc: 'Built a 25-dataset × 4-layer (93 rules) evaluation architecture at AltFlow; independently constructed a 360-item benchmark (146 zero-tolerance redline items) + 6 supplemental suites for the GetU AI companion app, combining deterministic regex (with negation exemptions) and cross-vendor LLM-as-Judge, separating Trainer vs. Evaluator roles with a ~$0.1 two-stage Gate.'
      },
      {
        title: 'Multi-Role Agent Orchestration & Pipeline Design',
        desc: 'Designed 31 Claude Code Skills orchestrating research, S1 validation, PRD, multi-option UI review, parallel dev, gate eval, simulator QA, and EAS release; coordinated by 1 Controller Bot + 12 specialist Role Agents + Cloud Coding Agents in isolated Git Worktrees, guarded by offline Audit Agents, Hook hard-gates, and 3-file Harness state persistence.'
      },
      {
        title: 'Technical AI PM with Full-Stack Roots',
        desc: 'Former ByteDance Frontend Engineer and Oasis Games Frontend Lead / Backend Dev / AI PM. Defined state_dag topology rules, two-stage Text-to-SQL compilers, and 9-layer SQL sandboxes; led PMs and ops to ship production modules via AI coding during R&D bottlenecks (accounting for 33% of repo PRs).'
      },
      {
        title: 'B2B + B2C, Text + Vision Full-Lifecycle Delivery',
        desc: 'Delivered products spanning an AIGC interactive drama platform (AltFlow), a C-end 16-personality AI companion iOS app (GetU), a Non-Heritage AI customization app, and 4 game-ops AI systems (Churn Retention, Copilot, Conversational BI, CSP Scheduler), including a 25-node ComfyUI v3 pipeline and custom SDXL LoRA.'
      },
      {
        title: 'Working English & 9-Language Localization (IELTS 5.5)',
        desc: 'B.S. in Computer Application Technology from Xidian University; achieved IELTS 5.5 while working full-time and led 9-language game localization AI pipelines, collaborating smoothly with overseas teams.'
      }
    ]
  },
  experience: {
    title: 'Experience',
    jobs: [
      {
        company: 'Huying Tech (AltFlow)',
        role: 'Senior AI Product Manager → AI Project Manager (AltFlow Lead)',
        date: '2026.04 – Present',
        desc: 'Overall Lead: Spearheaded AltFlow from 0 to 1, proposing the "Script / Video Production / Publishing independently usable" architecture; reported to the CEO, joined investor & BD meetings, showcased at the June AltNext conference (~200 community sign-ups on day one), and defined the Oct–Dec 3-phase roadmap. Product Definition: Connected Interactive Script → Free Canvas → Editor → Publishing Console → Mini-Program/App, authoring PRDs for Guided, Co-creation, and Free modes. Release Governance & Team: Enforced Go/No-Go release gates across 70 acceptance items, governed 64 analytics events, and built a 33-table ops platform; scaled team from 1 to 10, led AI coding delivery (33% of total repo PRs, 59% in Aug), ran closed beta with 219 applications, ~100 coached creators, and 233 feedback items; led Volcengine / Alibaba Cloud partnerships and Douyin / WeChat Mini-Program format alignment.'
      },
      {
        company: 'Oasis Games (Hong Kong) · Refantasia Team',
        role: 'AI Product Manager (2023 – 2026) | Frontend Lead / Backend Dev (2020 – 2023)',
        date: '2020.08 – 2026.01',
        desc: 'AI Product Manager (2023–2026): Identified four major ops pain points (churn attribution, manual JSON assembly, SQL queue bottleneck, Excel scheduling), built LLM / RAG / Agent / ComfyUI PoCs, and delivered 4 production AI products across 7 servers, 9 languages, and 35 business tables (500K+ Google Play downloads). Frontend Lead / Backend Dev (2020–2023): Led frontend delivery, built the Game Panel ops platform from 0 to 1, and contributed to GameSDK.'
      },
      {
        company: 'ByteDance',
        role: 'Frontend Engineer',
        date: '2019.10 – 2020.08',
        desc: 'Designed and delivered frontend architectures for complex workflow-driven legal systems in collaboration with backend, legal, and product teams.'
      },
      {
        company: 'Beijing Columbus Era / Beijing Aiqin Corp.',
        role: 'Frontend Engineer',
        date: '2017.06 – 2019.09',
        desc: 'Built and iterated multiple 0→1 frontend applications, establishing a solid full-lifecycle engineering foundation.'
      }
    ]
  },
  projects: {
    title: 'Featured AI Projects',
    items: [
      {
        name: 'AltFlow · End-to-End AI Interactive Short-Drama Platform (0→1)',
        tags: ['Agent Workflow', 'state_dag Topology', '25 Eval Suites × 4 Layers', '4-Platform Ecosystem'],
        bg: 'Interactive drama creation suffered from fragmented tools: novices struggled with branching worldlines, while writers using generic LLMs faced uncontrolled divergence in multi-ending state logic, and model/prompt updates lacked objective release criteria.',
        solution: '① Script Creation: Designed 3 tiered modes — Guided Mode (6-step pipeline across 4 interactive archetypes with step-by-step review), Co-Creation Mode (7 work-packages with provenance tags), and Free Mode. ② Branching Algorithm: Proposed v1 IF-branching and defined state_dag topology rules (worldline fork/merge, micro-branches, fail-states, stat/item/flag gates, automated structural validation). ③ Video & Publishing: Built Free Canvas (making branches, options, multi-endings, and stats first-class citizens with skill-split video prompts) and Interactive Publishing Console + Player State Machine. ④ Evaluation & Architecture: Built 25 eval datasets × 4 layers (93 rules, 22 active) and led the 4-platform architecture (Workbench / Agent Runtime / Eval Platform / Annotation Hub) plus Creator Ecosystem 1.0.',
        result: 'Script analysis rated "10/10" by beta creators; categorized 233 feedback items into 35 prioritized requirements; pinpointed 2 hard failures in Free Mode Agent (missing read_document tool) and established regression gates.'
      },
      {
        name: 'GetU · 16-Personality AI Companion & Relationship App (0→1, Submitted to App Store | Landing: https://api.tkamil.com/getu/)',
        tags: ['Agent Memory Governance', '360-Item Redline Eval & Gate', 'Anthropomorphic AI Compliance', 'Expo + RN'],
        bg: 'Generic LLMs already cover daily chat, leaving pure listening apps with weak retention and high risks of fabricated memories, stereotypes, emotional dependency, and missed crisis signals. After analyzing 8,290 social comments + store reviews and running 3-direction × A/B content experiments, pivoted to a domestic 18+ "16-Personality × People Around You" AI friend ("Xiaofen").',
        solution: '① Product & Memory Boundaries: Built on an Agent loop with 3-tier memory extraction switches (off / observe / enforced) where memories are user-visible, editable, and deletable; "People Around You" requires explicit confirmation and strictly acts as a 3rd-person relationship assistant (never roleplaying real people, exes, or deceased relatives). Replaced fortune-like daily signs with shareable "Today’s Micro-Action", shipped 1.1 Mini-Game Park and 1.2 Interactive Trio (3-tone Ghostwriter + Rehearsal, Dual Relationship Manual, Weekly Observation Journal), plus Bailian voice input and Rive avatar customization. ② 360-Item Eval & Two-Stage Gate: Built 11 categories / 360 standard items (146 redline items requiring 100% pass) + 6 supplemental suites; combined deterministic regex (with negation exemptions + 1,000+ unit tests) and cross-vendor LLM-as-Judge; separated Trainer vs. Independent Evaluator roles with ~$0.1 Gate before ~$0.7 full regression. ③ Safety & Monetization: Implemented explicit cross-border consent (403 revocation blocking), local crisis HelpSheet (12356/110/120, voice muted, never blocked by quota), and a "Chat Count UI + Backend Token UsageLedger + Mini-Game Bonus" monetization model.',
        result: 'Drove Controller + 12 Role Agents + Cloud Coding Agents through 230+ commits and 229 PRs, submitted for App Store review (fixing .easignore level stripping, microphone plist crash, and production flag omissions). Screened 15+ models (recalibrating regex to flip 343 false-negative model×item pairs), ran p1.3 full 360-item eval (qwen3.8-flash 314/360, persona 4.43, catching 1 subtle crisis failure), blocked 8 roleplay side-effects in p1.5 Gate for $0.104, and improved Daily Action pass rate from 5/21 to 17/21.'
      },
      {
        name: 'AI Agent Product Engineering Workflow (Personal Project, 2 Apps Shipped)',
        tags: ['31 Claude Code Skills', '1 Controller + 12 Role Agents + Cloud Agent', 'Hook Hard-Gates', 'Git Worktree'],
        bg: 'AI coding tools write code but lack product engineering discipline: missing research backing, losing cross-session context, coding before design specs, overwriting parallel PRs, and shipping without independent prompt evaluation or release prechecks.',
        solution: '① Full Lifecycle: 31 Skills chaining data scraping → competitor/market/user research → S1 validation → PRD → multi-option UI selection → dev → gate eval → simulator QA → EAS release → iteration across App (Expo + RN) and Web routes. ② AI Team: 1 Controller Bot + 12 specialist Role Agents (PM / UX / UI / Visual / FE & BE / AI Trainer / Independent Evaluator / QA / Release Ops / Ops / Game Designer) + Cloud Coding Agents in isolated Git Worktrees, backed by 3-file Harness memory. ③ Guardrails: Offline Audit Agent verifying research citations, Hook hard-gates (blocking FE/BE code without Design Spec or API Contract), separated Trainer/Evaluator, anti-hallucinated approval rules, explicit PR superseding, and release plist/env checklists.',
        result: 'Delivered 2 complete iOS Apps (both submitted for App Store review): ① Non-Heritage AI Customization App (structuring inspiration images + descriptions into requirement cards, craft plans, visual previews, and master matching); ② GetU (16-personality AI companion app).'
      },
      {
        name: 'AI Operations Content Generation Copilot (Text + Image Dual-Channel)',
        tags: ['RAG + Agent', 'Forced Term Replacement', 'ComfyUI v3 + Custom SDXL LoRA', 'Next.js'],
        bg: 'Cross-server events took 5 days from draft to 9-language launch (3 days stuck in translation & term QA), with ops spending 50% of time hand-crafting JSON and waiting 2–3 days for art scheduling.',
        solution: 'Text Channel: RAG over 12,608 configs + 59,016 multilingual terms + 142 mail templates; "Forced Term Replacement" where LLM outputs placeholders backfilled from the authoritative dictionary for 100% consistency, plus JSON Schema validation & shadow-DB dry runs. Image Channel: Trained custom SDXL LoRA on 130 balanced assets (from 749 unpacked sprites) and built a 25-node ComfyUI workflow with Dual-Pass Hand Fix + OpenPose skeleton control.',
        result: 'Event launch cycle cut from 5 days to 0.5 days; first-pass localization rate increased from 70% to 95%; outfit generation produces 4 candidates in 3–8 min at ¥3–6/image with 102 portraits auto-ingested.'
      },
      {
        name: 'AI Player Churn Prediction & Smart Retention System',
        tags: ['Feature Engineering', 'Rule + LLM Dual Attribution', 'A/B/C Testing', 'Next.js / MySQL'],
        bg: 'Paying characters were scattered across databases and retained via coarse blanket gift packs, wasting budget without traceable attribution.',
        solution: 'Extracted 36 churn signals across 5 dimensions from 64-column behavior data with an online-recency decay function; rule layer outputs deterministic evidence chains while LLM reviews attributions and drafts 3-language personalized retention emails, with full SQL & LLM trace auditability.',
        result: 'Recall ≥ 70%, precision ≥ 50%, LLM vs. human blind-review agreement 85%; daily batch P95 ≤ 30 min, daily LLM cost ≤ $50, paired with an A/B/C funnel & ROI dashboard.'
      },
      {
        name: 'AI Game Data Conversational BI',
        tags: ['Text-to-SQL', '5-Entity Semantic Layer', 'Two-Stage Intent Compiler', '9-Layer SQL Sandbox'],
        bg: '35 business tables and 40+ JSON fields forced non-technical roles to queue ad-hoc queries with R&D (1–2 day SLA), while "churn" had 3 conflicting definitions.',
        solution: 'Two-stage architecture: LLM outputs structured query Intent JSON compiled by a deterministic SQL compiler; backed by a 5-entity semantic layer, 30+ unified glossary terms, a 9-layer SQL sandbox, and 4-role RBAC.',
        result: 'Ad-hoc queries accelerated from 1–2 days to 10-second self-service; 100% SQL accuracy on semantic paths, ≥ 85% first-pass rate on fallback paths, and 100% unauthorized query interception across 200 gold queries.'
      },
      {
        name: 'AI Event Scheduling Assistant (CSP + 4-Layer Anti-Hallucination)',
        tags: ['LLM Synergy', '4-Layer Anti-Hallucination', 'Draggable Schedule Grid', '1:1 Excel Export'],
        bg: 'Monthly cross-server scheduling relied on manual Excel across 13 activity types and complex server sets, taking 1–2 days with frequent conflicts.',
        solution: 'Dynamically pulled 13 activity combinations from production DB, enforcing a 4-layer anti-hallucination defense + 12 hard constraints, paired with a @dnd-kit draggable grid and 1:1 Excel export.',
        result: 'Monthly scheduling time reduced from 1–2 days to ≤ 60 min with 0 hard-constraint violations, 0 LLM hallucinations, and ≥ 85% lenient IoU against historical gold schedules.'
      }
    ]
  },
  skills: {
    title: 'Tech Stack & Tools',
    items: [
      'Claude Opus 5.5 / Sonnet 5.5',
      'GPT-6',
      'Gemini 4 / 3.8',
      'Grok 4.7',
      'Qwen3.8-Max / Flash',
      'DeepSeek-V4.1',
      'MiMo-v2.6 / GLM-5.3',
      'Multi-Model Tiered Routing & Cost Control',
      'Agent Workflows / Tool Calling',
      '3-Tier Long-Term Memory Governance',
      'MCP / RAG',
      'Structured Output + JSON Schema',
      'Reverse Annotation & Data Flywheel',
      '360-Item Redline Eval & 2-Stage Gate',
      'Deterministic Regex (Negation Exempt)',
      'Cross-Vendor LLM-as-Judge',
      'Persona Baseline & Blind Review',
      'Anthropomorphic AI Compliance & Crisis Fallback',
      'Seedream 5.0 / Nano Banana Pro',
      'GPT Image 2 / FLUX Kontext',
      'Veo / Seedance / Wan 2.7',
      'ComfyUI / SDXL LoRA / ControlNet',
      'Rive State Machine / Bailian Voice',
      'Claude Code (31 Skills / Hooks / Multi-Agent)',
      'Codex / Antigravity / AI Studio',
      'Git Worktree / EAS Build / TestFlight',
      'Expo + React Native',
      'Next.js / React / Node.js',
      'Hono / FastAPI / Python',
      'PostgreSQL / MySQL / Redis',
      'Docker / PostHog / Sentry',
      '0→1 Product Planning / PRD / Metrics',
      'Fake-Door & A/B Content Experiments',
      'User Segmentation / Tracking Governance / Hiring'
    ]
  }
};
