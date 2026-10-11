let form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let text = "Name: " + name +
               "\nEmail: " + email +
               "\nMessage: " + message;

    let url = "https://wa.me/923202129668?text=" +
              encodeURIComponent(text);

    if (name === "") {
        alert("Please enter your name!");
    } else if (email === "") {
        alert("Please enter your email!");
    } else if (message === "") {
        alert("Please enter your message!");
    } else {
        window.open(url, "_blank");
    }
});