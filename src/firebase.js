// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyD6Z0ScYKVdWOC6OCFbsA0T2m6M4UvlKlE',
    authDomain: 'innowise-lab2.firebaseapp.com',
    projectId: 'innowise-lab2',
    storageBucket: 'innowise-lab2.appspot.com',
    messagingSenderId: '15152612165',
    appId: '1:15152612165:web:eb0083d897226c5b8d342c'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)