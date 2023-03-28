import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  mutations: {
    store(state) {
      if (localStorage.getItem("userInfo")) {
        state.userInfo = {}
        state.userInfo = JSON.parse(localStorage.getItem("userInfo"));
      }
    }
  },
  actions: {
    Store({ commit, state }) {
      commit("store");
    },
    signin(){},
    signup({ commit, state }, obj, table){
      obj.createdAt = moment();
      return new Promise((resolve, reject) => {
        
      })
    },
  },
  modules: {
  }
})
