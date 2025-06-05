import express from "express";
import dotevn from "dotenv";
dotevn.config();
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("this is our homepage");
});

app.get("/about", (req, res) => {
  res.send("this is our aboutpage");
});

app.get("/contact", (req, res) => {
  res.send("this is our contact");
});

app.listen(port, () => {
  console.log(`server is running.. ${port}`);
});
