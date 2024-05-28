import { createWebHistory, createRouter} from "vue-router";
import MainHome from "./components/MainHome.vue"
import shuttlego from "./components/Shuttlebus/ShuttlebusGoSchool.vue"
import citygo from "./components/Citybus/CitybusGoSchool.vue"
import DeveloperNews from "./components/News/DeveloperNews.vue"
import Question from "./components/News/Question.vue"
import TransportationNews from "./components/News/TransportationNews.vue"
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
        path: "/DeveloperNews",
        component: DeveloperNews,
    },
    {
        path: "/Question",
        component: Question,
    },
    {
        path: "/TransportationNews",
        component: TransportationNews,
    }
    ]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router