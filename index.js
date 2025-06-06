import express from "express";
import dotevn from "dotenv";
import cors from "cors";
dotevn.config();
const app = express();

const port = process.env.PORT || 3000;

// middlewares
// for solving the cors error
app.use(cors());

app.get("/", (req, res) => {
  res.send("this is our homepage");
});

app.get("/about", (req, res) => {
  res.send("this is our aboutpage");
});

app.get("/contact", (req, res) => {
  res.send("this is our contact");
});

app.get("/api/users", (req, res) => {
  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      age: 28,
      isActive: true,
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      age: 34,
      isActive: false,
    },
    {
      id: 3,
      name: "Charlie Kim",
      email: "charlie.kim@example.com",
      age: 22,
      isActive: true,
    },
    {
      id: 4,
      name: "Diana Lopez",
      email: "diana.lopez@example.com",
      age: 31,
      isActive: true,
    },
    {
      id: 5,
      name: "Ethan Patel",
      email: "ethan.patel@example.com",
      age: 27,
      isActive: false,
    },
    {
      id: 6,
      name: "Fatima Ahmed",
      email: "fatima.ahmed@example.com",
      age: 29,
      isActive: true,
    },
    {
      id: 7,
      name: "George Lee",
      email: "george.lee@example.com",
      age: 35,
      isActive: false,
    },
    {
      id: 8,
      name: "Hannah Wang",
      email: "hannah.wang@example.com",
      age: 26,
      isActive: true,
    },
    {
      id: 9,
      name: "Isaac Brown",
      email: "isaac.brown@example.com",
      age: 30,
      isActive: true,
    },
    {
      id: 10,
      name: "Jenny O’Neil",
      email: "jenny.oneil@example.com",
      age: 24,
      isActive: false,
    },
  ];

  res.status(200).json({
    success: true,
    data: users,
  });
});

app.listen(port, () => {
  console.log(`server is running.. ${port}`);
});
