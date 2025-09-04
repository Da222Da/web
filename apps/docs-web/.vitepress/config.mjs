import { defineConfig } from "vitepress";
import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Web 网站搭建技术",
  description: "A VitePress Site",
  base: "/",
  themeConfig: {
    sidebar: [
      { text: "如何实现 Web 思维导图？", link: "/" },
      { text: "Python Django 如何快速开发 Web 应用？", link: "/src/02" },
    ],

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
