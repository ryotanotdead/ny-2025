import './style.css';
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './vuetify'; // Импорт Vuetify из vuetify.ts
const app = createApp(App);
app.use(vuetify); // Использование Vuetify
app.mount('#app');
