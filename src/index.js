const express = require("express");
const connect = require("./config/database");
const app = express();
const { PORT } = require("./config/serverConfig");

const TweetService = require("./service/tweet-service");

app.listen(PORT, async () => {
  console.log("Server listening on port", PORT);
  await connect();

  const service = new TweetService();
  const tweet = await service.create({
    content: "Hello, this is my 3rd #tweet!",
  });
  console.log(tweet);
});
