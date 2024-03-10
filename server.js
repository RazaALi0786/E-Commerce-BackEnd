const express = require("express");
const mongoose = require("mongoose");
const app = express();
const server_config = require("./configs/server.config");
app.listen(server_config.PORT, () => {
  console.log("Server started at Port:", server_config.PORT);
});
