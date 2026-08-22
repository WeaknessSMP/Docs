import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WeaknessSMP",
  base: '/Docs/',
  description: "The rules for WeaknessSMP",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Rules', link: '/rules' },
      { text: 'Server Guide', link: '/server-guide' },
    ],

    // Define multi-sidebar as an object keyed by path prefix
    sidebar: {
      // Main site sidebar (matches / and any route not covered by admin-guide)
      '/': [
        {
          text: 'Rules',
          link: '/rules',
          collapsed: false,
          items: [
            { text: 'General Rules', link: '/rules/general-rules' },
            { text: 'Punishments', link: '/rules/punishments' }
          ]
        },
        {
          text: 'Server Guide',
          link: '/server-guide',
          collapsed: false,
          items: [
            { text: 'Joining the Server', link: '/server-guide/joining' },
            { text: 'The server is Sleeping', link: '/server-guide/sleeping' }
          ]
        }
      ],

      // Admin Guide sidebar (active when visiting any page under /admin-guide/)
      '/admin-guide/': [
        {
          text: 'Admin Guide',
          items: [
            { text: 'Logging', link: '/admin-guide/logging' },
            { text: 'Moderation', link: '/admin-guide/moderation' }
          ]
        }
      ]
    },

    socialLinks: []
  }
})