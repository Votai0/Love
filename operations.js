const path = require('path');
const WebSocket = require('ws');
const express = require('express');


module.exports.getwillUBeMy = (req, res) => {
    res.render('willUBe');
}

/*-------------------------------------------------------------------------------*/

module.exports.getThxLove = (req, res) => {
    res.render('thxLove');
}