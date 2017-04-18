const {remote} = require('electron');

var minimieren = document.getElementById("minimize");
var schliessen = document.getElementById("close");

minimieren.onclick = function (e) {
    var window = remote.getCurrentWindow();
    window.minimize();
};

schliessen.onclick = function (e) {
    var window = remote.getCurrentWindow();
    window.close();
};
