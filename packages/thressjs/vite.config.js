import { defineConfig } from "vite";

export default defineConfig({
  // 静态资源路径处理
  base: "./",

  build: {
    // 输出目录（默认 dist）
    outDir: "dist",

    // 资源内联阈值（小于此大小的文件转为 base64）
    assetsInlineLimit: 4096,
  },
});
