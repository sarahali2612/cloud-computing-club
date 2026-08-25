// Welcome message
console.log("Galgotias Cloud Computing Club loaded! ☁️");

// Event registration buttons
const registerButtons = document.querySelectorAll(".card button");

registerButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const eventName = button.parentElement.querySelector("h3").textContent;

        alert("Registration for " + eventName + " is coming soon! 🚀");

    });

});
// Club registration form

const joinForm = document.getElementById("joinForm");
const formMessage = document.getElementById("formMessage");

joinForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Welcome to the Cloud Computing Club, " + name + "! ☁️🚀";

    joinForm.reset();

});
