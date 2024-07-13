import Like from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository {
  constructor() {
    super(Like);
  }

  async findByUserAndLikeable(data) {
    try {
      const like = await Like.findOne(data);
      return like;
    } catch (error) {
      throw error;
    }
  }

  async remove(likeId) {
    const result = await Like.deleteOne({ _id: likeId });
    if (result.deletedCount === 1) {
      return true;
    } else {
      return false;
    }
  }
}

export default LikeRepository;
