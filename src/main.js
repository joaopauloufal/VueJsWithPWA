import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
//import VueFire from 'vuefire';
import firebase from 'firebase';
import push from './push';



Vue.use(firebase);

var firebaseConfig = {
  apiKey: "AIzaSyCanSmLwBUkXGSeD3RzeVo20D4LWR5C4eA",
  authDomain: "vuejs-wpa.firebaseapp.com",
  databaseURL: "https://vuejs-wpa.firebaseio.com",
  projectId: "vuejs-wpa",
  storageBucket: "",
  messagingSenderId: "97020739860",
  appId: "1:97020739860:web:01972ba680cdc374f88201",
  measurementId: "G-MM1Y8CWBFQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

push();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
