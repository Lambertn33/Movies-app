import { createApp } from 'vue'
import App from './App.vue'
import TheNavbar from './components/nav/TheNavbar.vue'

import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App);

app.component('the-navbar', TheNavbar);

app.mount('#app');
