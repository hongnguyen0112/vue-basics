import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue'
import TransactionsPage from './pages/TransactionsPage.vue'
import TransactionsDetail from './pages/TransactionsDetail.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

const routes=[
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/transactions",
        name:"transaction-route",
        component: TransactionsPage
    },
    {
        path: "/transactions/:id",
        name: "transactions-details-route",
        component: TransactionsDetail,
        props: true
    },
    {
        path: "/ts",
        redirect: "/transactions"
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFoundPage
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;