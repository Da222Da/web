class Render {
  // 第一次遍历渲染树
  //   walk(this.renderer.renderTree, null, (cur, parent, isRoot, layerIndex) => {
  //     // 先序遍历
  //     // 创建节点实例
  //     let newNode = new Node({
  //       data: cur,// 节点数据
  //       layerIndex// 层级
  //     })
  //     // 节点实例关联到节点数据上
  //     cur._node = newNode
  //     // 根节点
  //     if (isRoot) {
  //       this.root = newNode
  //       // 定位在画布中心位置
  //       newNode.left = (this.mindMap.width - node.width) / 2
  //       newNode.top = (this.mindMap.height - node.height) / 2
  //     } else {// 非根节点
  //       // 互相收集
  //       newNode.parent = parent._node
  //       parent._node.addChildren(newNode)
  //       // 定位到父节点右侧
  //       newNode.left = parent._node.left + parent._node.width + marginX
  //     }
  //   }, null, true, 0)
}
