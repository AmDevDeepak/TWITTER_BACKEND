import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
const app = express();
import apiRoutes from "./routes/index.js";

import { passportAuth } from "./config/jwt-middleware.js";

import { connect } from "./config/database.js";
import { config } from "./config/serverConfig.js";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
passportAuth(passport);

app.use("/api", apiRoutes);

app.listen(config.PORT, async () => {
  console.log("Server listening on port", config.PORT);
  await connect();
});
