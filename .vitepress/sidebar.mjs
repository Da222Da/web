export default function sidebar() {
	return {
		ignoreDeadLinks: true,
		"/docs/es/": {
			text: "ECMAScript 语法约定",
			collapsed: true,
			items: [
				{ text: "概述", link: "/docs/es/" },
				{ text: "数据类型 & 变量", link: "/docs/es/variables.md" },
				{ text: "流程控制", link: "/docs/es/flow.md" },
				{ text: "函数", link: "/docs/es/function.md" },
				{ text: "面向对象", link: "/docs/es/class.md" },
				{ text: "模块", link: "/docs/es/module.md" },
			],
		},
	};
}
