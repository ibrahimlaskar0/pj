import { getAuth, createUserWithEmailAndPassword } from "./firebase-config.js";

const auth = getAuth();

document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     console.log('User registered:', userCredential.user);
  //     // Redirect to dashboard or login
  //     console.log("succcesss")
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });
  console.log("test")
});
