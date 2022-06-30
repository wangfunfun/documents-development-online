import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  base: '/',
  title: 'wangfunfun',
  description: 'Stay hungry, stay foolish.',
  theme: recoTheme({
    logo: '/logo.png',
    author: 'wangfunfun',
    docsRepo: 'https://github.com/wangfunfun/documents-development-online',
    docsBranch: 'master',
    docsDir: 'docs/.vuepress/dist',
    navbar: [
      { text: 'Home', link: '/' },
      {
        text: 'Blogs',
        link: '/categories/Blogs/1/',
      },
      {
        text: 'Technology',
        children: [
          {
            text: '微信小程序',
            link: '/technology/微信小程序.md',
          },
        ],
      },
      {
        text: 'Softwares',
        children: [
          {
            text: 'Visual Studio Code',
            link: '/softwares/vscode.md',
          },
          {
            text: 'Nvm for Windows',
            link: '/softwares/nvm-windows.md',
          },
        ],
      },
      {
        text: 'Gitee',
        link: 'https://gitee.com/wangfunfun',
      },
      {
        text: 'Github',
        link: 'https://github.com/wangfunfun',
      },
    ],
  }),
})
