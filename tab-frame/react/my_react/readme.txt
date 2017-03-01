1-语法规范
	注意点:
	  1·引入文件react.js react-dom.js browser.js
	  2·jsx 编译成js(browser.js) 引入js type="text/babel"

2-ReactDOM
	
	react 自定义方法中 this.方法(index) 会立即执行，可以选择去绑定(.bind(this,index))

3-
	属性的传递
	getDefaultProps

4-
	通过state 改变功能
	通过自定义方法改变状态 

5-生命周期
	getDefaultProps/getInitialState->componentWillMount->render->componentDidMount 
	shouldComponentUpdate ->componentWillUpdate->render->componentDidUpdate

	refs 获取当前组件里面所有设置了ref属性的元素集合
	1)在componentDidMount中可以获取真实节点
	componentDidMount:function(){
			//可以获取真实dom
			//refs 当前组件里面设置了ref属性的元素集合
			console.log(this)

			//获取具体元素 react
			//refs 当前组件里面所有设置了ref属性的元素集合
			console.log(this.refs.list)

			console.log('渲染完成 componentDidMount')
		},
	2)常用生命周期:
	第一周期[getDefaultProps,getDefaultState,componentWillMount,componentDidMount]，第二周期[componentDidUpdate]

6-选项卡

7-表单
	1、onChange
	2、this.props.children
	3、可以通过属性控制状态
	4、仿MVVM(减少dom操作) 

		this.setState({
			password:ev.target.value.replace(/[`~!@#\$%\^\&\*\(\)_\+<>\?:"\{\},\.\\\/;'\[\]]/im,'')
		})
		ev.target.value = ev.target.value.replace(/^[a-zA-Z]\w{5,17}$/,'')
		m(state)=>v(password输入框) =>(change)=>m(state)=>(render)=>v(password)		

	5、表单元素受限
		受限: render:function(){return <input type="text" value="Hello"/>}
		不受限:render:function(){return <input type="text"/>}
		默认属性支持:defaultChecked defaultValue

	6、select
		选中下标selectedIndex
		event.target获取目标元素event.target.defaultValue

8-propTypes
	引入react-with-addons.js 方便检验,更好的调试代码
	PropTypes包含的校验类型包括基本类型、数组、对象、实例、枚举，如果某个元素必须，后面加上 .isRequired
	propTypes:{num:React.PropTypes.number,str:React.PropTypes.string.isRequired}

9-数据传递
	//在componentWillMount中绑定事件

	componentWillMount:function(){
		//注册一个方法，可以修改 this.state.value
		//emit 触发 on绑定
		Action.on("changeAppValue",function(val){
			this.setState({
				value:val
			})
		}.bind(this))
	},
	//在child中转发
	//触发 changeAppValue,传递参数100
	Action.emit("changeAppValue",100)

10-下拉菜单组件
	
11-
	webpack.config.js文件配置


扩展:
	· react里面使用的是严格模式 this->undefined

	· 钩子函数？ React自带的函数就是钩子函数

	· 规范:将自定义方法放在render的上面

	· ES6 组件定义方法:
		EX0:render:function(){} === render(){}

		· React Developer Tools React扩展工具
		//https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
		EX0 传统:
			const MyComponent = React.createClass({
				render:function(){
					return <div className={this.props.className}/>
				}
			})

		EX2：
			class MyComponent extends React.Component {
				render() {
					return <div className={this.props.className}/>
				}
			}

	· bind的使用
	:可以改变this的指向，或者给函数传参，不会让函数执行
	bind(this应该指向谁,[可以给函数传递的参数,可以没有])
	EX:var MyEventList = React.createClass({
		handleClick:function(index){
			console.log(index);
			alert(1)
		},
		render:function(){
			return(
				<ul>
					names.map(function(ele,ind){
						return <li onClick={this.handleClick.bind(this,index)}.bind(index,this)
					}).bind(this)
				</ul>
			)
		}
	})

	bind的原理:
	Function.prototype.bindParams=function(){
		var fn = this;
		var arg = Array.prototype.slice.call(arguments);//把维数组转变成真正的数组
		return function(){
			fn();
		}
	}
	function fn1(){
		console.log(arguments)
	}
	fn1.bindParams()();

	· Object.keys({键值对})
		Object.keys(this.props.productData )
		找到this.props.productData下的键名
		//['hotData','newData']
		<!-- 
		var types = [];
		for(var attr in this.props.productData){
			types.push(attr)
		}
		=== types = Object.keys(this.props.productData)
 		-->


	· 结构控制功能
	不会写组件->先写render ,通过结构细分

	· react 可以实现MVVM？
	MVVM是一种思想 数据、视图相互影响

	· action.js 
	封装 一个绑定 触发的函数
	var Action = {
		on:function(name,fn){
			this[name] = fn;
		},
		emit:function(name,data){
			this[name](data);
		}
	}
	原理:
	var Action = {
		on:function(name,fn){
			//this[name] = fn;
			//对当前元素的属性进行方法的绑定
			this["changeAppValue"]=function(val){
				this.setState({
					value:val
				})
			}.bind(this)
		},
		emit:function(name,data){
			//对指定元素属性进行触发
			//this[name](data)
			this["changeAppValue"](100)
		}
	}

	webpack 模块化开发的一种解决方案，为了模块化开发和SPA应用而生。
	gulp 为了简化自动化工作流

