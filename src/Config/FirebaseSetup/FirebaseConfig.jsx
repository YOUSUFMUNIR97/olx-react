// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP8raM83Sk0XPsCru5WwhwBSd8ioN5jF4",
  authDomain: "olx-react-c0a25.firebaseapp.com",
  projectId: "olx-react-c0a25",
  storageBucket: "olx-react-c0a25.appspot.com",
  messagingSenderId: "1004201608096",
  appId: "1:1004201608096:web:2ee51df6fd81bba62a9ac5",
  measurementId: "G-ZCMVHMKL0D"
};
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);