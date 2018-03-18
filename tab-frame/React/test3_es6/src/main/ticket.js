import {Header,Content,} from "../components/common"
import React, {Component} from "react"
import "../css/ticket.css"

class Ticket extends Component {
	constructor (props) {
		super(props)
	}
	
	render () {
		return(
			<div className="page" id="ticketPage">
				<Header title="我的优惠券"/>
				<Content>
					<h3>始祖鸟</h3>
					从垣古 俯瞰我们<br/>
					天空 它无痕<br/>
					丛林莽原都在他翅翼的阴影下<br/>
					鸣禽中它哑口<br/>
					众鸟只是复杂地 模仿<br/>
					他单纯的沉默<br/>
					丑陋 迟钝 孤单<br/>
					屡遭强敌和饥寒<br/>
					毁灭于洪荒<br/>
					传奇于洪荒<br/>
					他倒下的姿势一片模糊<br/>
					因之渐渐明亮的是背景<br/>
					那一幕混沌的黎明原始的曙光<br/>
					用王冕似的名字<br/>
					将他<br/>
					铐在进化史上 据说这是永生<br/>
					没有自传 也不再感想<br/>
				</Content>
			</div>
		)
	}
}

export default Ticket