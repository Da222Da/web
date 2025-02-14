# VueJS 组件化框架

VueJS 是一个基于 JavaScript 的框架、用于构建**组件化**的用户界面。

如果想要查看更多信息的话，请移步 [Vue.js 官网](https://cn.vuejs.org/)。

## Graph 可视化图表

<ElMindmap :data="data" height="850" :router="router" offsetLeft="20" />

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from 'vitepress';
const router = useRouter();
const CurrentPath = router.route.path;
const data = ref({
	data: {
		text: "VueJS 框架",
	},
	children: [
		{ data: { text: "渲染模板", note: "模板语法 & 指令 & 修饰符 & 插值" } },
		{ 
			data: { text: "响应式状态", note: "响应式对象 & 计算属性 & 侦听器" },
			children: [
				{ data: { text: "ref 响应式对象", hyperlink: `${CurrentPath}#ref-响应式对象`} },
				{ data: { text: "reactive 响应式对象", hyperlink: `${CurrentPath}#reactive-响应式对象`} },
				{ data: { text: "可解构的响应式对象 toRefs", hyperlink: `${CurrentPath}#可解构的响应式对象`} },
				{ data: { text: "计算属性 computed", hyperlink: `${CurrentPath}#计算属性`} },
				{ data: { text: "侦听 ref 对象属性变化", hyperlink: `${CurrentPath}#侦听-ref-对象属性变化`} },
				{ data: { text: "侦听 reactive 对象属性变化", hyperlink: `${CurrentPath}#侦听-reactive-对象属性变化`} },
			]
		},
		{ 
			data: { text: "组件", note: "注册组件 & 组件通信 & 生命周期" },
			children: [
				{ data: { text: "props 父子组件通信", hyperlink: `${CurrentPath}#props-父子组件通信` } },
				{ data: { text: "侦听 props 属性的变化", hyperlink: `${CurrentPath}#侦听-props-属性的变化` } },
				{ data: { text: "emit 自定义事件", hyperlink: `${CurrentPath}#emit-自定义事件` } },
				{ data: { text: "provide 跨组件传递数据", hyperlink: `${CurrentPath}#provide-跨组件传递数据` } },
			]
		},
		{ 
			data: { text: "逻辑复用", note: "组合式函数 & 自定义指令 & 插件" },
			children: [
				{ data: { text: "组合式函数 Hooks", hyperlink: `${CurrentPath}#组合式函数` } },
				{ data: { text: "自定义指令 CustomDirectives", hyperlink: `${CurrentPath}#自定义指令` } },
				{ data: { text: "插件 Plugins", hyperlink: `${CurrentPath}#插件` } },
			]
		},
		{ 
			data: { text: "规模化应用" },
			children: [
				{ data: { text: "路由 Router" } },
				{ data: { text: "状态管理 Pinia", hyperlink: `${CurrentPath}pinia` } },
				{ data: { text: "工程化", hyperlink: `/web/question/vite-vue3-template/` } },
			]
		},
	],
})
</script>

## Details 图表详情

### ref 响应式对象

```vue
<template>
	<div>{{ count }}</div>
</template>

<script setup>
import { ref } from "vue";

// 创建一个响应式的引用，初始值为0
const count = ref(0);

// 访问引用的值
console.log(count.value); // 输出: 0

// 修改引用的值
count.value = 1;
console.log(count.value); // 输出: 1
</script>
```

### reactive 响应式对象

```vue
<template>
	<div>
		<p>消息：{{ message.name }}</p>
		<p>消息内容：{{ message.content }}</p>
		<button @click="message.updateMessage">更新消息</button>
	</div>
</template>

<script setup>
import { reactive, computed } from "vue";

// reactive() 函数，为 Object 引用数据类型，创建一个响应式代理
const message = reactive({
	name: "Vue 3",
	content: "这是一条消息",
	updateMessage() {
		this.name = "Vue 3 已更新";
		this.content = "这是一条新的消息";
	},
});
console.log(message); // 代理对象：Proxy {name: "Vue 3", content: "这是一条消息"}
</script>
```

### 计算属性

::: danger Title：计算属性的用途

1. 简化响应式状态的复杂逻辑。
2. 缓存数据：计算属性会根据依赖的响应式状态自动更新，并缓存结果，避免不必要的计算。

:::

```vue
<template>
	<p>Has published books:</p>
	<!-- 不使用计算属性 -->
	<span>{{ author.books.length > 0 ? "Yes" : "No" }}</span>

	<!-- 使用计算属性 -->
	<span>{{ publishedBooksMessage }}</span>
</template>

<script setup>
import { reactive, computed } from "vue";

const author = reactive({
	name: "John Doe",
	books: ["Vue 2 - Advanced Guide", "Vue 3 - Basic Guide", "Vue 4 - The Mystery"],
});

// 声明方式 1：函数
const publishedBooksMessage = computed(() => {
	return author.books.length > 0 ? "Yes" : "No";
});

// 声明方式 2：对象访问器 getter/setter
// const publishedBooksMessage = computed({
// 	get() {
// 		return author.books.length;
// 	},
// 	set(newValue) {
// 		author.books.length = newValue;
// 	},
// });
</script>
```

### 侦听 ref 对象属性变化

::: tip 实现方式：watchEffect() & watch()

- 方式 1：`watchEffect()` 函数
  1. 会自动追踪响应式数据的变化，
  2. 创建侦听器的时候，会立即执行一次回调函数。
- 方式 2：`watch()` 函数
  1. 不会自动追踪，需要显式指定你要追踪响应式数据。
  2. 创建侦听器的时候，默认不会执行回调函数。

:::

::: code-group

```vue [方式 1：使用 watchEffect() 函数]
<template>
	<div>{{ count }}</div>
	<button @click="count++">Increment</button>
	<button @click="count--">Decrement</button>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const count = ref(0);
watchEffect(() => {
	// 只要将使用到的 ref 属性放到 watchEffect 的回调函数中，
	// 就能在 count 发生变化时自动触发 watchEffect 的回调函数
	console.log("watchEffect:", count.value);
});
</script>
```

```vue [方式 2：使用 watch() 函数]
<template>
	<div>{{ count }}</div>
	<button @click="count++">Increment</button>
	<button @click="count--">Decrement</button>
</template>

<script setup>
import { ref, watch } from "vue";

const count = ref(0);

watch(
	count,
	(newValue, oldValue) => {
		console.log("watch:", newValue, oldValue);
	},
	{ immediate: true } // 侦听器创建时，立即执行一次回调函数
);
</script>
```

:::

### 侦听 reactive 对象属性变化

::: tip 实现方式：watchEffect() & watch()

- 方式 1：`watchEffect()` 函数
  1. 会自动追踪响应式数据的变化，
  2. 创建侦听器的时候，会立即执行一次回调函数。
- 方式 2：`watch()` 函数
  1. 不会自动追踪，需要显式指定你要追踪响应式数据。
  2. 创建侦听器的时候，默认不会执行回调函数。

:::

::: code-group

```vue [方式 1：使用 watchEffect() 函数]
<template>
	<div>{{ person.name }}</div>
	<button @click="person.name = '李四'">Change Name</button>
</template>

<script setup>
import { ref, watchEffect, reactive } from "vue";

const person = reactive({ name: "张三" });
watchEffect(() => {
	console.log("watchEffect:", person.name);
});
</script>
```

```vue [方式 2：使用 watch() 函数]
<template>
	<div>{{ person.name }}</div>
	<button @click="person.name = '李四'">Change Name</button>
</template>

<script setup>
import { ref, watch, reactive } from "vue";

const person = reactive({ name: "张三" });
watch(
	() => person.name,
	(newValue, oldValue) => {
		console.log("newValue, oldValue::: ", newValue, oldValue);
	},
	{ immediate: true }
);
</script>
```

:::

### 可解构的响应式对象 toRefs

如果我们直接对响应式对象进行解构，那么解构后的属性将不再具有响应式特性。

这时，就需要我们使用 toRefs() 函数将响应式对象的属性转换为普通的引用对象，这个普通对象的每个属性值都会单独地调用 `toRef()` 变成响应式的 ref 类型`ObjectRefImpl`。这样解构后的属性将具有响应式特性。

```vue
<template>
	<div>
		<p>消息：{{ name }}</p>
		<p>消息内容：{{ content }}</p>
		<button @click="updateMessage">更新消息</button>
	</div>
</template>

<script setup>
import { reactive, computed, toRefs } from "vue";

const message = reactive({
	name: "Vue 3",
	content: "这是一条消息",
	updateMessage() {
		this.name = "Vue 3 已更新";
		this.content = "这是一条新的消息";
	},
});
// const { name, content, updateMessage } = message; // 使用解构赋值之后，name、content、updateMessage 都不再是响应式数据了
const { name, content, updateMessage } = toRefs(message); // 使用 toRefs 可以将响应式对象中的属性转换为单独的 ref 对象，使其保持响应性
</script>
```

### props 父子组件通信

在 Vue.js 框架中，props（属性）是一种在父组件与子组件之间传递数据的方式。它允许父组件向子组件发送数据，子组件则可以通过 props 接收并使用这些数据。

::: code-group

```vue [子组件]
<template>
	<div>{{ message }}</div>
</template>

<script setup>
import { defineProps } from "vue";

// 使用 defineProps 定义 props
const props = defineProps({
	message: {
		type: String,
		required: true,
	},
});
</script>
```

```vue [父组件]
<template>
	<div>
		<ChildComponent message="Hello from Parent!" />
	</div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
	components: {
		ChildComponent,
	},
};
</script>
```

:::

### 侦听 props 属性的变化

在 Vue 3 中，侦听组件的 props 属性变化可以通过 watch 或 watchEffect 函数来实现。不过，由于 props 是从父组件传递给子组件的，子组件不应该直接修改 props。如果需要响应 props 的变化来执行某些操作，可以使用侦听器。

1. 父组件

```vue
<template>
	<Children :count="count" />
	<button @click="count++">+1</button>
</template>

<script setup>
import { ref } from "vue";
import Children from "./components/Children.vue";
let count = ref(0);
</script>
```

2. 子组件

::: danger 注意事项

不要在子组件中，直接修改父组件的状态。

:::

::: code-group

```vue [1.watch 侦听器]
<template>
	<div>{{ derivedCount }}</div>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";

const props = defineProps({
	count: Number,
});

// 使用 ref 创建一个响应式状态来存储基于 props 的派生状态
const derivedCount = ref(props.count);

watch(
	() => props.count,
	(newValue, oldValue) => {
		derivedCount.value = newValue;
	}
);
</script>
```

```vue [2.watchEffect 侦听器]
<template>
	<div>{{ derivedCount }}</div>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";

const props = defineProps({
	count: Number,
});

// 使用 ref 创建一个响应式状态来存储基于 props 的派生状态
const derivedCount = ref(props.count);

watchEffect(() => {
	derivedCount.value = props.count;
	console.log(`Current props count: ${props.count}`);
});
</script>
```

:::

### emit 自定义事件

在 Vue.js 中，emit 方法用于触发当前组件的自定义事件，从而允许子组件与父组件进行通信。

::: code-group

```vue [子组件]
<template>
	<button @click="notifyParent">Notify Parent</button>
</template>

<script setup>
import { defineEmits } from "vue";

// 定义可以触发的自定义事件
const emit = defineEmits(["notify"]);

// 定义一个方法，当按钮被点击时调用
function notifyParent() {
	// 触发 'notify' 事件，并传递一些数据给父组件
	emit("notify", { message: "Hello from Child Component!" });
}
</script>
```

```vue [父组件]
<template>
	<div>
		<h1>Parent Component</h1>
		<ChildComponent @notify="handleNotify" />
	</div>
</template>

<script setup>
import ChildComponent from "./ChildComponent.vue";

// 定义一个方法来处理子组件触发的 'notify' 事件
function handleNotify(payload) {
	console.log("Received message from Child Component:", payload.message);
	// 可以在这里添加更多的处理逻辑
}
</script>
```

:::

### provide 跨组件传递数据

在 Vue.js 中，provide 和 inject 是两个配套的 API，用于在祖先组件中提供数据，然后在后代组件中注入这些数据。这种机制允许您在不通过 props 逐级传递的情况下，实现跨组件的数据共享。

- `provide 函数`用于定义一个或多个可以被后代组件通过 inject 访问的数据或方法。
- `inject 函数`用于在后代组件中获取由祖先组件通过 provide 提供的数据或方法。

::: code-group

```vue [provide 提供数据]
<template>
	<div>
		<ChildComponent />
	</div>
</template>

<script setup>
import { provide, ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const sharedData = ref("Hello from Provider!");

// 使用 provide 提供 sharedData
provide("sharedData", sharedData);
</script>
```

```vue [inject 获取数据]
<template>
	<div>{{ sharedData }}</div>
</template>

<script setup>
import { inject } from "vue";

// 使用 inject 获取名为 'sharedData' 的数据
const sharedData = inject("sharedData");
</script>
```

:::

### 组合式函数

组合式函数，用于复用组件中那些**有状态的逻辑**，使代码更加模块化和可重用。

1. 不使用组合式函数的情况：

```vue
<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const x = ref(0);
const y = ref(0);

function update(event) {
	x.value = event.pageX;
	y.value = event.pageY;
}

onMounted(() => window.addEventListener("mousemove", update));
onUnmounted(() => window.removeEventListener("mousemove", update));
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
```

2. 使用组合式函数的情况：

::: code-group

```js [a.定义]
// mouse.js
import { ref, onMounted, onUnmounted } from "vue";

// 按照惯例，组合式函数名以“use”开头
export function useMouse() {
	// 被组合式函数封装和管理的状态
	const x = ref(0);
	const y = ref(0);

	// 组合式函数可以随时更改其状态。
	function update(event) {
		x.value = event.pageX;
		y.value = event.pageY;
	}

	// 一个组合式函数也可以挂靠在所属组件的生命周期上
	// 来启动和卸载副作用
	onMounted(() => window.addEventListener("mousemove", update));
	onUnmounted(() => window.removeEventListener("mousemove", update));

	// 通过返回值暴露所管理的状态
	return { x, y };
}
```

```vue [b.引用]
<script setup>
import { useMouse } from "./mouse.js";

const { x, y } = useMouse();
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
```

:::

### 自定义指令

自定义指令，主要是为了重用普通元素访问底层 DOM 的逻辑。

```vue
<template>
	<p v-red>红颜色的字</p>
	<p v-red>红颜色的字</p>
	<p>默认颜色</p>
</template>

<script setup>
// 在 <script setup> 中，任何以 v 开头的驼峰式命名的变量都可以当作自定义指令使用。
const vRed = {
	mounted: (el) => {
		el.classList.add("text-red");
	},
};
</script>

<style>
.text-red {
	color: red;
}
</style>
```

### 插件

::: code-group

```js [1.定义插件 test.plugin.js]
const plugins = {
	install(app) {
		// 注册全局方法 $test
		app.config.globalProperties.$test = () => {
			var str = "this is a test plugin";

			return str;
		};

		// 注册全局组件
		app.component("MyPluginComponent", {
			template: `<h1>这是一个插件组件</h1>`,
		});

		// 提供一个可以被注入进整个应用的数据
		app.provide("testProvide", {
			msg: "this is a test provide",
		});

		// 注入一个自定义指令 v-red
		app.directive("red", {
			mounted(el) {
				el.style.color = "red";
			},
		});
	},
};

export default plugins;
```

```js [2.注册插件 main.js]
import { createApp } from "vue";
import App from "./App.vue";
import plugins from "./plugin.js";

const app = createApp(App);

app.use(plugins);

app.mount("#app");
```

```vue [3.使用插件 App.vue]
<template>
	<div>
		<!-- 使用插件方法 -->
		{{ $test() }}

		<!-- 使用插件组件 -->
		<MyPluginComponent />

		<!-- 使用插件 Provide 数据 -->
		{{ testProvide.msg }}

		<!-- 使用插件指令 -->
		<p v-red>这是一个指令</p>
	</div>
</template>

<script setup>
import { onMounted, getCurrentInstance, inject } from "vue";*

const testProvide = inject("testProvide"); // 注入 Provide 数据
onMounted(() => {
  // 在 setup 脚本中使用插件方法
  const testStr = getCurrentInstance().appContext.config.globalProperties.$test();
  console.log("testStr::: ", testStr);
});
</script>
```

:::
