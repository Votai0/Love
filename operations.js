const path = require('path');
const WebSocket = require('ws');
const express = require('express');
const fs = require('fs');



module.exports.getwillUBeMy = (req, res) => {
    res.render('willUBe');
}











// Rastgele bir satırı Promise ile döndüren fonksiyon
module.exports.getRandomLine = (file) => {
    return new Promise((resolve, reject
    ) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err);
            } else {
                const lines = data.toString().split('\n');
                const line = lines[Math.floor(Math.random() * lines.length)];
                resolve(line);
            }
        });
    }
    )};

/*-------------------------------------------------------------------------------*/

module.exports.getThxLove = (req, res) => {
    res.render('thxLove');
}