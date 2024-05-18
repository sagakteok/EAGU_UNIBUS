import { createWebHistory, createRouter} from "vue-router";
import MainHome from "../src/components/MainHome.vue"

const routes = [
    {
        path: "/",
        name: MainHome,
        component: MainHome,
    }]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;