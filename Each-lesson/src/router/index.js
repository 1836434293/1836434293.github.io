import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const Search =()=>import('@/components/Search')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',redirect: '/shop/home',
    name: 'Home',
    component: Home,
    meta:{
      isshow:true
    }
  },
  {
    path:'/Search',
    name:'Search',
    component:Search,
    meta:{
      isshow:true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      isshow:true
    }
  },
  {
    path: '/one',
    component: () => import('../views/One.vue'),
    meta:{
      isshow:true
    }
  },
  {
    path:'/shop',
    component: () => import('../components/Shop.vue'),
    meta:{
      isshow:true
    },
    children:[
      {
       path:'kc',
       component:() => import('../components/Kc.vue'),
       meta:{
         isshow:true
       }
     },
     {
       path:'yk',
       component:() => import('../components/Yk.vue'),
       meta:{
         isshow:true
       }
     },
     {
       path:'lx',
       component:() => import('../components/Lx.vue'),
       meta:{
         isshow:true
       }
      
     },
     {
       path:'loding',
       component:() => import('../components/Loding.vue'),
       meta:{
         isshow:false
       }
     },
     {
       path:'password',
       component:() => import('../components/FindThePassword.vue'),
       meta:{
         isshow:false
       }
     },
     {
      path:'reg',
      component:() => import('../components/RegistrationOfBoarding.vue'),
      meta:{
        isshow:false
      }
    },{
      path:'courses',
      component:() => import('../components/Courses.vue'),
      meta:{
        isshow:false
      }
    },
    {
     path:'simulation',
     component:() => import('../components/SimulationModelTest.vue'),
     meta:{
       isshow:true
     }
   },
     {
      path:'home',
      component:() => import('../components/Home.vue'),
      meta:{
        isshow:true
      }
    },
    {
      path:'szpassword',
      component:() => import('../components/Szpassword.vue'),
      meta:{
        isshow:false
      }
    },
    {
      path:'user',
      component:() => import('../components/User.vue'),
      beforeEnter: (to, from, next) => {
        var temp = JSON.parse(window.localStorage.getItem('token'))
        if(temp){
          next()
        }else{
          alert('需要先登录')
          next('loding')
        }
      },
      meta:{
        isshow:true
      }
    },
    {
      path:'details',
      component:() => import('../components/Details'),
      meta:{
        isshow:false
      }
    }
    ]
  },{
    path:'/kd',
    component: () => import('../views/Kd.vue'),
    meta:{
      isshow:true
    },
    children:[
      {
        path:'qd',
        component:() => import('../views/Kd/Qd.vue'),
        meta:{
          isshow:true
        }
      },
      {
        path:'hx',
        component:() => import('../views/Kd/Hx.vue'),
        meta:{
          isshow:true
        }
      }, {
        path:'sw',
        component:() => import('../views/Kd/Sw.vue'),
        meta:{
          isshow:true
        }
      }, {
        path:'jx',
        component:() => import('../views/Kd/Jx.vue'),
        meta:{
          isshow:true
        }
      }, {
        path:'sx',
        component:() => import('../views/Kd/Sx.vue'),
        meta:{
          isshow:true
        }
      }, {
        path:'wl',
        component:() => import('../views/Kd/Wl.vue'),
        meta:{
          isshow:true
        }
      },
      {
        path:'english',
        component:() => import('../views/Kd/English.vue'),
        meta:{
          isshow:true
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
