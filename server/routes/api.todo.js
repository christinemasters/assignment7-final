const express = require("express");
const TodoService = require("../controllers/todoController");
const router = new express.Router();

router.use((req, res, next) => {
  res.set({
    // Allow AJAX access from any domain
    "Access-Control-Allow-Origin": "*",
    // Allow methods and headers for 'preflight'
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });

  // if this is a preflight, we're done and can send the response with our headers
  if (req.method == "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

router.get("/", async (req, res) => {
  const todos = await TodoService.list();
  res.json(todos);
});

router.post("/", async (req, res) => {
  const data = req.body;
  console.log({ data });
  const newTodo = await TodoService.create(data);
  console.log("post", newTodo);
  res.json(newTodo);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await TodoService.find(id);
  if (!todo) {
    res.status(404).send("NOT FOUND");
  }
  res.json(todo);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await TodoService.delete(id);
  if (!todo) {
    res.status(404).send("NOT FOUND");
  }

  res.send({ deleted: id });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const todo = await TodoService.update(id, data);
  if (!todo) {
    res.status(404).send("NOT FOUND");
  }
  res.send(todo);
});

router.put("/toggle/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await TodoService.toggleDone(id);
  if (!todo) {
    res.status(404).send("NOT FOUND");
  }
  res.json(todo);
});

module.exports = router;
