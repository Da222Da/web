# 函数

函数是 ECMAScript 中最基本的代码块，用于执行特定的任务。

## 函数声明

```js
// 函数声明
function add(a, b) {
	return a + b;
}
```

## 函数表达式

```js
// 函数表达式
const add = function (a, b) {
	return a + b;
};
```

## 箭头函数

```js
// 箭头函数
const add = (a, b) => a + b;
```

## 函数参数

```js
// 默认参数
function greet(name = "World") {
	console.log(`Hello, ${name}!`);
}
greet(); // 输出：Hello, World!
greet("Alice"); // 输出：Hello, Alice!

// 参数解构
function greet({ name = "World" } = {}) {
	console.log(`Hello, ${name}!`);
}
greet(); // 输出：Hello, World!
greet({ name: "Alice" }); // 输出：Hello, Alice!

// 剩余参数
function sum(...args) {
	return args.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4, 5); // 输出：15
```

## 函数返回值

```js
// 函数返回值
function add(a, b) {
	return a + b;
}
const result = add(1, 2);
console.log(result); // 输出：3
```

## 函数调用

```js
// 函数调用
function greet(name) {
	console.log(`Hello, ${name}!`);
}
greet("Alice"); // 输出：Hello, Alice!
```

## 函数作用域

```js
// 函数作用域
function outer() {
	const outerVariable = "I'm outside";
	function inner() {
		console.log(outerVariable); // 输出：I'm outside
	}
	inner();
}
outer();
```

## 函数闭包

> 闭包：让函数外部可以访问函数内部的变量。

```js
// 函数闭包
function outer() {
	const outerVariable = "I'm outside";
	return function inner() {
		console.log(outerVariable); // 输出：I'm outside
	};
}
const innerFunction = outer();
innerFunction();
```

## 立即执行函数

```js
// 立即执行函数：函数声明后直接调用
(function (a, b) {
	return a + b;
})(1, 2); // 输出：3
```

## 函数递归

```js
// 函数递归：一个函数在内部调用自身
// 用途：将大问题分解成小问题，直到解决为止
// 计算阶乘：5! = 1 * 2 * 3 * 4 * 5
// 计算阶乘：n! = 1 * 2 * 3 * ... * n
function factorial(n) {
	if (n === 0) return 1;
	return n * factorial(n - 1);
}
console.log(factorial(5)); // 输出：120
console.log(factorial(0)); // 输出: 1
console.log(factorial(1)); // 输出: 1
console.log(factorial(10)); // 输出: 3628800
```

