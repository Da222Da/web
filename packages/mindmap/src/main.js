// main.js
import { SVG } from "@svgdotjs/svg.js";
import Node from "./node.js"; // 导入 Node 类

// 创建画布
const draw = SVG().addTo("body").size(300, 300);

// 创建根节点
const rootNode = new Node({
  data: { text: "中心主题" },
  draw: draw,
  left: 150,
  top: 150,
});
