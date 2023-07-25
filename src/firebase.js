// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAZQ8WHdQyvDsX5xExNIZovM-nxr1oqLo",
  authDomain: "internship-33f59.firebaseapp.com",
  projectId: "internship-33f59",
  storageBucket: "internship-33f59.appspot.com",
  messagingSenderId: "768838702823",
  appId: "1:768838702823:web:125c979b287a0a54c0f442",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
