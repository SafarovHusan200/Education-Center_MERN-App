const { Schema, model } = require("mongoose");

const eduSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      minLength: 10,
    },
    image: {
      type: String,
      requuired: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Edu", eduSchema);
