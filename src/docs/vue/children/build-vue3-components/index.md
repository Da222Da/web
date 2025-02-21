# 构建 Vue3 组件库

> Target: 使用 rollup 打包 Vue3 组件库

#### 1. Rollup 处理 JS 文件

安装 Rollup`pnpm i rollup` 并创建一个基本的配置文件。

```md
. 
├── package.json 
├── rollup.config.js 
└── src     
    └── index.js
```

```js
export default {
	input: "src/index.js",
	output: {
		file: "dist/index.esm.js",
		format: "esm",
	},
};
```

::: details package.json 示例代码

```json
{
	"scripts": {
		"build": "rollup -c"
	},
	"devDependencies": {
		"rollup": "^4.34.8"
	}
}
```

:::





::: details index.js 示例代码

```js
console.log("Hello Rollup!");
```

:::

#### 2. Rollup 处理 .vue 文件

```md
. 
├── package.json 
├── rollup.config.js 
└── src 
    |-- app.vue     
    └── index.js
```

为了处理 `.vue` 文件，我们需要使用 `rollup-plugin-vue`。

安装依赖：

```bash
pnpm i -D vue@next rollup-plugin-vue rollup-plugin-postcss
pnpm i -D @rollup/plugin-node-resolve @rollup/plugin-commonjs # 帮助 rollup 解析第三方模块
```

然后，更新你的 Rollup 配置文件和要处理的 Vue 文件：


```js
import vue from "rollup-plugin-vue";
import css from "rollup-plugin-postcss";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
	input: "src/index.js",
	output: {
		file: "dist/index.esm.js",
		format: "esm",
	},
	plugins: [vue(), css(), nodeResolve(), commonjs()],
	external: ["vue"], // 如果需要使用vue，需要将vue作为外部依赖
};
```

::: details app.vue 示例代码

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

::: details index.js 示例代码

```js
import { createApp } from "vue";
import App from "./app.vue";
const app = createApp(App);
app.mount("#app");
```

:::




#### 3. Rollup 输出 cjs 和 esm 格式

如果想要将输入结果输出为两种格式（例如，ES Module 和 CommonJS），你可以在 Rollup 配置中添加多个输出对象。

```js
import vue from "rollup-plugin-vue";
import css from "rollup-plugin-postcss";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
	input: "src/index.js",
	output: [
		{
			format: "cjs",
			dir: "dist/cjs",
			preserveModules: true,
			preserveModulesRoot: "src",
			entryFileNames: "[name].cjs",
		},
		{
			format: "esm",
			dir: "dist/esm",
			preserveModules: true,
			preserveModulesRoot: "src",
			entryFileNames: "[name].mjs",
		},
	],
	plugins: [vue(), css(), nodeResolve(), commonjs()],
	external: ["vue"], // 如果需要使用vue，需要将vue作为外部依赖
};
```

#### 4. 集成开发测试环境 (Dev Server)


<!--  -->

<!-- #### 4. 转化和压缩 -> 输出结果

你可以使用 `rollup-plugin-esbuild` 插件来压缩和转换你的代码。

然后，在你的 Rollup 配置文件中添加这个插件：

```js
import vue from "rollup-plugin-vue";
import css from "rollup-plugin-postcss";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";

export default {
  input: "src/index.js",
  output: [
    {
      format: "cjs",
      dir: "dist/cjs",
      preserveModules: true,
      preserveModulesRoot: "src",
      entryFileNames: "[name].cjs",
    },
    {
      format: "esm",
      dir: "dist/esm",
      preserveModules: true,
      preserveModulesRoot: "src",
      entryFileNames: "[name].mjs",
    },
  ],
  plugins: [
    vue(),
    css(),
    nodeResolve(),
    commonjs(),
    esbuild({
      target: "es2020", // 设置 ECMAScript 目标版本
      minify: true, // 启用代码压缩
    }),
  ],
  external: ["vue"], // 如果需要使用vue，需要将vue作为外部依赖
};
``` -->