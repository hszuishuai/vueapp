<template>
	<div class="comment">
		<h2>发表评论</h2>
		<hr>
		<textarea placeholder="请输入你的评论(最多120个字)" maxlength="120" v-model='comment'></textarea>
		<mt-button type="danger" size='large' @click='addcomment'>发表评论</mt-button>
		<div v-for='(item,index) in list' :key='index'>
			<div class="comment-title">
				<span>第{{index+1}}楼</span>
				<span>发表时间{{item.time}}</span>
			</div>
			<p>评论:{{item.comment}}</p>

		</div>

	</div>
</template>
<script type="text/javascript">
export default{
	data(){
      return{
      	list:[],
      	comment:'',
      	time:'',
      }
	},
	methods:{

   addcomment(){
   	var date=new Date();
     var Y=date.getFullYear();
     var M=date.getMonth()+1;
     var D=date.getDate();
     var H=date.getHours();
     var I=date.getMinutes();
     var S=date.getSeconds();
    this.time=`${Y}-${M}-${D} ${H}:${I}:${S}`;  
   	this.list.push({comment:this.comment,time:this.time});
   	this.comment='';

    }
	}
}

	
</script>
<style>
	.comment{
		margin-top: 50px
	}
	.comment-title{
	display:flex;
	justify-content: space-between;
	background:rgba(1,1,1,0.2);
	}
	.comment-title>p{
		padding:20px;
		color:hotpink;
	}

</style>