import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBQniWs0tv-yaKPH8ViAXbxyJVKddgG9Yk",
    authDomain: "imageio.firebaseapp.com",
    projectId: "imageio",
    storageBucket: "imageio.appspot.com",
    messagingSenderId: "455243015802",
    appId: "1:455243015802:web:9bb8a3933bc07d1b3bfdc3",
    measurementId: "G-RPN9GLG1JC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;