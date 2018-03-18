import {Header,Footer,Content} from  "../components/common"
import "../css/swiper-3.3.1.min.css"
import "../css/detail.css"
import React, {Component} from "react"
import {Tools} from "../tools/tools"

class DetailPage extends Component {
	constructor (props) {
		super(props);
		
		//需要的数据
		this.state  = {
			bannerList: [],
			productName: "",
			price: "",
			goodsID: "",
			number: ""
		};
		console.log(this.props.params.goodsID)
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{
			goodsID: this.props.params.goodsID
		},(data)=>{
			//如果有数据的话
			if(data){
				console.log(data)
				this.setState({
					bannerList: JSON.parse(data[0].imgsUrl),
					goodsName: data[0].goodsName,
					goodsID: data[0].goodsID,
					price: data[0].price,
					number: data[0].buynumber
				})
			}
		})
	}
	
	//添加到购物车
	addCart () {
		//判断用户是否登录，登录的话才能添加到购物车
		var userID = Tools.getUserID();
		userID && $.get("http://datainfo.duapp.com/shopdata/updatecar.php",
		{
			userID: userID,goodsID: this.state.goodsID,number: 1},function (data) {
				console.log(data);
				if (data == 1) {
					alert("添加成功！")
				}else{
					alert("添加失败！")
				}
			})
	}
	
	//点击购物车，进入购物车页面   判断用户是否登录，登录的话才能跳转到购物车
	toCart () {
		if (Tools.getUserID()) {
			window.location.hash="#/cart"
		}else{
			window.location.hash = "#/login"
		}
	}
	
	render () {
		return(
			<div className="page" id="detail-page">
				<Header title="商品详情页" rightBtn={<a className="border" onClick={()=>this.toCart()} href="javascript:;">购物车</a>}></Header>
				<Content>
					<div ref="swiper-container" className="swiper-container" style={{width: "180vw",marginLeft: "-40vw",position: "relative"}}>
						<div className="swiper-wrapper">
							{
								this.state.bannerList.map((ele,index)=><div key={index} className="swiper-slide">
								<img src={ele}/>
							</div>)
							}
						</div>
					</div>
					
					<div ref="pagination" className="swiper-self-pagination"></div>
					<div className="text-info">
						<div className="p-name">{this.state.goodsName}</div>
						<div className="p-price">${this.state.price}</div>
						<div className="p-number">购买人数:{this.state.number}</div>
					</div>
					<div className="detail-footer">
					<div className="look-wrap">
						<ul>
							<li><a className="check" href={"#/proDetail/"+this.state.goodsID}>查看商品详情</a></li>
						</ul>
						
					</div>
					<div className="add-wrap">
						<button className="add-cart" onClick={()=>this.addCart()}>添加到购物车</button>
					</div>
				</div>
				</Content>
			</div>
		)
	}
	componentDidMount () {
		this.swiper = new Swiper(this.refs["swiper-container"],{
			pagination: this.refs.pagination,
			slidesPerView: "3",
			loop: true,
			autoplay: 5000
		})
	}
	componentDidUpdate () {
		//让swiper更新
		this.swiper.update()
		this.swiper.reLoop()
	}
}

export default DetailPage