function logout() {
    firebase.auth().signOut().then(() => {
        alert("Logged out successfully.");
        window.location.href = "login.html"; // Redirect to login page
    }).catch((error) => {
        alert(error.message);
    });
}
