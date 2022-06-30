import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-fd3ff916","/blogs/code.html",{"title":""},["/blogs/code","/blogs/code.md"]],
  ["v-6406869d","/blogs/element-ui.html",{"title":"ElementUI 的日期时间选择器，选择时间变成12小时制"},["/blogs/element-ui","/blogs/element-ui.md"]],
  ["v-301a2c7e","/environment/github.html",{"title":""},["/environment/github","/environment/github.md"]],
  ["v-23db15fd","/environment/jdk.html",{"title":""},["/environment/jdk","/environment/jdk.md"]],
  ["v-0f1fd3d9","/environment/nodejs.html",{"title":""},["/environment/nodejs","/environment/nodejs.md"]],
  ["v-6dc367c8","/projects/",{"title":""},["/projects/index.html","/projects/index.md"]],
  ["v-ac7779ae","/softwares/android-studio.html",{"title":"Android Studio"},["/softwares/android-studio","/softwares/android-studio.md"]],
  ["v-10207f1c","/softwares/final-shell.html",{"title":"Final Shell"},["/softwares/final-shell","/softwares/final-shell.md"]],
  ["v-0e34f1f9","/softwares/flutter.html",{"title":"Flutter"},["/softwares/flutter","/softwares/flutter.md"]],
  ["v-582bcef4","/softwares/git-tortoise-git.html",{"title":"Git / Tortoise Git"},["/softwares/git-tortoise-git","/softwares/git-tortoise-git.md"]],
  ["v-09237c10","/softwares/hbuilderx.html",{"title":"HBuilder X"},["/softwares/hbuilderx","/softwares/hbuilderx.md"]],
  ["v-ad68e79a","/softwares/mysql.html",{"title":"MySQL"},["/softwares/mysql","/softwares/mysql.md"]],
  ["v-75b837b6","/softwares/navicat.html",{"title":"Navicat"},["/softwares/navicat","/softwares/navicat.md"]],
  ["v-469401cc","/softwares/nvm-windows.html",{"title":"Nvm for Windows"},["/softwares/nvm-windows","/softwares/nvm-windows.md"]],
  ["v-7fac141b","/softwares/postman.html",{"title":"PostMan"},["/softwares/postman","/softwares/postman.md"]],
  ["v-71059b36","/softwares/tortoise-svn.html",{"title":"Tortoise Svn"},["/softwares/tortoise-svn","/softwares/tortoise-svn.md"]],
  ["v-bc3f549a","/softwares/vscode.html",{"title":"Visual Studio Code"},["/softwares/vscode","/softwares/vscode.md"]],
  ["v-467dc69f","/softwares/wx-ide.html",{"title":"微信开发者工具"},["/softwares/wx-ide","/softwares/wx-ide.md"]],
  ["v-2adf5395","/technology/css-sass-less.html",{"title":""},["/technology/css-sass-less","/technology/css-sass-less.md"]],
  ["v-0e17de51","/technology/git.html",{"title":"Git"},["/technology/git","/technology/git.md"]],
  ["v-ed6aab7c","/technology/javascript.html",{"title":""},["/technology/javascript","/technology/javascript.md"]],
  ["v-494b36a4","/technology/nodejs.html",{"title":""},["/technology/nodejs","/technology/nodejs.md"]],
  ["v-64413e44","/technology/react.html",{"title":""},["/technology/react","/technology/react.md"]],
  ["v-7f47b3ac","/technology/typescript.html",{"title":""},["/technology/typescript","/technology/typescript.md"]],
  ["v-354a0c04","/technology/uniapp.html",{"title":""},["/technology/uniapp","/technology/uniapp.md"]],
  ["v-f508d5c6","/technology/vue.html",{"title":""},["/technology/vue","/technology/vue.md"]],
  ["v-ca880904","/technology/weixinxiaochengxu.html",{"title":"微信小程序"},["/technology/weixinxiaochengxu","/technology/微信小程序.html","/technology/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F.html","/technology/微信小程序.md","/technology/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F.md"]],
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
