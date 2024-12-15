// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1vUBxtGi3tA7Z0TZpEG3rhOkVlTifj4Q",
  authDomain: "login-5502e.firebaseapp.com",
  projectId: "login-5502e",
  storageBucket: "login-5502e.firebasestorage.app",
  messagingSenderId: "687507935288",
  appId: "1:687507935288:web:6c7ea8e9d0ebfed05516cd"
};

// Initialize Firebase
if(!firebase.apps.length)
{{
  firebase.initializeApp(firebaseConfig);
}}

const auth = firebase.auth();

export {auth};