import * as d3 from "d3";
import Rough from "roughjs";

export default class Flow {
  constructor(container = "body", width = 400, height = 200) {
    // 初始化 Rough.js
    this.rough = Rough.svg(d3.select(container).node());

    // 创建 SVG 容器
    this.svg = d3
      .select(container)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("border", "1px solid #ddd");
  }

  rect(x, y, text, options = {}) {
    // 合并默认选项
    const config = {
      width: 120,
      height: 40,
      roughness: 1.2,
      strokeWidth: 2,
      fill: "steelblue",
      stroke: "#333",
      fontSize: "20px",
      textColor: "#000",
      ...options,
    };

    // 创建图形组
    const g = this.svg.append("g");

    // 绘制粗糙矩形
    const rc = this.rough.rectangle(x, y, config.width, config.height, {
      roughness: config.roughness,
      strokeWidth: config.strokeWidth,
      fill: config.fill,
      stroke: config.stroke,
    });

    // 添加图形
    g.append(() => rc);

    // 添加文字
    g.append("text")
      .attr("x", x + config.width / 2)
      .attr("y", y + config.height / 2)
      .style("text-anchor", "middle")
      .style("dominant-baseline", "central")
      .style("font-size", config.fontSize)
      .style("fill", config.textColor)
      .text(text);

    return {
      x,
      y,
      width: config.width,
      height: config.height,
    };
  }

  arrow(source, target, options = {}) {
    // 计算起点和终点坐标
    const start = {
      x: source.x + source.width / 2,
      y: source.y + source.height,
    };

    const end = {
      x: target.x + target.width / 2,
      y: target.y,
    };

    // 绘制连接线
    const line = this.rough.line(start.x, start.y, end.x, end.y, {
      roughness: 1.2,
      strokeWidth: 2,
      stroke: "#000",
      ...options,
    });

    // 绘制箭头头部
    const angle = Math.atan2(end.y - start.y, end.x - start.x);
    const arrowSize = 12;

    const arrowHead = this.rough.polygon(
      [
        [end.x, end.y],
        [
          end.x - arrowSize * Math.cos(angle - Math.PI / 6),
          end.y - arrowSize * Math.sin(angle - Math.PI / 6),
        ],
        [
          end.x - arrowSize * Math.cos(angle + Math.PI / 6),
          end.y - arrowSize * Math.sin(angle + Math.PI / 6),
        ],
      ],
      {
        roughness: 0.8,
        fill: "#000",
        fillStyle: "solid",
        ...options,
      }
    );

    const connection = this.svg
      .append("g")
      .append(() => line)
      .append(() => arrowHead);

    return connection;
  }
}
