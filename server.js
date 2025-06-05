const express = require("express");
const app = express();
app.use(express.json());
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Kelli" },
  { id: 3, name: "Michel" },
  { id: 4, name: "Radha" },
  { id: 5, name: "Krishna" },
];
app.get("/", (req, res) => {
  res.send("Welcome to My Nodejs Project");
});
app.get("/apiv1/users", (req, res) => {
  res.json(users);
});
app.get("/apiv1/users/:id", (req, res) => {
  const filteredData = users.filter(
    (user) => user.id.toString() === req.params.id
  );
  res.json(filteredData);
});
app.post("/apiv1/users", (req, res) => {
  users.push(req.body);
  res.json(req.body);
});
app.delete("/apiv1/users/:id", (req, res) => {
  const filteredData = users.filter(
    (user) => user.id.toString() !== req.params.id
  );
  res.json(filteredData);
});
app.put("/apiv1/users/:id", (req, res) => {
  const { id, name } = req.body;
  const newData = [...users, { ["id"]: id, ["name"]: name }];
  res.json(newData);
});
app.listen(4000);
