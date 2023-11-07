// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdt3nDRQJF3BWUQyPlgZkQ1bCLvzt-Tv4",
  authDomain: "myblog-7c1a4.firebaseapp.com",
  projectId: "myblog-7c1a4",
  storageBucket: "myblog-7c1a4.appspot.com",
  messagingSenderId: "285105539629",
  appId: "1:285105539629:web:091699d8e8b1ab0e4986a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage };