const SUPABASE_URL = "https://emseytrgzkkxjarhlzul.supabase.co";
const SUPABASE_KEY = "sb_publishable_Cl97Ii28wfM86AJgNTsAnA_Y849mgWw";
const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
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

joinForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const submitButton = joinForm.querySelector("button[type=submit]");
    submitButton.disabled = true;
    formMessage.textContent = "Saving your membership details...";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const admission_no = document.getElementById("admission_no").value.trim();
    const course = document.getElementById("course").value.trim();

    const { error } = await supabaseClient
        .from("members")
        .insert([
            {
                name: name,
                email: email,
                admission_no: admission_no,
                course: course
            }
        ]);

    if (error) {
        formMessage.textContent = error.code === "23505"
            ? "These details are already registered."
            : "We could not save your details. Please try again.";
        console.error(error);
        submitButton.disabled = false;
        return;
    }

    formMessage.textContent =
        "Welcome to the Cloud Computing Club, " + name + "! ☁️🚀";

    joinForm.reset();
    submitButton.disabled = false;
});


// Navbar smooth scroll up
let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // User is scrolling down - hide the navbar
    navbar.classList.add("nav-hidden");
  } else {
    // User is scrolling up - show the navbar
    navbar.classList.remove("nav-hidden");
  }

  // Update the reference point for the next scroll event
  lastScrollY = currentScrollY;
});
