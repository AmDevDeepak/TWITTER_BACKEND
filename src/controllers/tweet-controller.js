import TweetService from "../service/tweet-service.js";
import upload from "../config/file-upload-s3-config.js";
const singleUploader = upload.single("image");

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
  try {
    singleUploader(req, res, async function (err, data) {
      if (err) return res.status(500).json({ error: err });
      console.log("Image url is", req.file);
      const payload = req.body;
      payload.image = req.file.location;
      const response = await tweetService.create(payload);
      return res.status(201).json({
        success: true,
        message: "Tweet created successfully",
        data: response,
        err: {},
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Unable to create tweet",
      data: {},
      err: error,
    });
  }
};

export const getTweet = async (req, res) => {
  try {
    const response = await tweetService.get(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Tweet fetched successfully",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to retrieve tweet",
      data: {},
      err: error,
    });
  }
};
