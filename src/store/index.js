import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todosCompleted:[],
    todosUnCompleted:[],
    selectedTask: {}
  },
  mutations: {
    addCards(state, todosData){
      state.todosCompleted = todosData.filter(v => v.completed)
      state.todosUnCompleted = todosData.filter(v => !v.completed)
    },
    changeCards(state, todoList){
      state.todos = todoList 
    },
    changeCompTodos(state, todos){
      state.todosCompleted = todos
    },
    changeUnCompTodos(state, todos){
      state.todosUnCompleted = todos
    },
    selectTask(state, task){
      state.selectedTask = state.selectedTask === task ? {} : task
    },
    createTask(state, task){
      state.todosUnCompleted.push(task)
    },
    deleteTask(state, task){
      if(task.completed){
        state.todosCompleted = state.todosCompleted.filter(toDo => toDo !== task)
      }
      else{
        state.todosUnCompleted = state.todosUnCompleted.filter(toDo => toDo !== task)
      }
      state.selectedTask = {}
    }
  },
  actions: {
    async getTodos({commit}){
      try {
        const {data} = await axios.get('?start=185&_limit=5')
        commit('addCards', data)
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    countTodos(state){
      return state.todosUnCompleted.length
    },
    selectedTask(state){
      return state.selectedTask
    }
  },
  modules: {
  }
})
