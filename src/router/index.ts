import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/Layouts/MainMenuLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
        meta: {
          pageTitle: 'Home'
        }
      },
      {
        path: '/investForm',
        name: 'investForm',
        component: () => import('@/views/GeneralInformationPage.vue'),
        meta: {
          pageTitle: 'InvestForm'
        }
      },
      {
        path: '/business',
        name: 'business',
        component: () => import('@/views/BusinessPage.vue'),
        meta: {
          pageTitle: 'Business Model'
        }
      },
      {
        path: '/funding',
        name: 'funding',
        component: () => import('@/views/FundingPage.vue'),
        meta: {
          pageTitle: 'Funding'
        }
      },
      {
        path: '/techproduct',
        name: 'techproduct',
        component: () => import('@/views/TechProduct.vue'),
        meta: {
          pageTitle: 'Tech & Product'
        }
      },
      {
        path: '/token',
        name: 'token',
        component: () => import('@/views/TokenPage.vue'),
        meta: {
          pageTitle: 'Token'
        }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach((to) => {
  // current page view title
  document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})

export default router
