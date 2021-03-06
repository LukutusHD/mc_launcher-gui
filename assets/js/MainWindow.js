const {app, BrowserWindow} = require("electron").remote;
const path = require("path");
const url = require("url");

let button = document.getElementById("login");
let loginWindow = null;

button.onclick = function createWindow() {
    loginWindow = new BrowserWindow({
        "height": 250,
        "width": 290,
        "title": "Login",
        "menu": null,
        "icon": "./gui/icon.png",
        "frame": false,
    });

    loginWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'LoginWindow.html'),
        protocol: 'file:',
        slashes: true,
    }));

    loginWindow.webContents.openDevTools();

    loginWindow.on('closed', () => {
        loginWindow = null;
    });
}
