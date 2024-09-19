const Controller = require("./Controller.js");
const FriendRequestServices = require("../services/FriendRequestServices.js");

const friendRequestServices = new FriendRequestServices();

class FriendRequestController extends Controller {
  constructor() {
    super(friendRequestServices);
  }
}

module.exports = FriendRequestController;
