let aa = 111;
let bb = 222;
var xx = (a,b)=>a*b;
console.log(xx(aa,bb));


var obj = {
	name:'nameobj',
	show:function(){
		return ()=>{
			alert(this.name)
		}
	}
}
this.show()();


let [a,...b] = [1,2,3,4,5,6];
console.log(a);//1
console.log(...b);//2,3,4,5,6
console.log(b);//[2,3,4,5,6]

fn=()=>{
	console.log(arguments)
}
fn([1,2,3,4])//b
fn(...b)//...b


class Person{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	showName(){
		console.log(this.name)
	}
}
let xiaoming = new Person('xiaoming',21);
xiaoming.showName();
console.log(xiaoming)