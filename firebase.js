import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBvYn7E_JnDErbssy6OFm8AadErE2CiWrY",
    authDomain: "whiteshop-e60d4.firebaseapp.com",
    projectId: "whiteshop-e60d4",
    storageBucket: "whiteshop-e60d4.appspot.com",
    messagingSenderId: "366836029346",
    appId: "1:366836029346:web:efa71a6deb1936725104fb",
    measurementId: "G-J8V74FGBY3"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp(); //exclusivo next.js
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };