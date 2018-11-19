##单独封装一个comment.vue评论子组件
1.先创建一个单独的comment.vue组件模板
2.在需要commen组件的页面中，先手写导入comment组件，注册为自己的子组件
“import comment from '/comment.vue'”
3.在父组件，使用"components"属性，将刚才导入comment，注册为自己的子组件
4.在注册子组件时候，注册名称，一标签，在页面应用