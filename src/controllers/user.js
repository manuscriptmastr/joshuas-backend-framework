import { UserService } from "../services/user.js";
import { controller, get, inject, json } from "../utils/decorators.js";

@controller
export class UserController {
  @inject(UserService)
  userService;

  @get("/users")
  @json
  getUsers(req, res) {
    return this.userService.getUsers();
  }

  @get(/\/users\/(?<userId>\w+)\/books/)
  @json
  getBooks(req, res) {
    return this.userService.getBooks(req.tokens.userId);
  }
}
