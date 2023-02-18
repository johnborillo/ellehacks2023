import React from "react";
import Header from "../components/Header/Header.jsx";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const HomePage = () => {
  return (
    <>
      <h1 className="intro">HI THIS IS OUR WEBSITE</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </Box>
      <img
        src="https://t3.ftcdn.net/jpg/02/02/48/64/360_F_202486456_ORGHZ3kGd2wUcICkt0RxCLAYFyOzpEn4.jpg"
        width="100%"
      />
    </>
  );
};

export default HomePage;
