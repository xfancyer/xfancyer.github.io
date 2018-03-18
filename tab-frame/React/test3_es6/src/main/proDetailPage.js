import {Header,Content} from  "../components/common"
import React, {Component} from  "react"
import "../css/proDetailPage.css"

class ProList extends Component {
	constructor (props) {
		super (props)
	}
	
	render () {
		return (
			<ul className="pro-ul">
				{
					this.props.detailData.map((ele,index)=><li className="pro-li" key={index}>
						<img className="pro-img" src={ele} />
						<p className="pro-name"></p>
					</li>)
				}
			</ul>
		)
	}
}

class ProDetailPage extends Component {
	constructor (props) {
		super(props)
		
		this.state = {
			detailData: [],
			productName: ""
		}
		console.log(this.props.params.goodsID)
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{
			goodsID: this.props.params.goodsID
		},(data)=>{
			console.log(data)
			this.setState({
				detailData: JSON.parse(data[0].imgsUrl),
				goodsID: data[0].goodsID,
				goodsName: data[0].goodsName
			})
		})
	}
	toCart () {
		window.location.hash="#/cart"
	}
	
	render () {
		return(
			<div className="page" id="pro-detail">
				<Header title="商品资料" rightBtn={<a className="border" onClick={()=>this.toCart()} href="javascript:;">购物车</a>}/>
				<Content>
					<ProList detailData={this.state.detailData}/>
				</Content>
			</div>
		)
		
	}
	
}

export default ProDetailPage