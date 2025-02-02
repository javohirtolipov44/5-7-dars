import postService from "../services/post.service.js";

class postController {
  constructor() {
    this.postService = new postService();
  }

  async addPostController(req, res) {
    try {
      const body = req.body;
      const post = await this.postService.addPost(body);
      if (post) {
        res.json(post);
      }
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }

  async getPostsWithAuthorController(req, res) {
    try {
      const post = await this.postService.getPostsWithAuthor();
      if (post) {
        res.json(post);
      }
    } catch (error) {
      res.status(404).json({
        message: "Post topilmadi",
      });
    }
  }

  async getSinglePostWithAuthorController(req, res) {
    try {
      const param = req.params;
      const post = await this.postService.getSinglePostWithAuthor(param);
      if (post) {
        res.json(post);
      }
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }
}

export default postController;
