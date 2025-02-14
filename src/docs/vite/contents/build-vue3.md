1. **第⼀步，准备好项⽬⽬录**

```md
.
├── dist
├── index.html
├── package.json
├── src
│   ├── app.vue
│   └── index.js
└── vite.config.js
```

::: details 查看 html 代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Vue</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/index.js"></script>
  </body>
</html>

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

::: details 查看 vite.config.js 代码

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "./", // 设置打包路径
  entry: "./src/index.js", // 指定新的入口文件
  plugins: [vue()],
});


```

:::

2. **第二步，安装依赖**

- `npm i --save vue`
- `npm i --save-dev vite @vitejs/plugin-vue`

::: details 查看 package.json 代码

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
}

```

:::