# 数据类型 & 变量

变量是编程中非常重要的概念，它们用于存储数据，以便在程序中重复使用。在 JavaScript 中，变量可以通过 `var`、`let` 和 `const` 关键字声明。

### 数据类型

JavaScript 中的数据类型可以分为两大类：基本数据类型和引用数据类型。

基本数据类型是直接存储在栈内存中的简单数据类型，包括：

- `String`：字符串类型，用于表示文本数据。
- `Number`：数字类型，用于表示数值数据。
- `Boolean`：布尔类型，用于表示真或假。
- `Undefined`：未定义类型，表示变量未赋值。
- `Null`：空类型，表示变量值为空。
- `Symbol`：符号类型，用于创建唯一的标识符。

引用数据类型是存储在堆内存中的复杂数据类型，包括：

- `Object`：对象类型，用于表示键值对的集合。
- `Array`：数组类型，用于表示有序的元素集合。
- `Function`：函数类型，用于表示可执行的代码块。

### 变量声明

在 JavaScript 中，可以使用 `var`、`let` 和 `const` 关键字来声明变量。

#### `var` 关键字用于声明变量，它具有函数作用域和变量提升的特性。

```js
var a = 10;
console.log(a); // 输出 10
```

#### `let` 关键字用于声明块级作用域的变量，它没有变量提升的特性。

```js
let b = 20;
console.log(b); // 输出 20
```

#### `const` 关键字用于声明常量，即一旦声明，其值就不能被修改。

```js
const c = 30;
console.log(c); // 输出 30
```

### 变量作用域

在 JavaScript 中，变量的作用域决定了变量在代码中的可见性和可访问性。变量的作用域可以分为全局作用域和局部作用域。

#### 全局作用域

全局作用域是指在代码中的任何位置都可以访问的变量。全局变量通常在代码的最顶部声明。

```js
var globalVar = 10;
console.log(globalVar); // 输出 10
```

#### 局部作用域

局部作用域是指在代码中的某个特定范围内可以访问的变量。局部变量通常在函数内部声明。

```js
function test() {
	var localVar = 20;
	console.log(localVar); // 输出 20
	console.log(globalVar); // 输出 10
}

test();
```

#### 块级作用域

块级作用域是指在代码中的某个特定代码块内可以访问的变量。块级作用域通常使用 `let` 和 `const` 关键字声明。

```js
if (true) {
	let blockVar = 30;
	console.log(blockVar); // 输出 30
}
console.log(blockVar); // 报错，blockVar 未定义
```

### 解构赋值

在 JavaScript 中，解构赋值（Destructuring Assignment）是一种方便的语法，允许你从数组或对象中提取数据，并将其赋值给变量。解构赋值可以让你更简洁地处理数据，特别是在处理数组或对象时。

```js
// 数组解构赋值
const arr = [1, 2, 3];
let [a, b, c] = arr; // a=1, b=2, c=3

// 对象解构赋值
const obj = { name: "张三", age: 20 };
let { name, age } = obj; // name="张三", age=20
```

### var 变量提升

```js
console.log(a); // undefined
var a = 10; // var 声明的变量存在变量提升，即变量可以在声明之前使用，但值为 undefined
console.log(a); // 10

// JS 引擎执行过程：预编译阶段 -> 执行阶段。
// 预编译阶段： JS 引擎在解析代码的时候，将 var 声明变量放在了作用域的头部。
// 预编译之后的代码，如下：
// var a = undefined;
// console.log(a);
// a = 10;
// console.log(a);
```

### 模板字符串

```js
// 字符串运算符
const str1 = "Hello";
const str2 = "World";
const str3 = str1 + " " + str2; // 字符串拼接
const str4 = `${str1} ${str2}`; // 模板字符串
```

### 变量命名规则

在 JavaScript 中，变量命名需要遵循以下规则：

- 变量名必须以字母、下划线或美元符号开头。
- 变量名可以包含字母、数字、下划线或美元符号。
- 变量名不能是 JavaScript 的关键字或保留字。
- 变量名是大小写敏感的。

### 变量类型转换

在 JavaScript 中，可以使用 `typeof` 运算符来检测变量的类型。

```js
console.log(typeof 10); // 输出 "number"
console.log(typeof "Hello"); // 输出 "string"
console.log(typeof true); // 输出 "boolean"
console.log(typeof undefined); // 输出 "undefined"
console.log(typeof null); // 输出 "object"
console.log(typeof {}); // 输出 "object"
console.log(typeof []); // 输出 "object"
console.log(typeof function () {}); // 输出 "function"
```