import Vue from 'vue'
import home from './components/home.vue'
import member from './components/member.vue'
import serach from './components/serach.vue'
import shopcart from './components/shopcart.vue'

Vue.use(VueRouter)

// 1.导入vue-router包
import VueRouter from 'vue-router'


//2.创建路由对象


export default new VueRouter({

	data() {
		return {

		}
	},
	router: [{
		path: '/home',
		component: 'home'
	}, {
		path: '/member',
		component: 'member'
	}, {
		path: '/serach',
		component: 'serach'
	}, {
		path: '/shopcart',
		component: 'shopcart'
	}, ]


})


//把路由对象暴露出去