/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fbf8ff',
        surface: '#fbf8ff',
        'surface-dim': '#dad9e3',
        'surface-bright': '#fbf8ff',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f4f2fc',
        'surface-container': '#eeedf7',
        'surface-container-high': '#e8e7f1',
        'surface-container-highest': '#e3e1eb',
        'on-surface': '#1a1b22',
        'on-surface-variant': '#444653',
        'inverse-surface': '#2f3037',
        'inverse-on-surface': '#f1f0fa',
        outline: '#757684',
        'outline-variant': '#c4c5d5',
        'surface-tint': '#3755c3',
        primary: '#00288e',
        'on-primary': '#ffffff',
        'primary-container': '#1e40af',
        'on-primary-container': '#a8b8ff',
        'inverse-primary': '#b8c4ff',
        secondary: '#505f76',
        'on-secondary': '#ffffff',
        'secondary-container': '#d0e1fb',
        'on-secondary-container': '#54647a',
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
        'slate-gray': '#F8FAFC',
        'slate-border': '#E2E8F0',
        'slate-hover': '#F1F5F9',
        'deep-slate': '#1a1b22',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        monospace: ['monospace'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'base': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        'gutter': '24px',
        'margin': '32px',
      },
      borderRadius: {
        'sm': '0.125rem',
        DEFAULT: '0.25rem', // 4px
        'md': '0.375rem',
        'lg': '0.5rem', // 8px for cards
        'xl': '0.75rem',
      },
      boxShadow: {
        'level-1': '0 2px 4px 0 rgba(0, 0, 0, 0.04)',
        'level-2': '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
