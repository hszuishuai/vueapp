<template>
	<div class="top">

  <!-- 顶部header区域 -->

<mt-header fixed title="固定在顶部"></mt-header>

<!-- 中间是router-view区域-->
<transition>
<router-view></router-view>
</transition>


	
<!-- 底部Tabber区域 -->
<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/serach">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcart">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
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
	
		},
	linkExactActiveClass:'mui-active'
		
};
	
</script>
<style scoped>
.top{
	padding-top: 40px;
	overflow-x: hidden;
	padding-bottom: 50px;

}
.v-enter{
	opacity: 0;
	transform:translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform:translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;
}


</style>