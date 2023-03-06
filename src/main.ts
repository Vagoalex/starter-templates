import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./shared/assets/styles/style.scss";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
