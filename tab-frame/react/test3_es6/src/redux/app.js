import React,{Component} from "react"
import ReactDOM from "react-dom"

import store from  "./store"



class List extends Component {
    constructor(props){
        super(props)

    }
    render() {
        return (
            <ul className="list">
                {
                    this.props.listData.map((ele,i)=><li key={i}>{ele}</li>)
                }
            </ul>
        )
    }
}

class MyButton extends Component {
    constructor(props){
        super(props);

      //  this.handleClick= this.handleClick.bind(this)
    }
    handleClick(){
        //console.log(this)
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.handleClick()}>{this.props.children}</button>
               {/* <button onClick={function(){
                    this.handleClick()
                }.bind(this)}>{this.props.children}</button>*/}
            </div>



        )
    }
}

class ListWrap extends Component {
    constructor(props){
        super(props);
        this.state=store.getState()
    }
    render() {
        return (
            <div className="wrap">
                <List listData={this.state.listData} />
                <MyButton>添加内容</MyButton>
            </div>
        )
    }

}


ReactDOM.render(<ListWrap/>,document.getElementById("root"));
