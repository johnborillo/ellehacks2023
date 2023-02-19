import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${"https://t3.ftcdn.net/jpg/02/02/48/64/360_F_202486456_ORGHZ3kGd2wUcICkt0RxCLAYFyOzpEn4.jpg"})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <h1 className="intro">GLOBE</h1>
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
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar
          sapien a lacinia tincidunt. Mauris rutrum quam vel purus bibendum, vel
          faucibus ex finibus. Sed auctor vitae orci vel euismod. Aliquam
          fermentum, nulla id ultricies vestibulum, sapien eros ultricies
          mauris, eu varius felis felis ac mi.
        </p>
        <p>
          Integer non pharetra sapien, ac pulvinar quam. Vivamus commodo, purus
          eu laoreet malesuada, ex nisl eleifend nibh, at lobortis ipsum nisl
          vel risus.
        </p>
        <div className="cta">
          <a href="#">Donate Now</a>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2023 Lorem Ipsum Charity. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
