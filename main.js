// helps JShint know about whats been imported in index.html
/* globals
  firebase
  Vue
  VueRouter
  Vuetify
  httpVueLoader
*/

// initialize firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD_hCUCtoUsn2-cEI3l0X5_9NJQoe6LvEE",
  authDomain: "tomwang-momento-feedback.firebaseapp.com",
  projectId: "tomwang-momento-feedback",
  storageBucket: "tomwang-momento-feedback.appspot.com",
  messagingSenderId: "236058304064",
  appId: "1:236058304064:web:b95926abaaa830343f89a5"
});

// routes + which components to use
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: httpVueLoader("./components/Home.vue"),
    },
    { 
      path: "/feedback", 
      component: httpVueLoader("./components/Feedback.vue"),
    },
  ]
});

// register any global vue components
Vue.component('app-bar', httpVueLoader('./components/app-bar.vue'));
Vue.component('give-feedback-btn', httpVueLoader('./components/give-feedback-btn.vue'));


// init vue instance w global components + router + any global data
const app = new Vue({
  router,
  vuetify: new Vuetify(),
  data() {
    return {
      db: firebaseApp.firestore(), // makes firestore database available to ALL of the components via this.$root.db
    };
  },
  mounted() {
    console.log("vue app mounted");
  }
}).$mount("#app");
