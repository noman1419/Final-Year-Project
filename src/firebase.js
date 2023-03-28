
import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
require('firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAI3T_42DyhgVNXqBK-kmedOXqpRfMCOYs",
  authDomain: "digital-flip.firebaseapp.com",
  projectId: "digital-flip",
  storageBucket: "digital-flip.appspot.com",
  messagingSenderId: "294994642468",
  appId: "1:294994642468:web:8a51380cdc209f17f47ab1",
  measurementId: "G-KRS2X6KE16"
};

const fb = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
export {fb, db}
  