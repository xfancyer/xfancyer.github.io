import {Header,Content,} from "../components/common"
import React, {Component} from "react"
import "../css/about.css"

class About extends Component {
	constructor (props) {
		super(props)
	}
	
	render () {
		return(
			<div className="page" id="aboutPage">
				<Header title="关于"/>
				<Content>
					<h3>神女峰</h3>
					在向你挥舞的各色手帕中<br/>
					是谁的手突然收回<br/>
					紧紧捂住了自己的眼睛<br/>
					当人们四散离去，谁<br/>
					还站在船尾<br/>
					衣裙漫飞，如翻涌不息的云<br/>
					江涛<br/>
					高一声<br/>
					低一声<br/>
					美丽的梦留下美丽的忧伤<br/>
					人间天上，代代相传<br/>
					但是，心<br/>
					真能变成石头吗<br/>
					为眺望远天的杳鹤<br/>
					错过无数次春江月明<br/>
					沿着江岸<br/>
					金光菊和女贞子的洪流<br/>
					正煽动新的背叛<br/>
					与其在悬崖上展览千年<br/>
					不如在爱人肩头痛哭一晚<br/>
				</Content>
			</div>
		)
	}
}

export default About
