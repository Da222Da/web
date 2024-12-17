// .vitepress/theme/index.js
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import AdComponent from "./AdComponent.vue";
// import Mind from "";

import "./index.css";

import { ElButton, ElTooltip } from "element-plus";
import "element-plus/dist/index.css";

// import WujieVue from "wujie-vue3";
import PageHeader from "./components/PageHeader.vue";

export default {
	...DefaultTheme,
	Layout() {
		return h(DefaultTheme.Layout, null, {
			"doc-before": () => h(AdComponent),
		});
	},
	enhanceApp({ app }) {
		console.log("app::: ", app);
		app.component("ElButton", ElButton);
		app.component("ElTooltip", ElTooltip);
		app.component("PageHeader", PageHeader);
		app.mixin({
			mounted() {
				import("./components/Mind.vue").then((module) => {
					app.component("Mind", module.default);
				});
			},
		});
	},
};
