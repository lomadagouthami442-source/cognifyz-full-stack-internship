const form = document.getElementById("registrationForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const strengthBar = document.getElementById("strengthBar");
const success = document.getElementById("successMessage");
// Password strength
password.addEventListener("input", () => {
    let p = password.value;
    let strength = 0;
    if (p.length >= 8) strength++;
    if (/[A-Z]/.test(p)) strength++;
    if (/[0-9]/.test(p)) strength++;
    if (/[^A-Za-z0-9]/.test(p)) strength++;
    strengthBar.style.width = (strength * 25) + "%";
});
// Form validation
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;
    if (name.length < 3) {
        alert("Name must have at least 3 characters.");
        return;
    }
    if (!email.includes("@")) {
        alert("Enter a valid email.");
        return;
    }
    if (password.value.length < 8) {
        alert("Password must contain at least 8 characters.");
        return;
    }
    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match.");
        return;
    }
    if (!course) {
        alert("Please select a course.");
        return;
    }
    success.textContent = "Registration successful! Welcome " + name;
    success.style.color = "green";
});
// Client-side navigation
function navigate() {
    document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
    const page = document.querySelector(location.hash || "#home");
    if (page) page.classList.remove("hidden");
}
window.addEventListener("hashchange", navigate);
navigate();
