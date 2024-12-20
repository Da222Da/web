<PageHeader content="如何创建一个 ts + nodejs 项目?" />

## 1. 初始化项目：

1. 初始化 Node 项目管理文件 package.json `npm init -y`
2. 添加 ts 相关依赖包 `npm i -D typescript @types/node`

::: danger Title: 为什么要安装 @types/node？

@types/node 是一个 TypeScript 声明类型文件的库，用于提供 Node.js 核心模块的类型定义。

由于`原生 nodejs`没有对 ts 类型进行支持，所以，我们需要借助 @types/node 来实现，以确保在 TypeScript 项目中使用 Node.js 的内置模块时，能够获得完整的类型检查和智能提示。

:::

3. 初始化 TS 配置文件 tsconfig.json `npx tsc --init`

   ```json
   {
     "compilerOptions": {
       "strict": true,
       "target": "es2016",
       "lib": ["es6", "dom"],
       "module": "commonjs",
       "rootDir": "src",
       "resolveJsonModule": true,
       "outDir": "lib",
       "esModuleInterop": true,
       "declaration": true
     },
     "include": ["src"]
   }
   ```

## 2. 配置实时编译环境：

1.  安装依赖 `npm i -D nodemon ts-node`

    - `nodemon` 用于监视你的代码文件的变化，并在文件发生更改时自动重启应用程序。
    - `ts-node` 允许你在 Node.js 环境下直接运行 TypeScript 文件，而无需事先将其编译成 JavaScript。

2.  修改 package.json 文件中的 scripts 字段

```json
{
  "scripts": {
    "dev": "nodemon --exec ts-node src/index.ts",
    "build": "tsc"
  }
}
```

## 3. 配置代码规范检查：

这里，我们将使用 ESLint + Prettier 用于检查代码规范，以及统一代码风格。

1.  安装依赖

    1. `npm i -D eslint`
    2. `npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin`
    3. `npm i -D prettier eslint-config-prettier eslint-plugin-prettier`

2.  在项目根目录下创建 ESLint 配置文件 `.eslintrc.js`

```js
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": [
      // 将代码风格的部分交给 prettier
      "error",
      {
        semi: true, // 在语句末尾添加分号
        singleQuote: false, // 指定双引号
      },
    ],
    "no-console": "warn", // 禁止使用 console
    "no-unused-vars": "error", // 禁止未使用的变量
  },
};
```

3.  在 package.json 中，新增 eslint 运行指令:

```json
{
  "scripts": {
    "lint": "eslint src/**",
    "lint:fix": "eslint src/** --fix"
  }
}
```

4.  在 VSCode 编辑器中，实现 ESLint 自动修复功能：
    1. 安装 ESlint 扩展插件
    2. 在工作目录下，创建 .vscode/settings.json 文件，内容如下：

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true // 代码保存时，触发自动修复
  }
}
```

## 4. 配置单元测试：

这里，我们使用 Jest 作为单元测试框架，进行单元测试。

1.  安装依赖`npm i -D jest @types/jest`
2.  在项目根目录下创建 tests/example.test.ts 文件，内容如下：

    ```ts
    test("example test", () => {
      expect(1 + 1).toBe(2);
    });
    ```

3.  在 package.json 文件中添加以下配置：

    ```json
     "scripts": {
       "test": "jest"
     }
    ```

4.  运行命令`npm test`来执行测试。
