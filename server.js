var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();


    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });




