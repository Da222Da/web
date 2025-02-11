# 流程控制

在 JavaScript 中，流程控制语句用于控制程序的执行顺序。它们允许程序在不同的条件下执行不同的代码块，或者重复执行某段代码直到满足特定条件为止。

JavaScript 中的流程控制语句主要有三种：分支语句、循环语句和跳转语句。其中，分支语句用于根据条件执行不同的代码块；循环语句用于重复执行某段代码直到满足特定条件为止；跳转语句则用于在程序中直接改变程序的执行顺序。

### 分支语句

```js
// If 条件判断
if (a > b) {
	console.log("a大于b");
} else if (a < b) {
	console.log("a小于b");
} else {
	console.log("a等于b");
}
```

```js
// Switch 分支语句
switch (fruit) {
	case "apple":
		console.log("苹果");
		break;
	case "banana":
		console.log("香蕉");
		break;
	case "orange":
		console.log("橙子");
		break;
	default:
		console.log("未知水果");
}
```

### 循环语句

```js
// For 循环语句
for (let i = 0; i < 10; i++) {
	console.log(i);
}
```

```js
// While 循环语句
let i = 0;
while (i < 10) {
	console.log(i);
	i++;
}	
```

### 跳转语句

```js
// Break 跳出循环
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		break;
	}
	console.log(i);
}
```

```js
// Continue 跳过本次循环
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
		continue;
	}
	console.log(i);
}
```

```js
// Return 返回函数结果
function add(a, b) {
	return a + b;
		}
console.log(add(2, 3)); // 输出 5
```

```js
// Throw 抛出错误
function divide(a, b) {
	if (b === 0) {
		throw new Error("除数不能为0");
	}
	return a / b;
}
try {
	console.log(divide(10, 0));
} catch (error) {
	console.log(error.message);
}
```