import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPyIQWHJ2T2_Y0sXuZTG-dZh6VXVQgHFg",
  authDomain: "dropbox-clone-cc377.firebaseapp.com",
  projectId: "dropbox-clone-cc377",
  storageBucket: "dropbox-clone-cc377.appspot.com",
  messagingSenderId: "724798129631",
  appId: "1:724798129631:web:582817eaf199ac73e7b06a",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
