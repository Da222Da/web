import{_ as a,C as n,o as p,c as l,H as o,Q as e}from"./chunks/framework.9e8bdea8.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"node/module/ejs.md","filePath":"node/module/ejs.md"}'),c={name:"node/module/ejs.md"},t=e(`<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>在 Node.js 中，ES Module（ECMAScript Module）是另一种模块化规范，它是在 ECMAScript 6（ES6）中引入的。与 CommonJS 不同，ES Module 使用 <code>import</code> 和 <code>export</code> 关键字来导入和导出模块。</p><h2 id="示例代码" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// math.mjs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 定义一个函数</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;"> () {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导出函数</span></span>
<span class="line"><span style="color:#6A737D;">// export default { add, sum } 默认导出一个对象</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> add;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> sum;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// math.mjs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 定义一个函数</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> b;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;"> () {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导出函数</span></span>
<span class="line"><span style="color:#6A737D;">// export default { add, sum } 默认导出一个对象</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> add;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> sum;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// app.mjs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导入 math 模块</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { add } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./math.mjs&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用 math 模块中的函数</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)); </span><span style="color:#6A737D;">// 输出 5</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// app.mjs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导入 math 模块</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { add } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./math.mjs&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用 math 模块中的函数</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)); </span><span style="color:#6A737D;">// 输出 5</span></span></code></pre></div>`,5);function r(y,i,E,d,m,u){const s=n("PageHeader");return p(),l("div",null,[o(s,{content:"ES Module 模块化规范"}),t])}const F=a(c,[["render",r]]);export{A as __pageData,F as default};
