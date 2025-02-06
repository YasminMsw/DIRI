// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeIClE9SQV5rUKKp7eekkXCD5Rf38tULU",
  authDomain: "tienda-comida-ef440.firebaseapp.com",
  databaseURL: "https://tienda-comida-ef440-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tienda-comida-ef440",
  storageBucket: "tienda-comida-ef440.firebasestorage.app",
  messagingSenderId: "823769433598",
  appId: "1:823769433598:web:276ac09881c6c0aae8acaf",
  measurementId: "G-MXS4KM4DQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

