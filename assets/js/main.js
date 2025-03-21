import { getAuth, createUserWithEmailAndPassword } from "./firebase-config.js";
document.addEventListener("DOMContentLoaded", function() {
    console.log("Rescue Bites Website Loaded!");
    
    // Simulate dynamic data update
    setTimeout(() => {
        document.querySelector(".stat-box h2").innerText = "100";
    }, 3000);

    
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
    //   console.log("test")
    alert("test")
    });
    
});
