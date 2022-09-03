import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import VueTelInputVuetify from 'vue-tel-input-vuetify/lib';

Vue.config.productionTip = false
Vue.use(VueTelInputVuetify, {
  vuetify,
});

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
