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
    series: {},
    navbar: [
      { text: '首页', link: '/' },
      {
        text: '文章',
        link: '/docs/projects/index.md',
      },
      {
        text: '技术文档',
        children: [
          {
            text: '前端开发',
            children: [
              {
                text: 'Vue',
                link: '/docs/technology/vue.md',
              },
              {
                text: 'React',
                link: '/docs/technology/react.md',
              },
              {
                text: 'Uniapp',
                link: '/docs/technology/uniapp.md',
              },
              {
                text: '微信小程序',
                link: '/docs/technology/微信小程序.md',
              },
              {
                text: 'Css/Sass/Less',
                link: '/docs/technology/css-sass-less.md',
              },
              {
                text: 'JavaScript',
                link: '/docs/technology/javascript.md',
              },
              {
                text: 'TypeScript',
                link: '/docs/technology/typescript.md',
              },
              {
                text: 'Node.js',
                link: '/docs/technology/nodejs.md',
              },
            ],
          },
          {
            text: 'Flutter',
            children: [],
          },
          {
            text: 'C++',
            children: [],
          },
        ],
      },
      {
        text: '开发环境',
        children: [
          {
            text: 'Node.js',
            link: '/docs/environment/nodejs.md',
          },
          {
            text: 'JDK',
            link: '/docs/environment/jdk.md',
          },
          {
            text: 'Github',
            link: '/docs/environment/github.md',
          },
        ],
      },
      {
        text: '软件工具',
        children: [
          {
            text: '编译器',
            children: [
              {
                text: 'Visual Studio Code',
                link: '/docs/softwares/vscode.md',
              },
              {
                text: 'HBuilder X',
                link: '/docs/softwares/HbuilderX.md',
              },
              {
                text: '微信开发者工具',
                link: '/docs/softwares/wx-ide.md',
              },
              {
                text: 'Android Studio',
                link: '/docs/softwares/android-studio.md',
              },
            ],
          },
          {
            text: '代码管理',
            children: [
              {
                text: 'Git / Tortoise Git',
                link: '/docs/softwares/git-tortoise-git.md',
              },
              {
                text: 'Tortoise Svn',
                link: '/docs/softwares/tortoise-svn.md',
              },
            ],
          },
          {
            text: '数据库',
            children: [
              {
                text: 'MySQL',
                link: '/docs/softwares/mysql.md',
              },
              {
                text: 'Navicat',
                link: '/docs/softwares/navicat.md',
              },
            ],
          },
          {
            text: '其他工具',
            children: [
              {
                text: 'Final Shell',
                link: '/docs/softwares/final-shell.md',
              },
              {
                text: 'Nvm for Windows',
                link: '/docs/softwares/nvm-windows.md',
              },
              {
                text: 'PostMan',
                link: '/docs/softwares/postman.md',
              },
            ],
          },
        ],
      },
      { text: 'Github', link: 'https://github.com/wangfunfun', icon: 'reco-github' },
      { text: 'Gitee', link: 'https://gitee.com/wangfunfun', icon: 'reco-mayun' },
    ],
  }),
})
