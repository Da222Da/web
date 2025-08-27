// render.js
import * as d3 from "d3";
import rough from "roughjs";
import Node from "./node.js";

export default class Render {
  constructor(data, config = {}) {
    // 基础配置
    this.config = {
      container: d3.select("body").node(), // 默认容器
      nodeWidth: 160, // 节点宽度
      nodeHeight: 80, // 节点高度
      horizontalSpacing: 20, // 水平间距
      verticalSpacing: 10, // 垂直间距
      ...config,
    };

    // 生成层级数据
    /**
     * d3.hierarchy() -> 将普通 JSON 对象转换为 D3 的 Node 对象，每个节点包含：
     * {
     *   data: {},      // 原始数据
     *   depth: 0,      // 节点深度（根节点为0）
     *   height: 3,     // 节点到最远叶子的层级差
     *   parent: Node,  // 父节点引用
     *   children: []   // 子节点数组
     * }
     *
     * 总之，d3.hierarchy() 将静态嵌套结构的数据转换为动态双向链表数据结构，并且内置了遍历方法（.each()），很方便！
     *
     */
    this.root = d3.hierarchy(data);

    // 计算布局坐标
    this.calculateLayout();

    // 绘制全部节点和连接线
    this.renderNodes();
    this.renderLinks();
  }

  // 计算布局坐标
  calculateLayout() {
    // 使用 d3.tree 计算布局
    const treeLayout = d3.tree().nodeSize([this.config.nodeWidth + this.config.horizontalSpacing, this.config.nodeHeight + this.config.verticalSpacing]);

    treeLayout(this.root);

    // 将相对坐标转换为居中布局
    const rootX = this.root.x;
    const rootY = this.root.y;
    this.root.each((node) => {
      node.x = node.x - rootX + 400; // 水平居中
      node.y = node.y - rootY + 300; // 垂直居中
    });
  }

  // 渲染所有节点
  renderNodes() {
    this.root.each((node) => {
      new Node({
        container: this.config.container,
        data: { text: node.data.text },
        left: node.x,
        top: node.y,
        style: {
          width: this.config.nodeWidth,
          height: this.config.nodeHeight,
        },
      });
    });
  }

  // 渲染连接线（手绘风格）
  renderLinks() {
    const svg = d3.select(this.config.container);
    const rc = rough.svg(svg.node());

    this.root.links().forEach((link) => {
      const source = link.source;
      const target = link.target;

      // 生成手绘路径
      const path = rc.line(source.x + this.config.nodeWidth / 2, source.y + this.config.nodeHeight, target.x + this.config.nodeWidth / 2, target.y, { roughness: 1.5, stroke: "#795548" });

      svg.node().insertBefore(path, svg.node().firstChild);
    });
  }

  refreshLayout() {
    this.calculateLayout();
    this.renderNodes();
    this.renderLinks();
  }
}
