import React from "react";
import styled from "styled-components";
import { categories } from "../../dummyData";
import CategoryItem from "../categoryItem/CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  gap: 8px;
  justify-content: space-between;
`

const Categories = () => {
  return (
    <Container>
      {categories.map(item => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Categories;