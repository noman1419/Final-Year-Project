// import firebase from 'firebase'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import mobileStyle from './mobileStyle.css'
import style from './styles.css'
import * as firebase from 'firebase/app'

Vue.config.productionTip = false

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, getDoc, get, addDoc, updateDoc, doc, where } from 'firebase/firestore/lite';
import { getStorage,ref,uploadString  } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCJ1cCe-I0-36kRgt8aAd-VwM37FEYo4FA",
  authDomain: "digitalflip-fb3b0.firebaseapp.com",
  projectId: "digitalflip-fb3b0",
  storageBucket: "digitalflip-fb3b0.appspot.com",
  messagingSenderId: "949909592045",
  appId: "1:949909592045:web:6f7ed46abd59408a0f79e4"
};
firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

Vue.mixin({
  data: function () {
    return {
      db:db,
      collection:collection,
      getDocs:getDocs,
      get: get,
      getDoc: getDoc,
      addDoc:addDoc,
      updateDoc:updateDoc,
      doc:doc,
      where: where,
      storage:storage,
      ref:ref,
      uploadString :uploadString,
      query: query
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
