import {Header,Content,} from "../components/common"
import ProductList from "../product-list/product-list.js"
import React, {Component} from "react"
import "../css/history.css"

//顶层组件
class History extends Component {
	constructor (props) {
		super (props);
		this.state = {
			productData: JSON.parse(window.localStorage.getItem("footmarkData")||"[]")
		}
	}
	clearHistory () {
		window.localStorage.removeItem("footmarkData")
		this.setState({
			productData: []
		})
		
	}
	
	render () {
		return (
			<div className="page" id="history">
				<Header title="历史记录" rightBtn={<a className="border" onClick={()=>this.clearHistory()}>清空</a>}/>
				<Content>
					<ProductList productData = {this.state.productData}/>
				</Content>
			</div>
		)
	}
	
}

export default History
