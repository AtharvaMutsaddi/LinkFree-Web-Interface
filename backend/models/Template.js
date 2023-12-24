const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
  fileName: {
    type: String,
    unique: true,
  },
  views: {
    type: [String], // Array of unique IP addresses
    default: [],
  },
});

// Function to add a view to the template's views array if it doesn't already exist
templateSchema.methods.addView = function (ipAddress) {
  if (!this.views.includes(ipAddress)) {
    this.views.push(ipAddress);
  }
};

module.exports = mongoose.model("Template", templateSchema);

