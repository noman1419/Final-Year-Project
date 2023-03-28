import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import app from '../views/app.vue'
import dashboard from '../views/dashboard.vue'
import my_task from '../views/myTask.vue'
import reports from '../views/reports.vue'
import projects from '../views/projects.vue'
import inbox from '../views/inbox.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/contact.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import( '../views/signup.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import( '../views/signin.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    redirect: '/app/dashboard',
    component: dashboard
  },
  {
    path: '/my_task',
    name: 'my_task',
    redirect: '/app/my_task',
    component: my_task
  },
  {
    path: '/reports',
    name: 'reports',
    redirect: '/app/reports',
    component: reports
  },
  {
    path: '/projects',
    name: 'projects',
    redirect: '/app/projects',
    component: projects
  },
  {
    path: '/app',
    name: 'app',
    component: app,
    children:[{
      path: '/app/dashboard',
      name: 'dashboard',
      components: {app: dashboard}
    },{
      path: '/app/my_task',
      name: 'my_task',
      components: {app: my_task}
    },{
      path: '/app/reports',
      name: 'reports',
      components: {app: reports}
    },{
      path: '/app/projects',
      name: 'projects',
      components: {app: projects}
    },{
      path: '/app/projects/:id',
      name: 'projects',
      components: {app: projects}
    },{
      path: '/app/inbox',
      name: 'inbox',
      components: {app: inbox}
    },{
      path: '/app/inbox/:id',
      name: 'inbox',
      components: {app: inbox}
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
