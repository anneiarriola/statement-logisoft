<template>
  <v-navigation-drawer permanent app color="primary accent-4" dark>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Friends </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item>
      <search-field />
    </v-list-item>
    <user-list />
    <v-list-item>
      <v-spacer></v-spacer>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn to="/add-friend" icon v-bind="attrs" v-on="on">
            <v-icon>mdi-account-plus</v-icon>
          </v-btn>
        </template>
        <span>Add friend</span>
      </v-tooltip>
    </v-list-item>
  </v-navigation-drawer>
</template>
<script>
import { ref } from "vue";
import allUsers from "@/data/user.js";
import UserList from "./UserList.vue";
import SearchField from "./SearchField.vue";
export default {
  components: { UserList, SearchField },
  name: "SideApp",
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" },
      ],
      right: null,
    };
  },
  setup() {
    const friends = ref(allUsers);
    return { friends };
  },
};
</script>