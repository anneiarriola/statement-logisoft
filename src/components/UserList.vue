<template>
  <div class="friends-list">
    <v-list dense nav>
      <v-list-item @click="gotoEdit(item)" to="/edit-friend" v-for="item in filterList" :key="item.id" link>
        <v-list-item-content>
          <v-list-item-title class="text-left"
            >{{ item.name }} {{ item.lastName }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon
              :color="
                item.favorite === false ? 'grey lighten-1' : 'yellow darken-2'
              "
              >{{
                item.favorite === false ? 'mdi-star-outline' : 'mdi-star'
              }}</v-icon
            >
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>
  
<script>
import { mapActions, mapState } from 'vuex'
// import EditUser from './EditUser.vue'

export default {
  data() {
    return {
      benched: 0,
      friendInfo: {}
    }
  },
  components: {
    // EditUser,
  },
  computed: {
    ...mapState({
      searchS: (state) => state.search,
      friends: (state) => state.friends,
    }),
    filterList() {
      return this.friends.filter((post) => {
        return post.name.toLowerCase().includes(this.searchS.toLowerCase())
      })
    },
  },
  methods: {
    ...mapActions({
      setInformation: 'sendDetail'
    }),
    gotoEdit(info) {
      this.setInformation(info)
    }
  },
}
</script>
  
