import { select } from "d3";

// 基类：负责容器管理
export default class ChartBase {
  constructor(containerId, options) {
    this.containerId = containerId || "d3-chart";
    this.options = {
      width: 500,
      height: 500,
      ...options?.base,
    };
    this.svg = null;
  }

  init() {
    // 创建 SVG 容器
    this.svg = select(`#${this.containerId}`).append("svg").attr("width", this.options.width).attr("height", this.options.height);
    return this;
  }

  // 抽象方法（需子类实现）
  addElement() {
    throw new Error("必须实现 addElement 方法");
  }

  // 通用销毁方法
  destroy() {
    this.svg?.remove();
    this.svg = null;
  }
}
