// Simple local storage based user authentication (for demo purposes)

let users = JSON.parse(localStorage.getItem("users")) || [];

function signup() {
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Check if user already exists
    for (let user of users) {
        if (user.email === email) {
            alert("User already exists with this email!");
            return;
        }
    }

    // Create new user object
    const newUser = { username, email, password };

    // Store user in local storage
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign up successful!");
    showLogin();
}

function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Check if user exists and password matches
    for (let user of users) {
        if (user.email === email && user.password === password) {
            alert("Login successful!");
            // Redirect to the student management page or show student section
            window.location.href = "studentManagement.html";  // Redirect to student management page
            return;
        }
    }

    alert("Invalid email or password!");
}

function showSignup() {
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}

function showLogin() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}
