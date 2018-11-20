##单独封装一个comment.vue评论子组件
1.先创建一个单独的comment.vue组件模板
2.在需要commen组件的页面中，先手写导入comment组件，注册为自己的子组件
“import comment from '/comment.vue'”
3.在父组件，使用"components"属性，将刚才导入comment，注册为自己的子组件
4.在注册子组件时候，注册名称，一标签，在页面应用

## 发表评论
1.把文本框做一个双向绑定
2.判断评论是否为空，提示用户评论不能为空
3.把评论提交给服务器
4.发表评论ok后，重新加载评论列表

##图片分享 
1.顶部滑动条
2.底部图片列表

解决滑动条冲突： “Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accesse”


滑动条组件需刷新滑动解决方法： 放入mounted生命函数中

底部tabber不能正常的切换组件解决方法：修改tabberclass样式名

图片缩虐图 使用vue-preview插件
