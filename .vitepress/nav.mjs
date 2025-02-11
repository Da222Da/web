export default function nav() {
	return [
		{ text: "首页", link: "/" },
		{
			text: "程序设计与实现",
			items: [{ text: "ERP 管理系统开发与实现", link: "/apps/erp/" }],
		},
		{
			text: "文档支持",
			items: [
				{ text: "Vitepress", link: "https://vitepress.dev/" },
				{ text: "Vuejs", link: "https://vuejs.org/" },
				{ text: "Element-plus", link: "https://element-plus.gitee.io/zh-CN/" },
				{ text: "mind-map-docs", link: "https://wanglin2.github.io/mind-map-docs/" },
				{ text: "手绘风格图形库 rough", link: "https://github.com/rough-stuff/rough" },
				{ text: "手绘风格标记库 rough-notation", link: "https://github.com/rough-stuff/rough" },
			],
		},
	];
}
