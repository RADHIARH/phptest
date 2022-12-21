const userr = require("./routes/user");
// Add packages
const express = require("express");
// Initialize Express
const app = express();
const port = process.env.PORT || 3002;
app.listen(port, function () {
  console.log("Node app is running on port " + port);
});
// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
app.use("/", userr);
