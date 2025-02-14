万物始于"Hello World"!

1. 如何将虚拟 DOM `<h3>Hello World!</h3>`渲染到页面上，是我们了解 Vue.js 的第一步。

::: details 完整代码示例：


```html
<html>
  <head>
    <script src="https://unpkg.com/vue@3.2.37/dist/vue.runtime.global.js"></script>
  </head>

  <body>
    <div id="app"></div>
  </body>

  <script>
    (function () {
      const { createApp, createVNode } = window.Vue;

      // 组件挂载渲染
      // createApp: 创建一个新的 Vue 应用实例。
      // createVNode: 创建一个虚拟节点。
      const app = createApp({
        render() {
          return createVNode("h3", null, "Hello World!");
        },
      });
      app.mount("#app");
    })();
  </script>
</html>
```

:::

2. 如何给虚拟 DOM `<h3 class='title'>Hello World!</h3>`添加 CSS 样式：

::: details 完整代码示例：

```html
<html>
  <head>
    <style>
      .v-title {
        color: red;
      }
    </style>
    <script src="https://unpkg.com/vue@3.2.37/dist/vue.runtime.global.js"></script>
  </head>

  <body>
    <div id="app"></div>
  </body>

  <script>
    (function () {
      const { createApp, createVNode } = window.Vue;

      // 组件挂载渲染
      const app = createApp({
        render() {
          return createVNode("h3", { class: "v-title" }, "Hello World!");
        },
      });
      app.mount("#app");
    })();
  </script>
</html>

```

:::

3. 如何给虚拟 DOM，绑定 OnClick 点击事件：

::: details 完整代码示例：

```html
<html>
  <head>
    <style>
      .v-title {
        color: red;
      }
    </style>
    <script src="https://unpkg.com/vue@3.2.37/dist/vue.runtime.global.js"></script>
  </head>

  <body>
    <div id="app"></div>
  </body>

  <script>
    (function () {
      const { createApp, createVNode } = window.Vue;

      // 组件挂载渲染
      const app = createApp({
        render() {
          const click = () => {
            console.log("Clicked!");
          };
          return createVNode("div", null, [createVNode("h3", { class: "v-title" }, "Hello World!"), createVNode("button", { class: "v-btn", onClick: click }, "点击")]);
        },
      });
      app.mount("#app");
    })();
  </script>
</html>

```

:::

4. 如何在虚拟 DOM 中使用响应式数据 ref：

::: details 完整代码示例：

```html
<html>
  <head>
    <style>
      .v-title {
        color: red;
      }
    </style>
    <script src="https://unpkg.com/vue@3.2.37/dist/vue.runtime.global.js"></script>
  </head>

  <body>
    <div id="app"></div>
  </body>

  <script>
    (function () {
      const { createApp, createVNode, ref } = window.Vue;

      // 声明 MyComponent 组件
      const MyComponent = {
        setup() {
          const msg = ref("Hello World");
          const click = () => {
            if (msg.value === "Hello World") {
              msg.value = "Hello Vue";
            } else {
              msg.value = "Hello World";
            }
          };
          return () => {
            return createVNode("div", { class: "v-wrapper" }, [createVNode("h3", { class: "v-title" }, msg.value), createVNode("button", { class: "v-btn", onClick: click }, "点击")]);
          };
        },
      };

      // 组件挂载渲染
      const app = createApp({
        render() {
          return createVNode(MyComponent);
        },
      });
      app.mount("#app");
    })();
  </script>
</html>

```

:::


5. 使用 h 函数替换 createVNode 函数：

::: details 完整代码示例：

```html
<html>
  <head>
    <style>
      .v-title {
        color: red;
      }
    </style>
    <script src="https://unpkg.com/vue@3.2.37/dist/vue.runtime.global.js"></script>
  </head>

  <body>
    <div id="app"></div>
  </body>

  <script>
    (function () {
      const { createApp, h, ref } = window.Vue;

      // 声明 MyComponent 组件
      const MyComponent = {
        setup() {
          const msg = ref("Hello World");
          const click = () => {
            if (msg.value === "Hello World") {
              msg.value = "Hello Vue";
            } else {
              msg.value = "Hello World";
            }
          };
          return () => {
            return h("div", { class: "v-wrapper" }, [h("h3", { class: "v-title" }, msg.value), h("button", { class: "v-btn", onClick: click }, "点击")]);
          };
        },
      };

      // 组件挂载渲染
      const app = createApp({
        render() {
          return h(MyComponent);
        },
      });
      app.mount("#app");
    })();
  </script>
</html>

```

:::

6. 使用 template 组件模板替换 h 函数：

::: details 完整代码示例：

```html
<html>
  <head>
    <style>
      .v-title {
        color: red;
      }
    </style>
    <script src="https://unpkg.com/vue@3.2.37/dist/vue.global.js"></script>
  </head>

  <body>
    <div id="app"></div>
  </body>

  <script>
    (function () {
      const { createApp, ref } = window.Vue;

      // 声明 MyComponent 组件
      const MyComponent = {
        template: `
          <div class="v-wrapper">
            <h3 class="v-title">{{ msg }}</h3>
            <button class="v-btn" @click="click">点击</button>
          </div>
        `,
        setup() {
          const msg = ref("Hello World");
          const click = () => (msg.value === "Hello World" ? (msg.value = "Hello Vue") : (msg.value = "Hello World"));
          return {
            msg,
            click,
          };
        },
      };

      // 组件挂载渲染
      const app = createApp({
        template: "<v-component />",
      });
      app.component("v-component", MyComponent);
      app.mount("#app");
    })();
  </script>
</html>
```
:::

7. 使用嵌套组件模板：

::: details 完整代码示例：

```html
<html>
  <head>
    <style>
      .v-title {
        color: red;
      }
    </style>
    <script src="https://unpkg.com/vue@3.2.37/dist/vue.global.js"></script>
  </head>

  <body>
    <div id="app"></div>
  </body>

  <script>
    (function () {
      const { createApp, ref } = window.Vue;
      // 子组件
      const ChildComponent = {
        template: `<h3 class="v-title">{{ props.msg }}</h3>`,
        props: {
          msg: String,
        },
        setup(props) {
          return { props };
        },
      };

      // 根组件
      const RootComponent = {
        template: `
          <div class="v-wrapper">
            <v-text v-bind:msg="msg" />
            <button class="v-btn" @click="click">点击</button>
          </div>
        `,
        components: {
          "v-text": ChildComponent,
        },
        setup() {
          const msg = ref("Hello World");
          const click = () => (msg.value === "Hello World" ? (msg.value = "Hello Vue") : (msg.value = "Hello World"));
          return {
            msg,
            click,
          };
        },
      };

      // 组件挂载渲染
      const app = createApp({
        template: "<v-component />",
      });
      app.component("v-component", RootComponent);
      app.mount("#app");
    })();
  </script>
</html>

:::