function orderNow() {
    let name = prompt("Enter your name:");

    if (name) {
        alert("Thank you " + name + "! Your order has been placed.");
    } else {
        alert("Please enter your name.");
    }
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields.");
        return false;
    }

    alert("Message Sent Successfully!");
    return true;
}