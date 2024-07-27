import { createApp } from 'vue'
import './style.css'
import { registerPlugins } from "./plugins/index.js";
import App from './App.vue'
import router from "./router.js";
import VueMobileDetection from 'vue-mobile-detection';

const app = createApp(App)
app.use(router)
app.use(VueMobileDetection)

registerPlugins(app)

app.mount('#app')