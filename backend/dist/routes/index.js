import { Router } from "express";
import userRouter from "./user-routes.js";
import chatRoutes from "./chat-routes.js";
const appRouter = Router(); ///api/v1
appRouter.use("/user", userRouter); //api/v1/user
appRouter.use("/chats", chatRoutes); //api/v1/chats
export default appRouter;
//# sourceMappingURL=index.js.map