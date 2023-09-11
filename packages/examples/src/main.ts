import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { Card } from '@wing/components';
// 开发调试时，不需要引入
import '@wing/components/dist/style.css';

const app = createApp(App);
app.use(Card);
app.mount('#app');
