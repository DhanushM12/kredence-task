import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCnbMQrJpLQUHRbKB77h9ApkvcrW7SQsN0",
  authDomain: "tasks-45405.firebaseapp.com",
  databaseURL: "https://tasks-45405.firebaseio.com",
  projectId: "tasks-45405",
  storageBucket: "tasks-45405.appspot.com",
  messagingSenderId: "976243045956",
  appId: "1:976243045956:web:a4ffe4c8dea4d58536ee11",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
