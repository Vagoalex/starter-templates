import { createApp } from "vue";
import { createPinia } from "pinia";
import MyApp from "@/MyApp.vue";
import router from "@/router";
import "@/shared/assets/styles/style.scss";

const pinia = createPinia();
const app = createApp(MyApp);

app.use(router);
app.use(pinia);

app.mount("#app");
