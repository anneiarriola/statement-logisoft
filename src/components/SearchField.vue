<template>
  <div>
    <v-text-field
      v-model="searchStore"
      placeholder="jeje"
      solo
      dense
      light
      rounded
      label="Search friend"
      elevation="0"
      prepend-inner-icon="mdi-map-marker"
    ></v-text-field>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    searchStore: {
      get() {
        return this.$store.state.search;
      },
      set(newValue){
        if(newValue){
          this.setSearch(newValue)
        }
      }
    },
  },
  methods: {
    ...mapMutations({
      setSearch: "setSearchFriend",
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>