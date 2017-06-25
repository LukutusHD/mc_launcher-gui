console.log(__dirname);

const {MineCraftAPI} = require("../built/MineCraftAPI");

let button = document.getElementById("login");
let usernameField = document.getElementById("username");
let passwordField = document.getElementById("password");

button.onclick = function() {
    let username = usernameField.value, password = passwordField.value;

    if (username.length === 0 || password.length === 0) {
        alert("Please enter valid username or password data");
        return;
    }

    MineCraftAPI
        .Authenticate(username, password, null)
        .then((result) => {
            console.log(result.username);
        })
        .catch((error) => {
            alert(error);
        });
};