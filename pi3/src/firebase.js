import firebase from 'firebase'
import 'firebase/firestore' 

const firebaseConfig = {
    apiKey: "AIzaSyC593EoFTOcNT8yEd8cVmXZYqT9GM6zzdg",
    authDomain: "segundparcial.firebaseapp.com",
    databaseURL: "https://segundparcial.firebaseio.com",
    projectId: "segundparcial",
    storageBucket: "segundparcial.appspot.com",
    messagingSenderId: "398588769323",
    appId: "1:398588769323:web:234f5cb99fb3b851e8266e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  export const bdd=firebase.firestore();