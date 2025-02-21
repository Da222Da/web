> Target: 自定义本地开发服务器，用于在开发组件库时，快速搭建本地开发环境。


```md
.
├── scripts
│   └── dev.js
├── src
│   └── index.html
└── package.json
```

1. 首先，初始好模板内容`src/index.html`:

```html
<p>Hello Vite!!!!!</p>
```

2. 然后，定义`scripts/dev.js`:

```js
import { createServer } from "vite";

(async () => {
  const server = await createServer({
    // 任何合法的用户配置选项，加上 `mode` 和 `configFile`
    configFile: false, // 指明要使用的配置文件。如果没有设置，Vite 将尝试从项目根目录自动解析。设置为 false 可以禁用自动解析功能。
    root: "./src", // 由于 createServer 无法指定 template
    server: {
      port: 8080,
      open: true,
    },
  });
  await server.listen();

  server.printUrls(); // 打印
})();

```
3. 接着，安装依赖: `pnpm i vite vite-node -D`。

4. 然后，在`package.json`中添加启动脚本:

```json
{
  "scripts": {
    "dev": "vite-node ./scripts/dev.js"
  },
  "devDependencies": {
    "vite": "^6.1.1",
    "vite-node": "^3.0.6"
  }
}

```

5. 最后，运行`npm run dev`，即可启动本地开发服务器。