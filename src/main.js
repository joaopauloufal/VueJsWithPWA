import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
//import VueFire from 'vuefire';
import firebase from 'firebase';
import push from './push';

Vue.use(firebase);

push();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
