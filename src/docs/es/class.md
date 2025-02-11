# 面向对象

### 对象

```js
const obj = {
	name: "旺财",
	age: 3,
	sayHello() {
		console.log(`${this.name}：你好`);
	},
};
```

### 类

```js
// class 关键字 > 类声明
class Animal {
	constructor(name) {
		this.name = name; // 属性
	}
	sayHello() {
		console.log(`${this.name}：你好`); // 方法
	}
}
const animal = new Animal("旺财"); // new 关键字 > 实例化对象
animal.sayHello(); // 输出：旺财：你好
```

### 静态属性

```js
// class 关键字 > 类声明
class Animal {
	static name = "旺财"; // 静态属性
	static sayHello() {
		console.log(`${this.name}：你好`); // 静态方法
	}
}
Animal.sayHello(); // 输出：旺财：你好
```

### 静态方法
```js
// class 关键字 > 类声明
class Animal {
	static name = "旺财"; // 静态属性
	static sayHello() {
		console.log(`${this.name}：你好`); // 静态方法
	}
}
Animal.sayHello(); // 输出：旺财：你好
```

### 封装

```js
// class 关键字 > 类声明
class Animal {
	constructor(name) {
		this.name = name; // 属性
	}
	sayHello() {
		console.log(`${this.name}：你好`); // 方法
	}
}
const animal = new Animal("旺财"); // new 关键字 > 实例化对象
animal.sayHello(); // 输出：旺财：你好
```

### 继承

```js
// class 关键字 > 类声明
class Animal {
	// 构造器 constructor 是一个特殊的方法，每次实例化对象的时候，都会自动调用这个方法
	constructor(name) {
		this.name = name;
	}
}

// 狗类
// extends 关键字 > 继承
class Dog extends Animal {
	constructor(name) {
		super(name); // 相当于，调用 Animal 类的构造函数
	}
	say() {
		console.log(`${this.name}：汪汪汪`);
	}
}

const dog = new Dog("旺财"); // new 关键字 > 实例化对象
dog.sayHello(); // 输出：旺财：汪汪汪

// 猫类
class Cat extends Animal {
	constructor(name) {
		super(name); // 相当于，调用 Animal 类的构造函数
	}
	say() {
		console.log(`${this.name}：喵喵喵`);
	}
}
const cat = new Cat("咪咪");
cat.say(); // 输出：咪咪：喵喵喵
```

### 访问器

```js
// Getter/Setter 访问器
class Dog {
	name = "旺财";
	// Getter 访问器: 获取 name 属性值时，自动调用该方法
	get name() {
		return this._name;
	}
	// Setter 访问器: 设置 name 属性值时，自动调用该方法
	set name(value) {
		this._name = value;
	}
}
```


