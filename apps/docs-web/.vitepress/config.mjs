import { defineConfig } from "vitepress";
import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Web 互联网",
  description: "A VitePress Site",
  base: "/",
  themeConfig: {
    sidebar: [{ text: "D3 图形库", link: "/" }],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
  vite: {
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "../../src"), // 指向项目根目录的 src 文件夹
        },
        {
          find: "@assets",
          replacement: path.resolve(__dirname, "../../public/assets"),
        },
      ],
    },
  },
});
