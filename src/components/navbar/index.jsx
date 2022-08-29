import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../menu";
import { NavContainer, NavWrapper, Search, SearchInput } from "./navbar.style";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <Search>
          <SearchInput placeholder="search..." />
          <SearchOutlinedIcon />
        </Search>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button style={{ marginTop: "0" }}>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
