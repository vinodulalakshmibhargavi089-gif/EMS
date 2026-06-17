const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your name");
        return;
    }
    if (email === "") {
        alert("Please enter your email");
        return;
    }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
    }
    if (message === "") {
        alert("Please enter your message");
        return;
    }
    if (message.length < 10) {
        alert("Message should be at least 10 characters");
        return;
    }
    alert("Form submitted successfully!");

    form.reset();
});