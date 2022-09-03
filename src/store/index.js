import Vue from 'vue'
import Vuex from 'vuex'
import allFriend from '@/data/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
    friends: allFriend
  },
  getters: {
  },
  mutations: {
    setSearchFriend(state,value){
      console.log('state', value)
      state.search = value
    },
    setAddFriend(state, friend){
      console.log('friend', friend)
      state.friends.push(friend)
    }
  },
  actions: {
    addFriend({commit}, body){
      try {
        commit('setAddFriend', body)
      } catch (error) {
        throw new Error(error)
      }
    }
  },
  modules: {
  }
})
