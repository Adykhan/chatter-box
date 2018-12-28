import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCoOfxMUnrR1dcVK9ZcVzrzAiyQ2onQ3Rk",
  authDomain: "chatter-box-99f59.firebaseapp.com",
  databaseURL: "https://chatter-box-99f59.firebaseio.com",
  projectId: "chatter-box-99f59",
  storageBucket: "chatter-box-99f59.appspot.com",
  messagingSenderId: "336543219124"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
