# Pinia 状态管理

Pinia 是 Vue3 的官方提供的一个状态管理库。

用于管理 Vue 组件的全局通用状态，使得状态管理更加灵活和易于维护。

如果想要查看更多信息的话，请移步 [官网](https://pinia.vuejs.org/)。

## Graph 可视化图表

<ElMindmap :data="data" height="500" :router="router" offsetLeft="20" />

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from 'vitepress';
const router = useRouter();
const CurrentPath = router.route.path;
const data = ref({
	data: {
		text: "Pinia",
	},
	children: [
		{ 
			data: { text: "Stroe", note: "它承载着全局状态。它有点像一个永远存在的组件，每个组件都可以读取和写入它。" },
			children: [
				{ data: { text: "创建 pinia 实例", hyperlink: `${CurrentPath}#创建-pinia-实例` } },
				{ data: { text: "创建 store 实例", hyperlink: `${CurrentPath}#创建-store-实例` } },
				{ data: { text: "从 store 解构", hyperlink: `${CurrentPath}#从-store-解构` } },
			]
		},
		{ 
			data: { text: "State", note: "相当于组件中的 data" },
			children: [
				{ data: { text: "访问 state 属性", hyperlink: `${CurrentPath}#访问-state-属性` } },
				{ data: { text: "修改 state 属性", hyperlink: `${CurrentPath}#修改-state-属性` } },
				{ data: { text: "批量修改 state", hyperlink: `${CurrentPath}#批量修改-state-属性` } },
				{ data: { text: "侦听 state 属性的变化", hyperlink: `${CurrentPath}#侦听-state-属性的变化` } },
			]
		},
		{ data: { text: "Getter", note: "相当于组件中的 computed"} },
		{ data: { text: "Action", note: "相当于组件中的 methods" } },
	],
})
</script>

## Details 图表详情

### 创建 pinia 实例

1. 安装 Pinia `npm install pinia`
2. 在 `main.js` 中创建 Pinia 实例`根 Store`, 并将其传递给 Vue 应用。

```js
import { createApp } from "vue";
import { createPinia } from "pinia"; // 引入pinia
import App from "./App.vue";

const pinia = createPinia(); // 创建pinia实例
const app = createApp(App);

app.use(pinia); // 使用pinia实例
app.mount("#app");
```

### 创建 store 实例

1. 创建 Store 实例:

::: code-group

```js [方式 1： Setup Store 函数式]
// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
import { ref, computed } from "vue";
import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", () => {
	const count = ref(0);
	const doubleCount = computed(() => count.value * 2);
	function increment() {
		count.value++;
	}

	return { count, doubleCount, increment };
});
```

```js [方式 2： Option Store 选项式]
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
	state: () => ({ count: 0, name: "Eduardo" }),
	getters: {
		doubleCount: (state) => state.count * 2,
	},
	actions: {
		increment() {
			this.count++;
		},
	},
});
```

:::

2. 使用 Store 实例:

```vue
<template>
	{{ count }}
	<button @click="increment">+1</button>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "./stores/counter";
// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = useCounterStore();

// state & getters 不能直接解构，需要借助 `storeToRefs` 方法来解构
const { count } = storeToRefs(store);

// 作为 action 的 increment 可以直接解构
const { increment } = store;
</script>
```

### 从 store 解构

1. 创建 Store 实例:

```js
import { ref, computed } from "vue";
import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", () => {
	const count = ref(0);
	const doubleCount = computed(() => count.value * 2);
	function increment() {
		count.value++;
	}

	return { count, doubleCount, increment };
});
```

2. 使用 Store 实例:

```vue
<template>
	{{ count }}
	<button @click="increment">+1</button>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "./stores/counter";
// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = useCounterStore();

// state & getters 不能直接解构，需要借助 `storeToRefs` 方法来解构
const { count } = storeToRefs(store);

// 作为 action 的 increment 可以直接解构
const { increment } = store;
</script>
```

### 访问 state 属性

1. 创建 store 实例:

```js
import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
	const count = ref(0);

	return { count };
});
```

2. 在组件中访问 state:

```vue
<template>
	<!-- 在模板中进行访问 -->
	{{ store.count }}
	<button @click="increment">+1</button>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();

function increment() {
	store.count++; // 在脚本中进行访问
}
</script>
```

### 修改 state 属性

1. 创建 store 实例:

```js
import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
	const count = ref(0);

	function $increment() {
		count.value++;
	}

	return { count, $reset, $increment };
});
```

2. 在组件中访问 state:

```vue
<template>
	{{ store.count }}
	<button @click="$increment">+1</button>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
const { $increment } = store;
</script>
```

### 批量修改 state 属性

1. 创建 store 实例:

```js
import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
	const name = ref("John");
	const age = ref(0);

	return { name, age };
});
```

2. 在组件中访问 state:

```vue
<template>
	{{ store.name }}
	{{ store.age }}
	<button @click="patch">patch 批量修改</button>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
function patch() {
	store.$patch({ name: "李四", age: 18 });
}
</script>
```

### 侦听 state 属性的变化

1. 创建 store 实例:

```js
import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
	const count = ref(0);
	function $increment() {
		count.value++;
	}

	return { count, $increment };
});
```

2. 在组件中访问 state:

::: code-group

```vue [方式 1： 内置方法 $subscribe]
<template>
	{{ store.count }}
	<button @click="$increment">+1</button>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
const { $increment } = store;
store.$subscribe((mutation, state) => {
	console.log("mutation, state::: ", state.count);
});
</script>
```

```vue [方式 2： watch 方法（不推荐）]
<template>
	{{ store.count }}
	<button @click="$increment">+1</button>
</template>

<script setup>
import { watch } from "vue";
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
const { $increment } = store;

watch(
	store,
	(state) => {
		console.log("state::: ", state.count);
	},
	{ deep: true }
);
</script>
```

:::
