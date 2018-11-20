<template>
	<div>



<!-- ly插件 -->

<!-- <div class="demo">
  <ly-tab
    v-model="selectedId"
    :items="items"
    :options="options"
    @change="handleChange">
  </ly-tab>
  <h3>请选择移动端调试模式或者真机调试</h3>
  <!-- 通过指定fixBottom为true实现固定在底部的tab -->

<!-- </div>  -->

<!-- ly插件 -->


	<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<router-link class="mui-control-item " to="/recommend" tag='li' data-wid="tab-top-subpage-1.html">
							推荐
						</router-link>
						<li  v-for='(items,index) in vieo' :key='index' class="mui-control-item "  tag='li' data-wid="tab-top-subpage-1.html" @click='getid(items.data.id)'>
							{{items.data.title}}
			
						</li>
			
					</div>
				</div>

			</div>

<div class="videolist" v-for="(list,index) in vieolist" :key="index">
	<p>{{list.data.content.data.title}}</p>
	<video width="80%" height="200px" controls :src="list.data.content.data.playUrl">
   </video>
<!--    {{list.data.content.data.playUrl}}
 --></div>
		</div>
</template>
<script type="text/javascript">
//导入mui的js文件
import mui from '../../lib/mui/js/mui.min.js'


export default{
	data(){
		return{
			vieo:'',
			vieolist:'',
		}
  
	},
	mounted(){

	mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
	},

// 百度视频api接口
	created(){
	     this.gettype();
		 this.getid(4);
		 this.$store.state.showNav=true;

	},
	methods:{
		gettype(){
				this.axios.get('https://api.apiopen.top/videoCategory').then((respond) => {
			// console.log(respond.data.result.itemList);
			this.vieo=respond.data.result.itemList;
		})},
		getid(id){
			this.axios.get('https://api.apiopen.top/videoCategoryDetails?id='+id).then((respond) => {
			 // console.log(respond.data.result);
			 this.vieolist=respond.data.result;
			// this.vieolist=respond.data.result.itemList;
			// console.log(respond.data.result[0])
		})
		}
	},
	filters:{ type:
		function(item){
       return item(1,2)
	}
	},
}
	
</script>
<style>

#slider.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{
	color:red!important;

}
*{
touch-action:pan-y;
}
.videolist{
	position:relative;
}
.videolist:not(:first-child){
	text-align:center;
}	

.videolist>P{
	color:#ffffff;
	position:absolute;
	top:20px;
	left:15%;
}
</style>