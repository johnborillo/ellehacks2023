const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const users = [];

const generateID = () => Math.random().toString(36).substring(2, 10);

app.post("/api/register", (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  //👇🏻 Logs the credentials to the console
  let result = users.filter((user) => user.email === email);

  if (result.length === 0) {
    //👇🏻 creates the structure for the user
    const newUser = { id: generateID(), email, password, firstName, lastName };
    //👇🏻 Adds the user to the array of users
    users.push(newUser);
    //👇🏻 Returns a message
    return res.json({
      message: "Account created successfully!",
    });
  }
  //👇🏻 Runs if a user exists
  res.json({
    error_message: "User already exists",
  });
});

app.post("/api/login", (req, res) => {
  // Accepts the user's credentials
  const { email, password } = req.body;
  // Checks for user(s) with the same email and password
  let result = users.filter(
    (user) => user.email === email && user.password === password
  );

  //👇🏻 If no user exists, it returns an error message
  if (result.length !== 1) {
    return res.json({
      error_message: "Incorrect credentials",
    });
  }

  //👇🏻 Returns the username of the user after a successful login
  res.json({
    message: "Login successfully",
    data: {
      username: result[0].username,
    },
  });
});
