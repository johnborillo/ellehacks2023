/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import "./HomePage.css";
import div1 from "../assets/div1.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Header from "../components/Header/Header";
import "../components/Header/Header.css"

const HomePage = () => {
  return (
    <><Header /><div className="frontendpeersafetech">
      <div className="div">
        <div className="flex-container">
          <img className="div-2" />
        </div>
        <span className="we-connect-you-with">
          We connect you with NGOs from around the world.
        </span>
        <span className="organizations-that-a">
          Organizations that align with your values.
        </span>
        <span className="easily-find-and-supp">
          Easily find and support NGOs that align with your interests and causes
          you care about.
        </span>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Enter NGO"
            variant="filled"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }} />
        </Box>
        <div className="div-3">
          <span className="made-for-nw-hacks">@ElleHacks2023</span>
          <span className="about-us">About Us</span>
        </div>
      </div>
    </div></>
  );
};
export default HomePage;