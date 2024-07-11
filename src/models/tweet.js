import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [250, "Tweet Cannot be more than 250 characters"],
    },
  },
  { timestamps: true } // CreatedAt and UpdatedAt
);

const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet;
