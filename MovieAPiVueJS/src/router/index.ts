import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/moviedetails/:id',
      name: 'moviedetails',
      component: () => import('../views/MovieDetails.vue'),
      props: (route) =>({id:route.params.id})
    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import('../views/MovieView.vue')
    },
    {
      path: '/search/:query',
      name: 'SearchResults',
      component: () => import('../views/SearchResults.vue'),
      props: (route) => ({
        query : route.params.query
      })
    },
    {
      path: '/CinemaPlan',
      name: 'cinemaplan',
      component: () => import('../views/CinemaPlan.vue')
    }

  ]
})



export default router