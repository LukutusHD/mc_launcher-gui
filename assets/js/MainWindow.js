const {app, BrowserWindow} = require("electron").remote;
const path = require("path");
const url = require("url");

let button = document.getElementById("login");
let option_window = document.getElementById("options");
let login_1 = 0;
let option_1 = null;
let loginWindow = null;
let optionWindow = null;

button.onclick = function createWindow() {
    loginWindow = new BrowserWindow({
        "height": 200,
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
    }
}

option_window.onclick = function createWindow() {
    if option_1
    optionWindow = new BrowserWindow({
        "height": 460,
        "width": 500,
        "title": "Option",
        "menu": null,
        "icon": "./gui/icon.png",
        "frame": false,
    });

    optionWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'OptionWindow.html'),
        protocol: 'file:',
        slashes: true,
    }));

    optionWindow.webContents.openDevTools();

    optionWindow.on('closed', () => {
        optionWindow = null;
    });
}