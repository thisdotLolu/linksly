import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBFa5x3s4btClSq3H3UdWtRMbQi7slxyMs",
    authDomain: "linksly-74ae6.firebaseapp.com",
    projectId: "linksly-74ae6",
    storageBucket: "linksly-74ae6.firebasestorage.app",
    messagingSenderId: "50695924170",
    appId: "1:50695924170:web:1f0022b5c954eb27fb4733"
  };

  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore();
  export const auth = getAuth()
  export const storage = getStorage()
