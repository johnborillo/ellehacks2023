import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import "./Header.css";

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
        <h1>Donation Hub</h1>
        <div className="header-right">
          <Link
            style={{ textDecoration: "none", color: "black" }}
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
            <Link style={{ textDecoration: "none", color: "black" }}>
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
