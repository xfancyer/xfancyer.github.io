/**
 * Created by Administrator on 2017/1/4.
 */

// import "../css/login.css"
// import React,{Component} from "react"
//
//
// class LoginList extends Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             showPassword:false,
//             remmeber:true,
//             userID:window.localStorage.getItem(this.userID),
//             password:window.localStorage.getItem(this.pwd),
//         };
//     }
//
//     changeShowPassword (){
//         this.setState({
//             showPassword:!this.state.showPassword
//         })
//     }
//     filterPassword (ev){
//         this.setState({
//             password:ev.target.value.replace(/sb/g,"")
//         });
//     }
//     filterUsername (ev){
//         this.setState({
//             username:ev.target.value.replace(/m/g,"*")
//         });
//     }
//     loginIn (){
//         console.log(this.state.userID);
//         console.log(this.state.password);
//         window.localStorage.setItem(this.state.userID,this.state.password);
//
//     }
//     selectReact(){
//         console.log(ev.target.value)
//         console.log(ev.target.selectedIndex)
//     }
//     render(){
//
//          var passwordType = this.state.showPassword?"text":"password";
//         return (
//             <ul className="login-list">
//                 <li>
//                     <input type="text"  value={this.state.userID} onChange={this.filterUsername.bind(this)} className="text-bar" />
//                 </li>
//                 <li>
//                     <input type={passwordType} onChange={this.filterPassword.bind(this)} className="text-bar" value={this.state.password}  />
//                 </li>
//
//                 <li className="showpas">
//                     <label>
//                         <input type="checkbox" onClick={this.changeShowPassword.bind(this)} />
//                         <span>显示密码</span>
//                     </label>
//                     <a className="go-forget">忘记密码？</a>
//                 </li>
//                 <li className="rempas">
//                     <label>
//                         <input type="checkbox" />
//                         <span>记住密码自助登录</span>
//                     </label>
//
//
//                 </li>
//                 <li>
//                     <button className="login-in" onClick={this.loginIn.bind(this)}>登录</button>
//                 </li>
//                 <li>
//                     <a className="go-reg" href="#/register">注册</a>
//                 </li>
//             </ul>
//         )
//
//
//     }
// }
//
// export default LoginList