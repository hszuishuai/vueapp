<template>
	<div>
		<p class="title">{{newinfo['title']}}</p>
		<p>
			<span>发表时间:{{newinfo.ptime}}</span>
			<span>点击数：0次</span>
		</p>

		<div class="mui-slider">
  <div class="mui-slider-group">
    <div class="mui-slider-item" v-for='item in newinfo.picInfo':key='item.url'>
    	<a href="#"><img :src='item.url'></a>
    </div>
  </div>
</div>
<div class="conter">
	{{newinfo.digest}}
</div>
<comment-box ref='comment-box'></comment-box>
</div>
</template>
<script type="text/javascript">
//导入子组件
import comment from '../subcomment/comment.vue'

export default{
	data(){
		return{
			id:this.$route.params.id,
			newinfo:[],
		}
	},
	created(){
		this.axios.get('https://www.apiopen.top/journalismApi').then((response)=>{
	
				 this.result=(response.data.data);
 					
			     var data=[];
				  for( var i in this.result){
				  	for(var j=0;j<this.result[i].length;j++){
				  		data.push(this.result[i][j]);
		
				  	}
				  
				  }
		
				  this.newinfo=data[this.id];
				
				 // console.log(this.newlist);

        		});
		this.$store.state.showNav=true;

	},
	components:{
		'comment-box':comment
	}
 }
	
</script>

<style>
div{

}
.title{
	color:red;
	font-size:20px;
   text-align:center;
	width:100%
}
p:nth-child(2){
	color:black;
	display:flex;
	justify-content: space-between;

}
.conter{
	text-indent:25px;
}
	
</style>