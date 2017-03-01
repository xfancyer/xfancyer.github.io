var React=require("react")
var ReactDOM=require("react-dom")
var Main=require("./main.js")
var Fenlei=require("./fenlei.js")
var My=require("./my.js")
var footercss={
	footer:{
		width: '100%',
		height:"55px",
		background:"#abcdef",
		textAlign:"center",
		lineHeight:"55px",
		display:"flex"
	},
	footerdiv:{
		flex:1,
		height:"55px",
		
	}
}
var Footer=React.createClass({
	route:function(event){
		var _attr=event.target.getAttribute("data-a")
		switch(_attr){
			case "index":
				ReactDOM.unmountComponentAtNode(document.getElementById("main"))
				ReactDOM.render(<Main/>,document.getElementById("main"))
			break;
			case "fenlei":
				ReactDOM.unmountComponentAtNode(document.getElementById("main"))
				ReactDOM.render(<Fenlei/>,document.getElementById("main"))
			break;
			case "my":
				ReactDOM.unmountComponentAtNode(document.getElementById("main"))
				ReactDOM.render(<My/>,document.getElementById("main"))
			break;
		}
	},
	render:function(){
		return (
			<div style={footercss.footer}>
				<div onClick={this.route} data-a="index" style={footercss.footerdiv}>首页</div>
				<div onClick={this.route} data-a="fenlei" style={footercss.footerdiv}>分类</div>
				<div onClick={this.route} data-a="my" style={footercss.footerdiv}>我的</div>
			</div>
			
		)
	}
})
module.exports=Footer