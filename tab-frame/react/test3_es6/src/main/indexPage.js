import {Header,Footer,Content,SubHeader} from  "../components/common"
import React, {Component} from  "react"
import "../css/index.css"
import "../css/swiper-3.3.1.min.css"


class IndexPage extends Component　{
    constructor(props){
        super(props);
        
        //需要的数据
        this.state = {
        	bannerList: []
        }
        
        
        //获取首页数据
        $.getJSON("http://datainfo.duapp.com/shopdata/getBanner.php?callback=?",(data)=>{
        	console.log(data)
        		this.setState({
        			bannerList: JSON.parse(data[0].goodsBenUrl)
        		})
        })
        
    }
    render (){
        return (
            <div className="page" id="index-page">
            	<Header hasBack={false} title="首页"/>
            	<Content>
            		<div ref="swiper-container" className="swiper-container">
	            		<div className="swiper-wrapper">
	            			{
	            				this.state.bannerList.map((ele,index)=><div  className="swiper-slide" key={index}>
		            				<img src={ele}/>
		            			</div>)
	            			}
		            	</div>
		            	<div ref="pagination" className="swiper-pagination"></div>
		            </div>
		            <div className="letter">首页没有太多内容啊!</div>
            	</Content>
            	<Footer active="0"/>
            </div>
        )
    }
    
    componentDidMount () {
    	this.swiper = new Swiper( this.refs["swiper-container"], {
    		loop: true,
    		pagination: this.refs.pagination,
    		direction: "horizontal",
    		slidesPerView: "1",
    		autoplay: 1000,
    		autoplayDisableOnInteraction : false
    	})
    }
    componentDidUpdate () {
		//让swiper更新
		this.swiper.update()
		this.swiper.reLoop()
	}
}
export  default  IndexPage