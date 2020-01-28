import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import store from './store'
import Axios from 'axios'
import HelloWorld from './components/pages/HelloWorld.vue';
import Home from './components/pages/Home.vue';
import Student from './components/pages/Student.vue';
import Redirect from './components/pages/Redirect.vue';
import About from './components/pages/About.vue'
import Login from './components/pages/Login.vue'
import Secure from './components/pages/Secure.vue'
import Register from './components/pages/Register.vue'
import Empowerment from './components/pages/Empowerment.vue'
import Sponsorship from './components/pages/Sponsorship.vue'
import Terms from './components/pages/Terms.vue'

const routes = [{
        path: '/hello',
        component: HelloWorld,
        meta: {
            layout: 'app'
        }
    },
    {
        path: '/',
        component: Home,
        name: 'home',
        meta: {
            layout: 'app'
        }
    }, {
        path: '/student/:id',
        component: Student,
        meta: {
            layout: 'app'
        }
    }, {
        path: '/redirect',
        component: Redirect,
        name: 'redirect',
        meta: {
            layout: 'app'
        }
    }, {
        path: '*',
        component: require('./components/pages/404.vue').default,
        name: '404',
        meta: {
            layout: 'app'
        }
    }, {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            layout: 'app'
        }
    }, {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            layout: 'app'
        }
    }, {
        path: '/secure',
        name: 'secure',
        component: Secure,
        meta: {
            layout: 'app',
            requiresAuth: true
        }
    }, {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            layout: 'app'
        }
    }, {
        path: '/register/empowerment',
        name: 'empowerment',
        component: Empowerment,
        meta: {
            layout: 'app'
        }
    }, {
        path: '/register/sponsorship',
        name: 'sponsorship',
        component: Sponsorship,
        meta: {
            layout: 'app'
        }
    }, {
        path: '/terms',
        name: 'terms',
        component: Terms,
        meta: {
            layout: 'app'
        }
    }
]

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
    routes // short for `routes: routes`
})

router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start()
    }
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

router.afterEach(() => {
    // to, from
    // Complete the animation of the route progress bar.
    NProgress.done()
})

export default router;