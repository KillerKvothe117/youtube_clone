import React from "react";
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
        <Button style={{ marginTop: "0" }}>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
