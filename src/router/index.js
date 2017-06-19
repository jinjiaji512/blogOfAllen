import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import Game from '@/components/Game'
import Blog from '@/components/Blog'
import Message from '@/components/Message'
import PageTransition from '@/components/PageTransition'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
Vue.use(Router)
Vue.use(VueResource)
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageTransition',
      component: PageTransition, // 引入页面切换组件
      children: [
        {
          path: '/',
          name: 'Hello',
          component: Hello
        }, {
          path: '/index',
          name: 'index',
          component: Index
        }, {
          path: '/game',
          name: 'game',
          component: Game
        }, {
          path: '/blog',
          name: 'blog',
          component: Blog
        }, {
          path: '/message',
          name: 'message',
          component: Message
        }
      ]
    }
  ]
})
