const express = require('express');
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));