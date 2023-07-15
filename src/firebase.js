import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1T4Wa-c1IlwNGac-el8r25L0A6GE901w",
  authDomain: "disneyclone-31de5.firebaseapp.com",
  projectId: "disneyclone-31de5",
  storageBucket: "disneyclone-31de5.appspot.com",
  messagingSenderId: "895934355456",
  appId: "1:895934355456:web:f1b8000b5a71db6777a0e5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
