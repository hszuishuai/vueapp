<template>

<div id='home'>
	<mt-swipe :auto="4000">

  <mt-swipe-item v-for='item in lunbolist':key='item.url'><img :src='item.url'></mt-swipe-item>
	</mt-swipe>

	<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="/home/newlist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻简讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="/home/photolist">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">视频分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="/home/shoplist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商城</div>
		                </router-link>
		                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		  
		        </ul> 
</div>

</template>

<script type="text/javascript">

export default {
	data(){
		return{
			 lunbolist:[{"url":"http://7xi8d6.com1.z0.glb.clouddn.com/20171012073108_0y12KR_anri.kumaki_12_10_2017_7_30_58_141.jpeg"},
			    {"url":"http://7xi8d6.com1.z0.glb.clouddn.com/20171011084856_0YQ0jN_joanne_722_11_10_2017_8_39_5_505.jpeg"},
			    {"url":"http://7xi8d6.com1.z0.glb.clouddn.com/2017-10-10-sakura.gun_10_10_2017_12_33_34_751.jpg"}
			    ],
		};
	},
	created(){
		this.getLunbo();
		 this.$store.state.showNav=true;
	},
	methods:{
		getLunbo()
		{
	  
	  //    this.$http.get('https://www.apiopen.top/meituApi?page=1').then(function(data){
	  // 	console.log(data.body);
	  // })
		}
	}
}
	
</script>
<style  scoped>
	.mint-swipe{
		height: 200px;
	} 
	.mint-swipe img{
		width:100%;

	}
	#home ul{
		background:#ffffff;
	}
	#home ul li{
		border:none;
	}
	#home{
		height:500px;
	   
    }

</style>