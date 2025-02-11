# ECMAScript 语法约定

ECMAScript 语法约定, 是 JavaScript 官方`W3C 国际组织`定义的语法。

如果你想了解更多信息的话，请移步 [MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript)。

<ElMindmap :data="data" height="480" :router="router" :offsetLeft="50" />

<script setup>
import {  ref } from "vue";
const data = ref({
	data: {
		text: "ECMAScript 语法约定",
	},
	children: [
		{ 
			data: { text: "数据类型 & 变量", note: "数据类型 & 变量声明 & 解构赋值 & var 变量提升 & 变量作用域 & 闭包 & 字符串运算符" },
		},
		{ 
			data: { text: "流程控制", note: "分支语句 & 循环语句 & 跳转语句" },
		},
		{ 
			data: { text: "函数", note: "声明函数 & 调用函数 & 参数 & 返回值 & 箭头函数 & 默认参数 & 函数表达式 & 函数递归 & 作用域 & 作用域链 & 立即执行函数" },
		},
		{ 
			data: { text: "面向对象", note: "声明类 & 构造器 & 实例化 & 继承 & 访问器 & 静态方法" },
		},
		{ 
			data: { text: "模块", note: "模块导入(导出) & Promise 对象 & async/await & Reflect 对象 & Set 对象 & Map 对象 & Weakset 对象 & Weakmap 对象 & Symbol 对象" },
		},
	],
})
</script>
