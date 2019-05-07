import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBabNr-VqNADhC0SdxR8da5OUPG0XShZSA",
  authDomain: "react-redux-firebase-app-c5706.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-app-c5706.firebaseio.com",
  projectId: "react-redux-firebase-app-c5706",
  storageBucket: "react-redux-firebase-app-c5706.appspot.com",
  messagingSenderId: "221419660145",
  appId: "1:221419660145:web:65f14ac772be3af1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase