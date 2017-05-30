1.微软开发，javascript的超级，遵循ES6
2.ES是客户端脚本语言的规范，javascript实现了ES5规范，Typescript实现了ES6规范。
3.Typescript的优势。
（1）支持es6规范，2015发布，未来一段时间将是客户端脚本语言的主流。
（2）强大的IDE支持，类型检查，语法提示，重构的好处提高代码质量，可以提高开发效率。
（3）Angular2的开发语言，能更好的帮助学习angular2.
搭建typescript开发环境。
需要compiler 将es6转换es5.
npm install -g typescript

typescript的语法和特性

字符串新特性
1.多行字符串，双‘1’左边的那个点。
2.字符串模版，在多行字符串中声明变量 和 方法。
3.自动拆分字符串。

参数新特性

1.参数类型 var name: string = 'aaaaa'; 
2.类型推断机制：var alias =  'haha'; alias = 13报错。前面赋值为字符串，ts会自动推断其类型。
3.声明为any 可以是任何类型；
还有number,boolean,void(不需要返回值)
4.自定义类型  可以同过class  interface声明；
参数默认值： 放到最后面；
可选参数 可以用？表明  可选参数必须声明在必选参数后面；

函数新特性
A.
Rest and  Spread操作符：
用来声明任意数量的方法参数
点点点就是（...）
1.
function fun1(...args){
	args.forEach(function (arg)){
	console.log(arg);
   }
}
fun1(1,2,3);
fun1(7,8,9,10,11);

2. 反过来
function fun1(a,b,c){
console.log(a);
console.log(b);
console.log(c);

}

var args = [1,2];

fun1(...args);

var args = [7,8,9,10,11];

fun1(...args2);

B.
generator函数：
控制函数的执行过程，手工暂停和恢复代码执行
function* doSomething(){
	console.log('start');
	yield; //相当于断点，执行到此会停住；
	console.log('finish');
}这个就是generator,通过星号；

var fun1 = dosomething();

fun1.next();

fun1.next();

析构表达式 
从对象中拆出来
1.function getStock(){
	return {
	code: "IBM",
	price: 100
   }
}

var {code, price} = getStock();
console.log(code);
console.log(price);

2.function getStock(){
	return {
	
	code: 'IBM',
	price: {
	 price1: 200,
	 price2: 400
	}
     }
}

var {code: codex, price: {price2}}=getStock();
console.log(codex);
console.log(price2);

从数组中拆出来
var array1 =  [1,2,3,4];

var [number1, number2] = array1;//拿出1,2
var [number1, , ,number2] = array1;//拿出1,4
var [, ,number1, number2] = array1;//拿出3,4
var [number1, number2, ...others] = array1;
function doSomething([number1, number2, ...others]){
console.log(number1);
console.log(number2);
console.log(others);	
}
doSomething(array1);

箭头表达式
用来声明匿名函数，消除传统匿名函数的this指针问题；
var sum = (arg1, arg2) => arg1 + arg2;//一行
var sum = (arg1, arg2) => {
   return arg1 + arg2; 
}//换行需要大括号和return
var sum = () => {
    
}//无参数
var sum = arg1 => {
    console.log(arg1);
}//一个参数

var myArray = [1, 2, 3, 4, 5];

console.log(myArray.filter(value => value%2 == 0));

for of 循环

忽略掉属性desc,不能用break;
var myArray = [1, 2, 3, 4];
myArray.desc = 'four number';

myArray.forEach(value => console.log(value));

for (var n in myArray) {
    console.log(n);//输出下标key: 0,1,2,3 desc
    console.log(myArray[n]);//输出值
}

var myArray = [1, 2, 3, 4];
myArray.desc = 'four number';

for (var n of myArray) {
    if (n > 2) break;//可以break;
    console.log(n);//输出值1,2,3,4
}
for (var n of "four number") {
    console.log(n);
}

面向对象特性

类（class）
class Person {

	constructor(public name: string) {
	//在new的时候只能调一次,必须传入name,这里必须声明访问控制符
	}

}
var p1 = new Person();
var p2 = new Person();
访问控制符有 public（公有） private（私有）   protected（受保护的，可以在类的内部和类的子类被访问，在外部不可以）

类的继承
extends
class Employeee extends Person {
//继承Person 也可以声明新的属性和方法

    constructor(name: string, code: string) {
     	super(name);//子类构造函数必须调用父类构造函数
	this.code = code;
      }
}

泛型（generic）<Person>
参数化的类型， 一般用来限制集合的内容
var workers: Array<Person> = [];
workers[0] = new Person("zhang san");

接口 interface
用来建立某种代码约定，使得其他开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定

interface IPerson {
    name: string;
    age: number;

}

class Person {
    constructor(public config: IPerson) {
        
    }
}

var p1 = new Person({
    name:"zhang san",
    age: 18
});

interface Animal {
    eat();
}//所有声明实现这个接口的类类，必须实现这个接口的方法

class Sheep implements Animal {
    //绵阳这个类实现Animal这个接口
    eat() {
        console.log("i eat grass");
    }
}

class Tiger implements Animal {
    eat() {
        console.log("i eat meat");
    }
}

module 模块
export import

面向对象特性
类型定义文件（*.d.ts）

类型定义文件用来帮助开发者zai Typescript中使用已有的javascript的工具包  如：JQuery

来自https://github.com/DefinitelyTyped/DefinitelyTyped

typings
https://www.npmjs.com/package/typings 















