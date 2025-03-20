document.addEventListener("DOMContentLoaded", function() {
    console.log("Rescue Bites Website Loaded!");
    
    // Simulate dynamic data update
    setTimeout(() => {
        document.querySelector(".stat-box h2").innerText = "100";
    }, 3000);
});
