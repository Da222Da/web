# Javascript 工程化

Vite 是一个基于原生 ES 模块导入现代前端构建工具，构建速度会比 webpack 快一些。

想要查看更多关于 Vite 的信息，请访问 [Vite 官方文档](https://vitejs.dev/)。

## 思维导图：

<ElMindmap :data="data" height="500" offsetLeft="50" />

<script setup>
import { ref } from "vue";
const data = ref({
	data: {
		text: "Vite",
	},
	children: [
		{ 
			data: { text: "常见配置 Config" },
			children: [
				{ data: { text: "别名 alias" } },
				{ data: { text: "服务器端口 port" } },
			]
		},
		{ data: { text: "构建开发环境 Build", } },
	],
})
</script>


## 学习过程：

### 1. 如何给项目文件夹配置别名?

在使用 Vite 构建项目时，配置文件夹别名可以简化模块导入路径，提高代码的可读性和可维护性。

```js
// vite.config.js 或 vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"; // 如果你使用的是 Vue        

export default defineConfig({
	plugins: [vue()], // 如果你使用的是 Vue，需要添加这个插件
	resolve: {
		alias: {
			"@": "/src", // 将 '@' 别名映射到 'src' 目录
			"@components": "/src/components", // 将 '@components' 别名映射到 'src/components' 目录
			// 你可以根据需要添加更多的别名配置
		},
	},
});
```

### 2. 如何设置测试服务器的端口?

```js
// vite.config.js 或 vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
	server: {
		port: 3000, // 将服务器运行在 3000 端口上
	},
});
```
