import firebase from "firebase";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDdYiozQo2y_ECs7RsZg-2OsqHAtURTeqs",
//   authDomain: "creative-block-5e3bb.firebaseapp.com",
//   projectId: "creative-block-5e3bb",
//   storageBucket: "creative-block-5e3bb.appspot.com",
//   messagingSenderId: "732218817574",
//   appId: "1:732218817574:web:97ef874e3be7ec24213ae7",
//   measurementId: "G-BRQRJWX5YG"
// };
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
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;
