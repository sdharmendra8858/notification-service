const express = require("express");
require("dotenv").config();

const app = express();

const server = app.listen(process.env.PORT, () => {
    console.log("Listening on server", server.address());
})