function togglePassword() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}

// Show the eye icon only when the user starts typing in the password field
const passwordInput = document.getElementById("password");
const toggleIcon = document.querySelector(".toggle-password");

passwordInput.addEventListener("input", function() {
    if (passwordInput.value.length > 0) {
        toggleIcon.style.visibility = "visible"; // Show the icon
    } else {
        toggleIcon.style.visibility = "hidden"; // Hide the icon if input is empty
    }
});
