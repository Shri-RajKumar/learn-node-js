// import figlet from "figlet";
const figlet = require("figlet")

figlet(
    "Raj kumar !",
    // {
    //     font: "Ghost",
    //     horizontalLayout: "default",
    //     verticalLayout: "default",
    //     width: 80,
    //     whitespaceBreak: true,
    //   },
    function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });