import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVYfMiTFgVoOF0g0-5VH59UVV-Ar3AulY",
  authDomain: "pweb-18639.firebaseapp.com",
  projectId: "pweb-18639",
  storageBucket: "pweb-18639.appspot.com",
  messagingSenderId: "812952317854",
  appId: "1:812952317854:web:96b9f2478f9eb2df0db08f"
};

//Initialize firebase
const firebaseApp = initializeApp({firebaseConfig});
const projectStorage = firebaseApp.storage();
const projectFirestore= firebaseApp.firestore();
const timestamp = firebaseApp.firestore.FieldValue.serverTimestamp;
export{projectStorage,projectFirestore, timestamp}