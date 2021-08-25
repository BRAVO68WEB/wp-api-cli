var WPAPI = require("wpapi");
require("dotenv").config();
const mcqGen = require("inquirer");
const { createPost } = require("./libs/createPost.js");

var wp = new WPAPI({
  endpoint: "https://keen-jepsen.212-227-31-142.plesk.page/index.php/wp-json",
  username: process.env.WP_PUBLSHER,
  password: process.env.WP_APP_KEY,
});
createPost(wp);

process.on("unhandledRejection", (reason, promise) => {
  console.log("unhandledRejection", reason, promise);
});
