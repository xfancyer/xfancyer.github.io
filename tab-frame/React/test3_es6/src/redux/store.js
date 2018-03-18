
import {createStore} from "redux"
import reducer from "./reducer"

//创建一个store
const store = createStore(reducer);

export default store

//需要创建储存state的仓库
//创建的时候，需要默认的state(reducer提供)
//创建完仓库，可以通过store.getState()方法获取state

//通过仓库   获取state

console.log(store.getState());
