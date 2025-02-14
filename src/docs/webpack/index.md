# Webpack 构建工具

> webpack 的优势就是稳定性强，但是配置复杂，上手成本高。

Webpack定位是构建“打包⼯具”，⾯向的是前端代码的编译打包过程。Webpack能⼒很单⼀，就是提供⼀个打包构建的能⼒，如果有特定的构建需要，必须让开发者来选择合适的 Loader 和 Plugin 进⾏组合配置，达到最终的想要的打包效果。


## 思维导图

<ElMindmap :data="data" height="500"  offsetLeft="20" />

<script setup>
import {  ref } from "vue";
const data = ref({
	data: {
		text: "Webpack 构建工具",
	},                                
	children: [
		{
			data: { text: "mode 模式", note: "这是声明 Webpack 的打包模式是⽣产的编译模式。这⾥⼀般有两种选项，⽣产（production）和开发（development）模式。" },
		},
        {
			data: { text: "entry 入口", note: "这是声明 Webpack 要执⾏打包构建编译时候从哪个⽂件开始编译的“⼊⼝⽂件”。" },
		},
        {
			data: { text: "output 出口", note: "这是声明 Webpack 编译的出⼝⽂件，也就是编译结果要放在哪个⽬录下的哪个⽂件⾥。" },
		},
        {
			data: { text: "module.loader 加载器", note: "选择对应的 Loader 来处理指定的打包⽂件。例如, css-loader 就是为了解决项⽬⾥的 CSS 文件。" },
		},
        {
			data: { text: "module.plugins 插件", note: "这是 Webpack 的插件配置，主要是贯穿 Webpack 的整个打包的⽣命周期。" },
		},
        {
			data: { text: "externals 排除", note: "这是声明在Webpack打包编译过程中，有哪些源码依赖的npm模块需要“排除打包”处理，也就是不做打包整合处理。" },
		},
	],
})
</script>

## 思考过程

### 如何搭建 Vue.js 3项⽬?

<!--@include: ./contents/build-vue3.md-->