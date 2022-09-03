<template>
  <div>
    <v-container class="mx-3">
      <v-row class="mx-3">
        <h1>
          Edit friend : {{ detailFriendS.name }} {{ detailFriendS.lastName }}
        </h1>
      </v-row>
      <v-form ref="editFriend" @submit.prevent="editInfoFriend">
        <v-row class="mr-6">
          <v-spacer></v-spacer>
          <v-btn class="mr-5" color="error"> Delete </v-btn>
          <v-checkbox
            v-model="favorite_friend"
            off-icon="mdi-star-outline"
            on-icon="mdi-star"
            color="
               yellow darken-2
              "
            :value="favorite_friend"
          ></v-checkbox>
          {{favorite_friend}}
        </v-row>
        <v-row>
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
        <v-row>
          <v-btn type="submit">edit</v-btn>
        </v-row>
      </v-form>
      <!-- <pre>{{ detailFriendS }}</pre> -->
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      name_edit: '',
      last_name_edit: '',
      status_marital_edit: '',
      gender_edit: '',
      favorite_edit: false,
      phone_edit: [],
      type_number: [
        { id: 1, type: 'mobile' },
        { id: 2, type: 'phone' },
      ],
    }
  },
  computed: {
    ...mapState({
      detailFriendS: 'detailFriend',
    }),
    name: {
      get() {
        return this.detailFriendS.name
      },
      set(newValue) {
        if (newValue) {
          this.name_edit = newValue
        }
      },
    },
    last_name: {
      get() {
        return this.detailFriendS.lastName
      },
      set(newValue) {
        if (newValue) {
          this.last_name_edit = newValue
        }
      },
    },
    gender: {
      get() {
        return this.detailFriendS.gender
      },
      set(newValue) {
        if (newValue) {
          this.gender_edit = newValue
        }
      },
    },
    status_marital: {
      get() {
        return this.detailFriendS.marital_status
      },
      set(newValue) {
        if (newValue) {
          this.status_marital_edit = newValue
        }
      },
    },
    favorite_friend: {
      get() {
        return this.detailFriendS.favorite
      },
      set(newValue) {
        console.log('new', newValue)
        if (newValue) {
          this.favorite_edit = newValue
        }
      },
    },
    phone: {
      get() {
        return this.detailFriendS.phone
      },
      set(newValue) {
        if (newValue) {
          this.phone_edit = newValue
        }
      },
    },
  },
  methods: {
    ...mapActions({
      editFriendS: 'editFriend',
    }),
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
    editInfoFriend() {
      const body = {
        id: this.detailFriendS.id,
        name: this.name_edit ? this.name_edit : this.name,
        lastName: this.last_name_edit ? this.last_name_edit : this.last_name,
        phone: this.phone,
        gender: this.gender_edit ? this.gender_edit : this.gender,
        marital_status: this.status_marital_edit
          ? this.status_marital_edit
          : this.status_marital,
        favorite: this.favorite_edit ? this.favorite_edit : this.favorite_friend
      }
      this.editFriendS(body).then((res) => {
        console.log('all cool', res)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>