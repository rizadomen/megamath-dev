// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDmBlSBdeVPRO-AeUPQPEpDJzOLVE6fLUE",
    authDomain: "mega-math-bimbel.firebaseapp.com",
    projectId: "mega-math-bimbel",
    storageBucket: "mega-math-bimbel.firebasestorage.app",
    messagingSenderId: "1018677380626",
    appId: "1:1018677380626:web:0f37cc89072d1816b57acb",
    measurementId: "G-X3JBT00B7L"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
