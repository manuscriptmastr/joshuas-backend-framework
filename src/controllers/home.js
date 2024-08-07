import { controller, get } from "../utils/decorators.js";

@controller
export class HomeController {
  @get("/")
  getLandingPage(req, res) {
    res.write("Hello world");
  }
}
