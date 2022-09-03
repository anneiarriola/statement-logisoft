<template>
  <v-app>
    <v-main>
      <sidebar/>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
export default {
  components: { Sidebar },
  name: "App",
  data: () => ({
    //
  }),
};
</script>
