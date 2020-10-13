import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {    
    newTodos: JSON.parse(localStorage.getItem('newTodos') || '[]')
  },
  mutations: {
    createTodo(state, newTodo){
      state.newTodos.push(newTodo)
      localStorage.setItem('newTodos', JSON.stringify(state.newTodos))
    }
  },
  actions: {
    createTodo({commit}, newTodo){
      commit('createTodo', newTodo)
    }
  },
  getters:{
    newTodos: s => s.newTodos,
    taskById: s => id => s.newTodos.find(t => t.id === id)    
  },
  modules: {
  }
})
