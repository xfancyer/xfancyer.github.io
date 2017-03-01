/**
 * Created by Administrator on 2017/1/6.
 */
import {Header,Content} from "../components/common"
import React,{Component} from "react"
import "../css/password.css"

class PasswordPage extends Component{

    constructor(props) {
        super(props)
        this.state={
            nameError:null,
            pwdError:null,
            repwdError:null
        }
        this.pwd=null;
        this.repwd=null;
    }
    nameChange(ev){
        this.name=ev.target.value;
        if(this.name.length<6){
            this.setState({
                nameError:"密码不能少于6位"
            })
        }else{
            this.setState({
                nameError:""
            })
        }
    }
    pwdChange(ev){
        this.pwd=ev.target.value;
        if(this.pwd.length<6){
            this.setState({
                pwdError:"密码不能少于6位"
            })
        }else{
            this.setState({
                pwdError:""
            })
        }
    }
    repwdChange(ev){
        this.repwd=ev.target.value;
        if(this.pwd!=this.repwd){
            this.setState({
                repwdError:"两次密码输入不一致"
            })
        }else{
            this.setState({
                pwdError:""
            })
        }
    }
    butClick(){
        window.location.hash="#/login"
        alert("暂不支持修改密码功能")
    }

    render() {
        return (
            <div className="PasswordPage" id="PasswordPage">

                <Header title="修改密码" ></Header>
                <Content>
                    <ul className="password-list">
                        <li>
                            <input type="password" placeholder="请输入原密码" onBlur={(ev)=>this.nameChange(ev)} className="text-bar" />
                        </li>
                        <li className="error"><span>{this.state.nameError}</span></li>
                        <li>
                            <input type="password"   placeholder="请输入新密码"  onBlur={(ev)=>this.pwdChange(ev)} className="text-bar"/>
                        </li>
                        <li className="error"><span>{this.state.pwdError}</span></li>
                        <li>
                            <input type="password"   placeholder="请再次输入新密码" onBlur={(ev)=>this.repwdChange(ev)} className="text-bar"/>
                        </li>
                        <li className="error"><span>{this.state.repwdError}</span></li>
                        <li>
                            <button className="save-in" onClick={()=>this.butClick()} >保存</button>
                        </li>
                    </ul>
                </Content>
            </div>
        )
    }
}
export default PasswordPage




