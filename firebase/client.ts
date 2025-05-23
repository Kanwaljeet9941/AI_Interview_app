// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBDdsbZHIJQ5qT8b3-ugeAAoAmWuD5SRL0',
  authDomain: 'prepwise-d2478.firebaseapp.com',
  projectId: 'prepwise-d2478',
  storageBucket: 'prepwise-d2478.firebasestorage.app',
  messagingSenderId: '778481720624',
  appId: '1:778481720624:web:957803ea6b234c40177cf5',
  measurementId: 'G-WY74023RJD',
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
