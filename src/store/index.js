import Vue from 'vue'
import Vuex from '../myVuex'
// import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '杨明',
    count: 100
  },
  mutations: {
    add (state, value) {
      state.count += value
    },
    sub (state, value) {
      const _count = state.count - value
      state.count = _count < 0 ? 0 : _count
    },
    changeName (state, value) {
      state.name = value
    }
  },
  actions: {
    actionsChangeName ({ commit }, value) {
      setTimeout(_ => {
        commit('changeName', value)
      }, 1000)
    }
  },
  getters: {
    countType (state) {
      return state.count % 2 === 1 ? '奇数' : '偶数'
    }
  },
  modules: {
  }
})
