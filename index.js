const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    name: "Sakib AL Hasan",
    passion: "criketer",
    possition: "All Rounder",
  },
  {
    id: 2,
    name: "Masrafi Bin Mortoza",
    passion: "criketer",
    possition: "Captain",
  },
  { id: 3, name: "Tamim Iqbal", passion: "criketer", possition: "batsman" },
  {
    id: 4,
    name: "Musfiqur Rohim",
    passion: "criketer",
    possition: "Weaket keeper",
  },
  {
    id: 5,
    name: "Mahmudullah",
    passion: "criketer",
    possition: "batsman , boller",
  },
];

app.get("/", (req, res) => {
  res.send("my over smart smarty node project");
});

// get data from clint side
app.post("/user", (req, res) => {
  console.log("success", req.body);
  const user = req.body;
  user.id = users.length + 1
  users.push(user)
  res.send(user);
});

// app.get("/user", (req, res) => {
//   res.send({ id: 1, name: "Md N Shikder", passion: "programing" });
// });

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id == id);
  res.send(user);
});

app.listen(port, () => {
  console.log("liseting port", port);
});
