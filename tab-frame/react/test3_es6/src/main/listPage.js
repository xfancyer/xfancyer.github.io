//接收暴露出来的模块
import { Header, Footer, Content , SubHeader} from "../components/common.js"
import ProductList from "../product-list/product-list.js"
import {ScrollOptions} from "../config/config.js"
import React, {Component} from "react"
import ReactIScroll from "react-iscroll"
/*import "../css/common.css"*/
import "../css/list.css"

console.log(ScrollOptions)

/*商品列表分类*/
class ClassList extends Component {
	constructor (props) {
		super(props)
	}
	handleClick (id) {
		console.log(id);
		this.props.changeClassId(id);
	}
	render () {
		return (
			<ul className="class-list">
				{
					this.props.classData.map((ele, index)=><li onClick={()=>this.handleClick(ele.classID)} key={index}>{ele.className}</li>)
				}
			</ul>
		)
	}
}

ClassList.defaultProps = {
	classData: []
}

/*商品页面的顶层组件（只能有一个）*/
class ListPage extends Component {
	constructor (props) {
		console.log(props);//让react 的Component帮你实现组件的方法
		super(props);
		this.state = {
			classData: [],
			productData: []
		};
		//设置默认的数据请求选项
		this.classID = undefined;
		this.linenumber = 5;
		this.pageCode = 0;
		this.refresh = false;
		//请求列表数据
		$.get("http://datainfo.duapp.com/shopdata/getclass.php",(data)=>{
			if (typeof data === "string") {
				data = JSON.parse(data)
			}
			console.log(data);
			this.setState({
				classData: data
			})
		},"json");//zepto的版本太低，不支持直接写，"json",所以上面进行了判断
		
		//请求商品数据
		this.getProductData();
		
		//改变this的指向
		this.onScrollEnd = this.onScrollEnd.bind(this)
		
	}
	
		//当点击二级头部时，根据分类来获取数据（组件之间的相互通信）
		changeClassId (id) {
			console.log(id);
			console.log(this);
			this.classID = id;
			this.pageCode = 0;//重置页面
			this.getProductData()
			//滚动条回到顶部
		}
		
	getProductData () {
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{
			"classID": this.classID,
			"linenumber": this.linenumber,
			"pageCode": this.pageCode
		},(data)=>{
			//刷新需要覆盖之前的数据，加载需要和之前的数据合并
			if(data){
                this.setState({
                    productData:this.pageCode==0?data:this.state.productData.concat(data)
                });
                //如果this.pageCode==0证明需要刷新，覆盖之前的数据，否则和之前的数据合并
            }
			
		});	
		}
	onScrollEnd (myScroll) {//当滚动条结束的时候，发生的事件
		//myScroll是ReactIScroll 提供的操作滚动条的对象
		console.log("end");
		if (this.refresh) {
			//需要刷新就刷新
			this.pageCode = 0;
			this.getProductData();
			this.refresh = false;
		}else if (myScroll.y-myScroll.maxScrollY <= 20) {//需要当前的滚动位置和最大滚动数值（加载更多）
			console.log("加载更多");
			this.pageCode++;
			this.getProductData();
		}
	}
	onScroll (myScroll) {
		console.log("scroll")
		if (myScroll.y > 60) {
			console.log("刷新");
			this.refresh = true;
		}
	}
	toCart () {
		window.location.hash="#/cart"
	}
	
	render () {
		return(
			<div className="page" id="list-page">
				<Header title="列表" hasBack={true} rightBtn={<a className="border" onClick={()=>this.toCart()}>购物车</a>}/>
				<SubHeader>
					<ClassList changeClassId={(id)=>this.changeClassId(id)} classData={this.state.classData}/>
				</SubHeader>
				<Content hasFooter={true} hasSubHeader={true}>
				
					 <ReactIScroll iScroll={IScroll} 
					 			   options = {ScrollOptions}
					 			   onScroll={(myScroll)=>this.onScroll(myScroll)}
					 			   onScrollEnd = {this.onScrollEnd}
					 			  >
						
						<ProductList productData={this.state.productData}/>
					</ReactIScroll>

				</Content>
				<Footer active={1}/>
			</div>
		)
	}
	
}

export default ListPage



