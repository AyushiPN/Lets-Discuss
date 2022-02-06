// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoMpb6hlaeaGd2OSkeOM3ZGChewdJHANM",
    authDomain: "letsdiscuss-cccd3.firebaseapp.com",
    projectId: "letsdiscuss-cccd3",
    storageBucket: "letsdiscuss-cccd3.appspot.com",
    messagingSenderId: "291551943637",
    appId: "1:291551943637:web:87912652df262f434abb5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };

export default db;