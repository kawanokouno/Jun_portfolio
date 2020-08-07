const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Top,
        },
        {
            path:'/about',
            component: About,
        },
        {
            path:'/works',
            component: Works,
        },
        {
            path:'/contact',
            component: Contact,
        }
    ]
})

const app = new Vue({
    router: router,
    data: {
        toggle: false,
    },
}).$mount('#app')