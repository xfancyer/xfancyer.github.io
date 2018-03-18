import {Header,Footer,Content,SubHeader} from  "../components/common"
import React, {Component} from  "react"
import "../css/cartPage.css"
import {Tools} from "../tools/tools"



class CartList extends Component　{
    constructor(props){
        super(props)
    }
    render () {
    	console.log(this.props.cartData)
    	return(
    		<ul className="cart-list">
    			{
    				this.props.cartData.map((ele,index)=><li className="cart-item" key={index}>
    					<a href={"#/detail/"+ele.goodsID} className="pic"><img src={ele.goodsListImg}/></a>
    					<div className="info">
    						<p className="p-name">{ele.goodsName}</p>
    						<p className="price">价格:<em>${ele.price}</em></p>
    						<div className="num-wrap">
    							<span  onClick={()=>this.props.changeData(-1,index)} className="minus num-bnt">-</span>
	    						<input type="text" value={ele.number} />
	    						<span  onClick={()=>this.props.changeData(1,index)} className="plus num-bnt">+</span>
    						</div>
    					</div>
    						<a onClick={()=>this.props.changeData(0,index)} className="delete" href="javascript:;">删除</a>
    					
    				</li>)
    			}
    		</ul>
    	)
    }
}
//当没有cartData的防止报错
CartList.defaultProps = {
	cartData: []
}

class CartPage extends Component {
	constructor (props) {
		super(props);
		this.state = {
			cartData: [],
			totalNumber: 0,
			totalPrice: 0
		};
		var id = Tools.getUserID();
		id && $.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID: id},(data)=>{
			console.log(data);
			this.setState({
				cartData: data
			});
			this.getTotal(data)
		});
		
		
		this.changeData = this.changeData.bind(this)
		
	}
	
	changeData (type,index) {
		console.log(this);
		console.log(type);
		console.log(index);
		var data = this.state.cartData;
		var id = data[index].goodsID;
		var number = data[index].number;
		if (type) {
			//加减
			number = type + number*1;
			if (number <= 1) {
				console.log("00000000");
				number = 1;
			}
			//把number赋值给data[index]
			data[index].number = number;
		}else{
			//删除
			number = 0;
			data.splice(index,1);
		}
		this.setState({
			cartData: data
		});
		this.getTotal(data)
		//数据请求
		
		//把向后台提交的数据放在点击事件里,当发生点击事件时就会触发
		var sendData = { "userID": "lirongrong", "goodsID": id, "number": number };
		$.get( "http://datainfo.duapp.com/shopdata/updatecar.php", sendData, function( data ){
				console.log(data);//成功传送数据到后台
			}, "json" )
		
	}
	
	getTotal (data) {
		var number = 0;
		var price = 0;
		for (var i = 0; i < data.length; i++) {
			number += data[i].number*1;
			price += data[i].number*data[i].price
		}
		this.setState({
			totalNumber:number,
            totalPrice:price
		})
	}
	
	toConfirm () {
		window.localStorage.setItem("cartData",JSON.stringify({
			totalNumber: this.state.totalNumber,
			totalPrice: this.state.totalPrice,
			productInfo: this.state.cartData
		}))
		window.location.hash="#/confirm"
	}
	render () {
		return(
			<div className="page" id="cart-page">
				<Header title="购物车" rightBtn={<a className="border" onClick={()=>this.toConfirm()} href="javascript:;">结算</a>}></Header>
				<SubHeader>
					<div className="cart-bar">
						<span className="total-num">总数: <em>{this.state.totalNumber}</em></span>
						<span className="total-price">总金额: <em>${this.state.totalPrice}</em></span>
					</div>
				</SubHeader>
				<Content hasFooter={true} hasSubHeader={true}>
					<CartList changeData={this.changeData} cartData = {this.state.cartData} />
				</Content>
				<Footer active="2"/>
			</div>
		)
	}
	
}


export  default  CartPage