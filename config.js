import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyALCBG4R1a6OYroUdeGt2iiUTiS2kqqsDI",
  authDomain: "pro-58-7b313.firebaseapp.com",
  databaseURL: "https://pro-58-7b313-default-rtdb.firebaseio.com",
  projectId: "pro-58-7b313",
  storageBucket: "pro-58-7b313.appspot.com",
  messagingSenderId: "886785477584",
  appId: "1:886785477584:web:3bfec08915a56fdd7ec7d5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
