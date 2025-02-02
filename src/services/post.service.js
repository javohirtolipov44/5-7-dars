import postsModel from "../models/posts.model.js";
import mongoose from "mongoose";

class postService {
  constructor() {
    this.postsModel = postsModel;
  }

  async addPost(body) {
    const post = await this.postsModel.create({ ...body });
    return post;
  }

  async getPostsWithAuthor() {
    const post = await this.postsModel.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "author",
          foreignField: "_id",
          as: "author",
        },
      },
      {
        $unwind: "$author",
      },
      {
        $project: {
          "author.name": 1,
          "author.email": 1,
          title: 1,
          content: 1,
        },
      },
    ]);
    return post;
  }

  async getSinglePostWithAuthor(param) {
    const post = await this.postsModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(param.id),
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "author",
          foreignField: "_id",
          as: "author",
        },
      },
      {
        $unwind: "$author",
      },
      {
        $project: {
          "author.name": 1,
          "author.email": 1,
          title: 1,
          content: 1,
        },
      },
    ]);

    return post;
  }
}

export default postService;
