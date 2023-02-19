import React, { useState } from "react";
import {
  Box,
  Fade,
  FormControlLabel,
  Switch,
  Button,
  TextField,
} from "@mui/material";

const AuthPage = () => {
  const [signUp, setSignUp] = useState(false);
  const handleChange = () => {
    setSignUp((prev) => !prev);
  };

  const sumbitHandler = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    let firstName = e.target.elements.firstName.value;
    let lastName = e.target.elements.lastName.value;

    if (signUp) {
      fetch("http://localhost:4000/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password, firstName, lastName }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error_message) {
            alert(data.error_message);
          } else {
            alert(data.message);
          }
        })
        .catch((err) => console.error(err));
    } else {
      fetch("http://localhost:4000/api/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error_message) {
            alert(data.error_message);
          } else {
            console.log("success");
            localStorage.setItem("username", data.data.username);
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "60%",
      }}
    >
      <FormControlLabel
        control={<Switch checked={signUp} onChange={handleChange} />}
        label="Sign Up"
      />
      <Box component="form" noValidate onSubmit={sumbitHandler} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />
        <Fade in={signUp}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="first name"
          />
        </Fade>
        <Fade in={signUp}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="last name"
          />
        </Fade>
        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default AuthPage;
