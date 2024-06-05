// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAik8HdOwOSW_3Ex_h2oqGF_CEEoN3tzdA",
  authDomain: "job-portal-demo-f6fa2.firebaseapp.com",
  projectId: "job-portal-demo-f6fa2",
  storageBucket: "job-portal-demo-f6fa2.appspot.com",
  messagingSenderId: "762055768576",
  appId: "1:762055768576:web:24f290bd60c4de382f76e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;