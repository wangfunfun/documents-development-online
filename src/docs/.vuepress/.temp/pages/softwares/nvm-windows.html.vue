<template><div><p>前端不同项目会使用不同 Node.js 版本，这里介绍，怎么用 Nvm for Windows 控制 Node.js 版本。</p>
<h2 id="安装-nvm" tabindex="-1"><a class="header-anchor" href="#安装-nvm" aria-hidden="true">#</a> 安装 Nvm</h2>
<h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3>
<ul>
<li>
<p>github: <a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noopener noreferrer">https://github.com/coreybutler/nvm-windows/releases<ExternalLinkIcon/></a></p>
</li>
<li>
<p>阿里云盘：<a href="https://www.aliyundrive.com/s/MkXrpEw9FT8" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/MkXrpEw9FT8<ExternalLinkIcon/></a>，提取码：a3a2</p>
</li>
</ul>
<h3 id="安装前" tabindex="-1"><a class="header-anchor" href="#安装前" aria-hidden="true">#</a> 安装前</h3>
<p>由于独立的 Node.js 和 Nvm for Windows 配置默认 Node.js 有冲突，如果本机上有独立安装 Node.js 需要先卸载。</p>
<p>如何干净的卸载？</p>
<ol>
<li>控制面板卸载。</li>
<li>“C:\Users\Administrator\AppData\Roaming”，删除用户对应路径下（npm、npm-cache、node 开头的文件夹）</li>
<li>删除 Node.js 环境变量。</li>
</ol>
<h3 id="安装-nvm-1" tabindex="-1"><a class="header-anchor" href="#安装-nvm-1" aria-hidden="true">#</a> 安装 Nvm</h3>
<ol>
<li>运行下载好的 <code v-pre>nvm-setup.exe</code>， 同意协议，点击下一步</li>
</ol>
<p><img src="@source/../.vuepress/public/softwares/nvm/setup-start.png" alt="An image"></p>
<ol start="2">
<li>该路径为 Nvm for Windows 的安装路径</li>
</ol>
<p><img src="@source/../.vuepress/public/softwares/nvm/setup-nvm.png" alt="An image"></p>
<ol start="3">
<li>该路径为 Nvm for Windows 选择 Node.js 版本的存放路径</li>
</ol>
<p><img src="@source/../.vuepress/public/softwares/nvm/setup-node.png" alt="An image"></p>
<ol start="4">
<li>点击 install，等待安装成功</li>
</ol>
<p><img src="@source/../.vuepress/public/softwares/nvm/setup-end.png" alt="An image"></p>
<p><img src="@source/../.vuepress/public/softwares/nvm/setup-finish.png" alt="An image"></p>
<ol start="5">
<li>安装成功后进入 cmd 命令行，输入 Nvm for Windows 命令查看是否安装成功，出现 Nvm for Windows 版本信息及为安装成功</li>
</ol>
<p><img src="@source/../.vuepress/public/softwares/nvm/nvm-v.png" alt="An image"></p>
<ol start="6">
<li>安装成功后，在用户变量和系统变量中配置了两个变量 NVM_HOME 和 NVM_SYMLINK，分别指向 Nvm for Windows 和 Node.js 的存放目录，在系统 path 变量中配置了这两个参数</li>
</ol>
<p><img src="@source/../.vuepress/public/softwares/nvm/environment.png" alt="An image"></p>
<p><img src="@source/../.vuepress/public/softwares/nvm/environment-path.png" alt="An image"></p>
<h2 id="配置多版本-node" tabindex="-1"><a class="header-anchor" href="#配置多版本-node" aria-hidden="true">#</a> 配置多版本 node</h2>
<ol>
<li>可使用 <code v-pre>nvm list available</code> 命令查看 nvm 可安装的 Node.js 版本</li>
</ol>
<p><img src="@source/../.vuepress/public/softwares/nvm/nvm-list-available.png" alt="An image"></p>
<ol start="2">
<li>运行 <code v-pre>nvm install &lt;version&gt;</code>，安装指定的多个版本的 Node.js</li>
</ol>
<p><img src="@source/../.vuepress/public/softwares/nvm/nvm-install.png" alt="An image"></p>
<ol start="3">
<li>管理员权限运行 <code v-pre>nvm use &lt;version&gt;</code>，切换 Node.js 版本</li>
</ol>
<p><img src="@source/../.vuepress/public/softwares/nvm/nvm-use.png" alt="An image"></p>
<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// 查看目前已经安装的版本
nvm ls

// 安装指定的版本的 Node.js
nvm install 10.5.0

// 使用指定版本的 Node.js
nvm use 10.5.0

//显示可下载版本的部分列表
nvm list available

//删除已安装的指定版本，语法与 install 类似
nvm uninstall 10.5.0

//给不同的版本号添加别名
nvm alias

//删除已定义的别名
nvm unalias

//在当前版本 Node.js 环境下，重新全局安装指定版本号的 npm 包
nvm reinstall-packages &lt;version>

//显示当前的版本
nvm current
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
<h3 id="切换版本提示-exit-status" tabindex="-1"><a class="header-anchor" href="#切换版本提示-exit-status" aria-hidden="true">#</a> 切换版本提示 exit status</h3>
<p><img src="@source/../.vuepress/public/softwares/nvm/nvm-use-error.png" alt="An image"></p>
<p>使用 nvm use 命令切换 Node.js 版本时，通常是没有复制删除文件夹权限导致,可使用管理员命令进行切换</p>
<p>解决方式：管理员运行 cmd</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  nvm use version(版本号)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="node、npm-不是有效的命令" tabindex="-1"><a class="header-anchor" href="#node、npm-不是有效的命令" aria-hidden="true">#</a> node、npm 不是有效的命令</h3>
<ol>
<li>检查一下 nvm 安装目录下是否有下载的 Node.js 版本，如果没有则需要重新下载。</li>
</ol>
<p><img src="@source/../.vuepress/public/softwares/nvm/nvm.png" alt="An image"></p>
<ol start="2">
<li>将下载好的 Node.js 目录中的 npm 依赖包以及 <code v-pre>npm</code>、<code v-pre>npm.cmd</code>、<code v-pre>npx</code>、<code v-pre>npx.cmd</code> 复制一份，</li>
</ol>
<p><img src="@source/../.vuepress/public/softwares/nvm/node_modules.png" alt="An image"></p>
<p><img src="@source/../.vuepress/public/softwares/nvm/cmd.png" alt="An image"></p>
<ol start="3">
<li>找到 nvm 安装时配置的 Node.js 存放目录</li>
</ol>
<p><img src="@source/../.vuepress/public/softwares/nvm/app-data.png" alt="An image"></p>
<ol start="4">
<li>将复制的 <code v-pre>npm</code>、<code v-pre>npm.cmd</code>、<code v-pre>npx</code>、<code v-pre>npx.cmd</code> 放在 Node.js 存放目录下，将复制的 npm 依赖包存放到 Node.js 存放目录里的 node_modules 目录下</li>
</ol>
<p><img src="@source/../.vuepress/public/softwares/nvm/npm.png" alt="An image"></p>
<h3 id="nvm-for-windows-安装-node-js-下载速度慢" tabindex="-1"><a class="header-anchor" href="#nvm-for-windows-安装-node-js-下载速度慢" aria-hidden="true">#</a> Nvm for Windows 安装 Node.js 下载速度慢</h3>
<p>添加以下内容到安装 Nvm for Windows 目录 settings.txt</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此外提供了配置访问 Github 的几种方法，请移步<RouterLink to="/environment/github.html"> 访问 Github </RouterLink></p>
</div></template>
