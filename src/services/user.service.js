import usersModel from "../models/users.model.js";

class userService {
  constructor() {
    this.usersModel = usersModel;
  }
  async addUser(body) {
    const user = await this.usersModel.create({ ...body });
    return user;
  }
}

export default userService;
