const express = require("express");
const app = express();
const PORT = 3000;

// Retrieving request's IP Address Middleware------------------------
// install: npm install request-ip --save
// repo: https://github.com/pbojinov/request-ip
const requestIp = require("request-ip");

const ipMiddleware = function(req, res, next) {
    const clientIp = requestIp.getClientIp(req);
    next();
};

app.use(requestIp.mw());
app.use(function(req, res) {
    const ip = req.clientIp;
    res.end(ip);
});
// ------------------------------------------------------------------



// Port listening ---------------------------------------------------
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});