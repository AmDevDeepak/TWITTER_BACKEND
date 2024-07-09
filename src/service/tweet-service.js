const TweetRepository = require("../respository/index");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
  }

  async create(data) {
    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9_]+/g); // Regex to extract hashtags.
    tags = tags.map((tag) => tag.substring(1));
    console.log(tags);
    const tweet = await this.tweetRepository.create(data);
    // Todo : create hashtags and add them.
    return tweet;
  }
}

module.exports = TweetService;
