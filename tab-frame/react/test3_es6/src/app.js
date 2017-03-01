
//接收暴露出来的模块

import React, {Component} from "react"
import ReactDOM from "react-dom"
import {Router,Route,hashHistory,Link} from "react-router"
//console.log(hashHistory)

import IndexPage from "./main/indexPage"
import ListPage from "./main/listPage"
import DetailPage from "./main/detailPage"
import CartPage from "./main/cartPage"
import ConfirmPage from "./main/confirmPage"
import OrderListPage from "./main/orderListPage"
import ProDetailPage from "./main/proDetailPage"
import History from "./main/historyMeyPage"
import Collect from "./main/collect"
import Ticket from "./main/ticket"
import About from "./main/about"

import LoginPage from "./main/loginPage"
import RegisterPage from "./main/registerPage"
import UserCenterPage from "./main/myshow"
import PasswordPage from "./main/password"
import AdvicePage from "./main/advicePage"
import MorePage from "./main/MorePage"

ReactDOM.render(<Router history={hashHistory}>
	
	<Route path="/" component={IndexPage}  />
    <Route path="list" component={ListPage}  />
    <Route path="detail(/:goodsID)" component={DetailPage} />
	<Route path="cart" component={CartPage} />
	<Route path="confirm" component={ConfirmPage} />
	<Route path="order" component={OrderListPage} />
	<Route path="proDetail(/:goodsID)" component={ProDetailPage} />
	<Route path="history" component={History}/>
	<Route path="collect" component={Collect}/>
	<Route path="ticket" component={Ticket}/>
	<Route path="about" component={About}/>
	
	<Route path="login" component={LoginPage}  />
    <Route path="user-center" component={UserCenterPage} />
    <Route path="register" component={RegisterPage}  />
    <Route path="password" component={PasswordPage}  />
    <Route path="advice" component={AdvicePage}  />
    <Route path="more" component={MorePage}  />
	
</Router>,document.getElementById("root"))


if (module.hot) {//加上这句话之后，js文件改动后就不用手动刷新了，他会自动刷新，但css文件得手动刷新
	module.hot.accept();
}
