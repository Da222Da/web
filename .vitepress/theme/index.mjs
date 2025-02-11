import DefaultTheme from "vitepress/theme";

// import "simple-mind-map/dist/simpleMindMap.esm.min.css";

export default {
	...DefaultTheme,
	async enhanceApp({ app }) {
		console.log("import.meta.env.SSR::: ", import.meta.env.SSR);
		if (!import.meta.env.SSR) {
			await import("vitepress-vue3-components/dist/style.css");
			const plugin = await import("vitepress-vue3-components");
			app.use(plugin.default);
			// const Mindmap = await import("./components/Mindmap.vue");
			// app.component("ElMindmap", Mindmap.default);
		}
	},
};
