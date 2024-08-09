const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(cors());

let interviews = [];

app.post("/add-interview", (req, res) => {
  const interview = req.body;
  interviews.push(interview);
  res.status(201).send(interview);
});

app.get("/interviews", (req, res) => {
  res.send(interviews);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
