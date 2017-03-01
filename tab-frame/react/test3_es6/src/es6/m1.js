

var module3 = "m3";
var module4 = "m4";

//export  的方式可以设置多个模块的对外接口，但是模块名必须保持一致（与app.js中import接收的模块名保持一致）
export var module1 = "m1";
export var module2 = "m2";


//export default  设置模块的默认对外接口，只能设置一个（优势：在加载的时候，可以不用知道模块的名，就可以加载）
export default module3;//默然暴露的模块