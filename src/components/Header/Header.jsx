/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import "./Header.css";
import div1 from "../../assets/div1.png";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { successAuth } = useContext(UserContext);

  return (
    <>
      <div className="headerContainer">
        <div className="flex-container">
          <a href="/">
            <img className="div-2" src={div1} />
          </a>
        </div>
        <div className="header-right">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/search"
          >
            <span>Search</span>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/charity"
          >
            <span>Charity</span>
          </Link>
          <Button
            id="menu-button"
            aria-controls={open ? "menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ color: "#F2ECE1", fontSize: "18px" }}
          >
            User's Center
          </Button>
          <Menu
            id="menu"
            MenuListProps={{
              "aria-labelledby": "menu-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/account"
            >
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Link>
            <Link to="auth" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem onClick={handleClose}>
                {successAuth ? "Logout" : "Login/Signup"}
              </MenuItem>
            </Link>
          </Menu>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
