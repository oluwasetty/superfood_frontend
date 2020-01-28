import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store/index'
import Default from './components/layouts/App.vue'
import AdminLayout from './components/layouts/Admin.vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)
Vue.config.productionTip = false
Vue.component('app-layout', Default)
Vue.component('admin-layout', AdminLayout)
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')