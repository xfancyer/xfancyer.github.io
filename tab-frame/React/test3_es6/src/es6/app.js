//ES6  let   const声明变量
/*var arr = [];
for ( let i = 0; i < 5; i++ ) {
	arr[i] = function () {
		alert(i);
	}
}

arr[3]();*/

/*const value = 10;

value=1;//会报错，因为const声明一个只读变量，一旦声明，变量的值就不能改变
*/

//ES6变量的解构赋值
/*let[a,...b]=[1,2,3,4,5,6,]
console.log(a);//1
console.log(b);//[2,3,4,5,6]
console.log(...b);//2 3 4 5 6
*/

/*var fn1 = function ( a, b ) {
	return a+b
}
console.log(fn1(1,5));//6

let fn2 = (a,b)=>{
	return a+b
}
console.log(fn2(2,6));//8

let fn3=(a,b)=>a-b
console.log(fn3(7,3));//4
*/

//ES6不定参数和默认参数
//1.不定参数（和解析赋值的原理相同）
function fn( first,...arg ) {
	console.log(first);//1
	console.log(...arg);//2 3 4 5
	console.log(arg);//[2,3,4,5]
}

fn(1,2,3,4,5)

//2.默认参数
function fn1 (name,age,sex=1) {//当不传参数的时候，显示默认参数，当传参数的时候，传的参数会覆盖默认参数
	return {
		name: name,
		age: age,
		sex: sex
	}
}
console.log(fn1("董静",18))



/*var obj = {
	name: "我是对象",
	show: function () {
		//var that = this
		return function () {//若不绑定的话，this指向的不是obj，而是window
			alert(this.name)
			//alert(that.name);
		}.bind(this)
	}
	
}*/
//ES6箭头函数（不改变this的指向问题）
/*var obj = {
	name: "我是对象",
	show: function () {
		return ()=>{//箭头函数不改变this的指向
			alert(this.name)
		}
	}
}
obj.show()()//obj.show()指的是show所对应的函数，若让其执行，在加个（）
*/

//ES6Class类
class Person{
	constructor (name,age) {
		this.name = name;
		this.age = age;
	}
	showName(){
		alert(this.name)
	}
}

class Student extends Person{//继承Person
	constructor (name,age,skill) {
		super(name,age)//继承必须要有的，继承原型属性和本地属性
		this.skill = skill
	}
	showSkill () {
		alert(this.skill)
	}
}

class Wo extends Person{//使用不定参
	constructor (skill,...arg) {
		super(...arg);
		this.skill = skill
	}
	showSkill () {
		alert(this.skill)
	}
}

let jingDong = new Person("dongjing",18);
console.log(jingDong)

let zhiyang = new Student("dongzhiyang",16,"dance");
console.log(zhiyang)

let haha = new Wo("hehehe","haha",0)
console.log(haha)
zhiyang.showSkill();//调用zhiyang 的showSkill方法



//ES6Module模块功能

/*import m1 from "./m1.js";//用m1来接收默认暴露的模块，from(从哪个文件夹里接收)  m1的值可以改，随便什么名都可以

import{module1,module2} from "./m1.js";//接收export暴露出来的模块  用对象的方式来接收，from(从哪个文件夹里接收)  
									   //文件夹名前要加./  文件夹要用  "文件夹名"
console.log(module1);
console.log(module2);
console.log(m1);*/











if (module.hot) {//加上这句话之后，js文件改动后就不用手动刷新了，他会自动刷新，但css文件得手动刷新
	module.hot.accept();
}
