/**
 * Created by Administrator on 2017/1/6.
 */
import {Header,Content} from "../components/common"
import React,{Component} from "react"
import "../css/advice.css"

class AdvicePage extends Component{

    constructor(props) {
        super(props)
        this.state={
            list:null
        }

    }
    butClick(){
        if (this.list="") {
            alert("内容不能为空")
           /* window.location.hash = "#/user-center"
            window*/
        }else {
            alert("您的意见我们已收到，我们会积极改进")
            window.location.hash = "#/user-center"
            window.localStorage.setItem("list" , this.state.list)
        }
    }


    render() {
        return (
            <div className="PasswordPage" id="userPage">

                <Header title="用户反馈" ></Header>
                <Content>
                    <textarea className="advice-list">{this.state.list}</textarea>
                    <button className="commit" onClick={()=>this.butClick()} >提交</button>
                    <span></span>
                </Content>
            </div>
        )
    }
}
export default AdvicePage
