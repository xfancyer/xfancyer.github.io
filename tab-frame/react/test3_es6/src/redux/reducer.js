//reducer是用来生成state的

const reducer =(state={"listData":[1,2,3]},active)=>{
	//active 事件，行为，active.type(事件行为)的类型
	switch (active.type) {
		case "ADD_ITEM"://必须大写
		console.log("添加内容")//需要添加一个新的state
		var newState = {};
		newState.listData = state.listData.concat(["新的数据"]);//[1,2,3,"新的数据"]
		return newState;
		break;
		default: 
		return state
	}
};

export default reducer
