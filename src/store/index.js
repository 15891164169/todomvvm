import Vue from 'vue'
import Vuex from 'vuex'

import conData from './con_data.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    con_data: conData
  }
})
