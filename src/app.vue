<template>
	<div class="top">

  <!-- 顶部header区域 -->

<mt-header fixed title="固定在顶部"></mt-header>

<!-- 中间是router-view区域-->


	
<!-- 底部Tabber区域 -->
<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>




	</div>
</template>
<script type="text/javascript">

//导入Toast组件
// import { Toast } from 'mint-ui';

export default{
	data(){
		return{
			
		};
	},
	
	methods:{
	
		}
		
};
	
</script>
<style scoped>
.top{
	padding-top: 40px;
}

</style>