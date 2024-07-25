import { createWebHistory, createRouter } from "vue-router";
import MainHome from "./components/MainHome.vue";
import ShuttleGo from "./components/Bus/Shuttlebus.vue";
import CityGo from "./components/Bus/Citybus.vue";
import DeveloperNews from "./components/News/DeveloperNews.vue";
import Question from "./components/News/Question.vue";
import TransportationNews from "./components/News/TransportationNews.vue";

const routes = [
    {
        path: "/",
        component: MainHome,
    },
    {
        path: "/shuttle",
        component: ShuttleGo,
    },
    {
        path: "/city",
        component: CityGo,
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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
