import { TweetRepository, LikeRepository } from "../respository/index.js";

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }
  async toggleLike(modelId, modelType, userId) {
    // Route : /api/v1/like/toggle?id=model.id&type=Tweet
    if (modelType === "Tweet") {
      var likeable = await this.tweetRepository.find(modelId);
    } else if (modelType === "Comment") {
      //Todo...
    } else {
      throw new Error("Invalid model type");
    }

    const exists = await this.likeRepository.findByUserAndLikeable({
      user: userId,
      onModel: modelType,
      likeable: modelId,
    });

    if (exists) {
      likeable.likes.pull(exists.id);
      await likeable.save();
      await this.likeRepository.remove(exists.id);
      var isAdded = false;
    } else {
      const newLike = await this.likeRepository.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });
      likeable.likes.push(newLike);
      await likeable.save();
      var isAdded = true;
    }
    return isAdded;
  }
}

export default LikeService;
/* We have used var, because it is function scopped and will be available throughout the function.*/
