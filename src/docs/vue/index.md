# VueJS 组件化框架

VueJS 是一个基于 JavaScript 的框架、用于构建**组件化**的用户界面。

如果想要查看更多信息的话，请移步 [Vue.js 官网](https://cn.vuejs.org/)。

## 思维导图

<ElMindmap :data="data" height="500"  offsetLeft="20" />

<script setup>
import {  ref } from "vue";
const data = ref({
	data: {
		text: "VueJS 框架",
	},
	children: [
		{
			data: { text: "渲染模板" },
			children: [
				{ data: { text: "模板语法"} },
				{ data: { text: "指令"} },
				{ data: { text: "修饰符"} },
			]
		},
		{ 
			data: { text: "响应式状态"},
			children: [
				{ data: { text: "ref & reactive 响应式对象"} },
				{ data: { text: "computed 计算属性 "} },
				{ data: { text: "watch & watchEffect 侦听器"} },
			]
		},
		{ 
			data: { text: "组件" },
			children: [
				{ data: { text: "注册组件" } },
				{ data: { text: "组件生命周期" } },
				{ data: { text: "组件通信" } },
				{ data: { text: "组件插槽" } },
			]
		},
	],
})
</script>

## 思考过程

### 1. 在非编译模式下，如何使用 Vue？

<!--@include: ./contents/uncompile.md-->


### 2. 在编译模式下，如何使用 Vue？

<!--@include: ./contents/compile.md-->

### 3. 如何使用 JSX 语法？

<!--@include: ./contents/jsx.md-->