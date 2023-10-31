import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import HomePage from '../components/HomePage.vue';
import RegistrationPage from '../components/RegistrationPage'
import CreateNewBlog from '../components/CreateNewblog'

const routes = [
  { path: '/', component: LoginPage },
  { path: '/home', component: HomePage },
  { path: '/register', component: RegistrationPage },
  { path: '/newblog', component: CreateNewBlog},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
