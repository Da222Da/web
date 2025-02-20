# NPM 依赖管理工具

npm (Node Package Manager) 是 Node.js 的包管理工具，用于管理 JavaScript 项目的依赖。

<ElMindmap :data="data" height="450" offsetLeft="50"  />

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from 'vitepress';
const router = useRouter();
const CurrentPath = router.route.path;
const data = ref({
	data: {
		text: "NPM",
	},
	children: [
		{ 
			data: { text: "package.json" },
			children: [
				{ data: { text: "main", note: "main 是指你的包的入口文件，默认是 index.js"} },
				{ data: { text: "scripts", note: "scripts 是指你的包在安装时需要执行的脚本，例如 build、test、start 等"} },
				{ data: { text: "dependencies", note: "dependencies 是指你的包在生产环境中需要的依赖，这些依赖会被打包到你的项目中"} },
				{ data: { text: "devDependencies", note: "devDependencies 是指你的包在开发过程中需要的依赖，但是不会在打包时被包含进去"} },
				{ data: { text: "peerDependencies", note: "peerDependencies 是指你的包需要依赖的包，但是不会自动安装这些包"} },
			]
		},
		{ 
			data: { text: "第三方依赖" },
			children: [
				{ data: { text: "pnpm", note: "pnpm 是 npm 的一个替代方案，可以减少 node_modules 的体积和安装时间" } },
			],
		},
	],
})
</script>


## 思考过程

### 使用 pnpm 替代 npm?

<!--@include: ./contents/pnpm.md-->
