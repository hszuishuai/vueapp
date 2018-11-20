import Vue from 'vue'
import home from './components/home.vue'
import member from './components/member.vue'
import serach from './components/serach.vue'
import shopcart from './components/shopcart.vue'
import newlist from './components/new/newlist.vue'
import newinfo from './components/new/newinfo.vue'
import photolist from './components/photos/photolist.vue'
import shoplist from './components/shop/shoplist.vue'

Vue.use(VueRouter)

// 1.导入vue-router包
import VueRouter from 'vue-router'


//2.创建路由对象


export default new VueRouter({

	data() {
		return {

		}
	},
	routes: [{
			path: '/',
			redirect: '/home',
			meta: {
				// 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
				index: 0,
				showFooter: true
			}
		}, {
			path: '/home',
			component: home
		}, {
			path: '/member',
			component: member
		}, {
			path: '/serach',
			component: serach
		}, {
			path: '/shopcart',
			component: shopcart
		}, {
			path: '/home/newlist',
			component: newlist
		}, {
			path: '/home/newinfo/:id',
			component: newinfo
		}, {
			path: '/home/photolist',
			component: photolist
		}, {
			path: '/home/shoplist',
			component: shoplist
		},

	]


})


//把路由对象暴露出去