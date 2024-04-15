const express = require("express");
const router = express.Router();

var courses = [
  {
    id: 1,
    name: "java",
  },
  {
    id: 2,
    name: "cpp",
  },
  {
    id: 3,
    name: "react",
  },
  {
    id: 4,
    name: "python",
  },
];

router.get("/", (req, res) => {
  res.json(courses);
});

router.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  courses.push(data);
  res.json(courses);
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const newCourse = courses.filter((val) => val.id != id);
  courses = newCourse;
  res.send(courses);
});
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const update = courses.find((val) => val.id == id);
  if (update) {
    update.name = data.name;
    res.json(courses);
  } else res.status(404).send("not found id");
});

module.exports = router;
