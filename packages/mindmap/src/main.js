// main.js
import * as d3 from "d3";
import Render from "./render.js";

// 获取视口尺寸
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

// 创建画布容器
const svg = d3.select("body").append("svg").attr("width", "100%").attr("height", "100%").attr("viewBox", `0 0 ${viewportWidth} ${viewportHeight}`).attr("preserveAspectRatio", "xMidYMid meet");

// 定义数据结构
const data = {
  text: "中心主题",
  children: [
    {
      text: "主分支1",
      children: [{ text: "子节点1-1" }, { text: "子节点1-2" }],
    },
    {
      text: "主分支2",
      children: [{ text: "子节点2-1" }, { text: "子节点2-2" }],
    },
  ],
};

// 渲染脑图
new Render(data, {
  container: svg.node(),
  nodeWidth: 180,
  nodeHeight: 60,
});
