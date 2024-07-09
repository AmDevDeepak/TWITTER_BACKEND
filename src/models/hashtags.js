const mongoose = require("mongoosse");

const hashtagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
  },
  { timestamps: true }
);


const Hashtag = mongoose.model("Hashtag", tweetSchema);
module.exports = Hashtag;
