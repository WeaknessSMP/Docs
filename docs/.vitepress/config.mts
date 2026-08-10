import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WeaknessSMP",
  base: '/Rules/',
  description: "The rules for WeaknessSMP",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Rules', link: '/rules' }
    ],

    sidebar: [
      {
        text: 'Rules',
        link: '/rules',
        collapsed: false,
        items: [
          { text: 'General Rules', link: '/rules/general-rules' },
          { text: 'Punishments', link: '/rules/punishments' }
        ]
      }
    ],

    socialLinks: [
    ]
  }
})
