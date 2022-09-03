const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['vuetify', 'vue-tel-input-vuetify'],
  publicPath: process.env.NODE_ENV === "production" ? "/statement-logisoft/" : "/",
})
