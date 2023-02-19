/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { Link } from 'react-router-dom';
import "./HomePage.css";
import "../components/Header/Header.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const HomePage = () => {
  return (
    <><div className="frontendpeersafetech">
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
        <Stack spacing={2} direction="row">
          <Button variant="contained" style={{ backgroundColor: "#202020" }} component={Link}
            to="/chat">Search</Button>
        </Stack>
        <div className="div-3">
          <a href="https://ellehacks.com/">
            <span className="made-for-nw-hacks">@ElleHacks2023</span>
          </a>
          <span className="about-us">About Us</span>
        </div>
      </div>
    </div></>
  );
};
export default HomePage;