# 构建 Vue3 组件库

## Graph 可视化图表

<ElMindmap :data="data" height="500" :router="router" offsetLeft="20" />

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from 'vitepress';
const router = useRouter();
const CurrentPath = router.route.path;
const data = ref({
	data: {
		text: "构建 Vue3 组件库",
	},
	children: [
		{  data: { text: "使用 monorepo 管理组件库代码", hyperlink: `${CurrentPath}#使用-monorepo-管理组件库代码` }, },
		{  data: { text: "怎么对组件库做编译设置？", hyperlink: `${CurrentPath}#怎么对组件库做编译设置` }, },
	],
})
</script>

## Details 图表详情

### 使用 monorepo 管理组件库代码

::: tip

企业级组件库通常需要划分为两类：
- 基础功能组件（Button、Dialog 等）
- 业务组件（特定业务场景使用）

为了便于管理多个组件包之间的依赖关系和调试，我们采用 monorepo 的形式来组织代码。

:::

现在，我们开始进⼊基于 pnpm 的 monorepo ⽅案的实现操作：

1. 第一步：初始化项⽬：

::: details a. 初始化项⽬的代码⽬录
```md
├── package.json
├── packages/ # 多⼦项⽬的⽬录
│   ├── business/ # 业务组件库 - ⼦项⽬⽬录
│   │   ├── package.json # 业务组件库 - ⼦项⽬package.json声明
│   │   └── src/* # 业务组件库 - ⼦项⽬源码⽬录
│   └── components/ # 基础组件库 - ⼦项⽬⽬录
│       ├── package.json # 基础组件库 - ⼦项⽬package.json声明
│       └── src/* # 基础组件库 - ⼦项⽬源码⽬录
├── scripts/*
└── pnpm-workspace.yaml
```
:::

::: details b. 初始化“基础组件库”⼦项⽬的 packages/components/package.json ⽂件：
```json
{
	"name": "@wyt/components",
	"main": "dist/cjs/index.cjs",
	"module": "dist/esm/index.mjs",
	"devDependencies": {
		"vue": "^3.3.4"
	},
	"peerDependencies": {
		"vue": "^3.3.4"
	},
}
```
:::

::: details c. 初始化“业务组件库”⼦项⽬的 packages/business/package.json ⽂件：
```json
{
	"name": "@wyt/business",
	"main": "dist/cjs/index.cjs",
	"module": "dist/esm/index.mjs",
	"devDependencies": {
		"vue": "^3.3.4"
	},
	"peerDependencies": {
		"vue": "^3.3.4"
	},
}
```
:::

2. 第二步：基于 pnpm 配置 monorepo 项⽬:

```yaml
# pnpm-workspace.yaml
packages:
  - packages/*
```

3. 第三步：安装所有⼦项⽬依赖：

```sh
npm i -g pnpm
pnpm i
```

### 怎么对组件库做编译设置