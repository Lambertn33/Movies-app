import { createApp } from 'vue';

import App from './App.vue';

import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/components/home/HomeView.vue';

import MoviesList from '@/components/movies/MoviesList.vue';

import MyFavourites from '@/components/movies/MyFavourites';

import TheNavbar from '@/components/nav/TheNavbar.vue';


import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/movies', component: MoviesList },
    { path: '/favouriteMovies', component: MyFavourites }
  ]
})

app.component('the-navbar', TheNavbar);

app.use(router);

app.mount('#app');
