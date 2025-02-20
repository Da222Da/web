---
layout: home
header: false
---

<ClientOnly>
  <ElMindmap :data="data" :height="height" :offsetLeft="offsetLeft" :router="router"  />
</ClientOnly>


<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vitepress";
const router = useRouter();
const commonOptions = { fillColor: '#FF6347', shape: 'rectangle', color: '#fff' }
const rectangleOptions = { borderColor: '#FF6347', borderDasharray: '5,5', borderWidth: 2, shape: 'rectangle' }
const data = ref({
	data: {
		text: "Web 互联网",
	},
	children: [
		{ 
			data: { text: "HTML 超文本标记", hyperlink: "https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Structuring_content" },
			children: [
				{ data: { text: "文档对象模型（DOM）", hyperlink: "https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction" } },
				{ data: { text: "Canvas 画布", hyperlink: "https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial" } },
				{ data: { text: "SVG：可缩放矢量图形", hyperlink: "https://developer.mozilla.org/zh-CN/docs/Web/SVG" } },
			]
	 	},
		{ data: { text: "CSS 层叠样式表", hyperlink: "https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Styling_basics" } },
		{ 
			data: { text: "JavaScript 编程语言" },
			children: [
				{ 
					data: { text: "语法约定" },
					children: [
						{ data: { text: "ECMAScript", link: `/docs/es/`, ...commonOptions } },
					]
				},
				{ 
					data: { text: "组件化" },
					children: [
						{ 
							data: { text: "VueJS 框架", link: `/docs/vue/`, ...commonOptions },
							children: [
								{ data: { text: "构建 Vue 组件库", link: `/docs/rollup/contents/build-vue3-components`, ...rectangleOptions } },
								{ data: { text: "Vue 组件编排系统", link: `/docs/vue/children/component-drag/`, ...rectangleOptions } },
							]
						},
					]
				},
				{ 
					data: { text: "工程化" },
					children: [
						{ data: { text: "Vite 构建工具", link: `/docs/vite/`, ...commonOptions }},
						{ data: { text: "Webpack 构建工具", link: `/docs/webpack/`, ...rectangleOptions } },
						{ data: { text: "Rollup 构建工具", link: `/docs/rollup/`, ...rectangleOptions } },
					]
				},
				{ 
					data: { text: "NodeJS 后端" },
					children: [
						{ data: { text: "npm 包管理器", link: `/docs/npm/`, ...commonOptions } },
					]
				},
			]
		},
	],
})
const height = computed(() => document?.documentElement.scrollHeight - 64);
const offsetLeft = computed(() => document?.documentElement.clientWidth / 4);
</script>

<style>
.VPHome {
	padding: 0 !important;
}
</style>

