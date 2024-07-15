import { TweetRepository, HashtagRepository } from "../respository/index.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hastagRepository = new HashtagRepository();
  }

  async create(data) {
    const content = data.content;

    const tags = content.match(/#[a-zA-Z0-9_]+/g)
      ? content
          .match(/#[a-zA-Z0-9_]+/g)
          .map((tag) => tag.substring(1).toLowerCase())
      : [];
    // Regex to extract hashtags.

    const tweet = await this.tweetRepository.create(data);

    let alreadyPresentTags = await this.hastagRepository.findByName(tags);
    let titleOfPresentTags = alreadyPresentTags.map((tag) => tag.title);

    let newTags = tags.filter((tag) => !titleOfPresentTags.includes(tag));
    newTags = newTags.map((tag) => {
      return { title: tag, tweets: [tweet.id] };
    });
    await this.hastagRepository.bulkCreate(newTags);

    alreadyPresentTags.forEach((tag) => {
      tag.tweets.push(tweet.id);
      tag.save();
    });
    return tweet;
  }

  async get(tweetId) {
    const tweet = await this.tweetRepository.getWithComments(tweetId);
    return tweet;
  }
}

export default TweetService;
