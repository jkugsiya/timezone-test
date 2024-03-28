const express = require("express");

const app = express();
app.use(express.json());

app.post("/timezone", (req, res) => {
  const date = new Date(req.body.date);
  date.setHours(23, 59, 59, 99);
  const serverDate = new Date();
  console.log({
    dateOffset: date.getTimezoneOffset(),
    serverDateOffset: serverDate.getTimezoneOffset(),
  });
  if (serverDate.getTimezoneOffset() !== date.getTimezoneOffset()) {
    date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
  }

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
