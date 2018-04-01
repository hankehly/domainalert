import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  http: {},
  components: {App},
  template: '<App/>'
})