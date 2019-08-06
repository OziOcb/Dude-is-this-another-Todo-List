import * as firebase from "firebase/app";

import "firebase/auth";

// Web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCgOUAI0N3gfvdA-Tco9AYLB7yvmIH3MPg",
  authDomain: "dude-is-this-another-todolist3.firebaseapp.com",
  databaseURL: "https://dude-is-this-another-todolist3.firebaseio.com",
  projectId: "dude-is-this-another-todolist3",
  storageBucket: "",
  messagingSenderId: "799828065710",
  appId: "1:799828065710:web:23c1fbacbd3420f3"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();

export { firebaseAuth };
