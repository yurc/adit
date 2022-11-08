import { createRouter, createWebHistory } from 'vue-router'
import { ref,computed} from 'vue'
import { useStore } from 'vuex'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/login',
    component: LoginView,
    name: 'login'
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeResolve(async (to, from, next) => {
 // Check if the user is authenticated.
 let requiredAuth = false //computed(() => store.state.requiredAuth);
 console.log(`Route to`, to);
 console.log(`Route from`, from);
 // Redirect user to the login page if not authenticated.
 if  ((to.meta.requiredAuth && !requiredAuth) || (to.path='/login' && requiredAuth)) {
   next({
    path: '/login'
  })
 }

 next();
});

export default router
