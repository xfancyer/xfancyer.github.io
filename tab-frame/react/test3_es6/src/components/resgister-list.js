/**
 * Created by Administrator on 2017/1/5.
 */

/*import "../css/register.css"
import React,{Component} from "react"


class RegisterList extends Component {
    constructor(props) {
        super(props);
        this.state={
            showPassword:false,
        };
        var $uName = $("#userName");
        var $psw = $("#userPassword");
        var $pswS = $("#userPasswordSure");




    }

    onBlueusername (e){
        console.log(e.target.value)
        var reg = /\w{6,18}/;
        if(e.target.value == ""){
           $(this).attr("placeholder","用户名不能为空！");
        }else if(!reg.test(e.target.value)){
            $(e.target.value).val("");
            $(this).attr("placeholder","用户名格式非法！");
        }
    }
    render(){


        return (
            <ul className="register-list">
                <li>
                    <span>账户名称:</span>
                    <input type="text"  onBlur={(e)=>this.onBlueusername(e)}  onChange={(e)=>this.onBlueusername(e)}  placeholder="请输入账户" value={this.state.username}  className="text-bar" id="username"/>
                </li>
                <li>
                    <span>登录密码:</span>
                    <input type="password" placeholder="请输入密码" className="text-bar" value={this.state.password} id="userPassword"  />
                </li>
                <li>
                    <span>确认密码:</span>
                    <input type="password" placeholder="请输入密码" className="text-bar" value={this.state.password} id="userPasswordSure"  />
                </li>
                <li>
                    <a className="to-reg">注册</a>
                </li>
            </ul>
        )


    }
}

export default RegisterList*/


