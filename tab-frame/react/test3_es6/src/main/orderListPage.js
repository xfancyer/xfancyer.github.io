import {Header,SubHeader,Content} from "../components/common"
import React, {Component} from "react"
import "../css/orderListPage.css"


//subHeader里面的内容再写成一个组件
class StateList extends Component {
	constructor (props) {
		super (props)
	}
	changeState (index) {
		console.log(index);
		this.props.selectOrderState(index)
	}
	render () {
		var data = this.props.stateData||["全部","未支付","待发货","待收货","待评价"];
		return (
			<ul className="order-state-list">
				{
					data.map((ele,index)=><li id="order-li" key={index} onClick={()=>this.changeState(index)}>
						{ele}
					</li>)
				}
			</ul>
		)
	}
}

//此组件可复用，与confirm里面的OrderProductInfo一样，所以可以放在公共的组件里
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

//按钮组件
class OrderBtns extends Component {
	constructor (props) {
		super(props)
	}
	
	render () {
		//1未付款  2未发货    3待收货    4待评价
		console.log(this.props.orderState);
		var state = this.props.orderState;
		
		return(
			<div className="order-btns">
				{
                    state==1?<div>
                        <p><em>待付款</em></p>
                        <p><button>立即付款</button></p>
                        <p><button>取消订单</button></p>
                    </div>:state==2?<div>
                        <p><em>未发货</em></p>
                        <p><button>提醒发货</button></p>
                    </div>:state==3?<div>
                        <p><em>待收货</em></p>
                        <p><button>确认收货</button></p>
                    </div>:<div>
                        <p><em>待评价</em></p>
                        <p><button>去评价</button></p>
                    </div>
                }
			</div>
		)
	}
}

//Content里面的内容可以再写成一个组件
class OrderList extends Component {
	constructor (props) {
		super (props)
	}
	
	render () {
		var data = this.props.orderData||[];
		console.log(data);//所有的订单
		return (
			<ul className="order-list">
				{
					data.map((ele,index)=><li key={index}>
						{/*
						  ele  是每一条订单的信息
						  ele.orderProductInfo是每条订单的商品信息
						  */}
						<OrderProductInfo productInfo={ele.orderProductInfo}/>
						<div className="total-info">
							<span>共<em> {ele.totalNumber} </em>件</span>
							<span>商品实付: <em>$ {ele.totalPrice}</em></span>
						</div>
						<OrderBtns orderState={ele.orderState} />
					</li>)
				}
			</ul>
		)
	}
	
}

//顶层组件（只能有一个）
class OrderListPage extends Component {
	constructor (props) {
		super(props);
		var data =  JSON.parse(window.localStorage.getItem("orderData")||"[]")
		this.state = {
			orderData: data
		}
		//console.log(data)
		//当点击切换状态的时候，需要对所有的订单里面的内容进行过滤
		this.selectOrderState = this.selectOrderState.bind(this)
	}
	selectOrderState (index) {
		//获取所有的订单数据
		var data = JSON.parse(window.localStorage.getItem("orderData")||"[]");
		//通过index过滤得到要显示的数据
		if (index!=0) {
			data = data.filter(function (ele) {//filter ES5中的方法，接收2个参数index和ele(这里用不到index可不用传)
				return ele.orderState == index
			})
		}
		//改变组件的state,让组件重新渲染
		this.setState({
			orderData: data
		})
	}
	
	render () {
		return (
			<div className="page" id="order-list-page">
				<Header title="我的订单" />
				<SubHeader>
					<StateList selectOrderState={this.selectOrderState}/>
				</SubHeader>
				<Content>
					<OrderList orderData = {this.state.orderData}/>
				</Content>
				
			</div>
		)
	}
}

export default OrderListPage