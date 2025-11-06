import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Deep blue
        accent: '#fbbf24', // Golden yellow
        dark: '#0f172a', // Navy black
        light: '#f8fafc', // Soft white
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        soft: '0 4px 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

export default config

// import type { Config } from 'tailwindcss'

// const config: Config = {
//   darkMode: 'class', // Enable class-based dark mode
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
//         darkBg: '#0f172a', // renamed to avoid conflict
//         lightBg: '#f8fafc', // renamed to avoid conflict
//         resumeLight: '#dc2626', // red for light mode
//         resumeDark: '#ffffff', // white for dark mode
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
