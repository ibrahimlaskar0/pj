// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXT8kib8SpSdgjA3ECEISkKmgIAxhQE1A",
  authDomain: "rescue-bites.firebaseapp.com",
  projectId: "rescue-bites",
  storageBucket: "rescue-bites.appspot.com",
  messagingSenderId: "472191906521",
  appId: "1:472191906521:web:72b85890dffae3b439c4c8",
  measurementId: "G-J2ZHL9QF42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Export auth for use in authentication scripts
export { auth };
