import{a1 as t,h as c,A as r,o as E,c as i,k as a,a as l,E as y,l as u,O as d}from"./chunks/framework.107aba48.js";const g=JSON.parse('{"title":"构建 Vue3 组件库","description":"","frontmatter":{},"headers":[],"relativePath":"docs/vue/contents/vue3-component.md","filePath":"docs/vue/contents/vue3-component.md"}'),q={name:"docs/vue/contents/vue3-component.md"},k=Object.assign(q,{setup(m){const n=t(),p=n.route.path,o=c({data:{text:"构建 Vue3 组件库"},children:[{data:{text:"使用 monorepo 管理组件库代码",hyperlink:`${p}#使用-monorepo-管理组件库代码`}},{data:{text:"怎么对组件库做编译设置？",hyperlink:`${p}#怎么对组件库做编译设置`}}]});return(F,s)=>{const e=r("ElMindmap");return E(),i("div",null,[s[0]||(s[0]=a("h1",{id:"构建-vue3-组件库",tabindex:"-1"},[l("构建 Vue3 组件库 "),a("a",{class:"header-anchor",href:"#构建-vue3-组件库","aria-label":'Permalink to "构建 Vue3 组件库"'},"​")],-1)),s[1]||(s[1]=a("h2",{id:"graph-可视化图表",tabindex:"-1"},[l("Graph 可视化图表 "),a("a",{class:"header-anchor",href:"#graph-可视化图表","aria-label":'Permalink to "Graph 可视化图表"'},"​")],-1)),y(e,{data:o.value,height:"500",router:u(n),offsetLeft:"20"},null,8,["data","router"]),s[2]||(s[2]=d(`<h2 id="details-图表详情" tabindex="-1">Details 图表详情 <a class="header-anchor" href="#details-图表详情" aria-label="Permalink to &quot;Details 图表详情&quot;">​</a></h2><h3 id="使用-monorepo-管理组件库代码" tabindex="-1">使用 monorepo 管理组件库代码 <a class="header-anchor" href="#使用-monorepo-管理组件库代码" aria-label="Permalink to &quot;使用 monorepo 管理组件库代码&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>企业级组件库通常需要划分为两类：</p><ul><li>基础功能组件（Button、Dialog 等）</li><li>业务组件（特定业务场景使用）</li></ul><p>为了便于管理多个组件包之间的依赖关系和调试，我们采用 monorepo 的形式来组织代码。</p></div><p>现在，我们开始进⼊基于 pnpm 的 monorepo ⽅案的实现操作：</p><ol><li>第一步：初始化项⽬：</li></ol><details class="details custom-block"><summary>a. 初始化项⽬的代码⽬录</summary><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">├── package.json</span></span>
<span class="line"><span style="color:#E1E4E8;">├── packages/ # 多⼦项⽬的⽬录</span></span>
<span class="line"><span style="color:#E1E4E8;">│   ├── business/ # 业务组件库 - ⼦项⽬⽬录</span></span>
<span class="line"><span style="color:#E1E4E8;">│   │   ├── package.json # 业务组件库 - ⼦项⽬package.json声明</span></span>
<span class="line"><span style="color:#E1E4E8;">│   │   └── src/* # 业务组件库 - ⼦项⽬源码⽬录</span></span>
<span class="line"><span style="color:#E1E4E8;">│   └── components/ # 基础组件库 - ⼦项⽬⽬录</span></span>
<span class="line"><span style="color:#E1E4E8;">│       ├── package.json # 基础组件库 - ⼦项⽬package.json声明</span></span>
<span class="line"><span style="color:#E1E4E8;">│       └── src/* # 基础组件库 - ⼦项⽬源码⽬录</span></span>
<span class="line"><span style="color:#E1E4E8;">├── scripts/*</span></span>
<span class="line"><span style="color:#E1E4E8;">└── pnpm-workspace.yaml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">├── package.json</span></span>
<span class="line"><span style="color:#24292E;">├── packages/ # 多⼦项⽬的⽬录</span></span>
<span class="line"><span style="color:#24292E;">│   ├── business/ # 业务组件库 - ⼦项⽬⽬录</span></span>
<span class="line"><span style="color:#24292E;">│   │   ├── package.json # 业务组件库 - ⼦项⽬package.json声明</span></span>
<span class="line"><span style="color:#24292E;">│   │   └── src/* # 业务组件库 - ⼦项⽬源码⽬录</span></span>
<span class="line"><span style="color:#24292E;">│   └── components/ # 基础组件库 - ⼦项⽬⽬录</span></span>
<span class="line"><span style="color:#24292E;">│       ├── package.json # 基础组件库 - ⼦项⽬package.json声明</span></span>
<span class="line"><span style="color:#24292E;">│       └── src/* # 基础组件库 - ⼦项⽬源码⽬录</span></span>
<span class="line"><span style="color:#24292E;">├── scripts/*</span></span>
<span class="line"><span style="color:#24292E;">└── pnpm-workspace.yaml</span></span></code></pre></div></details><details class="details custom-block"><summary>b. 初始化“基础组件库”⼦项⽬的 packages/components/package.json ⽂件：</summary><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;@wyt/components&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;main&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;dist/cjs/index.cjs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;module&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;dist/esm/index.mjs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;devDependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^3.3.4&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;peerDependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^3.3.4&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;@wyt/components&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;main&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;dist/cjs/index.cjs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;module&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;dist/esm/index.mjs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;devDependencies&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;vue&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;^3.3.4&quot;</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;peerDependencies&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;vue&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;^3.3.4&quot;</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>c. 初始化“业务组件库”⼦项⽬的 packages/business/package.json ⽂件：</summary><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;@wyt/business&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;main&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;dist/cjs/index.cjs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;module&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;dist/esm/index.mjs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;devDependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^3.3.4&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;peerDependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^3.3.4&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;@wyt/business&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;main&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;dist/cjs/index.cjs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;module&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;dist/esm/index.mjs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;devDependencies&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;vue&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;^3.3.4&quot;</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;peerDependencies&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;vue&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;^3.3.4&quot;</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details><ol start="2"><li>第二步：基于 pnpm 配置 monorepo 项⽬:</li></ol><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># pnpm-workspace.yaml</span></span>
<span class="line"><span style="color:#85E89D;">packages</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">packages/*</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># pnpm-workspace.yaml</span></span>
<span class="line"><span style="color:#22863A;">packages</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">packages/*</span></span></code></pre></div><ol start="3"><li>第三步：安装所有⼦项⽬依赖：</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pnpm</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pnpm</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span></span></code></pre></div><h3 id="怎么对组件库做编译设置" tabindex="-1">怎么对组件库做编译设置 <a class="header-anchor" href="#怎么对组件库做编译设置" aria-label="Permalink to &quot;怎么对组件库做编译设置&quot;">​</a></h3>`,13))])}}});export{g as __pageData,k as default};
