/**
 * Created by Administrator on 2017/1/7.
 */
import {Header,Content,Footer} from "../components/common"
import React,{Component} from "react"
import "../css/more.css"


class MorePage extends Component {
    constructor(props) {
        super(props)
        this.state= {
            name :window.localStorage.getItem("userID")
        }
        var name= window.localStorage.getItem("userID")
        console.log((name))
    }

    render(){
        return (
            <div className="Page" id="morepage">
                <Header title="更多" />
                <Content hasFooter={true}>


                    <ul className="more-list">
	                    <li><a className="arrow-item" href="#login">登录<i>></i></a></li>
	                    <li><a className="arrow-item" href="#register">注册<i>></i></a></li>
                        <li><a className="arrow-item" href="#password">修改密码<i>></i></a></li>
                        <li><a className="arrow-item" href="#advice">用户反馈<i>></i></a></li>
                        <li><a className="arrow-item" href="#about">关于<i>></i></a></li>

                    </ul>
                </Content>
                <Footer active={4} />
            </div>
        )
    }
}
export default MorePage
