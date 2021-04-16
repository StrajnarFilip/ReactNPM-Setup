"use strict";
var express = require("express");
var fs = require("fs");
var static_options = require("./options.js");
var sendFile_options = require("./sendfile_options.js");
var app = express();
var port = 3001;
app.use(express.static("./static", static_options));
app.get('/', function (req, res) {
    res.sendFile("index.html", sendFile_options, function (err) { console.log(err); });
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
