import { defineConfig } from "vitepress";
import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: " ",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "常见问题", link: "/questions/01" },
    ],

    sidebar: [{ text: "Javascript 系列", items: [{ text: "如何实现 Web 思维导图？", link: "/questions/01" }] }],

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
