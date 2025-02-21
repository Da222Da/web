import{_ as n,o as a,c as l,O as p}from"./chunks/framework.107aba48.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/vite/contents/create-server.md","filePath":"docs/vite/contents/create-server.md"}'),o={name:"docs/vite/contents/create-server.md"};function e(t,s,c,r,E,i){return a(),l("div",null,s[0]||(s[0]=[p(`<blockquote><p>Target: 自定义本地开发服务器，用于在开发组件库时，快速搭建本地开发环境。</p></blockquote><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">├── scripts</span></span>
<span class="line"><span style="color:#E1E4E8;">│   └── dev.js</span></span>
<span class="line"><span style="color:#E1E4E8;">├── src</span></span>
<span class="line"><span style="color:#E1E4E8;">│   └── index.html</span></span>
<span class="line"><span style="color:#E1E4E8;">└── package.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">├── scripts</span></span>
<span class="line"><span style="color:#24292E;">│   └── dev.js</span></span>
<span class="line"><span style="color:#24292E;">├── src</span></span>
<span class="line"><span style="color:#24292E;">│   └── index.html</span></span>
<span class="line"><span style="color:#24292E;">└── package.json</span></span></code></pre></div><ol><li>首先，初始好模板内容<code>src/index.html</code>:</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;Hello Vite!!!!!&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;Hello Vite!!!!!&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><ol start="2"><li>然后，定义<code>scripts/dev.js</code>:</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createServer } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vite&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createServer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 任何合法的用户配置选项，加上 \`mode\` 和 \`configFile\`</span></span>
<span class="line"><span style="color:#E1E4E8;">    configFile: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 指明要使用的配置文件。如果没有设置，Vite 将尝试从项目根目录自动解析。设置为 false 可以禁用自动解析功能。</span></span>
<span class="line"><span style="color:#E1E4E8;">    root: </span><span style="color:#9ECBFF;">&quot;./src&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 由于 createServer 无法指定 template</span></span>
<span class="line"><span style="color:#E1E4E8;">    server: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      port: </span><span style="color:#79B8FF;">8080</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      open: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> server.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  server.</span><span style="color:#B392F0;">printUrls</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 打印</span></span>
<span class="line"><span style="color:#E1E4E8;">})();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createServer } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vite&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">server</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createServer</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 任何合法的用户配置选项，加上 \`mode\` 和 \`configFile\`</span></span>
<span class="line"><span style="color:#24292E;">    configFile: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 指明要使用的配置文件。如果没有设置，Vite 将尝试从项目根目录自动解析。设置为 false 可以禁用自动解析功能。</span></span>
<span class="line"><span style="color:#24292E;">    root: </span><span style="color:#032F62;">&quot;./src&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 由于 createServer 无法指定 template</span></span>
<span class="line"><span style="color:#24292E;">    server: {</span></span>
<span class="line"><span style="color:#24292E;">      port: </span><span style="color:#005CC5;">8080</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      open: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> server.</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  server.</span><span style="color:#6F42C1;">printUrls</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 打印</span></span>
<span class="line"><span style="color:#24292E;">})();</span></span></code></pre></div><ol start="3"><li><p>接着，安装依赖: <code>pnpm i vite vite-node -D</code>。</p></li><li><p>然后，在<code>package.json</code>中添加启动脚本:</p></li></ol><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;dev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vite-node ./scripts/dev.js&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;devDependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;vite&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^6.1.1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;vite-node&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^3.0.6&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;scripts&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;dev&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vite-node ./scripts/dev.js&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;devDependencies&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;vite&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;^6.1.1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;vite-node&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;^3.0.6&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><ol start="5"><li>最后，运行<code>npm run dev</code>，即可启动本地开发服务器。</li></ol>`,9)]))}const u=n(o,[["render",e]]);export{d as __pageData,u as default};
