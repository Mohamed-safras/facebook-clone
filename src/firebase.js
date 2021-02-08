import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAnqcpXVv4i1o9L3m0Uw1wHFc42sdOBpTU",
  authDomain: "facebook-cf849.firebaseapp.com",
  projectId: "facebook-cf849",
  storageBucket: "facebook-cf849.appspot.com",
  messagingSenderId: "868119432756",
  appId: "1:868119432756:web:feb635c8b7d87bdc808461",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;
