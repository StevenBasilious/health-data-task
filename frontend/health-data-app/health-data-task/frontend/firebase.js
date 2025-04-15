import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3-pM-dr_HGXpLyE-vxXCrJn8vPUnw37Q",
  authDomain: "rn-firebase-ml-test.firebaseapp.com",
  databaseURL: "https://rn-firebase-ml-test-default-rtdb.firebaseio.com",
  projectId: "rn-firebase-ml-test",
  storageBucket: "rn-firebase-ml-test.firebasestorage.app",
  messagingSenderId: "964593574138",
  appId: "1:964593574138:web:815a05431b322d81312943",
  measurementId: "G-CR54SS9S8P",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };