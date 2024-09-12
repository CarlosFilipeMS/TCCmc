// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { doc, setDoc, getFirestore } from '@firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyAZbH3O6ZdQ7MFLT6SDcLaF8TCyOhTeU9I",
    authDomain: "tcc-app-54f7d.firebaseapp.com",
    projectId: "tcc-app-54f7d",
    storageBucket: "tcc-app-54f7d.appspot.com",
    messagingSenderId: "641768043218",
    appId: "1:641768043218:web:be002d77449f6b00e0b30b",
    measurementId: "G-LZCZWR1FGC"
  };

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth()
  

export const db = getFirestore(app);
