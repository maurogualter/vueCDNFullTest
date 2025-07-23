import { createApp, ref } from 'vue';
import router from './router.js'

const app = createApp({
    setup() {
        const message = ref('Hello Vue!');
        const message2 = ref('Hello Vue! - v2');
        return {
            message,
            message2,
        }


    }
});
/*
const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/:pathMatch(.*)*', component: app }]
})
*/
app.use(router)

document.addEventListener('DOMContentLoaded', () => app.mount('#app'));