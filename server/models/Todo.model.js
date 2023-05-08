const { model, Types, Schema } = require("mongoose");

const TodoModel = model(
  "Todo",
  new Schema({
    text: String,
    description: String,
    done: {
      type: Boolean,
      defaul: false,
    },
  })
);

module.exports = TodoModel;
