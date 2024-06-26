import { defineConfig } from "vitepress";
import sidebarData from "./sidebar.mjs";

export default defineConfig({
  title: "基于 JS 的 Web 应用开发",
  description: "基于 JavaScript 的 Web 应用开发。",
  base: "/web/",
  srcDir: "src",
  head: [["link", { rel: "stylesheet", href: "" }]],
  themeConfig: {
    sidebar: sidebar(),
    nav: nav(),
    socialLinks: [{ icon: "github", link: "https://github.com/Da222Da/web" }],
    search: {
      provider: "local",
    },
    outline: {
      level: [2, 3],
    },
  },
});
function sidebar() {
  let obj = {};
  const data = sidebarData;
  for (let key in data) {
    if (key == "home") {
      obj["/"] = data[key];
    } else {
      obj[`/${key}/`] = data[key];
    }
  }
  return obj;
}

function nav() {
  return [
    { text: "首页", link: "/" },
    {
      text: "文档支持",
      items: [
        { text: "Vitepress", link: "https://vitepress.dev/" },
        { text: "Vuejs", link: "https://vuejs.org/" },
        { text: "Element-plus", link: "https://element-plus.gitee.io/zh-CN/" },
      ],
    },
  ];
}
