import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDVA2ZmW-wHLDwNj3FT5wRn53-ow_Gv324",
    authDomain: "flex-3aac9.firebaseapp.com",
    projectId: "flex-3aac9",
    storageBucket: "flex-3aac9.appspot.com",
    messagingSenderId: "220085524863",
    appId: "1:220085524863:web:d3a437bd3da4f507a3624a",
    measurementId: "G-RVY1CV4KPH"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };



