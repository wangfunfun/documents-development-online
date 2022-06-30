import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/index.md"]],
  ["v-fd3ff916","/blogs/code.html",{"title":""},["/blogs/code","/blogs/code.md"]],
  ["v-6406869d","/blogs/element-ui.html",{"title":"ElementUI 的日期时间选择器，选择时间变成12小时制"},["/blogs/element-ui","/blogs/element-ui.md"]],
  ["v-6d7f747f","/docs/environment/github.html",{"title":""},["/docs/environment/github","/docs/environment/github.md"]],
  ["v-68c2b3ff","/docs/environment/jdk.html",{"title":""},["/docs/environment/jdk","/docs/environment/jdk.md"]],
  ["v-d6a742d2","/docs/environment/nodejs.html",{"title":""},["/docs/environment/nodejs","/docs/environment/nodejs.md"]],
  ["v-5e8d5b5a","/docs/projects/",{"title":""},["/docs/projects/index.html","/docs/projects/index.md"]],
  ["v-35214767","/docs/softwares/android-studio.html",{"title":"Android Studio"},["/docs/softwares/android-studio","/docs/softwares/android-studio.md"]],
  ["v-4e26139e","/docs/softwares/final-shell.html",{"title":"Final Shell"},["/docs/softwares/final-shell","/docs/softwares/final-shell.md"]],
  ["v-90a5d10a","/docs/softwares/flutter.html",{"title":"Flutter"},["/docs/softwares/flutter","/docs/softwares/flutter.md"]],
  ["v-ff4e889c","/docs/softwares/git-tortoise-git.html",{"title":"Git / Tortoise Git"},["/docs/softwares/git-tortoise-git","/docs/softwares/git-tortoise-git.md"]],
  ["v-35284912","/docs/softwares/hbuilderx.html",{"title":"HBuilder X"},["/docs/softwares/hbuilderx","/docs/softwares/hbuilderx.md"]],
  ["v-2399ab96","/docs/softwares/mysql.html",{"title":"MySQL"},["/docs/softwares/mysql","/docs/softwares/mysql.md"]],
  ["v-6e9c09a7","/docs/softwares/navicat.html",{"title":"Navicat"},["/docs/softwares/navicat","/docs/softwares/navicat.md"]],
  ["v-1abb939c","/docs/softwares/nvm-windows.html",{"title":"Nvm for Windows"},["/docs/softwares/nvm-windows","/docs/softwares/nvm-windows.md"]],
  ["v-2924399d","/docs/softwares/postman.html",{"title":"PostMan"},["/docs/softwares/postman","/docs/softwares/postman.md"]],
  ["v-189ad218","/docs/softwares/tortoise-svn.html",{"title":"Tortoise Svn"},["/docs/softwares/tortoise-svn","/docs/softwares/tortoise-svn.md"]],
  ["v-0c27101e","/docs/softwares/vscode.html",{"title":"Visual Studio Code"},["/docs/softwares/vscode","/docs/softwares/vscode.md"]],
  ["v-c2ec2e46","/docs/softwares/wx-ide.html",{"title":"微信开发者工具"},["/docs/softwares/wx-ide","/docs/softwares/wx-ide.md"]],
  ["v-9387505a","/docs/technology/css-sass-less.html",{"title":""},["/docs/technology/css-sass-less","/docs/technology/css-sass-less.md"]],
  ["v-5aa3780f","/docs/technology/git.html",{"title":"Git"},["/docs/technology/git","/docs/technology/git.md"]],
  ["v-715f8278","/docs/technology/javascript.html",{"title":""},["/docs/technology/javascript","/docs/technology/javascript.md"]],
  ["v-1a7947b4","/docs/technology/nodejs.html",{"title":""},["/docs/technology/nodejs","/docs/technology/nodejs.md"]],
  ["v-87653efc","/docs/technology/react.html",{"title":""},["/docs/technology/react","/docs/technology/react.md"]],
  ["v-033c8aa8","/docs/technology/typescript.html",{"title":""},["/docs/technology/typescript","/docs/technology/typescript.md"]],
  ["v-e259c100","/docs/technology/uniapp.html",{"title":""},["/docs/technology/uniapp","/docs/technology/uniapp.md"]],
  ["v-5bf1a24a","/docs/technology/vue.html",{"title":""},["/docs/technology/vue","/docs/technology/vue.md"]],
  ["v-4b4887bc","/docs/technology/weixinxiaochengxu.html",{"title":"微信小程序"},["/docs/technology/weixinxiaochengxu","/docs/technology/微信小程序.html","/docs/technology/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F.html","/docs/technology/微信小程序.md","/docs/technology/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-9f830a14","/categories/Blogs/1/",{"title":""},["/categories/Blogs/1/index.html"]],
  ["v-821ff50a","/categories/Softwares/1/",{"title":""},["/categories/Softwares/1/index.html"]],
  ["v-4ce011b2","/categories/Technology/1/",{"title":""},["/categories/Technology/1/index.html"]],
  ["v-1d404bd6","/tags/weixinxiaochengxu/1/",{"title":""},["/tags/weixinxiaochengxu/1/index.html"]],
  ["v-01560935","/timeline/",{"title":""},["/timeline/index.html"]],
  ["v-03d52fd3","/posts/1/",{"title":""},["/posts/1/index.html"]],
  ["v-03d52ff2","/posts/2/",{"title":""},["/posts/2/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
