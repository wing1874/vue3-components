import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { Card } from '@wing/components';

const app = createApp(App);
app.use(Card);
app.mount('#app');
