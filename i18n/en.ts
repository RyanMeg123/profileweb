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
    description: 'AI Product Manager with 9 years of full-stack internet experience. Career path spans Frontend Dev → Frontend Lead → Backend/GameSDK Dev → AI PM. Grown from a pure engineer to a hybrid PM capable of independently defining closed-loop AI products.',
    email: 'wenuurrii@gmail.com',
    phone: '185-0356-720',
    education: 'Xidian University',
    ielts: 'IELTS 5.5'
  },
  about: {
    title: 'Advantages',
    items: [
      {
        title: 'Rare Cross-Role Background',
        desc: 'From Frontend Dev, Frontend Lead, to Backend/GameSDK Dev, and finally AI PM. Promoted internally three times due to outstanding performance. Capable of reading code, reviewing tech specs, and defining AI product value from an operations perspective. A true "Technical AI PM".'
      },
      {
        title: 'Full AI Product Lifecycle Capability',
        desc: 'Independently led and delivered 4+1 real AI products: LLM Churn Prediction & Agent Retention, RAG Operations Copilot, Text-to-SQL Chat BI, CSP + LLM Event Scheduling, and Chrome Extension Player Assistant. Covering B2B + B2C, Text + Image, Structured + Creative AI product lines.'
      },
      {
        title: 'Full Stack LLM / Agent / RAG',
        desc: 'Proficient in GPT-4o / Claude 3.5 / Qwen. Capable of independently designing Prompt Engineering, RAG retrieval, JSON Schema validation, Agent workflows, Text-to-SQL semantic layers, multi-model routing, and cost control schemes (cost per call ≤ $0.05).'
      },
      {
        title: 'Rare CSP + LLM Synergy Experience',
        desc: 'Utilized Google OR-Tools CP-SAT solver + LLM natural language constraint conversion to compress cross-server monthly event scheduling from "1-2 days of manual Excel" to "5 mins AI draft + 30 mins manual tweak", with ≥ 85% historical golden standard restoration rate.'
      },
      {
        title: 'Deep ComfyUI / SDXL Image Engineering',
        desc: 'Independently built a 24-node ComfyUI multi-stage pipeline. Trained SDXL LoRA using 130 game assets, and completed Next.js / React production-grade full-stack integration.'
      },
      {
        title: 'Practical English Skills (IELTS 5.5)',
        desc: 'Self-studied and achieved IELTS 5.5 during high-intensity core R&D work in 2023. Capable of independently reading OpenAI/Anthropic docs, writing English PRDs, and communicating product requirements with overseas operations and planning teams.'
      },
      {
        title: 'Self-Driven & Fast Learner',
        desc: 'Self-taught LLM / RAG / Agent / ComfyUI / OR-Tools from scratch and produced runnable production-grade works. A rare AI PM who can "write code, write PRDs, and persist in self-growth".'
      }
    ]
  },
  experience: {
    title: 'Experience',
    jobs: [
      {
        company: 'Oasis Games',
        role: 'AI Product Manager',
        date: '2023.07 – Present',
        desc: 'Proactively reassigned as AI PM due to deep understanding of operations pain points and fast learning of AI tech. Led the design and implementation of the "AI Operations Toolkit". Independently completed the "CSP + LLM Event Scheduling Assistant". Responsible for the full AI product lifecycle.'
      },
      {
        company: 'Oasis Games',
        role: 'Backend / GameSDK / Game Panel Dev',
        date: '2022.11 – 2023.06',
        desc: 'Transferred to the core project team due to excellent performance as Frontend Lead. Responsible for backend business, GameSDK integration, and Game Panel operations backend development. Led the 0 to 1 system architecture of Game Panel.'
      },
      {
        company: 'Oasis Games',
        role: 'Frontend Development Lead',
        date: '2020.08 – 2022.11',
        desc: 'Led a small team of 3-5 people, responsible for the frontend R&D of multiple game operation platforms and official websites.'
      },
      {
        company: 'ByteDance',
        role: 'Frontend Engineer',
        date: '2019.10 – 2020.08',
        desc: 'Participated in the construction of legal-related systems, handled complex process-oriented business requirements, and was responsible for frontend solution design and delivery.'
      },
      {
        company: 'Columbus Era Tech / Aiqin',
        role: 'Frontend Engineer',
        date: '2017.06 – 2019.09',
        desc: 'Responsible for business frontend development and iterative delivery. Participated in the 0 to 1 frontend engineering setup and launch of multiple products.'
      }
    ]
  },
  projects: {
    title: 'Core AI Projects',
    items: [
      {
        name: 'AI Player Churn Prediction & Retention System',
        tags: ['Growth', 'LLM + Agent', 'A/B Testing'],
        bg: 'Targeting 2491 paying characters, designed feature engineering based on 64-column behavior JSON, using GPT-4o-mini for multi-dimensional churn attribution on high-risk players.',
        solution: 'Designed Agent workflow to auto-generate personalized retention emails, reusing 59016 multi-language dictionary entries for 9-language delivery. A/B testing verified strategy effectiveness.',
        result: 'Recall rate, retention rate, and ROI north star metrics achieved. Gray-released as an AI module in Game Panel.'
      },
      {
        name: 'AI Operations Content Copilot (Text + Image)',
        tags: ['Cost Reduction', 'RAG + Prompt', 'ComfyUI + SDXL LoRA'],
        bg: 'Low efficiency in manual JSON assembly, long 9-language localization cycles, and event banners relying on 2-3 days of art scheduling.',
        solution: 'Text: RAG retrieval of 12608 versioned configs + 59016 multi-language terms. Image: 24-node ComfyUI pipeline + self-trained SDXL LoRA + Next.js full-stack integration.',
        result: 'Significantly improved event launch cycle and localization first-pass rate. Image channel serves as the heaviest engineering highlight, runnable on-site.'
      },
      {
        name: 'AI Game Data Chat BI',
        tags: ['Insights', 'Text-to-SQL + Semantic Layer', 'Agent Chart Gen'],
        bg: 'Built semantic layer and Schema RAG for 35 business tables. GPT-4o-mini generates SQL drafts, Claude 3.5 Sonnet reviews dangerous SQL.',
        solution: 'Operations can get charts and insights via natural language queries. Query requests shifted from R&D scheduling to self-service, freeing up R&D resources.',
        result: 'Query requests shifted from R&D scheduling to self-service, freeing up R&D resources.'
      },
      {
        name: 'AI Event Scheduling Assistant (Deep Case)',
        tags: ['CSP Constraint Solving', 'LLM Synergy'],
        bg: 'Cross-server monthly event scheduling long relied on 1-2 days of manual Excel work by operations, with many compliance constraints and prone to errors.',
        solution: 'OR-Tools CP-SAT for numerical solving. LLM handles bidirectional "Natural Language ↔ Constraint JSON" conversion + scheduling explanation copy. Single LLM cost ~$0.005.',
        result: '"5 mins AI draft + 30 mins manual tweak", historical golden standard restoration rate ≥ 85%. The brightest technical deep-water case in the resume.'
      },
      {
        name: 'Refantasia Wiki Assistant Chrome Extension',
        tags: ['B2C LLM App', 'RAG + Term Recognition'],
        bg: 'Targeting the global Refantasia player community. Hover to recognize concubine/general/equipment terms, providing 4-language comparison + AI personalized lineup recommendations.',
        solution: 'Planned to be published on Chrome Web Store.',
        result: ''
      }
    ]
  },
  skills: {
    title: 'Tech Stack & Tools',
    items: [
      'GPT-4o / 4o-mini', 'Claude 3.5 Sonnet / Haiku', 'Qwen2.5', 'Prompt Engineering', 'RAG', 'Agent Workflow', 'JSON Schema Validation', 'Multi-model Routing', 'Cost Control',
      'ComfyUI', 'SDXL', 'Self-trained LoRA', 'IP-Adapter', 'ControlNet', 'FaceDetailer', 'InspyrenetRembg',
      'Dify', 'Coze', 'LangChain', 'Chrome Extension', 'OR-Tools CP-SAT', 'Next.js', 'React', 'Python', 'MySQL 8.4',
      'PRD Writing', 'Metrics System', 'A/B Testing', 'User Research', 'Competitor Analysis', 'STAR Method', 'OKR',
      'Docker', 'Aliyun RDS', 'Qiniu CDN', 'OneThingAI A100', 'Git', 'Obsidian Vault'
    ]
  }
};
