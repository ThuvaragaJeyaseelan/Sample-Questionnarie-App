import { createApp } from 'vue';
import App from './App.vue';
import { BootstrapVueNext } from 'bootstrap-vue-next';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home from './views/HomeView.vue';
import About from './views/AboutView.vue';
import Login from './views/Login.vue'; // Ensure Login component is imported
import Register from './views/Register.vue';
import Dashboard from './components/Dashboard.vue';
import MathsQuestions from './components/MathsQuestions.vue';
import BiologyQuestions from './components/BiologyQuestions.vue';
import ChemistryQuestions from './components/ChemistryQuestions.vue';
import PhysicsQuestions from './components/PhysicsQuestions.vue';


// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard },
  { path: '/maths', component: MathsQuestions },
  { path: '/biology', component: BiologyQuestions },
  { path: '/chemistry', component: ChemistryQuestions },
  { path: '/physics', component: PhysicsQuestions }
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Create the Vue app
const app = createApp(App);
app.use(BootstrapVueNext);
app.use(router);
app.mount('#app');
