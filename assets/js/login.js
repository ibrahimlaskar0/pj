document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        
        alert("Login successful!");

        // Redirect to the dashboard after successful login
        window.location.href = "dashboard.html";
    })
    .catch((error) => {
        alert(error.message);
    });
});
