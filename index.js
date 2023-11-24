const express = require("express");

const app = express();

app.get("/",function (request,response) {
    response.send("<h1>Hello There!</h1>");
    console.log("Done");
})

app.listen(3000, function(){
    console.log("Ready on 3000");
});