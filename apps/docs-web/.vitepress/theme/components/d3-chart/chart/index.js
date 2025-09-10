import ChartBase from "./base";

class MultiShapeChart extends ChartBase {
  constructor(containerId, options) {
    super(containerId, options);
    this.shapes = new Map(); // 存储所有图形对象
    this.nextShapeId = 1; // 图形唯一标识生成器
  }

  // 图形工厂（可扩展）
  shapeFactories = {
    circle: (config) => ({
      draw: (group) => group.append("circle").attr("cx", config.cx).attr("cy", config.cy).attr("r", config.r).style("fill", config.fill),
    }),
    rect: (config) => ({
      draw: (group) => group.append("rect").attr("x", config.x).attr("y", config.y).attr("width", config.width).attr("height", config.height).style("fill", config.fill),
    }),
    triangle: (config) => ({
      draw: (group) => {
        const path = `M ${config.x},${config.y} 
          L ${config.x + config.size},${config.y + config.size} 
          L ${config.x - config.size},${config.y + config.size} Z`;
        return group.append("path").attr("d", path).style("fill", config.fill);
      },
    }),
  };

  // 添加图形（参数示例）
  addShape(type, config) {
    const shapeId = `shape-${this.nextShapeId++}`;
    const group = this.svg.append("g").attr("id", shapeId);

    const factory = this.shapeFactories[type];
    if (!factory) throw new Error(`Unsupported shape type: ${type}`);

    const shape = factory(config).draw(group);
    this.shapes.set(shapeId, { group, shape, type, config });
    return shapeId;
  }

  // 更新图形（支持链式调用）
  updateShape(shapeId, newConfig) {
    const entry = this.shapes.get(shapeId);
    if (!entry) return this;

    // 销毁旧图形
    entry.shape.remove();

    // 重新绘制新图形
    entry.shape = this.shapeFactories[entry.type](newConfig).draw(entry.group);

    // 更新存储配置
    entry.config = { ...entry.config, ...newConfig };
    return this;
  }

  // 删除单个图形
  removeShape(shapeId) {
    const entry = this.shapes.get(shapeId);
    if (entry) {
      entry.group.remove();
      this.shapes.delete(shapeId);
    }
    return this;
  }
}

export { ChartBase, MultiShapeChart as default };
