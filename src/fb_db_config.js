import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4LzZ9KzHB2QGxHE7sJ8b2YMLBmdX0WVs",
  authDomain: "dude-is-this-another-tod-48d36.firebaseapp.com",
  databaseURL: "https://dude-is-this-another-tod-48d36.firebaseio.com",
  projectId: "dude-is-this-another-todo-list",
  storageBucket: "",
  messagingSenderId: "447384417632",
  appId: "1:447384417632:web:01c4a7c254a13321"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
