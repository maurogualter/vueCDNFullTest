import { createRouter, createWebHistory } from 'vue-router';
import FoodItems from '../FoodItems.vue'
export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/:pathMatch(.*)*', component: app },
        {
            path: '/fooditems',
            name: 'FoodItems',
            component: FoodItems,
        },
    ]
})