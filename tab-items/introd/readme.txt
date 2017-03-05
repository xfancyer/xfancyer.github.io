自我介绍 h5微信场景

1. 弹性盒布局
常见弹性盒布局方式： header main footer 
	.box:{
		width:100%;
		height:100%;
		display:flex;
		flex-flow:column;
		.header:{
			width:100%;
			height:55px;
			background:pink;
			text-align:center;
			line-height:55px
		}
		.main:{
			width:100%;
			flex:1;
			background:#ccc;
			overflow:auto;
		}
		.footer:{
			width:100%;
			height:55px;
			display:flex;
			background:#abcdef;
			.fdiv:{
				flex:1;
				line-height:55px;
				text-align:center;
			}
		}
	}

2. css3自定义动画:

	@keyframes cc{
		0%{transform:rotate(0);}
		100%{transform:rotate(360deg);}
	}
	.cc{
		animation:cc 2s linear infinite;
	}