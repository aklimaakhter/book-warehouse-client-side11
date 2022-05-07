// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7ociI_p9DeH80fP6gB9ggd2IkENt0_wc",
    authDomain: "book-warehouse-management.firebaseapp.com",
    projectId: "book-warehouse-management",
    storageBucket: "book-warehouse-management.appspot.com",
    messagingSenderId: "1079212251079",
    appId: "1:1079212251079:web:63f6ae5480103f955cabe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;