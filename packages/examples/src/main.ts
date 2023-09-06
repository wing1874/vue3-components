import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { Card } from '@wing/components';
import '@wing/components/dist/style.css';

const app = createApp(App);
app.use(Card);
app.mount('#app');
