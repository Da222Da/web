import { defineConfig } from "vitepress";
import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "石头记",
  description: "A VitePress Site",
  themeConfig: {
    sidebar: [{ text: "大清", link: "/" }],

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
