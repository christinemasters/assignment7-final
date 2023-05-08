require("dotenv/config");
const path = require("node:path");
const express = require("express");
const bodyParser = require("body-parser");

const apiTodoRouter = require("./routes/api.todo");

const { PORT = 8080 } = process.env;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1/todos", apiTodoRouter);
app.use("/", (req, res) => {
  // filter for actual files we want to deliver from disk
  var pattern = new RegExp("(.css|.html|.js|.ico|.jpg|.png)+/?$", "gi");
  if (pattern.test(req.url)) {
    // in cases where the Angular app is mounted at the root url, we may need to strip a trailing slash from the redirected request
    let url = req.url.replace(/\/$/, "");
    // deliver the requested file
    res.sendFile(path.resolve(__dirname, `../client/dist/myapp/${url}`));
  } else {
    // in this case, the request should be handled by Angular, which is index.html
    res.sendFile(path.resolve(__dirname, "../client/dist/myapp/index.html"));
  }
});

app.listen(PORT, () => console.log("Server running on port", PORT));
