exports.createPost = (wp) => {
  const mcqGen = require("inquirer");
  const questions = [
    {
      type: "input",
      name: "name",
      message: "Give title :- ",
      validate: (value) => {
        if (value === "") {
          return "Title cannot be empty";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "entry",
      message: "Blog entry :- ",
      validate: (value) => {
        if (value === "") {
          return "Entry cannot be empty";
        }
        return true;
      },
    },
    {
      type: "confirm",
      name: "confirm",
      message: "Publish post ?",
      default: false,
    },
  ];

  mcqGen.prompt(questions).then(function (site) {
    if (!site.confirm) {
      wp.posts()
        .create({
          title: site.name,
          content: site.entry,
        })
        .then((response) => {
          console.log(
            "Your Post Details \n Post ID :- " +
              response.id +
              "\n Draft Link : " +
              response.link +
              "\n"
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      wp.posts()
        .create({
          title: site.name,
          content: site.entry,
          status: "publish",
        })
        .then(function (response) {
          console.log(
            "Your Post Details \n ID :- " +
              response.id +
              "\n Publish Link : " +
              response.link +
              "\n"
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
};
