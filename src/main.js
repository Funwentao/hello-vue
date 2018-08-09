import Vue from 'vue';
import App from './app.vue';
import vueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(vueRouter)

new Vue({
    render: h => h(App)
}).$mount('#app');