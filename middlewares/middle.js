const express = require("express");

const app = express();

function userMiddleware(req, res, next) {
  const { username, password } = req.query; // Extract username and password from query parameters

  if (username !== "kunal" || password !== "pass") {
    return res.status(403).json({
      msg: "Incorrect Input",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const { kidneyId } = req.query; // Extract kidneyId from query parameters

  if (kidneyId != 1 && kidneyId != 2) {
    return res.status(403).json({
      msg: "Incorrect Input",
    });
  } else {
    next();
  }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.send("Your heart is healthy");
});

app.get("/kidney-check", userMiddleware, kidneyMiddleware, (req, res) => {
  res.send("Your kidney is healthy");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
