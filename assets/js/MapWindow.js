let map = document.getElementById("map_open");
let mapWindow = null;

map.onclick = function createWindow() {
    mapWindow = new BrowserWindow({
        "height": 900,
        "width": 1600,
        "title": "Fraktion-Wars Map",
        "menu": null,
        "icon": "./gui/icon.png",
    });

    mapWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'Map_MaxWindow.html'),
        protocol: 'file:',
        slashes: true,
    }));

    mapWindow.on('closed', () => {
        mapWindow = null;
    });

    mapWindow.setMenu(null);
}