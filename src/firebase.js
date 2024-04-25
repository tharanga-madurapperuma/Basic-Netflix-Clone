import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsaRE7Y9ffRyMulg9-oKIeaxHEGh5jR5A",
    authDomain: "netflix-clone-2024.firebaseapp.com",
    projectId: "netflix-clone-2024",
    storageBucket: "netflix-clone-2024.appspot.com",
    messagingSenderId: "195488452423",
    appId: "1:195488452423:web:d810316e1af40954a74662",
    measurementId: "G-X7YWW89H5T"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;