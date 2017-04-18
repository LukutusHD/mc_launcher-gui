console.log(__dirname);

let minecraftApi = require("./minecraft-api");
let Promise = require("bluebird");

let button = document.getElementById("login");
let usernameField = document.getElementById("username");
let passwordField = document.getElementById("password");

button.onclick = function() {
    let username = usernameField.value, password = passwordField.value;

    if (username.length === 0 || password.length === 0) {
        alert("Please enter valid username or password data");
        return;
    }

    minecraftApi.authenticate(username, password).then((data) => {
        let json = {};
        try {
            json = JSON.parse(data);
        } catch (e) {
            console.log(e);
        }

        let username = "";

        if (
            ("selectedProfile" in json) &&
            ("name" in json.selectedProfile)
        ) {
            username = json.selectedProfile.name;

            alert (`Welcome ${username}`);
        }
    });
};