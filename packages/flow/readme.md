# 《流程图制作之路》

> [d3](https://d3js.org/) 数据可视化库。
>
> [roughjs](https://roughjs.com/) 手绘风格渲染库。

## 1. 使用 vite 生成开发环境

```md
npm init -y
npm i vite -D
```

```json
// package.json
{
  "name": "flow",
  "main": "index.js",
  "scripts": {
    "dev": "vite"
  }
}
```

```js
// main.js
console.log("hello vite");
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flow</title>
  </head>
  <body></body>
  <script type="module" src="./src/main.js"></script>
</html>
```

## 2. 使用 d3 绘制矩形

```md
npm i d3
```

```js
// src/main.js
import \* as d3 from 'd3';

// 创建 SVG 容器
const width = 400;
const height = 200;
const svg = d3.select('body')
.append('svg')
.attr('width', width)
.attr('height', height)
.style('border', '1px solid #ddd');

// 绘制矩形
svg.append('rect')
.attr('x', 50)
.attr('y', 30)
.attr('width', 120)
.attr('height', 80)
.attr('fill', 'steelblue')
.attr('stroke', '#333')
.attr('stroke-width', 2);
```

## 3. 使用 roughjs 绘制手绘风格矩形

```
npm i roughjs
```

```js
// src/main.js
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

// 绘制手绘风格矩形
const rc = rough.rectangle(50, 30, 120, 80, {
  roughness: 1.2, // 粗糙度 (0-2)
  strokeWidth: 2, // 线宽
  fill: "steelblue", // 填充色
  stroke: "#333", // 边框色
});

// 将 Rough.js 生成的元素添加到 SVG
svg.node().appendChild(rc);
```

## 4. 创建图形组，绘制带文字的矩形

```js
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
  rectHeight = 60;
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
  .text("Center Text");
```

## 5. 封装流程类 Flow，绘制多个文字矩形

```js
// src/flow.js
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

    return g; // 返回图形组便于后续操作
  }
}
```

```js
// src/main.js
import Flow from "./flow";

// 使用示例
const flow = new Flow("body", 600, 500);
flow.rect(200, 30, "节点 01");
flow.rect(200, 150, "节点 02");
flow.rect(200, 280, "节点 03");
```

## 6. 绘制箭头，链接矩形

```js
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
```
