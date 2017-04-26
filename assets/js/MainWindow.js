const {app, BrowserWindow} = require("electron").remote;
const path = require("path");
const url = require("url");

let button = document.getElementById("login_window");
let option_window = document.getElementById("options");

console.log(button);

let login_1 = false;
let option_1 = false;

let loginWindow = null;
let optionWindow = null;

function createWindow(windowObj, title, page) {
    // Window Object ist eine Refferenz.
    // Das heist, es enthält nur die Information, auf welchen Speicherbereich wir verweisen.
    // in den Momen, wir hier in der Funktion ein neues Objekt instanziieren, wird auch das original
    // eine Instanz des selben Objekts.

    // Beispiel: wir rufen diese Fuktion mit dem Object loginWindow auf.
    // LoginWindow = A
    // und übergeben die Refferenz auf LoginWindow als windowObj
    // LoginWindow = A -----> windowObject = A


    windowObj = new BrowserWindow({
        "height": 200,
        "width": 290,
        "title": title,
        "menu": null,
        "icon": "./gui/icon.png",
        "frame": false,
    });

    // Erzeigen wir ein neues Objekt, wird das Objekt auf die Originalposition geschrieben.
    // windowObject = new B -------> LoginWindow = (new B)

    windowObj.loadURL(url.format({
        pathname: path.join(__dirname, page),
        protocol: 'file:',
        slashes: true,
    }));

    windowObj.webContents.openDevTools();

    windowObj.on('closed', () => {
        windowObj = null;
    });

    // so ist der Parameter, den wir übergeben automatisch ein neues Object vom Typ Browserwindow.
}

button.onclick = function () {
    console.log("hi");
    if (!login_1) {
        createWindow(loginWindow, "Login", "LoginWindow.html");
        if (loginWindow !== null) {
            loginWindow.show();
        }
    } else {

    }
};

option_window.onclick = function createWindow() {
    if (option_1) {
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
}