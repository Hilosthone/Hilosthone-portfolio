// Portfolio project data — kept separate from presentation in Projects.tsx
import type { StaticImageData } from 'next/image'

import dsaImg from '../public/dsatute.png'
import industryeImg from '../public/industrye.png'
import gleamlearnImg from '../public/gleamlearn.png'
import techDiveImg from '../public/techDive.png'
import twitterCloneImg from '../public/TwitterClone.png'

/**
 * Visually trims browser chrome / OS taskbar out of full-window screenshots
 * without editing the source asset. `origin` is a CSS transform-origin.
 */
export interface ImageCrop {
  scale: number
  origin: string
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  tags: string[]
  tagline?: string
  role?: string
  highlights?: string[]
  status?: string
  image?: StaticImageData
  imageCrop?: ImageCrop
  live?: string
  liveAlt?: string
  github?: string
  // Repo exists but is not publicly accessible — shown as a label, not a link
  githubPrivate?: boolean
}

// Screenshots captured at 1920×1080 with ~132px of browser chrome on top and
// a ~72px taskbar at the bottom
// (origin-x 16% keeps the left-aligned hero copy intact; the right edge absorbs the trim)
const FULL_WINDOW_CROP: ImageCrop = { scale: 1.24, origin: '16% 63%' }

export const FEATURED_PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Distinguished Scholars Academy',
    category: 'EdTech · Full-Stack Web Application',
    role: 'Full-Stack Software Engineer — End-to-End Development',
    description:
      'A comprehensive learning platform that equips students with the knowledge, speed, and confidence to excel in WAEC, JAMB, and university studies — a complete digital ecosystem for students, tutors, guardians, and administrators. I designed and built both the frontend and backend end-to-end.',
    highlights: [
      'Role-based dashboards for admins, students, tutors & guardians',
      'Online quizzes, assessments & exam preparation',
      'Virtual classrooms and tutorial management',
      'Learning resources and administrative tooling',
    ],
    image: dsaImg,
    imageCrop: FULL_WINDOW_CROP,
    live: 'https://www.dsatutelage.com/',
    github: 'https://github.com/DowPhil/dsatutelage',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Socket.IO', 'Tailwind'],
  },
  {
    id: '02',
    title: 'IndustryE',
    tagline: 'Trade on the Edge of Capital.',
    category: 'FinTech · Crypto Trading Infrastructure',
    role: 'Frontend Engineer & Backend Contributor',
    description:
      'An institutional-grade crypto market-making platform built around automated liquidity strategies, custom Designated Market Maker (DMM) algorithms, and professional trading operations across global exchanges. I developed the frontend interface and contributed to selected backend functionality.',
    highlights: [
      'Automated market-making & custom DMM strategies',
      'Multi-exchange trading operations',
      'Trading dashboards & market-making management UI',
      'High-frequency liquidity operations',
    ],
    image: industryeImg,
    imageCrop: FULL_WINDOW_CROP,
    live: 'https://www.industrye.xyz/',
    github: 'https://github.com/BuildON-Tech/market-making-platform',
    githubPrivate: true,
    tags: ['Next.js', 'React', 'Trading Dashboards', 'DMM Automation'],
  },
  {
    id: '03',
    title: 'JustXend',
    tagline: 'Your Bank Meets Borderless.',
    category: 'FinTech · Cross-Border Payments',
    role: 'Frontend & Mobile Application Engineer',
    description:
      'A cross-border financial platform making international payments and money transfers faster, more accessible, and more affordable through blockchain-powered financial technology. I built the web frontend and the React Native mobile app — responsive interfaces, mobile navigation, user workflows, and backend integration.',
    highlights: [
      'Cross-border payment & transfer flows',
      'Financial account management',
      'Transaction workflows',
      'Secure, mobile banking-style UI',
    ],
    live: 'https://www.justxend.com/',
    tags: ['React Native', 'TypeScript', 'React', 'Next.js'],
  },
  {
    id: '04',
    title: 'GleamLearn',
    category: 'AI · EdTech · Full-Stack Platform',
    role: 'Founder, CEO & Software Engineer',
    status: 'In Active Development',
    description:
      'An AI-powered learning platform that turns textbooks, PDFs, notes, and course material into personalized, interactive study experiences — AI-generated lessons, quizzes, explanations, and intelligent tutoring that help students learn smarter.',
    highlights: [
      'Document-to-study transformation with AI',
      'Interactive lessons, notes & explanations',
      'AI-generated quizzes and practice questions',
      'Personalized AI tutoring',
    ],
    image: gleamlearnImg,
    // Captured with a vertical tab sidebar and shorter top chrome
    imageCrop: { scale: 1.16, origin: '32% 50%' },
    live: 'https://gleamlearn.vercel.app/',
    github: 'https://github.com/Hilosthone/gleamlearn',
    tags: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'Tailwind'],
  },
]

