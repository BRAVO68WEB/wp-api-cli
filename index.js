var WPAPI = require("wpapi");
require("dotenv").config();
// var apiPromise = WPAPI.discover(
//   "https://keen-jepsen.212-227-31-142.plesk.page"
// ).then(function (site) {
//   return site.auth({
//     username: "root_ap5ab6eo",
//     password: "j7Y9eRqN5@b*^0MO",
//   });
// });
// apiPromise.then(function (site) {
//   console.log(site);
// });

var wp = new WPAPI({
  endpoint: "https://keen-jepsen.212-227-31-142.plesk.page/index.php/wp-json",
  // This assumes you are using basic auth, as described further below
  username: process.env.WP_USERNAME,
  password: process.env.WP_APP_KEY,
});

const createPost = () => {
  wp.posts()
    .create({
      // "title" and "content" are the only required properties
      title: "API",
      content: "Posted from API",
      // Post will be created as a draft by default if a specific "status"
      // is not specified
      status: "publish",
    })
    .then(function (response) {
      // "response" will hold all properties of your newly-created post,
      // including the unique `id` the post was assigned on creation
      console.log(response.id);
    });
};

process.on("unhandledRejection", (reason, promise) => {
  console.log("unhandledRejection", reason, promise);
});

createPost();
