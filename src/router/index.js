import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import City from '@/components/city/City'
import Public from '@/common/Public'
import Detail from '@/components/detail/Detail'
import Week from '@/components/week/Week'
Vue.use(Router)
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)
export default new Router({
  routes: [
    {
      path: '/',
      component:Home
    },
    {
      path:'/city',
      component:City
    },
    {
      path:'/public',
      component:Public
    },
    {
      path:'/detail/:id',
      name:'DetailLink',
      component:Detail
    },{
      path:'/week/:id',
      name:'WeekLink',
      component:Week

    }
  ]
})
