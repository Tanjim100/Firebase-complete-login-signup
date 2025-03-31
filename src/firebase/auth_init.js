// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAduaGmTW3QO2V5L3UF9Fse_uGrXOZDo7o",
  authDomain: "email-password-auth-7e6d7.firebaseapp.com",
  projectId: "email-password-auth-7e6d7",
  storageBucket: "email-password-auth-7e6d7.firebasestorage.app",
  messagingSenderId: "428568923116",
  appId: "1:428568923116:web:c4839e514e84845bd5cec9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);