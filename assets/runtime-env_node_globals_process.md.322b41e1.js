import{_ as n,C as a,o as e,c as p,H as o,Q as l}from"./chunks/framework.9e8bdea8.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"runtime-env/node/globals/process.md","filePath":"runtime-env/node/globals/process.md"}'),c={name:"runtime-env/node/globals/process.md"},t=l(`<p>在 Node.js 中， <code>process</code> 是一个全局对象，它提供了有关当前 Node.js 进程的信息和控制。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 获取用户环境的对象，可以用来访问和设置环境变量。</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(p<wbr>rocess.env);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取当前工作目录的路径</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(process.</span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 打印命令行参数</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(process.argv);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 终止 Node.js 进程</span></span>
<span class="line"><span style="color:#E1E4E8;">process.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 获取用户环境的对象，可以用来访问和设置环境变量。</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(p<wbr>rocess.env);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取当前工作目录的路径</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(process.</span><span style="color:#6F42C1;">cwd</span><span style="color:#24292E;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 打印命令行参数</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(process.argv);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 终止 Node.js 进程</span></span>
<span class="line"><span style="color:#24292E;">process.</span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">();</span></span></code></pre></div>`,2);function r(i,d,y,E,_,g){const s=a("PageHeader");return e(),p("div",null,[o(s,{content:"proces 进程信息对象"}),t])}const u=n(c,[["render",r]]);export{m as __pageData,u as default};
