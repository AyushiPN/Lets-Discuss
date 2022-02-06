// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBqyUbYQFbnOMM4gVG-bqE8Qaru2lWJbSI",
    authDomain: "whatsapp-clone-bd01a.firebaseapp.com",
    projectId: "whatsapp-clone-bd01a",
    storageBucket: "whatsapp-clone-bd01a.appspot.com",
    messagingSenderId: "199537793694",
    appId: "1:199537793694:web:c61a9cd907ed3ad806398f",
    measurementId: "G-QQ6PFSQWLT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;