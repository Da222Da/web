1. **第⼀步，准备好项⽬⽬录**

```md
.
├── dist/*
├── package.json
├── src
│   ├── app.vue
│   └── index.js
└── webpack.config.js
```

::: details 点击查看 app.vue 代码

```vue
<template>
  <div class="demo">
    <div class="text">Count: {{ state.count }}</div>
    <button class="btn" @click="onClick">Add</button>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  count: 0,
});
const onClick = () => {
  state.count++;
};
</script>

<style>
.demo {
  width: 200px;
  padding: 10px;
  box-shadow: 0px 0px 9px #00000066;
  text-align: center;
}
.demo .text {
  font-size: 28px;
  font-weight: bolder;
  color: #666666;
}
.demo .btn {
  font-size: 20px;
  padding: 0 10px;
  height: 32px;
  min-width: 80px;
  cursor: pointer;
}
</style>

```

:::


::: details 点击查看 index.js 代码

```js
import { createApp } from "vue";
import App from "./app.vue";
const app = createApp(App);
app.mount("#app");

```

:::

::: details 点击查看 webpack.config.js 代码

```js
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: path.join(__dirname, "src/index.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  externals: {
    vue: "window.Vue",
  },
};


```

:::

2. **第⼆步，安装依赖的 npm 模块**

```bash
npm i --save vue
npm i --save-dev css-loader mini-css-extract-plugin vue-loader webpack webpack-cli
```

3. **第三步，配置编译脚本**

运行指令`npm init -y`, 初始化 `package.json` 配置文件：

```json
{
 "scripts": {
  "build": "webpack -c ./webpack.config.js"
 }
}
```

运行打包指令`npm run build`, 打包生成的文件在 `dist/index.js` 和 `dist/index.css`。

4. **第四步，处理 Webpack 开发模式**

- a. 安装 Webpack 开发服务的依赖模块 `npm i --save-dev webpack-dev-server`
- b. 配置 sourceMap，方便调试源代码 `devtool: "inline-cheap-module-source-map"`
- c. 配置 webpack-dev-server 服务的访问⻚⾯ `npm i --save-dev html-webpack-plugin`

::: details 点击查看 webpack.config.js 代码

```js
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: path.join(__dirname, "src/index.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      title: "Hello Vue",
      filename: "index.html",
      template: "./index.html",
      minify: false,
      inject: false,
      templateParameters: {
        publicPath: path.join(__dirname),
        js: ["./node_modules/vue/dist/vue.runtime.global.js", "./index.js"],
        css: ["./index.css"],
      },
    }),
  ],
  externals: {
    vue: "window.Vue",
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 6001,
    hot: false,
  },
  devtool: "inline-cheap-module-source-map",
};
```

:::

::: details 点击查看 index.html 模板文件

```js
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0" />
    <link rel="stylesheet" href="<%=htmlWebpackPlugin.options.templateParameters.css[0] %>" />
    <script src="<%= htmlWebpackPlugin.options.templateParameters.js[0] %>"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
  <script src="<%= htmlWebpackPlugin.options.templateParameters.js[1] %>"></script>
</html>

```

:::

5. **第五步，处理 Webpack ⽣产模式**

⽣产模式最重要的是**代码编译完后要进⾏压缩处理，减少体积**。这⾥我们就需要压缩 JavaScript 和 CSS 的结果代码。

安装依赖模块：`npm i --save-dev css-minimizer-webpack-plugin terser-webpack-plugin`

然后，再进⾏ webpack.config.js ⽂件的配置：

```js
{
 // 其它 Webpack配置代码
 optimization: {
 minimizer: [
    new TerserPlugin({}),
    new CssMinimizerPlugin({}),
  ],
 },
 // 其它 Webpack配置代码
}
```

6. **第六步，合并配置项**

⽣产模式和开发模式有很多配置是重叠的，这个时候就需要⽤到我们刚刚提到的 Node.js 进程环境变量来做区分判断处理，同时可以加上⼀个 webpack-merge 来辅助处理配置的合并。

- a. 安装环境变量设置依赖`npm install --save-dev cross-env`，并设置环境变量：

```json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack serve -c ./webpack.config.js",
    "build": "cross-env NODE_ENV=production webpack -c ./webpack.config.js"
  },
}
```

- b. 安装配置合并依赖`npm install --save-dev webpack-merge`，并设置配置文件：

::: details 点击查看 webpack.config.js 代码

```js
const path = require("path");
const webpackMerge = require("webpack-merge").default;
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const baseConfig = {
  mode: process.env.NODE_ENV,
  entry: {
    index: path.join(__dirname, "src/index.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  externals: {
    vue: "window.Vue",
  },
};
if (process.env.NODE_ENV === "development") {
  config = webpackMerge(baseConfig, {
    devtool: "inline-cheap-module-source-map",
    devServer: {
      static: {
        directory: path.join(__dirname),
      },
      port: 6001,
      hot: false,
      compress: false,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Hello Vue",
        filename: "index.html",
        template: "./index.html",
        minify: false,
        inject: false,
        templateParameters: {
          publicPath: path.join(__dirname),
          js: ["./node_modules/vue/dist/vue.runtime.global.js", "./index.js"],
          css: ["./index.css"],
        },
      }),
    ],
  });
} else {
  config = webpackMerge(baseConfig, {
    optimization: {
      minimizer: [new TerserPlugin({}), new CssMinimizerPlugin({})],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Hello Vue",
        filename: "index.html",
        template: "./index.html",
        minify: false,
        inject: false,
        templateParameters: {
          publicPath: path.join(__dirname),
          js: ["https://unpkg.com/vue@3.2.37/dist/vue.runtime.global.js", "./index.js"],
          css: ["./index.css"],
        },
      }),
    ],
  });
}
module.exports = config;
```

:::