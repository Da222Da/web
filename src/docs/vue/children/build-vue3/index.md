### 如何搭建 Vue3 项⽬?

1. **第⼀步，准备好项⽬⽬录**

```md
.
├── dist/*
├── index.html
├── package.json
├── rollup.config.js
└── src
    ├── app.vue
    └── index.js
```

- 初始化项目 -> `npm init -y`
- 处理 JS 文件 -> `npm i -D rollup`
- 处理 Vue 文件 -> `npm i -D rollup-plugin-vue @rollup/plugin-node-resolve`
- 处理 CSS 文件 -> `npm i -D rollup-plugin-postcss`
- 使用 Babel 转译器 -> `npm i -D @babel/core @rollup/plugin-babel @babel/preset-env`
- 集成本地测试环境 -> `npm i -D rollup-plugin-serve @rollup/plugin-html`

::: details 查看 html 代码

```html
<html>
  <head>
    <link rel="stylesheet" href="./index.css" />
  </head>
  <body>
    <div id="app"></div>
  </body>
  <script src="https://unpkg.com/vue@3.2.37/dist/vue.runtime.global.js"></script>
  <script src="./index.js"></script>
</html>

```

:::

::: details 查看 app.vue 代码

```vue
<template>
  <div class="app">
    <div class="text">Count: {{ state.count }}</div>
    <button class="btn" @click="onClick">Add</button>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const state = reactive({
  count: 0,
});
const onClick = () => {
  state.count++;
};
</script>
<style>
.app {
  width: 200px;
  padding: 10px;
  margin: 10px auto;
  box-shadow: 0px 0px 9px #00000066;
  text-align: center;
}
.app .text {
  font-size: 28px;
  font-weight: bolder;
  color: #666666;
}
.app .btn {
  font-size: 20px;
  padding: 0 10px;
  height: 32px;
  min-width: 80px;
  cursor: pointer;
}
</style>

```

:::


::: details 查看 index.js 代码

```js

import { createApp } from "vue";
import App from "./app.vue";
document.addEventListener("DOMContentLoaded", () => {
  const app = createApp(App);
  app.mount("#app");
});

```

:::


2. **第二步，配置 rollup**

::: details 查看 rollup.config.js 代码

```js
// rollup.config.js
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import vue from "rollup-plugin-vue";
import { nodeResolve } from "@rollup/plugin-node-resolve"; // 解析 node_modules ⾥的使⽤第三⽅ npm 模块
import rollupPluginPostcss from "rollup-plugin-postcss"; // 处理 css ⽂件
import { babel } from "@rollup/plugin-babel";
import html from "@rollup/plugin-html";
import serve from "rollup-plugin-serve";

// 将 import.meta.url 转换为文件路径
const __filename = fileURLToPath(import.meta.url);

// 获取目录路径
const __dirname = path.dirname(__filename);

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "iife",
    globals: {
      vue: "Vue", // 告诉 rollup，全局变量 vue 的别名是 Vue
    },
  },
  external: ["vue"], // 告诉 rollup，不打包 vue 这个依赖模块
  plugins: [
    vue(),
    babel({
      presets: ["@babel/preset-env"],
      babelHelpers: "bundled", // 当设置为bundled时，Babel会将辅助函数（如_extends、_inherits等）打包到每个文件中。
    }),
    nodeResolve(),
    rollupPluginPostcss({ extract: true, fileName: "dist/index.css" }),
    html({
      fileName: "index.html",
      template: () => {
        const htmlFilePath = path.resolve(__dirname, "index.html");
        const html = fs.readFileSync(htmlFilePath, "utf-8");
        return html;
      },
    }),
    process.env.NODE_ENV === "development"
      ? serve({
          port: 6002,
          open: true,
          contentBase: "dist", // 指定静态资源目录，默认为当前目录
        })
      : null,
  ],
};
```

:::

3. **第三步，配置 package.json 打包指令**

- 配置环境变量 -> `npm i -D cross-env`

::: details 查看 package.json 代码

```js
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development rollup -c",
    "build": "cross-env NODE_ENV=production rollup -c"
  },
}

```

:::