// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBoMpb6hlaeaGd2OSkeOM3ZGChewdJHANM",
    authDomain: "letsdiscuss-cccd3.firebaseapp.com",
    projectId: "letsdiscuss-cccd3",
    storageBucket: "letsdiscuss-cccd3.appspot.com",
    messagingSenderId: "291551943637",
    appId: "1:291551943637:web:87912652df262f434abb5c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;