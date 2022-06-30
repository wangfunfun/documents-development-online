---
title: Visual Studio Code
date: 2022/06/27 20:32:00
categories:
  - Softwares
---

Microsoft 在 2015 年 4 月 30 日 Build 开发者大会上正式宣布了 Visual Studio Code 项目：一个运行于 Mac OS X、Windows 和 Linux 之上的，针对于编写现代 Web 和云应用的跨平台源代码编辑器。

## 下载与安装

VSCode 是微软推出的跨平台、扩展组件丰富的文本编辑器。

官方提供 稳定的发行版本 (opens new window)与 最新测试版本 (opens new window)两个版本。

- 官方下载地址： [https://code.visualstudio.com/](https://code.visualstudio.com/)

- 阿里云盘： [https://www.aliyundrive.com/s/p968Umqjg6v](https://www.aliyundrive.com/s/p968Umqjg6v)，提取码：6eg5

### 下载

选择需要安装的版本，stable 是稳定版，一般下载这个即可。如果官方下载速度比较慢的话，可以通过我的阿里云盘下载。注意：这通常不是最新版本，安装完成后请更新至最新版本。

![An image](../.vuepress/public/softwares/vscode/download.png)

### 安装

1. 运行下载好的安装文件

![An image](../.vuepress/public/softwares/vscode/setup-1.png)

2. 根据自己的需要进行勾选

![An image](../.vuepress/public/softwares/vscode/setup-2.png)

3. 由于我的电脑已经装过该软件了，所以少了一步选择安装位置

![An image](../.vuepress/public/softwares/vscode/setup-3.png)

4. 安装完成

![An image](../.vuepress/public/softwares/vscode/setup-4.png)

## 插件推荐

### 基本插件

这里推荐几个基本的插件，无论你是前端开发者还是其他开发者基本都能用到

1. Chinese

![An image](../.vuepress/public/softwares/vscode/plugin-chinese.png)

1. markdown All in One

![An image](../.vuepress/public/softwares/vscode/plugin-markdown.png)

3. Todo Tree

![An image](../.vuepress/public/softwares/vscode/plugin-todo.png)

4. Vs Code Counter

![An image](../.vuepress/public/softwares/vscode/plugin-counter.png)

### 主题插件

1. One Dark Pro

![An image](../.vuepress/public/softwares/vscode/plugin-theme-one-dark-pro.png)

2. Dracula Official

![An image](../.vuepress/public/softwares/vscode/plugin-theme-dracula-official.png)

3. Material Icon Theme

![An image](../.vuepress/public/softwares/vscode/plugin-marterial-icon.png)

4. Fluent Icons

![An image](../.vuepress/public/softwares/vscode/plugin-fluent-icons.png)

5. vscide-icons

![An image](../.vuepress/public/softwares/vscode/plugin-vscode-icons.png)

如果需要其他主题，请移步 [https://vscodethemes.com/](https://vscodethemes.com/)

![An image](../.vuepress/public/softwares/vscode/theme-store.png)

### 格式化

1. Eslint

![An image](../.vuepress/public/softwares/vscode/plugin-eslint.png)

2. Prettier Code formatter

![An image](../.vuepress/public/softwares/vscode/plugin-prettier.png)

### 开发插件

1. Path Intellisense

![An image](../.vuepress/public/softwares/vscode/plugin-path.png)

2. Vetur

![An image](../.vuepress/public/softwares/vscode/plugin-vetur.png)

3. Vue Language Features (Volar)

![An image](../.vuepress/public/softwares/vscode/plugin-volar.png)

4. Vue 3 Snippets

![An image](../.vuepress/public/softwares/vscode/plugin-vue3.png)

5. Live Server

![An image](../.vuepress/public/softwares/vscode/plugin-live.png)

6. JavaScript (ES6) code snippets

![An image](../.vuepress/public/softwares/vscode/plugin-es6.png)

7. Code Runner

![An image](../.vuepress/public/softwares/vscode/plugin-run.png)

## 我的配置

复制 json 到你的 `setting.json` 中

```json
{
  // 编辑器配置
  "editor.quickSuggestions": {
    "strings": true
  },
  "editor.fontSize": 16,
  "editor.fontLigatures": true,
  "editor.minimap.enabled": false,
  "editor.fontFamily": "CascadiaMono,OperatorMonoLig-Book,'JetBrainsMono-Light','FiraCode-Light','Hack-Regular','JetBrains Mono','FiraCode-Retina','Operator Mono Lig',Menlo,Monaco, 'Courier New','阿里巴巴普惠体'",
  "editor.largeFileOptimizations": false,
  "editor.cursorSmoothCaretAnimation": true,
  "editor.wordWrapColumn": 160,
  "editor.lineNumbers": "relative",
  "editor.rulers": [],
  "editor.cursorBlinking": "solid",
  "editor.fontWeight": "normal",
  "editor.minimap.maxColumn": 160,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.cursorStyle": "line",
  "editor.insertSpaces": false,
  "editor.wordSeparators": "/\\()\"':,.;<>~!@#$%^&*|+=[]{}`?-",
  "editor.wordWrap": "bounded",
  "editor.inlayHints.fontSize": 18,
  "editor.suggestFontSize": 18,
  "editor.renderLineHighlight": "all",
  "editor.linkedEditing": true,
  "editor.scrollbar.vertical": "visible",
  "editor.scrollbar.horizontal": "visible",
  "editor.suggest.showStatusBar": true,
  "editor.suggestSelection": "first",
  "editor.inlineSuggest.enabled": true,
  // 搜索
  "search.showLineNumbers": true,
  "search.exclude": {
    "*.code-workspace": true
  },
  //
  "tabnine.experimentalAutoImports": true,
  // markdown 配置
  "markdown.preview.fontSize": 16,
  "markdown.preview.lineHeight": 15,
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // liveServer 插件配置
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.donotVerifyTags": true,
  // 终端配置
  "terminal.integrated.lineHeight": 0,
  "terminal.integrated.fontFamily": "'JetBrains Mono','Fira Code',Menlo,Monaco, 'Courier New', monospace",
  "terminal.integrated.fontWeightBold": "normal",
  "terminal.integrated.fontSize": 16,
  "terminal.integrated.defaultProfile.windows": "PowerShell",
  // debug 配置
  "debug.console.fontFamily": "'JetBrains Mono','Fira Code',Menlo,Monaco, 'Courier New', monospace",
  "debug.console.fontSize": 16,
  // 工作台配置
  "workbench.list.horizontalScrolling": true,
  "workbench.startupEditor": "newUntitledFile",
  "workbench.editor.limit.enabled": true,
  "workbench.editor.showTabs": true,
  "workbench.statusBar.visible": true,
  "workbench.editor.limit.value": 3,
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.productIconTheme": "fluent-icons",
  "workbench.colorCustomizations": {
    "editorIndentGuide.activeBackground": "#ff0000"
  },
  // material-icon-theme 配置
  "material-icon-theme.activeIconPack": "vue_vuex",
  "material-icon-theme.opacity": 1,
  // prettier 插件配置
  "prettier.semi": false,
  "prettier.printWidth": 160,
  // 禅模式
  "zenMode.centerLayout": false,
  "zenMode.restore": true,
  "zenMode.hideLineNumbers": false,
  "zenMode.fullScreen": false,
  // eslint 配置
  "eslint.enable": true,
  "eslint.codeAction.showDocumentation": {},
  "eslint.validate": ["javascript", "javascriptreact", "vue"],
  "eslint.format.enable": true,
  // 文件夹配置
  "files.exclude": {
    ".vscode": false,
    "*.code-workspace": true,
    "**/node_modules": false,
    "**/public/js/app.js": false,
    "**/unpackage": true,
    "**/vendor.js": true,
    "**/.git": true,
    "**/.gitignore": true,
    "**/.svn": true,
    "**/.DS_Store": true,
    "**/.idea": true,
    "**/yarn.lock": true,
    "**/tmp": true,
    "**/dist": true,
    "**/build": true
  },
  "files.watcherExclude": {
    "**/vendor/**": true
  },
  "files.associations": {
    "*.vue": "vue",
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript",
    "*.ts": "typescript",
    "*.dart": "dart"
  },
  // git 配置
  "git.ignoreLegacyWarning": true,
  "git.enableSmartCommit": true,
  // 导航路径
  "breadcrumbs.symbolPath": "off",
  "breadcrumbs.enabled": true,
  "compile-hero.ignore": "",
  // json 格式化配置
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // scss
  "[scss]": {
    "editor.suggest.insertMode": "replace",
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // css
  "css.lint.compatibleVendorPrefixes": "error",
  // html
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "html.format.wrapAttributes": "preserve-aligned",
  "html.format.wrapLineLength": 160,
  "html.format.extraLiners": "head, body, /html",
  // vue
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // js
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "javascript.validate.enable": false,
  // tailwindCss
  "tailwindCSS.includeLanguages": {
    "plaintext": "html"
  },
  // 截屏模式
  "screencastMode.keyboardOverlayTimeout": 600,
  "screencastMode.verticalOffset": 10,
  "screencastMode.fontSize": 55,
  // prettier 配置
  "prettier.vueIndentScriptAndStyle": true,
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true,
  "prettier.arrowParens": "avoid",
  "prettier.useEditorConfig": false,
  // 资源管理器配置
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "explorer.openEditors.visible": 3,
  // 窗口
  "window.closeWhenEmpty": true,
  // 信任
  "security.workspace.trust.untrustedFiles": "open",
  // volar 配置
  "volar.icon.preview": true,
  "volar.autoCompleteRefs": true,
  "volar.splitEditors.layout.left": ["script", "scriptSetup", "styles"],
  // emmet 配置
  "emmet.showSuggestionsAsSnippets": true,
  // emmit ops
  "emmet.triggerExpansionOnTab": true,
  "emmet.syntaxProfiles": {
    "vue-html": "html",
    "vue": "html",
    "javascript": "javascriptreact",
    "xml": {
      "attr_quotes": "single"
    }
  },
  "emmet.includeLanguages": {
    "wxml": "html",
    "vue-html": "html",
    "vue": "html"
  },
  // ts配置
  "typescript.updateImportsOnFileMove.enabled": "always",
  "path-intellisense.mappings": {
    "@": "${workspaceRoot}/src",
    "/": "${workspaceRoot}/"
  },
  // i18n 配置
  "i18n-ally.localesPaths": ["src/i18n", "src/i18n/language"],
  "i18n-ally.enabledParsers": ["json", "js"],
  "i18n-ally.keystyle": "nested",
  // vue3禁用
  "vetur.underline.refValue": false,
  "vetur.validation.script": false,
  "vetur.validation.interpolation": false,
  "vetur.validation.style": false,
  "vetur.validation.template": false
}
```

## 我的插件

- Auto Import
- Chinese
- Code Runner
- Document This
- DotENV
- EdiorConfig for VS Code
- ES7+
- Eslint
- filesize
- Fluent Icons
- Git Graph
- GitLens
- i18n Ally
- Image preview
- Import Cost
- JavaScript (ES6) code snippets
- Live Sass Compiler
- Live Server
- Markdown All in One
- Markdown Preview Enhanced
- Material Icon Theme
- One Dark Pro
- Path Intellisense
- Prettier - Code formatter
- Tabnine AI Autocomplete for JavaScript
- Tailwind CSS Intellisense
- Todo Tree
- TsLint
- Vetur
- vscode-icons
- Vue 3 Snippets
- Vue Language Features
- Vue peek
