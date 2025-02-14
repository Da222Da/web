# Javascript 工程化

Vite 是一个基于原生 ES 模块导入现代前端构建工具，构建速度会比 webpack 快一些。

想要查看更多关于 Vite 的信息，请访问 [Vite 官方文档](https://cn.vite.dev/guide/)。

## 思维导图：

<ElMindmap :data="data" height="500" offsetLeft="50" />

<script setup>
import { ref } from "vue";
const data = ref({
	data: {
		text: "Vite",
	},
	children: [
		{ data: { text: "别名 alias" }, note: "配置文件夹别名可以简化模块导入路径，提高代码的可读性和可维护性。" },
		{ data: { text: "服务器端口 port", note: "设置测试服务器的运行端口，方便在本地进行开发和调试。" } },
	],
})
</script>


## 思考过程：

### 如何构建 vue3 项目？

<!--@include: ./contents/build-vue3.md-->