import {Header,Content,} from "../components/common"
import React, {Component} from "react"
import "../css/collect.css"

class Collect extends Component {
	constructor (props) {
		super(props)
	}
	
	render () {
		return(
			<div className="page" id="collectPage">
				<Header title="我的收藏"/>
				<Content>
					<h3>致橡树</h3>
					  我如果爱你——<br/>
					　　绝不像攀援的凌霄花，<br/>
					　　借你的高枝炫耀自己；<br/>
					　　我如果爱你——<br/>
					　　绝不学痴情的鸟儿<br/>
					　　为绿荫重复单调的歌曲；<br/>
					　　也不止像泉源<br/>
					　　长年送来清凉的慰藉；<br/>
					　　也不止像险峰<br/>
					　　增加你的高度，衬托你的威仪。<br/>
					　　甚至日光。<br/>
					　　甚至春雨。<br/>
					　　不，这些都还不够！<br/>
					　　我必须是你近旁的一株木棉，<br/>
					　　作为树的形象和你站在一起。<br/>
					　　根，紧握在地下<br/>
					　　叶，相触在云里。<br/>
					　　每一阵风吹过<br/>
					　　我们都互相致意，<br/>
					　　但没有人<br/>
					　　听懂我们的言语。<br/>
					　　你有你的铜枝铁干，<br/>
					　　像刀、像剑<br/>
					　　也像戟；<br/>
					　　我有我红硕的花朵<br/>
					　　像沉重的叹息，<br/>
					　　又像英勇的火炬。<br/>
					　　我们分担寒潮、风雷、霹雳；<br/>
					　　我们共享雾霭、流岚、虹霓。<br/>
					　　仿佛永远分离，<br/>
					　　却又终身相依。<br/>
					　　这才是伟大的爱情，<br/>
					　　坚贞就在这里：不仅爱你伟岸的身躯，<br/>
					　　也爱你坚持的位置，脚下的土地。<br/>
				</Content>
			</div>
		)
	}
}

export default Collect
