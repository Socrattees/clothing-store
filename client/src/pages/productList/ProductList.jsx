import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";

const Container = styled.div`

`

const Title = styled.h1`

`

const FilterContainer = styled.div`

`

const Filter = styled.div`

`

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>Filter 1</Filter>
        <Filter>Filter 2</Filter>
      </FilterContainer>
    </Container>
  )
}

export default ProductList;