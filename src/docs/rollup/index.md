# Rollup 构建工具

rollup 是一个简洁的 JavaScript 模块打包器，常用于构建 JavaScript 代码库。

## 思维导图

<ElMindmap :data="data" height="750"  offsetLeft="20" />

<script setup>
import {  ref } from "vue";
const data = ref({
	data: {
		text: "Rollup",
	},                                
	children: [
        {
			data: { text: "input 入口", note: "声明了Rollup要执⾏打包构建编译时候从哪个⽂件开始编译的“⼊⼝⽂件”。" },
		},
        {
			data: { text: "output 出口", note: "声明Rollup编译的出⼝⽂件，也就是编译结果要放在哪个⽬录下的哪个⽂件⾥，这⾥我就对应地把出⼝⽬录配置在 dist⽂件夹⾥。" },
            children: [
                {
                    data: { text: "file 输出路径", note: "指定输出文件的路径和名称" },
                },
                {
                    data: { text: "format 输出格式", note: "指定输出代码的格式，例如amd、cjs、esm、iife、umd等" },
                },
                {
                    data: { text: "name 模块名称", note: "当format为iife或umd时，需要指定一个全局变量名，该变量名将作为模块的名称" },
                },
                {
                    data: { text: "globals 依赖别名", note: "指定外部依赖的名称，例如{ jquery: '$' }表示jquery模块的名称为$" },
                }, 
                {
                    data: { text: "模块预设" }, 
                    children: [
                        {
                            data: { text: "preserveModules 模块预设", note: "当设置为 true 时，这个选项会指示 Rollup 在打包过程中保留模块的原始结构，而不是将它们合并到一个单独的文件中。这对于需要按需加载模块或希望保持模块间清晰边界的项目非常有用。" },
                        },
                        {
                            data: { text: "preserveModulesRoot 模块预设根路径", note: "当 preserveModules 设置为 true 时，Rollup 会根据这个根目录来组织输出文件的结构" },
                        },
                    ]

                }
                
            ]
		},
        {
			data: { text: "plugins 插件", note: "这个是 Rollup 的插件配置，主要是贯穿 Rollup 的整个打包的⽣命周期。" },
            children: [
                {
                    data: { text: "@rollup/plugin-node-resolve", note: "它使用 Node 解析算法来定位模块，以便在 node_modules 中使用第三方模块" },
                },
                {
                    data: { text: "@rollup/plugin-commonjs", note: "由于node_modules文件夹中的大多数包可能是遗留的CommonJS而不是JavaScript模块，因此您可能需要使用 @rollup/plugin-commonjs" },
                },
                {
                    data: { text: "rollup-plugin-vue", note: "解析 .vue 单⽂件" },
                },
                {   
                    data: { text: "rollup-plugin-postcss", note: "⽤于将 Vue.js 项⽬源码的 CSS 内容分离出独⽴ CSS ⽂件" },
                },
                {   
                    data: { text: "babel", note: "⽤于将 ES6+ 语法的代码转码为 ES5 语法，以便在低版本浏览器中运⾏" },
                    children: [
                        {  data: { text: "@babel/core", note: "babel 的核⼼库" }, },
                        {  data: { text: "@babel/preset-env", note: "babel 的预设，⽤于将 ES6+ 语法的代码转码为 ES5 语法" }, },
                        {  data: { text: "@rollup/plugin-babel", note: "桥接 rollup 和 babel 之间的插件" }, },
                    ]

                },
                {   
                    data: { text: "@rollup/plugin-html", note: "⽤来管理项⽬的HTML⻚⾯⽂件" },
                },
                {   
                    data: { text: "rollup-plugin-serve", note: "⽤于 Rollup 项⽬开发模式的 HTTP 服务" },
                },
            ]
		},
        {
			data: { text: "external 外部依赖", note: "声明 Rollup 在打包时需要排除的依赖模块，这些模块将不会被包含在打包结果中" },
		},
	],
})
</script>

## 思考过程

### 如何搭建 Vue3 项⽬?

<!--@include: ./contents/build-vue3.md-->

### 如何搭建 Vue3 组件库?

<!--@include: ./contents/build-vue3-components.md-->
