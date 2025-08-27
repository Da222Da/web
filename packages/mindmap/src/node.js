import * as d3 from "d3";
import rough from "roughjs";

// 节点类
export default class Node {
  constructor(config = {}) {
    // 基础配置
    this.text = config.data.text || "新节点";
    this.x = config.left || 0;
    this.y = config.top || 0;

    // 图形样式
    this.style = {
      width: 120, // 矩形宽度
      height: 60, // 矩形高度
      padding: 10, // 文字边距
      fill: "#fff3e0", // 填充色
      stroke: "#ff9800", // 描边色
      roughness: 1.2, // 手绘粗糙度
      bowing: 0.8, // 线条弯曲度
      fontSize: 14, // 字体大小
      ...config.style, // 允许自定义覆盖
    };

    // 创建容器
    this.group = d3
      .select(config.container || "body") // 可指定父容器
      .append("g")
      .attr("transform", `translate(${this.x}, ${this.y})`);

    this.draw();
  }
  // 绘制方法
  draw() {
    this.group.selectAll("*").remove(); // 清空旧元素

    // 用 Rough.js 绘制手绘矩形
    const rc = rough.svg(this.group.node());
    const roughRect = rc.rectangle(0, 0, this.style.width, this.style.height, {
      fill: this.style.fill,
      stroke: this.style.stroke,
      roughness: this.style.roughness,
      bowing: this.style.bowing,
    });
    this.group.node().appendChild(roughRect);

    // 用 D3 添加文字
    this.group
      .append("text")
      .text(this.text)
      .attr("x", this.style.width / 2)
      .attr("y", this.style.height / 2)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .style("font-size", `${this.style.fontSize}px`)
      .style("fill", this.style.stroke);
  }
  // 更新位置
  move(x, y) {
    this.x = x;
    this.y = y;
    this.group.attr("transform", `translate(${x}, ${y})`);
  }
}
