import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import ListarTarefas from '@/components/ListarTarefas'
import CriarTarefas from '@/components/CriarTarefas'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/lista',
      name: 'ListarTarefas',
      component: ListarTarefas
    },
    {
      path: '/criar',
      name: 'CriarTarefas',
      component: CriarTarefas
    }
  ]
})
