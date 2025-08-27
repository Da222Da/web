# 如何实现 Web 思维导图？

## 简介

思维导图是一种表达结构性思维的有效工具。

## 技术选型

- [vite](https://vitejs.dev/) 构建工具。
- [d3](https://d3js.org/) 数据可视化库。
- [roughjs](https://roughjs.com/) 手绘风格渲染库。

## 实现过程

### 1. 如何实现思维导图的大致雏形？

> [实现参考文档](https://juejin.cn/post/6987711560521089061)

```md
|-- src
|---- main.js (入口文件)
|---- node.js (节点类，用来创建带文本的矩形节点)
```
