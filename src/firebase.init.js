// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALivXDqQMMBXFpYUn17SfVHO3aaJNZdp8",
  authDomain: "independent-service-prov-f46ad.firebaseapp.com",
  projectId: "independent-service-prov-f46ad",
  storageBucket: "independent-service-prov-f46ad.appspot.com",
  messagingSenderId: "989422992658",
  appId: "1:989422992658:web:253fae5d24b97ddc0207cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;