const express = require("express");
const middleware = require("./logger");
const morgan = require("morgan");
const courses = require("./courses");

const app = express();
app.use(express.json());
app.use("/api/courses", courses);

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("morgan enabled");
}

app.get("/", (req, res) => {
  res.send("hello i think im working");
});

app.listen(3001, () => {
  console.log(`server listening at port 3001`);
});
