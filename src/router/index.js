import Vue from 'vue'
import Router from 'vue-router'
import Edit from '@/components/back/Edit'
import BackHome from '@/components/back/BackHome'
import Article from '@/components/front/Article'
import Home from '@/components/front/Home'
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
  mode:'history',//history模式是去掉浏览器地址栏中'#'
  routes: [
    {//默认路由
      path:'/',
      redirect:'/home'//重定向
    },
    {
      path:'/home',
      component:Home
    },{
      path:'/edit',
      component: Edit
    },{
      path:'/article',
      component: Article
    },{
      path:'/login',
      component:Login
    },{
      path:'/backHome',
      component:BackHome
    }
  ]
})
//路由导航守卫控制访问权限
router.beforeEach((to,from,next)=>{
  //to将要访问的路径 ，from从哪个路径跳转过来，next是一个放行函数，next()表示放行，next("/home")表示强制跳转
  if(to.path ==='/login' || to.path === '/home'|| to.path === '/article' ) return next()
  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})
export default router
