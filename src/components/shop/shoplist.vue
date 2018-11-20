<template>
	
<div id='serach-box'>
	<div class="serach-top">
		<div class=serach-left><span class="glyphicon glyphicon-menu-left"></span></div>
		<input class='input-box' type="text" name="">
		<img class="Eid" src='../../images/3.png' width="20px" height="20px">
	</div>
<ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media">
        <a  tag='li' href="#">
            <img class="mui-media-object mui-pull-left" src="../../images/1.jpg">
            <div class="mui-media-body">
                <p class="shop-title">华硕a豆(adol) 13.3英寸四面窄边框轻薄笔记本电脑</p>
                <p class='mui-ellipsis'>公益宝贝</p>
                <div class="shop-info">
                <p class='shop-price'>￥22.2</p>
                <span class="span-left">22人付款</span>
                <span class="span-left">嘉兴</span>
              </div>
            </div>
        </a>
    </li>
</ul>
</div>

</template>
<script type="text/javascript">
	export default{
 data(){
 	return{

 	}
 },
 created(){
 	this.$store.state.showNav=false;
 },
 methods:{

 },

	}
</script>
<style scoped>
#serach-box{
 margin-top: -40px;
width:100%;
height: 40px;
background:#faa500;
text-align: center;
position:absolute;
top:40px;

}
.glyphicon-menu-left:before{
	color: #ffffff;
	font-size: 16px;
}
.input-box{
	border:2px solid #ffffff;
	width: 60%;
	border-radius:10px;
	height:20px;
	 margin-top: 8px;
}
.serach-top{
	display:flex;
	justify-content: space-between;
}
.Eid{
	 margin: 10px 10px;
}
.serach-left{
	 margin-top: 10px;
}
.shop-price{
	color:red;
}
.mui-media-body{
	width:60%;
}
.mui-table-view-cell>a:not(.mui-btn){
	    white-space:initial;

}
.shop-title{
	text-align: left;
}
.mui-table-view .mui-media-object{
	max-width: 120px;
	height: 120px;
}
.mui-ellipsis{
	margin-top: 30px;
	white-space:initial;
	width: 26%;
	border-radius: 10px;
	border:1px solid red;
	font-size: 10px;
	color: red;
	text-align: center;
	height: 17px;

}
.shop-info{
	display:flex;
}
.shop-info:nth-chlid(){
	margin-right: 5px;
}
.span-left{
	margin-left: 13px;
}
</style>