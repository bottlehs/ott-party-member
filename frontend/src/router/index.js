import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const listView = id => () => import('../views/ListView').then(m => m.default(id))

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/netflix/:page(\\d+)?', component: listView('netflix') },
      { path: '/watcha/:page(\\d+)?', component: listView('watcha') },
      { path: '/wavve/:page(\\d+)?', component: listView('wavve') },
      { path: '/', redirect: '/netflix' }
    ]
  })
}
