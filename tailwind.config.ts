import type { Config } from 'tailwindcss'

export default {
  // 确保这是一个有效的 Tailwind 配置
  corePlugins: {
    preflight: false, // 禁用 Tailwind 的基础样式，避免与 VitePress 冲突
  },
  content: [
    "./docs/.vitepress/**/*.{vue,js}",
    "./docs/**/*.md"
  ],
  theme: {
    extend: {
      colors: {
        'vp-blue': '#3b82f6',
        'vp-purple': '#8b5cf6',
        'vp-text': '#374151',
      }
    }
  },
  darkMode: 'class',
  plugins: []
}

