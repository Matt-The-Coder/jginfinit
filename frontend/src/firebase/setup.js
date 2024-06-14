
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDeSy_dKEVsn2GU4wAc1tXzr84R7P1LJ6c",
  authDomain: "jginfinit-da1c3.firebaseapp.com",
  projectId: "jginfinit-da1c3",
  storageBucket: "jginfinit-da1c3.appspot.com",
  messagingSenderId: "585568366827",
  appId: "1:585568366827:web:fa080ae88109f9ac8dceae",
  measurementId: "G-7X9EYXZWP6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
