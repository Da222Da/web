// 创建视窗管理器类 ViewportManager.js

export default class ViewportManager {
  constructor(svgElement, renderInstance) {
    this.svg = svgElement;
    this.render = renderInstance;
    this.resizeHandlers = new Set();
    this._init();
  }

  // 初始化监听
  _init() {
    this._debouncedResize = this._debounce(() => this._handleResize(), 300);
    window.addEventListener("resize", this._debouncedResize);
  }

  // 防抖函数
  _debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  // 响应视窗变化
  _handleResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // 更新 SVG 视口
    d3.select(this.svg).attr("viewBox", `0 0 ${width} ${height}`);

    // 触发重新布局
    this.render.refreshLayout();

    // 执行额外回调
    this.resizeHandlers.forEach((handler) => handler({ width, height }));
  }

  // 注册自定义回调
  onResize(handler) {
    this.resizeHandlers.add(handler);
    return () => this.resizeHandlers.delete(handler);
  }

  // 销毁
  destroy() {
    window.removeEventListener("resize", this._debouncedResize);
    this.resizeHandlers.clear();
  }
}
