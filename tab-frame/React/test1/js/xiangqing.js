var React=require("react")
var $=require("jquery")
var Xiangqing=React.createClass({
	componentWillMount:function(){
		var _this=this
		$.ajax({
			url:"https://api.douban.com/v2/movie/subject/"+this.props.xq+"",
			dataType:"jsonp",
			success:function(data){
				
				console.log(data)
			}
		});
	},
	render:function(){
		console.log(this.props.xq)
		return (
			<div>
				Xiangqing
			</div>
			
		)
	}
})
module.exports=Xiangqing