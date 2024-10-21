import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "STUDS",
  description: "Strongtie Unified Design System",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/sst_logo.svg',
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Foundations', link: '/foundations' },
      { text: 'Writing', link: '/writing' },
      { text: 'Accessibility', link: '/accessibility' },
      { text: 'Research', link: '/research' },
      { text: 'Components', link: '/components/' },
      { text: 'Examples', link: '/examples/' },
    ],

    sidebar: {
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Popover', link: '/components/popover' },
            { text: 'Button', link: '/components/button' },
          ]
        }
      ],
    '/examples/': [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/examples/markdown-examples' },
          { text: 'Runtime API Examples', link: '/examples/api-examples' }
        ]
      }
    ],
    },
    search: {
      provider: 'local'
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],

    // Added tagline
    footer: {
      message: '© 2024 Simpson Strong-Tie Company, Inc.',
      copyright: 'Strongtie UX | Simpson Strongtie'
    }
  }
})
