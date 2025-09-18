import Flow from "./flow";

// 使用示例
const flow = new Flow("body", 600, 500);

// 画矩形
const rc1 = flow.rect(200, 30, "节点 01");
const rc2 = flow.rect(200, 150, "节点 02");
const rc3 = flow.rect(200, 280, "节点 03");

// 画箭头
flow.arrow(rc1, rc2);
flow.arrow(rc2, rc3);
