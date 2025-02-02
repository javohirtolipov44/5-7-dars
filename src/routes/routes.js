import postRouter from "./posts.router.js";
import userRouter from "./users.router.js";

const Routes = () => {
  return [userRouter, postRouter];
};

export default Routes;
