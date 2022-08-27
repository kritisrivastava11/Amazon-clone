//import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALwqnsN1QgHX07-1UvOX7Ppjj90e8Llt8",
    authDomain: "clone-316d7.firebaseapp.com",
    projectId: "clone-316d7",
    storageBucket: "clone-316d7.appspot.com",
    messagingSenderId: "392449604123",
    appId: "1:392449604123:web:3a446b94f02b9a305d96be",
    measurementId: "G-J6Z61SVRMS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };