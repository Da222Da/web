import { G, Text } from "@svgdotjs/svg.js";

// 节点类
export default class Node {
  constructor(opt = {}) {
    this.draw = opt.draw; // 画布引用
    this.nodeData = opt.data; // 节点真实数据，就是上述说的渲染树的节点
    this.isRoot = opt.isRoot; // 是否是根节点
    this.layerIndex = opt.layerIndex; // 节点层级
    this.width = 0; // 节点宽
    this.height = 0; // 节点高
    this.left = opt.left || 0; // left
    this.top = opt.top || 0; // top
    this.parent = opt.parent || null; // 父节点
    this.children = []; // 子节点

    this.group = new G(); // 创建节点容器(Group)
    this.getSize();
    this.render();
  }
  // 计算节点宽高
  getSize() {
    let textData = this.createTextNode();
    this.width = textData.width + 20; // 左右内边距各10
    this.height = textData.height + 10; // 上下内边距各5
  }
  // 创建文本节点
  createTextNode() {
    let context = this.nodeData.text; // 节点文本内容
    let fill = this.nodeData.color || "#fff"; // 文字颜色
    let fontSize = this.nodeData.fontSize || 16; // 文字大小
    let node = new Text().text(context).fill(fill).font({ size: fontSize });
    let { width, height } = node.bbox(); // 获取文本节点的宽高
    return {
      node,
      width,
      height,
    };
  }
  // 渲染节点
  render() {
    let textData = this.createTextNode();
    textData.node.x(10).y(5); // 文字节点相对于容器偏移内边距的大小
    // 创建一个矩形来作为边框
    this.group.rect(this.width, this.height).x(0).y(0);
    // 文本节点添加到节点容器里
    this.group.add(textData.node);
    // 在画布上定位该节点
    this.group.translate(this.left, this.top);
    // 容器添加到画布上
    this.draw.add(this.group);
  }
}
