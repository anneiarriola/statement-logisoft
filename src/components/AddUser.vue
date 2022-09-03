<template>
  <div>
    <v-container class="my-5">
      <v-row class="mx-3">
        <h2 class="text-left">Add Friend</h2>
      </v-row>
      <v-form ref="addFriend" @submit.prevent="addNewFriend">
        <v-row class="mr-6">
          <v-spacer></v-spacer>
          <v-btn
            @click="favorite_friend = !favorite_friend"
            v-model="favorite_friend"
            icon
          >
            <v-icon
              size="45"
              :color="
                favorite_friend === false ? 'grey lighten-1' : 'yellow darken-2'
              "
              >{{
                favorite_friend === false ? 'mdi-star-outline' : 'mdi-star'
              }}</v-icon
            >
          </v-btn>
        </v-row>
        <v-row class="mx-3 fill-height">
          <v-col cols="12" md="6">
            <v-text-field v-model="name" label="Name" outlined></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="last_name"
              label="Last Name"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <span class="primary--text font-weight-medium"> Gender </span>
            <v-row>
              <v-col md="3">
                <v-radio-group v-model="gender">
                  <v-radio label="Male" color="red" value="male"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col md="3">
                <v-radio-group v-model="gender">
                  <v-radio label="Female" color="red" value="female"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6">
            <span class="primary--text font-weight-medium">
              Marital status
            </span>
            <v-row>
              <v-col md="3">
                <v-radio-group v-model="status_marital">
                  <v-radio
                    label="Married"
                    color="red"
                    value="married"
                  ></v-radio>
                </v-radio-group>
              </v-col>
              <v-col md="3">
                <v-radio-group v-model="status_marital">
                  <v-radio label="Single" color="red" value="single"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="mx-3">
          <v-row v-for="(phoneField, i) in phone" :key="i">
            <v-col cols="12" md="5">
              <v-select
                v-model="phone[i].type"
                outlined
                placeholder="Select type of number"
                :items="type_number"
                item-text="type"
                item-value="type"
                class="text-capitalize"
              ></v-select>
            </v-col>
            <v-col cols="12" md="5">
              <vue-tel-input-vuetify
                v-model="phone[i].phone"
                @input="onInput"
                outlined
              ></vue-tel-input-vuetify>
            </v-col>
            <v-col cols="12" md="1">
              <v-btn @click="remove(i)" color="error">
                <v-icon>mdi-delete-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-row>
        <v-row class="mx-3">
          <v-spacer></v-spacer>
          <v-col cols="12" md="2">
            <v-btn @click="add()" block color="primary">
              <v-icon small left>mdi-phone-plus-outline</v-icon>
              Add phone</v-btn
            >
          </v-col>
        </v-row>
        <v-row class="mx-3 my-10">
          <v-spacer></v-spacer>
          <v-btn type="submit" color="success">Create</v-btn>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      name: '',
      myphone: '',
      status_marital: '',
      gender: '',
      last_name: '',
      type_of_number: [],
      type_number: [
        { id: 1, type: 'mobile' },
        { id: 2, type: 'phone' },
      ],
      favorite_friend: false,
      phone: [{
        type: '',
        phone: '',
      }],
      number: '',
      valid: false,
      country: undefined,
    }
  },
  methods: {
    ...mapActions({
      addFriendS: 'addFriend',
    }),
    addNewFriend() {
      this.addFriendS({
        id: Math.floor(Math.random() * 100) + 1,
        name: this.name,
        lastName: this.last_name,
        phone: this.phone,
        gender: this.gender,
        marital_status: this.status_marital,
        favorite: this.favorite_friend,
      }).then((res) => {
        console.log('all cool', res)
      })
    },
    onInput(formattedNumber, { number, valid, country }) {
      console.log('code', number)
      this.phone.phone = number.international
      this.valid = valid
      this.phone.code = country.dialCode
    },
    add() {
      this.phone.push({
        type: '',
        // code: '',
        phone: '',
      })
     
    },
    remove(index) {
      this.phone.splice(index, 1)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>