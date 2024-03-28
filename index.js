const express = require("express");

const app = express();
app.use(express.json());

app.post("/timezone", (req, res) => {
  const date = req.body.date;
  const serverDate = new Date();
  res.send(
    JSON.stringify({
      date,
      serverDate,
    })
  );
});

app.listen(3000, () => {
  console.log("Server is listening");
});
