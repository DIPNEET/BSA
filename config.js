import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyA8GHtSRTRMU6SpWYd_z_qqCOvaN0JmpC4",
  authDomain: "shantanu-17232.firebaseapp.com",
  databaseURL: "https://shantanu-17232.firebaseio.com",
  projectId: "shantanu-17232",
  storageBucket: "shantanu-17232.appspot.com",
  messagingSenderId: "970871607884",
  appId: "1:970871607884:web:6a9b6e1ed2fd57c23bdae9"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
