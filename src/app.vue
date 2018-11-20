<template>
	<div class="top">

  <!-- 顶部header区域 -->

<mt-header  v-if="$store.state.showNav" fixed title="固定在顶部">
	<span class="mui-icon mui-icon-back"></span>
</mt-header>

<!-- 中间是router-view区域-->
<transition>
<router-view></router-view>
</transition>


	
<!-- 底部Tabber区域 -->
<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-t " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-t" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item-t" to="/serach">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</router-link>
			<router-link class="mui-tab-item-t" to="/shopcart">
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
	// linkExactActiveClass:'mui-active'
	created(){
		this.$store.state.showNav=true;
	}
		
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
.mui-bar-tab .mui-tab-item-t {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
 }
 .mui-bar-tab .mui-tab-item-t .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-t .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}


</style>