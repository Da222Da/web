---
layout: home
header: false
---


<ElMindmap :data="data" :height="height" :offsetLeft="offsetLeft"  />

<script setup>
import { onMounted, ref, computed } from "vue";
const commonOptions = { fillColor: '#549688', shape: 'ellipse', color: '#fff', paddingY: 5, paddingY: 10 }
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
				{ data: { text: "ES 语法约定", link: `/docs/es/`, ...commonOptions } },
				{ data: { text: "Vue 组件化", link: `/docs/vue/`, ...commonOptions } },
				{ data: { text: "工程化" },
					children: [
						{ data: { text: "npm 包管理器", link: `/docs/npm/`, ...commonOptions } },
						{ data: { text: "Vite 构建工具", link: `/docs/vite/`, ...commonOptions } },
					]
				},
			]
		},
	],
})
const height = computed(() => document.documentElement.scrollHeight - 64);
const offsetLeft = computed(() => document.documentElement.clientWidth / 4);
</script>

<style>
.VPHome {
	padding: 0 !important;
}
</style>

