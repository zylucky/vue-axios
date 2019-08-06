import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    // mode: "history",
    routes: [
        {
            path: "/",
            component: resolve => require(['../pages/index.vue'],resolve),
            meta: {
                title: '首页'
            }
        },
        {
            path: "/index",
            name: "index",
            component: resolve => require(['../pages/index.vue'],resolve),
            meta: {
                title: '首页'
            }
        }
    ]
});