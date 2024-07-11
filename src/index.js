import express from "express";
const app = express();

import { connect } from "./config/database.js"; 
import { config } from "./config/serverConfig.js";

app.listen(config.PORT, async () => {
  console.log("Server listening on port", config.PORT);
  await connect();
});
