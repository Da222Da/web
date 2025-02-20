
JSX 语法，是 JavaScript 语法的⼀种语法扩展，⽀持在 JavaScript 直接写类似 HTML 的模板代码，你可以直接理解为**HTML in JavaScript**。

- a. 如果你也是使用 vite 构建工具，记得安装依赖`@vitejs/plugin-vue-jsx`

::: details 查看配置 vite.config.js 文件

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx()],
});
```

:::

- b. 使用 JSX 语法来定义 Counter 组件

::: details 查看配置 counter.jsx 文件

```css
.counter {
  padding: 10px;
  margin: 10px auto;
  text-align: center;
}
.counter .text {
  font-size: 28px;
  font-weight: bolder;
  color: #666666;
}
.counter .btn {
  font-size: 20px;
  padding: 0 10px;
  height: 32px;
  min-width: 80px;
  cursor: pointer;
}
```

```jsx
import { defineComponent, ref } from "vue";
import "./counter.css";
export default defineComponent({
  name: "Counter",
  setup() {
    const count = ref(0);
    const onClick = () => {
      count.value++;
    };

    return () => (
      <div className="counter">
        <div className="text">Count: {count.value}</div>
        <button className="btn" onClick={onClick}>
          Add
        </button>
      </div>
    );
  },
});
```

:::

- c. 在 App.vue 中使用 Counter 组件

```vue
<template>
  <Counter />
</template>
<script setup>
import Counter from "./components/counter.jsx";
</script>
```


::: danger Vue 模板语法

模板语法：直接理解为 **HTML 语法的⼀种扩展**，模板中的一切`节点声明、属性设置和事件注册等`都是按照HTML的语法来进⾏扩展设计的。

::: details 查看代码示例：
```vue
<template>
  <div class="counter">
    <div class="text">Count: {{ state.count }}</div>
    <button class="btn" v-on:click="onClick">Add</button>
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
.counter {
  padding: 10px;
  margin: 10px auto;
  text-align: center;   
}
.counter .text {
  font-size: 28px;
  font-weight: bolder;
  color: #666666;
}
.counter .btn {
  font-size: 20px;
  padding: 0 10px;
  height: 32px;
  min-width: 80px;
  cursor: pointer;
}
</style>

```

:::

