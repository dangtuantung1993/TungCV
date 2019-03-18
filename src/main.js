import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
new Vue({
  el: '#app',
  components: { app },
  template: '<app/>',
  render: h => h(App),
}).$mount('#app')
