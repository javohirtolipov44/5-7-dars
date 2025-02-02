import userService from "../services/post.service.js";

class userController {
  constructor() {
    this.userService = new userService();
  }
  async addUserController(req, res) {
    try {
      const body = req.body;
      console.log(body);

      const user = await this.userService.addUser(body);
      if (user) {
        res.json(user);
      }
    } catch (error) {}
  }
}

export default userController;
