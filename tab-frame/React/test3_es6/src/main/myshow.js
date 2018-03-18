/**
 * Created by Administrator on 2017/1/6.
 */
import {Header,Content,Footer} from "../components/common"
import React,{Component} from "react"
import "../css/user-center.css"
import oPic from "../images/head.jpg"

class UserCenterPage extends Component {
    constructor(props) {
        super(props)
        this.state= {
             name :window.localStorage.getItem("userID")
        }
        var name= window.localStorage.getItem("userID")

    }

    render(){
        return (
            <div className="Page" id="user-center-page">
                 <Header title="个人中心" hasSearch={true} rightBtn={<a className="border">充值</a>}/>
                 <Content hasFooter={true}>
                      <div className="top">
                          <div className="pic"><img  src={oPic}/></div>
                          <div className="name">昵称:<span>{this.state.name}</span></div>
                          <div className="price">余额:<em>0</em></div>
                      </div>
                     <div></div>
                      <ul className="center-list">
                          <li><a className="arrow-item" href="#/order">我的订单<i>></i></a></li>
                          <li><a className="arrow-item" href="#/ticket">我的优惠券<i>></i></a></li>
                          <li><a className="arrow-item" href="#/history">浏览记录<i>></i></a></li>
                          <li><a className="arrow-item" href="#collect">我的收藏<i>></i></a></li>
                      </ul>
                </Content>
                <Footer active={3} />
            </div>
        )
    }
}
export default UserCenterPage

