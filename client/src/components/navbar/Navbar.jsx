import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

const NavbarContainer = styled.div`
  min-height: 60px;
`

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const SearchInput = styled.input`
  border: none;
`

const MiddleSection = styled.div`
  flex: 1;
`

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`

const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  font-size: 1.8rem;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <LeftSection>
          <Language>EN</Language>
          <SearchContainer>
            <SearchInput />
            <SearchIcon style={{color: "grey", fontSize: "medium" }} />
          </SearchContainer>
        </LeftSection>
        <MiddleSection>
          <Logo>LOGO</Logo>
        </MiddleSection>
        <RightSection>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={6} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </RightSection>
      </NavbarWrapper>
    </NavbarContainer>
  )
}

export default Navbar;