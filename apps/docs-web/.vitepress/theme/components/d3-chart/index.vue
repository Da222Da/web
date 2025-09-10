<template>
  <div id="chart-container"></div>
</template>

<script setup>
import { onMounted } from "vue";
import MultiShapeChart from "./chart";

onMounted(() => {
  // 初始化图表
  const chart = new MultiShapeChart("chart-container", {
    base: { width: 600, height: 400 },
  }).init();

  // 添加圆形
  chart.addShape("circle", {
    cx: 100,
    cy: 100,
    r: 50,
    fill: "blue",
  });

  // 添加矩形
  chart.addShape("rect", {
    x: 200,
    y: 150,
    width: 100,
    height: 60,
    fill: "green",
  });

  // 添加三角形
  chart.addShape("triangle", {
    x: 400,
    y: 100,
    size: 40,
    fill: "red",
  });
});
</script>
