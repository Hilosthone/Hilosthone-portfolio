// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#1e40af', // Deep blue
//         accent: '#fbbf24', // Golden yellow
//         dark: '#0f172a', // Navy black
//         light: '#f8fafc', // Soft white
//       },
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//         mono: ['Fira Code', 'monospace'],
//       },
//       boxShadow: {
//         soft: '0 4px 10px rgba(0, 0, 0, 0.1)',
//       },
//     },
//   },
//   plugins: [],
// }

// export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  // 1. Enable class-based dark mode
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core Branding
        primary: '#1e40af', // Deep blue
        accent: '#fbbf24', // Golden yellow

        // Backgrounds & Text
        background: {
          light: '#f8fafc',
          dark: '#0f172a',
        },

        // Specialized button colors (matching your Red/White theme)
        resume: {
          primary: '#dc2626', // Red-600
          secondary: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        soft: '0 4px 10px rgba(0, 0, 0, 0.1)',
        'glow-red': '0 0 20px rgba(220, 38, 38, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config