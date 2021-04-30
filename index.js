if (!process.env.HOST && !process.env.PORT) {
  console.error("ERROR: Environment variables not set.");
  console.log("Exiting app.");
  process.exit();
}

console.log(`App running on ${process.env.NODE_ENV} mode.`);
require("./app");
