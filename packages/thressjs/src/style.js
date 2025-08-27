export default class Style {
  // 这里的root不是根节点，而是代表非节点的样式
  merge(prop, root) {
    // 三级及以下节点的样式
    let defaultConfig = this.themeConfig.node;
    if (root) {
      // 非节点的样式
      defaultConfig = this.themeConfig;
    } else if (this.ctx.layerIndex === 0) {
      // 根节点
      defaultConfig = this.themeConfig.root;
    } else if (this.ctx.layerIndex === 1) {
      // 二级节点
      defaultConfig = this.themeConfig.second;
    }
    // 激活状态
    if (this.ctx.nodeData.data.isActive) {
      // 如果节点有单独设置了样式，那么优先使用节点的
      if (this.ctx.nodeData.data.activeStyle && this.ctx.nodeData.data.activeStyle[prop] !== undefined) {
        return this.ctx.nodeData.data.activeStyle[prop];
      } else if (defaultConfig.active && defaultConfig.active[prop]) {
        // 否则使用主题默认的
        return defaultConfig.active[prop];
      }
    }
    // 优先使用节点本身的样式
    return this.ctx.nodeData.data[prop] !== undefined ? this.ctx.nodeData.data[prop] : defaultConfig[prop];
  }

  // 给文本节点设置样式
  text(node) {
    node
      .fill({
        color: this.merge("color"),
      })
      .css({
        "font-family": this.merge("fontFamily"),
        "font-size": this.merge("fontSize"),
        "font-weight": this.merge("fontWeight"),
        "font-style": this.merge("fontStyle"),
        "text-decoration": this.merge("textDecoration"),
      });
  }
}
