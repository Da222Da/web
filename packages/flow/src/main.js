import * as d3 from "d3";
import Rough from "roughjs";

// 初始化 Rough.js
const rough = Rough.svg(d3.select("body").node());

// 创建 SVG 容器
const width = 400;
const height = 200;
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .style("border", "1px solid #ddd");

// 创建图形组
const g = svg.append("g");

// 绘制矩形
const rectX = 50,
  rectY = 30;
const rectWidth = 120,
  rectHeight = 40;
const rc = rough.rectangle(rectX, rectY, rectWidth, rectHeight, {
  roughness: 1.2, // 粗糙度 (0-2)
  strokeWidth: 2, // 线宽
  fill: "steelblue", // 填充色
  stroke: "#333", // 边框色
});

// 添加文字
g.append(() => rc);
g.append("text")
  .attr("x", rectX + rectWidth / 2) // 水平居中
  .attr("y", rectY + rectHeight / 2) // 垂直居中
  .style("text-anchor", "middle") // 水平对齐方式
  .style("dominant-baseline", "central") // 垂直对齐方式
  .style("font-size", "20px")
  .style("fill", "000")
  .text("文本内容1");
