import './style.css';
import '../node_modules/@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVuetify } from 'vuetify';
import { createApp } from 'vue';
import App from './App.vue';
const vuetify = createVuetify({ components: {
        ...components,
    },
    directives, });
const app = createApp(App);
app.use(vuetify);
app.mount('#app');
