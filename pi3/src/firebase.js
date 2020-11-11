import firebase from 'firebase'
import 'firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyDHs3xcg6Dv_4D28FkyDiS6WwCBvINeaZ0",
  authDomain: "segundoparcial-cd798.firebaseapp.com",
  databaseURL: "https://segundoparcial-cd798.firebaseio.com",
  projectId: "segundoparcial-cd798",
  storageBucket: "segundoparcial-cd798.appspot.com",
  messagingSenderId: "898706191869",
  appId: "1:898706191869:web:9877a48b0d2d18837d1594"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  
  export const bdd=firebase.firestore();