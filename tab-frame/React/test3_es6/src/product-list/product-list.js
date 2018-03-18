
import React,{Component} from "react"
import {Link} from "react-router"

/*写组建的时候，尽量把组件名写完整，描述清晰，方便以后使用*/
class ProductList extends Component {
	constructor (props) {
		super (props)
	}
	toHistory (ele) {
		var footmarkData = JSON.parse(window.localStorage.getItem("footmarkData")||"[]");
		
		for (var i = 0; i < footmarkData.length; i++) {
			if (footmarkData[i].goodsID == ele.goodsID) {
				footmarkData.splice (i,1);
				break;
			}
		}
		footmarkData.unshift(ele);
		window.localStorage.setItem("footmarkData",JSON.stringify(footmarkData));
		window.location.hash = "#/detail/"+ele.goodsID;
	}
	render () {
		return (
			<ul className="product-list">
				{
				this.props.productData.map((ele, index)=><li key={index} onClick={()=>this.toHistory(ele)} className="pro-item">
					<a href="javascript:;"  className="pic"><img className="goodImg" src={ele.goodsListImg}/></a>
					<p className="pro-name">{ele.goodsName}</p>
					<p className="price"><em>￥{ele.price}</em><del className="del">￥999</del></p>
					
				</li>)
			}
			</ul>
		)
	}

}
//设置默认属性，如果不设置的话，在不传参的情况下会报错
ProductList.defaultProps = {
	productData: []
}


//设置默认暴露的组件
export default ProductList