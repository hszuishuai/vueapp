<template>
	<div>
		
	<div class="mui-card-header mui-card-media" v-for='(item,index) in newlist' :key='index' >
		<div class="new-img"  v-for='list in item.picInfo' :key='list.url'>
		<router-link :to="'/home/newinfo/'+index"><img :src='list.url'></router-link>
	</div>
	<div class="mui-media-body">
		{{item.title}}
	<p class="title">
		<span>发表于{{item.ptime}} </span>
		<span>点击次数:0次</span>
	</p>
	
</div>
</div>

</div>
</template>
<script type="text/javascript">
export default{
        data(){
        	return{
        		newlist:[],
        		result:[],

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
		
				  this.newlist=data;
				
				 // console.log(this.newlist);

        		});
        	this.$store.state.showNav=true;

        },
        methods:{
        
        }

}
	
</script>
<style>
.title{
	display: flex;
	justify-content: space-between;
	font-size:12px;
	color: red; 

	
}
	
.new-img img{
		width:100%;
		height:200px;
		margin-bottom:10px 
	}
</style>