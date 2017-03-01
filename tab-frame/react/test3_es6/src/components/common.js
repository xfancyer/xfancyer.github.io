/*
 *Created by dongjing on 2016/12/29.
  */
import "../css/css.css"
import React,{Component} from "react"

//头部组件
class Header extends Component {
	constructor (props) {
		super(props)
	}
	goBack () {
		window.history.go(-1);
	}
	render () {
		return (
			<div className="header">
				<ul className="header-ul">
					<li>
						{this.props.hasBack?<a href="javascript:;" onClick={()=>this.goBack()}>{"<"}</a>:""}
					</li>
					<li>{this.props.title}</li>
					<li>
						{this.props.rightBtn||(this.props.hasSearch?<a>搜索</a>:"")}
					</li>
				</ul>
			</div>
		)
	}
}

Header.defaultProps = {
	hasBack: true
};


class Footer extends Component{
	constructor (props) {
		super (props)
	}
	render () {
		return (
			<div className="footer">
				<ul className="footer-ul">
				{
					this.props.footerData.map((ele, index)=><li key={index}>
					<a href={ele.path} className = {index == this.props.active?"active":""}>{ele.text}</a>
					</li>)
				}
				</ul>
			</div>
		)//<div className="footer">底部</div>
	}
}

//尾部组件
Footer.defaultProps = {
	footerData: [
		{text:"首页","path":"#/"},
		{text:"列表","path":"#/list"},
		{text:"购物车","path":"#/cart"},
		{text:"我的","path":"#/user-center"},
		{text:"更多","path":"#/more"},
	]
}

//中间内容组件
class Content extends Component{
	constructor (props) {
		super(props)
	}
	render () {
		let contentStyle = {
            "overflowY":this.props.hasIScroll?"hidden":"auto"
        };
        let contentClass = "content"
            +(this.props.hasFooter?" has-footer":"")
            +(this.props.hasSubHeader?" has-sub-header":"");
        //this.props.hasIScroll  如果需要iscroll就必须引入iscroll的结构
		//return <div className="content">{this.props.children}</div>
		return <div className="content" className={contentClass} style={contentStyle}>
			{this.props.hasIScroll?
				<div className="scroll-wrap" ref="scrollWrap">
					<div className="scroller">
						{this.props.children}
					</div>
				</div>:this.props.children
			}
		</div>
	}
	//组件加载完后
	componentDidMount () {
		
		//react-iscroll插件
		
		//组件渲染完成以后获取scroll-wrap,创建iscroll
		//若果需要iscroll在创建
		this.props.hasIScroll&&(this.myScroll = new IScroll(this.refs.scrollWrap))
		//console.log(this.myScroll)
	}
	//组件数据更新完之后
	componentDidUpdate () {
		//组件更新的时候也更新iscroll
		this.props.hasIScroll&&this.myScroll.refresh()
	}
}

//二级列表
class SubHeader extends Component{
	constructor (props) {
		super (props) 
	}
	render () {
		return <div className="sub-header">{this.props.children}</div>
	}
}



export { Header, Footer, Content, SubHeader }

