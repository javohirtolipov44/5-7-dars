import { Router } from "express";
import postController from "../controllers/post.controller.js";

const postRouter = Router();
const controller = new postController();

postRouter.post("/post", (req, res) => {
  controller.addPostController(req, res);
});

postRouter.get("/posts", async (req, res) => {
  controller.getPostsWithAuthorController(req, res);
});

postRouter.get("/post/:id", async (req, res) => {
  controller.getSinglePostWithAuthorController(req, res);
});

export default postRouter;
