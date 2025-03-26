import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  border: 2px solid black;
`

const Image = styled.img`
  width: 100%;
`

const Info = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 10px 0;

`

const Icon = styled.div`
  background-color: #ECF3F9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.1s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product;