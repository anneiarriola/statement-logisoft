import Vue from 'vue'
import Vuex from 'vuex'
import allFriend from '@/data/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
    friends: allFriend,
    detailFriend: {}
  },
  getters: {
  },
  mutations: {
    setSearchFriend(state,value){
      state.search = value
    },
    setAddFriend(state, friend){
      state.friends.push(friend)
    },
    setDetailFriend(state, body){
      console.log('info' , body)
      state.detailFriend = body
    },
    setUpdateFriend(state, body){
      console.log('bodu', body)
      const index = state.friends.findIndex((l) => {
        return l.id === body.id
      })
      for (const key in body) {
        state.friends[index][key] = body[key]
      }
      // const index = state.friends.findIndex((f) =>{
      //   return f.name === body.name
      // })
      // for (const key in body) {
      //   state.friends[index][key] = body[key]
      // }
    }
  },
  actions: {
    addFriend({commit}, body){
      try {
        commit('setAddFriend', body)
      } catch (error) {
        throw new Error(error)
      }
    },
    sendDetail({commit}, body){
      try {
        commit('setDetailFriend', body)
      } catch (error) {
        throw new Error(error)
      }
    },
    editFriend({commit}, body){
      try {
      commit('setUpdateFriend', body)
        
      } catch (error) {
        throw new Error(error)
      }
    }
  },
  modules: {
  }
})
