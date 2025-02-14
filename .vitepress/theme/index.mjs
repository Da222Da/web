import DefaultTheme from "vitepress/theme";

export default {
	...DefaultTheme,
	async enhanceApp({ app }) {
		if (!import.meta.env.SSR) {
			await import("vitepress-vue3-components/dist/style.css");
			const plugin = await import("vitepress-vue3-components");
			app.use(plugin.default);
		}
	},
};
