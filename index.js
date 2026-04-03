const loginForm = document.getElementById("loginForm");
const createForm = document.getElementById("createForm");

function showCreate() {
    loginForm.classList.add("hidden");
    createForm.classList.remove("hidden");
}

function showLogin() {
    createForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
}


