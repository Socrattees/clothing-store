import React from "react";
import styled from "styled-components";
import { popularProducts } from "../../dummyData";
import Product from "../product/Product";

const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`

const Products = () => {
  return (
    <Container>
      {popularProducts.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products;