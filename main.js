const {app, BrowserWindow} = require("electron");
const path = require("path");
const url = require("url");

let mainWindow = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        "height": 460,
        "width": 290,
        "title": "Launcher",
        "menu": null,
        "icon": "./gui/icon.png",
        "frame": false,
    });

	mainWindow.webContents.openDevTools();
	
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'main.html'),
        protocol: 'file:',
        slashes: true,
    }));

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
});