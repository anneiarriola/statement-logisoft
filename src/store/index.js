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
      state.detailFriend = body
    },
    setUpdateFriend(state, body){
      const index = state.friends.findIndex((l) => {
        return l.id === body.id
      })
      for (const key in body) {
        state.friends[index][key] = body[key]
      }
    },
    setDeleteFriend(state, body){
      const tempList = state.friends.filter((l) => {
        return l.id !== body.id
      })
      state.friends = tempList
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
    deleteFriend({commit}, body){
      commit('setDeleteFriend', body)
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
