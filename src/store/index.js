import { createStore } from 'vuex'

export default createStore({
  state: {
    count:10,
    requiredAuth:false
  },
  getters: {
    GetCount: state => {
        return state.count;
    },
    GetAuth: state => {
        return state.requiredAuth;
    },
  },
  mutations: {
    increment (state, payload) {
      state.count += payload.amount
    },
    decrement (state, payload) {
      state.count -= payload.amount
    },
    auth (state, payload) {
      state.requiredAuth= payload.status
    }
  },
  actions: {
  },
  modules: {
  }
})
