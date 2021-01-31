import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD1JNYykfKOTBP4MF3msuOH9E6TZPCyK6g",
  authDomain: "crwn-db-d32ca.firebaseapp.com",
  projectId: "crwn-db-d32ca",
  storageBucket: "crwn-db-d32ca.appspot.com",
  messagingSenderId: "274804502961",
  appId: "1:274804502961:web:99dee74d71f47d4d484d90",
  measurementId: "G-L32V3HP4XF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
