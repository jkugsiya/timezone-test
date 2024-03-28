const express = require("express");

const app = express();
app.use(express.json());

app.post("/timezone", (req, res) => {
  const date = new Date(req.body.date);
  const serverDate = new Date();
  date.setHours(23, 59, 59, 99);
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
