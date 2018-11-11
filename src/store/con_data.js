import { INCREMENT_DATA, DECREMENT_DATA } from './mutation-types.js'

export default {
  state: {
    count: 1
  },

  mutations: {
    [INCREMENT_DATA] (state, n) {
      state.count += n
    },
    [DECREMENT_DATA] (state, n) {
      state.count -= n
    }
  },

  actions: {
    myIncrea (context, n) {
      context.commit('INCREMENT_DATA', n)
    },
    myDecrea (context, n) {
      context.commit('DECREMENT_DATA', n)
    }
  }
}
