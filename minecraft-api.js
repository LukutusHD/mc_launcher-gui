const https = require("https");
const querystring = require("querystring");
const Promise = require("bluebird");

function authenticate(username, password) {
    let data = {
        "agent": {
            "name": "Minecraft",
            "version": 1
        },
        "username": username,
        "password": password
    };

    let request = JSON.stringify(data);

    let options = {
        "hostname": "authserver.mojang.com",
        "port": 443,
        "path": "/authenticate",
        "method": "POST",
        "header": {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(request)
        }
    };

    return new Promise((resolve) => {
        let req = https.request(options, (res) => {
            res.setEncoding('utf8');

            let data = "";

            res.on('data', (chunk) => {
                data +=chunk;
            });
            res.on('end', () => {
                resolve(data);
            });
        });

        req.on('error', (e) => {
            reject(e);
        });

        req.write(request);
        req.end();
    });
}

module.exports = {
    authenticate: authenticate
};