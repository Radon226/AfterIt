import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        date: '04/06/21',
        description: 'Software prototype do',
        done: false
      },
      {
        id: 2,
        date: '04/14/21',
        description: 'Presentation',
        done: false
      },
      {
        id: 3,
        date: '04/05/21',
        description: 'Physics group homework',
        done: false
      },
    ],
    snackbar: {   //properties of snackbar
      show: false,
      text: ''
    }
  },
  mutations: {  //mutations can only contain two parameter variables

    //can't commit mutation with a mutation so use 'actions'
    //in other words, can't activiate snackbar in addTask
    addTask(state, payload) {  
      let newTask = {                 
        id: Date.now(),
        date: payload.date,
        description: payload.description,
        done: false
      }
      state.tasks.push(newTask)
    },
     //changes state of task, check or not check task
    doneTask(state, id) {      
      console.log('id: ', id)
      let task = state.tasks.filter(task => task.id === id)[0]  //grabs task based on id
      task.done = !task.done
    },
    //deletes task, is used in 'actions'
    deleteTask(state, id) {       
      console.log('delete task')
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    updateTask(state, payload) {
      console.log('payload: ', payload)
      let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.description = payload.description
      task.date = payload.date
    },

    //if a snackbar was displayed and a new one shows up right after, make previous snackbar disappear quickly 
    //and have it replaced
    //if no snackbar was shown, then there is no delay (it will appear for a while)
    showSnackbar(state, text) {   //shows notficiation with {text}
      let timeout = 0    //in millisec
      if(state.snackbar.show) {   
        state.snackbar.show = false
        timeout = 300
      }
      setTimeout(() => {
        state.snackbar.show = true
        state.snackbar.text = text
      }, timeout)
    },
    //Is used to close the snackbar when the 'Close' btn is clicked, yuse in 'Snacbar.vue'
    hideSnackbar(state) {
      state.snackbar.show = false
    }
  },
  actions: {  //always have commit in parameter
    addTask( {commit}, payload) {  //commit addTask and showSnackbar saying 'Task added!'
      commit('addTask', payload)
      commit('showSnackbar', 'Task added!')
    },
    deleteTask( {commit}, id) {  //commit deleteTask and showSnackbar saying 'Task deleted!'
      commit('deleteTask', id)
      commit('showSnackbar', 'Task deleted!')
    },
    updateTask( {commit}, payload) {  //commit addTask and showSnackbar saying 'Task added!'
      commit('updateTask', payload)
      commit('showSnackbar', 'Task updated!')
    }
  },
  modules: {
  }
})
