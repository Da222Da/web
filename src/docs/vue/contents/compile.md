这里，我们将使用构建工具 [Vite](https://cn.vitejs.dev/guide/) 来进行演示 —— 如何在编译模式下，使用 Vue.js？

1. 初始化项目

```bash
npm create vite@latest my-vue-app -- --template vue
cd my-vue-app
npm install
npm run dev
```

2. 定义子组件`ChildComponent.vue`

::: details 点击查看代码

```vue
<template>
  <h3 class="v-title">{{ msg }}</h3>
</template>

<script setup>
const props = defineProps({
  msg: String,
});
</script>

<style scoped>
.v-title {
  color: red;
}
</style>

```
:::

3. 定义父组件`App.vue`

::: details 点击查看代码

```vue
<template>
  <ChildComponent :msg="msg" />

  <button type="button" @click="click">点击</button>
</template>

<script setup>
import { ref } from "vue";
import ChildComponent from "./components/ChildComponent.vue";

const msg = ref("Hello World");

function click() {
  msg.value = msg.value === "Hello World" ? "Hello Vue" : "Hello World";
}
</script>

```
:::