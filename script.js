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