export const MORE_PROJECTS: Project[] = [
  {
    id: '05',
    title: 'TechDive Innovations',
    category: 'EdTech',
    description:
      'Comprehensive Edutech ecosystem featuring interactive lessons and coding challenges for the next generation of developers.',
    image: techDiveImg,
    live: 'https://techdive-innovations.netlify.app/',
    github: 'https://github.com/Hilosthone/TechDive-Innovations',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'AOS'],
  },
  {
    id: '06',
    title: 'Twitter / X Architecture',
    category: 'Full-Stack Application',
    description:
      'Real-time social synchronization using Firebase. Features secure authentication, media threading, and dynamic feed updates.',
    image: twitterCloneImg,
    live: 'https://twitterclonebyhilosthone.netlify.app/',
    github: 'https://github.com/Hilosthone',
    tags: ['Next.js', 'Firebase', 'TypeScript', 'Tailwind'],
  },
]

export const AI_PROJECTS: Project[] = [
  {
    id: 'ai-01',
    title: 'AI Code Review Assistant',
    category: 'Developer Tools',
    description:
      'Analyzes source code to surface potential bugs and security issues, with actionable recommendations for quality, maintainability, and refactoring.',
    live: 'https://code-review-ai.buildoninc.org/',
    liveAlt: 'https://code-review-ai-iota.vercel.app/',
    github: 'https://github.com/PerceptronCipher/code-review-ai',
    tags: ['React', 'Python', 'FastAPI', 'OpenAI'],
  },
  {
    id: 'ai-02',
    title: 'AI Content Generator',
    category: 'Content Creation',
    description:
      'Generates articles, marketing copy, social posts, and platform-specific content from a chosen topic, tone, and set of requirements.',
    live: 'https://ai-content-gen.buildoninc.org/',
    liveAlt: 'https://ai-content-gen-murex.vercel.app/',
    github: 'https://github.com/PerceptronCipher/ai-content-gen',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'OpenAI'],
  },
  {
    id: 'ai-03',
    title: 'AI Content Optimizer',
    category: 'SEO · Content Intelligence',
    description:
      'Evaluates written content and returns SEO recommendations, readability improvements, engagement suggestions, and smart posting schedules.',
    live: 'https://ai-contents-optimizer.vercel.app/',
    github: 'https://github.com/PerceptronCipher/ai-content-optimizer',
    tags: ['React', 'Python', 'FastAPI', 'OpenAI'],
  },
  {
    id: 'ai-04',
    title: 'AI Customer Support Bot',
    category: 'Automation · Support',
    description:
      'Lets businesses upload their documentation and answer customer questions automatically with context-aware responses.',
    live: 'https://ai-support-bot-pied.vercel.app/',
    github: 'https://github.com/PerceptronCipher/ai-support-bot',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'FAISS'],
  },
  {
    id: 'ai-05',
    title: 'AI Document Q&A Assistant',
    category: 'Document Intelligence · RAG',
    description:
      'Upload PDFs, ask natural-language questions, and get context-aware answers grounded in the document via retrieval and language models.',
    live: 'https://doc-qa-ai.vercel.app/',
    github: 'https://github.com/PerceptronCipher/doc-qa-ai',
    tags: ['React', 'Python', 'OpenAI', 'FAISS'],
  },
  {
    id: 'ai-06',
    title: 'AI Proposal Generator',
    category: 'Business Automation',
    description:
      'Streamlines the creation of structured business and professional proposals with AI assistance.',
    live: 'https://ai-proposal-gen-nine.vercel.app/',
    github: 'https://github.com/PerceptronCipher/ai-proposal-gen',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'OpenAI'],
  },
  {
    id: 'ai-07',
    title: 'AI Resume Analyzer',
    category: 'Career Technology',
    description:
      'Scores resumes for ATS compatibility, extracts skills and experience, flags missing keywords, and suggests concrete improvements.',
    live: 'https://ai-resume-analyzer-five-fawn.vercel.app/',
    github: 'https://github.com/PerceptronCipher/ai-resume-analyzer',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'OpenAI'],
  },
  {
    id: 'ai-08',
    title: 'AI Prompt Scorer',
    category: 'Prompt Engineering',
    description:
      'Rates prompts for clarity, specificity, structure, and effectiveness, with scores and practical recommendations to improve them.',
    // Live demo omitted: https://prompt-scorer-ashen.vercel.app/ currently
    // returns Vercel DEPLOYMENT_NOT_FOUND. Restore `live` once redeployed.
    github: 'https://github.com/PerceptronCipher/prompt-scorer',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'OpenAI'],
  },
  {
    id: 'ai-09',
    title: 'AI Meeting Extractor',
    category: 'Meeting Intelligence',
    description:
      'Turns meeting transcripts or recordings into structured summaries, action items, decisions, owners, and deadlines.',
    // Live demo omitted: https://meeting-extractor-theta.vercel.app/ currently
    // returns Vercel DEPLOYMENT_NOT_FOUND. Restore `live` once redeployed.
    github: 'https://github.com/PerceptronCipher/meeting-extractor',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'OpenAI'],
  },
  {
    id: 'ai-10',
    title: 'AI Reply Generator',
    category: 'Communication',
    description:
      'Drafts context-aware email replies in a selectable tone, making professional, personalized responses fast.',
    live: 'https://reply-gen-iota.vercel.app/',
    github: 'https://github.com/PerceptronCipher/reply-gen',
    tags: ['React', 'Python', 'FastAPI', 'OpenAI'],
  },
]
