
首先全局安装webpack

	1. npm install webpack --save-dev  

npm install webpack --save-dev
然后安装babel

	1. npm install --save-dev babel-core babel-preset-es2015  
	2. npm install --save-dev babel-loader  

npm install --save-dev babel-core babel-preset-es2015
npm install --save-dev babel-loader
在当前文件夹内执行安装，然后创建两个文件夹一个src作为源文件夹，一个bin，保存生成的文件夹的列表在src文件夹内创建一个文件app.js，里面写入现在浏览器不全支持的es6代码

	1. let a = 111;  
	2. let b = 222;  
	3. var xxx = (c,d) => c*d;  
	4. console.log(xxx(a,b));  

let a = 111;
let b = 222;
var xxx = (c,d) => c*d;
console.log(xxx(a,b));
然后在根目录创建一个文件名为webpack.config.js

	1. module.exports = {  
	2.     entry: './src/app.js',  
	3.     output: {  
	4.         path: './bin',  
	5.         filename: 'app.bundle.js',  
	6.     },  
	7.     module: {  
	8.         loaders: [{  
	9.             test: /\.js$/,  
	10.             exclude: /node_modules/,  
	11.             loader: 'babel-loader'  
	12.         }]  
	13.     }  
	14. }  

 module.exports = {
     entry: './src/app.js',
     output: {
         path: './bin',
         filename: 'app.bundle.js',
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     }
 }
然后再创建一个用于babel调用的文件，名为.babelrc里面写入

	1. { "presets": [ "es2015" ] }  


然后在当前目录打开cmd，运行命令 webpack
如果出现绿色的，证明成功了
然后去bin目录里面找到app.bundle.js发现里面下面会有这段代码

	1. function(module, exports) {  
	2. "use strict";  
	3. var a = 111;  
	4. var b = 222;  
	5. var xxx = function xxx(c, d) {  
	6.   return c * d;  
	7. };  
	8. console.log(xxx(a, b));  

        function(module, exports) {

        "use strict";

        var a = 111;
        var b = 222;
        var xxx = function xxx(c, d) {
          return c * d;
        };
        console.log(xxx(a, b));

证明转码成功~~~~

