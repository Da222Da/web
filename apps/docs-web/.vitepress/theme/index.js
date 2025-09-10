import DefaultTheme from "vitepress/theme";
import D3Chart from "./components/d3-chart/index.vue";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("D3Chart", D3Chart);
  },
};
