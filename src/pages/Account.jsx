import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useLocation } from "react-router-dom";
import SmartButtonIcon from "@mui/icons-material/SmartButton";
import IconButton from "@mui/material/IconButton";
const Account = () => {
  const { state } = useLocation();
  const { email, firstName, lastName } = state;
  const fullName = firstName + " " + lastName;
  console.log(firstName);
  console.log(lastName);
  return (
    <>
      <AccountBoxIcon
        style={{ fontSize: "1000%", color: "#1ab843" }}
      ></AccountBoxIcon>
      <br></br>
      <IconButton>
        <SmartButtonIcon
          style={{ fontSize: "150%", color: "#1ab843" }}
        ></SmartButtonIcon>
        <p style={{ fontSize: "70%", color: "#1ab843" }}>
          Change Profile Picture
        </p>
      </IconButton>

      <p style={{ fontSize: "100%", color: "#1cb083" }}>Email: {email}</p>
      <p style={{ fontSize: "100%", color: "#1cb083" }}>Name: {fullName}</p>
    </>
  );
};

export default Account;
