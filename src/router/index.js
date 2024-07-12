import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import HomeView from '../views/HomeView.vue'; // Adjust path as per your project structure
import AboutView from '../views/AboutView.vue'; // Adjust path as per your project structure
import MathsQuestions from '../components/MathsQuestions.vue'; // Adjust path as per your project structure
import BiologyQuestions from '../components/BiologyQuestions.vue'; // Adjust path as per your project structure
import ChemistryQuestions from '../components/ChemistryQuestions.vue'; // Adjust path as per your project structure
import PhysicsQuestions from '../components/PhysicsQuestions.vue'; // Adjust path as per your project structure
import Dashboard from '../components/Dashboard.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },{
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/maths',
    name: 'maths',
    component: MathsQuestions
  },
  {
    path: '/biology',
    name: 'biology',
    component: BiologyQuestions
  },
  {
    path: '/chemistry',
    name: 'chemistry',
    component: ChemistryQuestions
  },
  {
    path: '/physics',
    name: 'physics',
    component: PhysicsQuestions
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
