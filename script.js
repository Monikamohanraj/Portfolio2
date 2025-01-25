// Simple JavaScript for form submission (e.g., to prevent the page from reloading)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name && email && message) {
        alert("Message sent successfully!");
        // You can replace this with actual form submission logic (e.g., sending to a server)
        this.reset();
    } else {
        alert("Please fill in all fields.");
    }
});
