import firebase from 'firebase/app';
//import fire from 'firebase/firebase-app';
//import fireb from 'firebase';
import 'firebase/firebase-analytics'
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCMPIiT9B_w0Ud0gngYrvfVvpvuiploG-s",
    authDomain: "newsbolivia-d56a9.firebaseapp.com",
    projectId: "newsbolivia-d56a9",
    storageBucket: "newsbolivia-d56a9.appspot.com",
    messagingSenderId: "375135990125",
    appId: "1:375135990125:web:40d092464bfc660baeea64",
    measurementId: "G-JFZPBLJ6BJ"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//fire.analytics();
const db = firebaseApp.firestore();
const analitics = firebaseApp.analytics();
//firebase.analytics();

export default db;
//export default firebase;
