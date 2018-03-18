import {Header,Footer,Content,SubHeader} from  "../components/common"
import React, {Component} from  "react"
import "../css/confirmPage.css"

//
class OrderProductInfo extends Component {
	constructor (props) {
		super (props)
	}
	
	render () {
		console.log(this.props.productInfo)
		var data = this.props.productInfo||[];
		return( 
			<ul className="order-product-info">
				{
					data.map ((ele,index)=><li className="confirm-li" key={index}>
						<a className="confirm-pic"><img src={ele.goodsListImg}/></a>
						<div className="text-info">
							<p className="p-name">{ele.goodsName}</p>
						</div>
						<div className="num-info">
							<p><em>${ele.price}</em></p>
							<p>*{ele.number}</p>
						</div>
					</li>)
				}
			</ul>
		)
	}
}



//我的订单  尾部组件
class ConfirmFooter extends Component {
	constructor (props) {
		super (props)
	}
	orderSubmit () {
		console.log("提交订单，生成真实的订单");
		console.log(this.props.orderData);
		console.log(this.props.totalNum);
		console.log(this.props.totalPrice);
		//1未付款  2未发货    3待收货    4待评价

		//订单的数据
		var orderItem = {
			orderID: new Date().getTime(),
			orderState: 4,
			totalNumber: this.props.totalNum,
			totalPrice: this.props.totalPrice,
			orderProductInfo: this.props.orderData.productInfo
		};
		//window.localStorage.getItem("orderData") == null
		
		//之前没有订单的话，让订单的数组等于一个空数组
		var orderArray = JSON.parse(window.localStorage.getItem("orderData")||"[]");
		
		//在订单列表里面添加当前订单
		orderArray.push(orderItem);
		
		//保存在localStorage里面
		console.log(orderArray)
		window.localStorage.setItem("orderData",JSON.stringify(orderArray))
		window.location.hash="#/order"
	}
	
	render () {
		return (
			<div className="confirm-footer">
				<p className="num-info">
					<span>共 <em> {this.props.totalNum}</em> 件，</span>
					<span>总金额 <em>${this.props.totalPrice}</em></span>
				</p>
				<p className="sub"><button onClick={()=>this.orderSubmit()} className="submit">提交订单</button></p>
			</div>
		)
	}
	
}

//我的订单   顶层组件
class ConfirmPage extends Component {
	constructor (props) {
		super(props);
		//现在本地储存里获取商品信息
		var data = window.localStorage.getItem("cartData");
		//格式转换	把字符串转化成json对象的格式
		data = JSON.parse(data);
		this.state  ={
			orderData: data,
			yunFei: 10
		}
		
	}
	toOrder () {
		window.location.hash="#/order"
	}
	render () {
		console.log(this.state.orderData)//成功获取到localStorage里面的信息
		var data = this.state.orderData;//防止下面在用的时候写太多的代码，先把他储存起来
		var allPrice = this.state.yunFei + data.totalPrice;
		console.log(allPrice)
		return (
			<div className="page" id="confirm-page">
				<Header title="确认订单" rightBtn={<a onClick={()=>this.toOrder()} className="myOrder border">我的订单</a>} />
				<Content hasFooter={true}>
					<div className="adress-info">收货地址:傻瓜省 傻瓜市 傻瓜县 傻瓜街 傻瓜小区  1号</div>
					<div className="order-info">
						<OrderProductInfo productInfo = {data.productInfo} />
						<div className="order-price">
							<p>运费: <em>${this.state.yunFei}</em></p>
							<p>实付款(含运费): <em>${allPrice}</em></p>
						</div>
						<textarea className="user-info" placeholder="信息备注"></textarea>
					</div>
				</Content>
				<ConfirmFooter totalNum = {data.totalNumber} orderData={data} totalPrice={allPrice}/>
			</div>
		)
	}
	
	
}

export default ConfirmPage
