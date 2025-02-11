# 模块

module 模块是 ECMAScript 2015 (ES6) 中引入的一个新特性，它允许你将 JavaScript 代码组织成独立的文件和模块。

### 模块导入 & 导出

```js
// export 导出
export function add(a, b) {
	return a + b;
}

// export 导入
import { add } from "./math.js";

// 重命名导入
import { add as sum } from "./math.js";

// export default 默认导出
export default function add(a, b) {
	return a + b;
}

// export default 导入
import add from "./math.js";

// 导出所有
export * from "./math.js";

// 导入所有
import * as math from "./math.js";
```

### Promise 对象

Promise 是 JavaScript 中用于处理异步操作的一种对象。它代表了一个异步操作的最终完成状态。

Promise 对象有三种状态：pending（等待中）、fulfilled（已成功）和 rejected（已失败）。
- 默认是 pending（等待中）状态。
- 当异步操作成功完成时，Promise 对象的状态会从 pending 变为 fulfilled，并将结果值传递给后续的 .then() 方法。
- 当异步操作失败时，Promise 对象的状态会从 pending 变为 rejected，并将错误原因传递给后续的 .catch() 方法。

```js
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("成功");
	}, 1000);
});

promise
	.then((result) => {
		console.log(result); // 输出：成功
	})
	.catch((error) => {
		console.error(error);
	});
```

### async/await 语法糖

async/await 是 JavaScript 中用于处理异步操作的一种语法糖，它建立在 Promise 的基础上，提供了一种更加简洁和易读的方式来编写异步代码。

- 使用 async 关键字声明的函数称为 async 函数，async 函数会隐式地返回一个 Promise 对象。
- 使用 await 关键字可以暂停 async 函数的执行，等待 Promise 的解决（fulfilled）或拒绝（rejected），并返回结果。

```js
async function asyncFunction() {
	try {
		const result = await promise;
		console.log(result); // 输出：成功
	} catch (error) {
		console.error(error);
	}
}

asyncFunction();
```

### Proxy 对象
Proxy 对象用于创建一个对象的代理，可以拦截和自定义对象的基本操作，如属性访问、赋值、枚举、函数调用等。

```js
const handler = {
	get: function (target, prop, receiver) {
		console.log(`获取属性：${prop}`);
		return Reflect.get(target, prop, receiver);
	},
	set: function (target, prop, value, receiver) {
		console.log(`设置属性：${prop} = ${value}`);
		return Reflect.set(target, prop, value, receiver);
	},
};

const target = {
	name: "张三", age: 18,
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // 输出：获取属性：name
console.log(proxy.age); // 输出：获取属性：age

proxy.name = "李四"; // 输出：设置属性：name = 李四
proxy.age = 20; // 输出：设置属性：age = 20
```

### Reflect 对象
Reflect 对象提供了一系列静态方法，用于操作对象。这些方法与 Proxy 对象的方法一一对应，可以用于替代 Object 上的传统方法，如 Object.defineProperty()、Object.getOwnPropertyDescriptor() 等。

```js
const target = {
	name: "张三",
	age: 18,
};

const handler = {
	get: function (target, prop, receiver) {
		console.log(`获取属性：${prop}`);
		return Reflect.get(target, prop, receiver);
	},
	set: function (target, prop, value, receiver) {
		console.log(`设置属性：${prop} = ${value}`);
		return Reflect.set(target, prop, value, receiver);
	},
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // 输出：获取属性：name
console.log(proxy.age); // 输出：获取属性：age

proxy.name = "李四"; // 输出：设置属性：name = 李四
proxy.age = 20; // 输出：设置属性：age = 20
```

### Map 对象
Map 对象用于存储键值对，键可以是任意类型。Map 对象提供了一系列方法，如 set()、get()、has()、delete()、clear() 等。

```js
const map = new Map();

map.set("name", "张三");
map.set("age", 18);

console.log(map.get("name")); // 输出：张三
console.log(map.get("age")); // 输出：18

console.log(map.has("name")); // 输出：true
console.log(map.has("gender")); // 输出：false

map.delete("age");
console.log(map.has("age")); // 输出：false
```

### Set 对象
Set 对象用于存储唯一值，值可以是任意类型。Set 对象提供了一系列方法，如 add()、has()、delete()、clear() 等。

```js
const set = new Set();

set.add("张三");
set.add("李四");
set.add("王五");

console.log(set.has("张三")); // 输出：true
console.log(set.has("赵六")); // 输出：false

set.delete("李四");
console.log(set.has("李四")); // 输出：false
```

### WeakMap 对象
WeakMap 对象用于存储键值对，键必须是对象，值可以是任意类型。WeakMap 对象提供了一系列方法，如 set()、get()、has()、delete() 等。WeakMap 对象的键是弱引用，不会阻止垃圾回收。

```js
const weakMap = new WeakMap();

const obj1 = { name: "张三" };
const obj2 = { name: "李四" };

weakMap.set(obj1, "张三");
weakMap.set(obj2, "李四");

console.log(weakMap.get(obj1)); // 输出：张三
console.log(weakMap.get(obj2)); // 输出：李四

console.log(weakMap.has(obj1)); // 输出：true
console.log(weakMap.has(obj3)); // 输出：false

weakMap.delete(obj1);
console.log(weakMap.has(obj1)); // 输出：false
```

### WeakSet 对象
WeakSet 对象用于存储唯一值，值必须是对象。WeakSet 对象提供了一系列方法，如 add()、has()、delete() 等。WeakSet 对象的值是弱引用，不会阻止垃圾回收。

```js
const weakSet = new WeakSet();

const obj1 = { name: "张三" };
const obj2 = { name: "李四" };

weakSet.add(obj1);

console.log(weakSet.has(obj1)); // 输出：true	
```

### Symbol 对象
Symbol 对象用于创建唯一的标识符。Symbol 对象提供了一系列方法，如 Symbol()、Symbol.for()、Symbol.keyFor() 等。

```js
const sym1 = Symbol("foo");
const sym2 = Symbol("foo");

console.log(sym1 === sym2); // 输出：false

const sym3 = Symbol.for("foo");
const sym4 = Symbol.for("foo");

console.log(sym3 === sym4); // 输出：true

console.log(Symbol.keyFor(sym3)); // 输出：foo
```
