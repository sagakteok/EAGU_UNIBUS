import { createWebHistory, createRouter} from "vue-router";
import MainHome from "./components/MainHome.vue"
import shuttlego from "./components/Shuttlebus/ShuttlebusGoSchool.vue"
import citygo from "./components/Citybus/CitybusGoSchool.vue"
import news from "./components/News/DeveloperNews.vue"
const routes = [
    {
        path: "/",
        component: MainHome,
    },
    {
        path: "/shuttle",
        component: shuttlego,
    },

    {
        path: "/city",
        component: citygo,
    },
    {
        path: "/news",
        component: news,
    },
    ]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router