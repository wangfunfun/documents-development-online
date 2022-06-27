import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: 'wangfunfun',
  description: 'Stay hungry, stay foolish.',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'wangfunfun',
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    docsBranch: 'main',
    docsDir: 'example',
    navbar: [
      { text: 'Home', link: '/' },
      {
        text: 'Blogs',
        link: '/categories/Blogs/1/',
      },
      {
        text: 'Technology',
        children: [
          // {
          //   text: 'Vue',
          //   link: '/docs/technology/vue.md',
          // },
          // {
          //   text: 'React',
          //   link: '/docs/technology/react.md',
          // },
          // {
          //   text: 'Uniapp',
          //   link: '/docs/technology/uniapp.md',
          // },
          {
            text: '微信小程序',
            link: '/docs/technology/微信小程序.md',
          },
          // {
          //   text: 'Css/Sass/Less',
          //   link: '/docs/technology/css-sass-less.md',
          // },
          // {
          //   text: 'JavaScript',
          //   link: '/docs/technology/javascript.md',
          // },
          // {
          //   text: 'TypeScript',
          //   link: '/docs/technology/typescript.md',
          // },
          // {
          //   text: 'Node.js',
          //   link: '/docs/technology/nodejs.md',
          // },
        ],
      },
      // {
      //   text: 'Environment',
      //   children: [
      //     {
      //       text: 'Node.js',
      //       link: '/docs/environment/nodejs.md',
      //     },
      //     {
      //       text: 'JDK',
      //       link: '/docs/environment/jdk.md',
      //     },
      //     {
      //       text: 'Github',
      //       link: '/docs/environment/github.md',
      //     },
      //   ],
      // },
      {
        text: 'Softwares',
        children: [
          {
            text: 'Visual Studio Code',
            link: '/docs/softwares/vscode.md',
          },
          // {
          //   text: 'Git / Tortoise Git',
          //   link: '/docs/softwares/git-tortoise-git.md',
          // },
          // {
          //   text: 'MySQL',
          //   link: '/docs/softwares/mysql.md',
          // },
          // {
          //   text: 'Navicat',
          //   link: '/docs/softwares/navicat.md',
          // },
          // {
          //   text: 'Final Shell',
          //   link: '/docs/softwares/final-shell.md',
          // },
          {
            text: 'Nvm for Windows',
            link: '/docs/softwares/nvm-windows.md',
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
