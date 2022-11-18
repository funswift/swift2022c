import { createRouter, createWebHistory } from "vue-router"
import topPage from "./components/topPage.vue"
import eatPage from "./components/eatPage.vue"
import spaPage from "./components/spaPage.vue"
import tourPage from "./components/tourPage.vue"
import newsPage from "./components/newsPage.vue"
import searchResult from "./components/searchResult.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'top',
            component: topPage,
        },
        {
            path: '/eat',
            name: 'eat',
            component: eatPage,
        },
        {
            path: '/spa',
            name: 'spa',
            component: spaPage,
        },
        {
            path: '/tour',
            name: 'tour',
            component: tourPage,
        },
        {
            path: '/news',
            name: 'news',
            component: newsPage,
        },
        {
            path: '/searchResult/:search',
            name: 'searchResult',
            component: searchResult,
            props: true
        }
    ],
})