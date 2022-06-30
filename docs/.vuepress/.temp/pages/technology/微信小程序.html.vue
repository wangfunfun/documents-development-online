<template><div><p>该文档记录了开发微信小程序项目（微信开发者工具，非跨端平台）中遇到的一些问题，例如：常用的自定义组件、常用的样式及函数、一些采坑的地方、常用业务的代码块等。</p>
<h2 id="自定义组件" tabindex="-1"><a class="header-anchor" href="#自定义组件" aria-hidden="true">#</a> 自定义组件</h2>
<h3 id="导航栏" tabindex="-1"><a class="header-anchor" href="#导航栏" aria-hidden="true">#</a> 导航栏</h3>
<p>特性：</p>
<ul>
<li>
<p>该自定义导航栏均使用动态获取的参数，兼容性好，可扩展性高；</p>
</li>
<li>
<p>导航栏整体采用 fixed + absolute ，代码易维护/好理解；</p>
</li>
<li>
<p>可根据业务需要扩展不同的 properties；</p>
</li>
<li>
<p>自动计算插槽内容高度，防止引起导航栏塌陷；</p>
</li>
</ul>
<p>效果图：</p>
<p><img src="@source/.vuepress/public/technology/微信小程序/微信图片_20220621145907.png" alt="示例图"></p>
<p>代码：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar-fixed  {{borderBottom ? <span class="token punctuation">'</span>border-bottom<span class="token punctuation">'</span>:<span class="token punctuation">'</span><span class="token punctuation">'</span>}} {{bottomShadow ? <span class="token punctuation">'</span>bottom-shadow<span class="token punctuation">'</span>:<span class="token punctuation">'</span><span class="token punctuation">'</span>}}<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">background-color:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>backgroundColor<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token selector">; padding:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>navbarPaddingTop<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token selector">px</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>navbarPaddingRight<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token selector">px</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>navbarPaddingBottom<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token selector">px</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>navbarPaddingLeft<span class="token punctuation">}</span><span class="token punctuation">}</span>px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar-inner<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">height:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>navbarHeight<span class="token punctuation">}</span><span class="token punctuation">}</span>px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">top:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>navbarInnerTop<span class="token punctuation">}</span><span class="token punctuation">}</span>px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goBack<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">width:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>backIconWidth<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token selector">; height:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>backIconHeight<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{showBackIcon}}<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{backIcon}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goBack<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{showBackText}}<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">line-height:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>navbarHeight<span class="token punctuation">}</span><span class="token punctuation">}</span>px<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>backTextColor<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>{{backText}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">width: calc(100% -</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>menuWidth<span class="token punctuation">}</span><span class="token punctuation">}</span>px - 30%<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>navbarHeight<span class="token punctuation">}</span><span class="token punctuation">}</span>px<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>titleColor<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
        {{title}}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slot<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar-height<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">height:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>collapseHeight<span class="token punctuation">}</span><span class="token punctuation">}</span>px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.navbar</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">.navbar-fixed</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 9999<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.navbar-fixed.border-bottom</span> <span class="token punctuation">{</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.navbar-fixed.bottom-shadow</span> <span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 2px 6px 0px <span class="token function">rgba</span><span class="token punctuation">(</span>10<span class="token punctuation">,</span> 52<span class="token punctuation">,</span> 94<span class="token punctuation">,</span> 0.08<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.navbar-inner</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 50rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">padding-right</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left text</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 28rpx<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> PingFangSC-Medium<span class="token punctuation">,</span> PingFang SC<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left image</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 28rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 28rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.title</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> PingFangSC-Medium<span class="token punctuation">,</span> PingFang SC<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #030303<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">multipleSlots</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'导航栏'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backIcon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'https://s1.ax1x.com/2022/06/21/jS9Wzn.png'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showBackIcon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderBottom</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'返回'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showBackText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">titleColor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'#030303'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backTextColor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'#555'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backIconWidth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'28rpx'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backIconHeight</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'28rpx'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">navbarHeight</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">navbarPaddingTop</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">navbarPaddingBottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">navbarPaddingLeft</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">navbarPaddingRight</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">menuWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">statusBarHeight</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">navbarInnerTop</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">collapseHeight</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> $<span class="token keyword">this</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">const</span> systemInfo <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getSystemInfoSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> menuButtonInfo <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getMenuButtonBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">navbarHeight</span><span class="token operator">:</span> menuButtonInfo<span class="token punctuation">.</span>height<span class="token punctuation">,</span>
      <span class="token literal-property property">menuWidth</span><span class="token operator">:</span> menuButtonInfo<span class="token punctuation">.</span>width<span class="token punctuation">,</span>
      <span class="token literal-property property">navbarPaddingTop</span><span class="token operator">:</span> menuButtonInfo<span class="token punctuation">.</span>top<span class="token punctuation">,</span>
      <span class="token literal-property property">navbarPaddingBottom</span><span class="token operator">:</span> menuButtonInfo<span class="token punctuation">.</span>top <span class="token operator">-</span> systemInfo<span class="token punctuation">.</span>statusBarHeight<span class="token punctuation">,</span>
      <span class="token literal-property property">navbarPaddingLeft</span><span class="token operator">:</span> systemInfo<span class="token punctuation">.</span>screenWidth <span class="token operator">-</span> menuButtonInfo<span class="token punctuation">.</span>right<span class="token punctuation">,</span>
      <span class="token literal-property property">navbarPaddingRight</span><span class="token operator">:</span> systemInfo<span class="token punctuation">.</span>screenWidth <span class="token operator">-</span> menuButtonInfo<span class="token punctuation">.</span>right<span class="token punctuation">,</span>
      <span class="token literal-property property">statusBarHeight</span><span class="token operator">:</span> systemInfo<span class="token punctuation">.</span>statusBarHeight<span class="token punctuation">,</span>
      <span class="token literal-property property">navbarInnerTop</span><span class="token operator">:</span> menuButtonInfo<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createSelectorQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">'#slot'</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">boundingClientRect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        $<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">collapseHeight</span><span class="token operator">:</span> $<span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>navbarPaddingTop <span class="token operator">+</span> $<span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>navbarHeight <span class="token operator">+</span> $<span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>navbarPaddingBottom <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        $<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">triggerEvent</span><span class="token punctuation">(</span><span class="token string">'getCollapseHeight'</span><span class="token punctuation">,</span> $<span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>collapseHeight<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      wx<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">delta</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自由拖拽按钮" tabindex="-1"><a class="header-anchor" href="#自由拖拽按钮" aria-hidden="true">#</a> 自由拖拽按钮</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- btn.wxml --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>offer-btn<span class="token punctuation">"</span></span>
  <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goOfferList<span class="token punctuation">"</span></span>
  <span class="token attr-name">catchtouchmove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>buttonMove<span class="token punctuation">"</span></span>
  <span class="token attr-name">bindtouchstart</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>buttonStart<span class="token punctuation">"</span></span>
  <span class="token attr-name">bindtouchend</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>buttonEnd<span class="token punctuation">"</span></span>
  <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">top:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>buttonTop<span class="token punctuation">}</span><span class="token punctuation">}</span>px<span class="token punctuation">;</span><span class="token property">left</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>buttonLeft<span class="token punctuation">}</span><span class="token punctuation">}</span>px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
<span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* btn.wxss */</span>
<span class="token selector">.offer-btn</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 991<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 120rpx<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 82rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// btn.js</span>
<span class="token keyword">var</span> startPoint
<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">buttonTop</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">buttonLeft</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">windowHeight</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">windowWidth</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> $<span class="token keyword">this</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    wx<span class="token punctuation">.</span><span class="token function">getSystemInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        $<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">windowHeight</span><span class="token operator">:</span> res<span class="token punctuation">.</span>windowHeight<span class="token punctuation">,</span>
          <span class="token literal-property property">windowWidth</span><span class="token operator">:</span> res<span class="token punctuation">.</span>windowWidth<span class="token punctuation">,</span>
          <span class="token literal-property property">buttonTop</span><span class="token operator">:</span> res<span class="token punctuation">.</span>windowHeight <span class="token operator">*</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
          <span class="token literal-property property">buttonLeft</span><span class="token operator">:</span> res<span class="token punctuation">.</span>windowWidth <span class="token operator">*</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">buttonStart</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      startPoint <span class="token operator">=</span> e<span class="token punctuation">.</span>touches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">buttonMove</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> endPoint <span class="token operator">=</span> e<span class="token punctuation">.</span>touches<span class="token punctuation">[</span>e<span class="token punctuation">.</span>touches<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token keyword">var</span> translateX <span class="token operator">=</span> endPoint<span class="token punctuation">.</span>clientX <span class="token operator">-</span> startPoint<span class="token punctuation">.</span>clientX
      <span class="token keyword">var</span> translateY <span class="token operator">=</span> endPoint<span class="token punctuation">.</span>clientY <span class="token operator">-</span> startPoint<span class="token punctuation">.</span>clientY
      startPoint <span class="token operator">=</span> endPoint
      <span class="token keyword">var</span> buttonTop <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>buttonTop <span class="token operator">+</span> translateY
      <span class="token keyword">var</span> buttonLeft <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>buttonLeft <span class="token operator">+</span> translateX
      <span class="token keyword">if</span> <span class="token punctuation">(</span>buttonLeft <span class="token operator">+</span> <span class="token number">50</span> <span class="token operator">>=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>windowWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        buttonLeft <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>windowWidth <span class="token operator">-</span> <span class="token number">50</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>buttonLeft <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        buttonLeft <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>buttonTop <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        buttonTop <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>buttonTop <span class="token operator">+</span> <span class="token number">50</span> <span class="token operator">>=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>windowHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        buttonTop <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>windowHeight <span class="token operator">-</span> <span class="token number">50</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">buttonTop</span><span class="token operator">:</span> buttonTop<span class="token punctuation">,</span>
        <span class="token literal-property property">buttonLeft</span><span class="token operator">:</span> buttonLeft<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">buttonEnd</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法" aria-hidden="true">#</a> 常用方法</h2>
<h3 id="父子组件消息传递" tabindex="-1"><a class="header-anchor" href="#父子组件消息传递" aria-hidden="true">#</a> 父子组件消息传递</h3>
<ul>
<li>子组件通知父级组件</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// child.js</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">triggerEvent</span><span class="token punctuation">(</span><span class="token string">'close'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- father.js --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-component</span> <span class="token attr-name"><span class="token namespace">bind:</span>close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>closeHandle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child-component</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>父组件向子组件传递数据</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// child.js</span>
<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- father.js --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-component</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child-component</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>父组件获取子组件实例</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- father.wxml --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-component</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>childComponent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child-component</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// father.js</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">selectComponent</span><span class="token punctuation">(</span><span class="token string">'#childComponent'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引入计算属性" tabindex="-1"><a class="header-anchor" href="#引入计算属性" aria-hidden="true">#</a> 引入计算属性</h3>
<ol>
<li>构建 npm</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>安装微信提供的计算属性依赖</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install --save miniprogram-computed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>
<p>点击微信开发者工具上方工具栏的 工具/构建 npm/构建完成 点击确定即可</p>
</li>
<li>
<p>引入计算属性</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> computedBehavior <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'miniprogram-computed'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>behavior

<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 这里注册引入的计算属性</span>
  <span class="token literal-property property">behaviors</span><span class="token operator">:</span> <span class="token punctuation">[</span>computedBehavior<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>使用 data 定义的数据</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> computedBehavior <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'miniprogram-computed'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>behavior
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">behaviors</span><span class="token operator">:</span> <span class="token punctuation">[</span>computedBehavior<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">fixed</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> data<span class="token punctuation">.</span>a<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>在计算属性中使用其他的计算属性</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> computedBehavior <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'miniprogram-computed'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>behavior
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">behaviors</span><span class="token operator">:</span> <span class="token punctuation">[</span>computedBehavior<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">fixed</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> data<span class="token punctuation">.</span>a<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">unit</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> data<span class="token punctuation">.</span>fixed <span class="token operator">+</span> <span class="token string">'元'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li>在方法中使用其他的计算属性</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> computedBehavior <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'miniprogram-computed'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>behavior
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">behaviors</span><span class="token operator">:</span> <span class="token punctuation">[</span>computedBehavior<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">fixed</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> data<span class="token punctuation">.</span>a<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">addUnit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fixed <span class="token operator">+</span> <span class="token string">'元'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="监听路由方法" tabindex="-1"><a class="header-anchor" href="#监听路由方法" aria-hidden="true">#</a> 监听路由方法</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 该方法没有记录在微信小程序开发文档中</span>
wx<span class="token punctuation">.</span><span class="token function">onAppRoute</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单的表单验证函数" tabindex="-1"><a class="header-anchor" href="#简单的表单验证函数" aria-hidden="true">#</a> 简单的表单验证函数</h3>
<p>函数代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// validate.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">simpleValidate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">rules<span class="token punctuation">,</span> form</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> rejct</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> error <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> rules<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>rules<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> rules<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>required<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>form<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          error<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>rules<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>msg<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>rules<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>validator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
              rules<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">validator</span><span class="token punctuation">(</span>form<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              error<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      wx<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> error<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> simpleValidate <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./simple-validate'</span><span class="token punctuation">)</span>

<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'名称不能为空'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'手机号不能为空'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// new error 导出报错信息</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'请输入格式正确的手机号'</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">simpleValidate</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>rules<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>form<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">validate</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>validate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 通过验证</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="预览文件" tabindex="-1"><a class="header-anchor" href="#预览文件" aria-hidden="true">#</a> 预览文件</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'加载中'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
wx<span class="token punctuation">.</span><span class="token function">downloadFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> data<span class="token punctuation">.</span>url<span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>statusCode <span class="token operator">!=</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> Path <span class="token operator">=</span> res<span class="token punctuation">.</span>tempFilePath
    wx<span class="token punctuation">.</span><span class="token function">openDocument</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filePath</span><span class="token operator">:</span> Path<span class="token punctuation">,</span>
      <span class="token literal-property property">showMenu</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'打开成功'</span><span class="token punctuation">)</span>
        wx<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">'wx.downloadFile fail err'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用的样式" tabindex="-1"><a class="header-anchor" href="#常用的样式" aria-hidden="true">#</a> 常用的样式</h2>
<h3 id="底部安全距离" tabindex="-1"><a class="header-anchor" href="#底部安全距离" aria-hidden="true">#</a> 底部安全距离</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.safe</span> <span class="token punctuation">{</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token function">constant</span><span class="token punctuation">(</span>safe-area-inset-bottom<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token function">env</span><span class="token punctuation">(</span>safe-area-inset-bottom<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="隐藏滚动条" tabindex="-1"><a class="header-anchor" href="#隐藏滚动条" aria-hidden="true">#</a> 隐藏滚动条</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义-check-组件样式" tabindex="-1"><a class="header-anchor" href="#自定义-check-组件样式" aria-hidden="true">#</a> 自定义 check 组件样式</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">checkbox .wx-checkbox-input</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">checkbox .wx-checkbox-input.wx-checkbox-input-checked</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #005aa0<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #005aa0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">checkbox .wx-checkbox-input.wx-checkbox-input-checked::before</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义-radio-组件样式" tabindex="-1"><a class="header-anchor" href="#自定义-radio-组件样式" aria-hidden="true">#</a> 自定义 radio 组件样式</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">wx-radio</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio[hidden]</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio .wx-radio-wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-inline-flex<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
  <span class="token property">-webkit-align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio .wx-radio-input</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #d1d1d1<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 22px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 22px<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio .wx-radio-input.wx-radio-input-checked</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #005aa0<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #005aa0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio .wx-radio-input.wx-radio-input-checked:before</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> normal normal normal 14px/1 <span class="token string">'weui'</span><span class="token punctuation">;</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'\EA08'</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -48%<span class="token punctuation">)</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.73<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -48%<span class="token punctuation">)</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.73<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio .wx-radio-input.wx-radio-input-disabled</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #e1e1e1<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #d1d1d1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio .wx-radio-input.wx-radio-input-disabled.wx-radio-input-checked</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #005aa0<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #005aa0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio .wx-radio-input.wx-radio-input-disabled:before</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio-group</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio-group[hidden]</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="采坑" tabindex="-1"><a class="header-anchor" href="#采坑" aria-hidden="true">#</a> 采坑</h2>
<h3 id="字体下载" tabindex="-1"><a class="header-anchor" href="#字体下载" aria-hidden="true">#</a> 字体下载</h3>
<ul>
<li>
<p>字体包的 url 必须使用 https</p>
</li>
<li>
<p>如遇下载失败，大部分是因为地址没有开启跨域，小程序下载字体不会提示跨域，需要新增 <code v-pre>.html</code> 文件引入 url 字体测试</p>
</li>
</ul>
<p>示例代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">loadFontFace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">global</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">family</span><span class="token operator">:</span> <span class="token string">'PangMenZhengDao'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">'url("https://xxxxx/font.ttf")'</span><span class="token punctuation">,</span>
  <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">error</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="背景图片" tabindex="-1"><a class="header-anchor" href="#背景图片" aria-hidden="true">#</a> 背景图片</h3>
<ul>
<li>
<p><code v-pre>background-image:url();</code> 不能使用本地图片、图片 url 带中文或者空格；</p>
</li>
<li>
<p>base64 虽然可以使用，但是体积较大，不建议使用；</p>
</li>
</ul>
<p>以下写法背景图不显示：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>https://xxxx/图片.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="在-wxml-中使用函数" tabindex="-1"><a class="header-anchor" href="#在-wxml-中使用函数" aria-hidden="true">#</a> 在 wxml 中使用函数</h3>
<ol>
<li>新建 <code v-pre>utils.wxs</code> 文件</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> formatUtils <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">format</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里不能使用 es6 及以后的语法</span>
    <span class="token keyword">return</span> val<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">format</span><span class="token operator">:</span> formatUtils<span class="token punctuation">.</span>format<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>在 <code v-pre>page.wxml</code> 中顶层标签引入</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wxs</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/utils/format.wxs<span class="token punctuation">"</span></span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formatUtils<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wxs</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>{{formatUtils.format(1)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="createselectorquery" tabindex="-1"><a class="header-anchor" href="#createselectorquery" aria-hidden="true">#</a> createSelectorQuery</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 在页面中使用</span>
wx<span class="token punctuation">.</span>createSelectorQuery
  <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">'#id'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">boundingClientRect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 在自定义组件中使用</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createSelectorQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">'#id'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">boundingClientRect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>selector 语法：</p>
<p>selector 类似于 CSS 的选择器，但仅支持下列语法。</p>
<ul>
<li>ID 选择器：#the-id</li>
<li>class 选择器（可以连续指定多个）：.a-class.another-class</li>
<li>子元素选择器：.the-parent &gt; .the-child</li>
<li>后代选择器：.the-ancestor .the-descendant</li>
<li>跨自定义组件的后代选择器：.the-ancestor &gt;&gt;&gt; .the-descendant</li>
<li>多选择器的并集：#a-node, .some-other-nodes</li>
</ul>
<h3 id="data-xxx-传值" tabindex="-1"><a class="header-anchor" href="#data-xxx-传值" aria-hidden="true">#</a> data-xxx 传值</h3>
<p>data-xxx 传入的名称会强制变更为小写，如 <code v-pre>data-tagName</code> 在 <code v-pre>tapName</code> 方法中返回的 e 中显示为 <code v-pre>tagname</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">data-tagName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tag<span class="token punctuation">"</span></span> <span class="token attr-name">data-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tapName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">tapName</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>tagname<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wx-showsharemenu" tabindex="-1"><a class="header-anchor" href="#wx-showsharemenu" aria-hidden="true">#</a> wx.showShareMenu</h3>
<p>wx.showShareMenu 的真正作用，是控制是否显示转发分享菜单在 &quot;...”菜单中，而不是直接弹出分享界面。</p>
<p>wx.showShareMenu 的参数 withShareTicket 为 true 时，点击模拟器右上角菜单后出现的转发按钮，会出现一个测试群列表</p>
<p>对应 wx.hideShareMenu 就是隐藏转发菜单</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">showShareMenu</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">withShareTicket</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">menus</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'shareAppMessage'</span><span class="token punctuation">,</span> <span class="token string">'shareTimeline'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">fail</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wx-onkeyboardheightchange" tabindex="-1"><a class="header-anchor" href="#wx-onkeyboardheightchange" aria-hidden="true">#</a> wx.onKeyboardHeightChange</h3>
<p>微信监听键盘高度变化，在组件内部调用真机时失效，在页面调用正常。可以通过 <code v-pre>properties</code> 动态传值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">onKeyboardHeightChange</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">keyboardHeight</span><span class="token operator">:</span> res<span class="token punctuation">.</span>height<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 子组件</span>
<span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">keyboardHeight</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
