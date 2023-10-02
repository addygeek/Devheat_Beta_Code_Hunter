import firebase from './firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBW1L2GMN9sam15L3uO8zM5KYJq6YhCclQ",
    authDomain: "askus-final.firebaseapp.com",
    projectId: "askus-final",
    storageBucket: "askus-final.appspot.com",
    messagingSenderId: "902530423473",
    appId: "1:902530423473:web:0e5e5853f709ba5f8d6090",
    measurementId: "G-ZKQHV48J7D"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig); 

const auth =firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const db =firebaseApp.firestore();

export {auth,provider};
export default db;