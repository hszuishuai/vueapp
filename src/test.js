//这是node 中向外暴露成员的形式：
//module.exports={}
//
//在es6中，也规定了es6中如何导入和导出模块
//
//使用export default 和export
//
//

export default {
	name: 'zs',
	age: '23'
}


//在一个模块中 export default只允许暴露一次

export var title = '小星星'
export var title1 = '小星星1'

// export 只能使用{}的形式来接受
//可以同时使用export暴露成员
//export 可以暴露多个成员