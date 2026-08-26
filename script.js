const SUPABASE_URL = "PASTE_YOUR_API_URL_HERE";uezxymkecrdmixopybxq.supabase.co
const SUPABASE_KEY = "PASTE_YOUR_PUBLISHABLE_KEY_HERE";sb_publishable_qtktn0Q4hNZkrOCj8nYnpg_g6OYdHKo
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

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const admission_no = document.getElementById("admission_no").value;
    const course = document.getElementById("course").value;

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
        formMessage.textContent = "Something went wrong. Please try again.";
        console.error(error);
        return;
    }

    formMessage.textContent =
        "Welcome to the Cloud Computing Club, " + name + "! ☁️🚀";

    joinForm.reset();
});

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Welcome to the Cloud Computing Club, " + name + "! ☁️🚀";

    joinForm.reset();

});
