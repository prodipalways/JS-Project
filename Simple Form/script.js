document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let passoerd = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields");
    }

    alert("Registration Successful!");
})
