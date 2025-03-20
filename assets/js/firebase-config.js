// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXT8kib8SpSdgjA3ECEISkKmgIAxhQE1A",
  authDomain: "rescue-bites.firebaseapp.com",
  projectId: "rescue-bites",
  storageBucket: "rescue-bites.appspot.com", // ✅ Corrected
  messagingSenderId: "472191906521",
  appId: "1:472191906521:web:72b85890dffae3b439c4c8",
  measurementId: "G-J2ZHL9QF42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ Added authentication
const analytics = getAnalytics(app);

export { auth };
