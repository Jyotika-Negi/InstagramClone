import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgYNNsTGJM1QXravyyamt1UN_j07Vciog",
  authDomain: "instagra-clone-83f5e.firebaseapp.com",
  projectId: "instagra-clone-83f5e",
  storageBucket: "instagra-clone-83f5e.appspot.com",
  messagingSenderId: "82879290485",
  appId: "1:82879290485:web:71aabdf8fcc724f8ff2c3c",
  measurementId: "G-RLN8MPQRN5"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
