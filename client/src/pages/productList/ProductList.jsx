import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import Products from "../../components/products/Products";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 5px;
  margin-right: 15px;
`;

const Option = styled.option``;

const ProductList = () => {
  const [selectedColour, setSelectedColour] = useState(""); // State for colour
  const [selectedSize, setSelectedSize] = useState(""); // State for size
  const [sortOption, setSortOption] = useState(""); // State for sorting

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Shirts</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select value={selectedColour} onChange={(e) => setSelectedColour(e.target.value)}>
            <Option value="">Colour</Option>
            <Option value="White">White</Option>
            <Option value="Black">Black</Option>
            <Option value="Red">Red</Option>
            <Option value="Blue">Blue</Option>
            <Option value="Yellow">Yellow</Option>
            <Option value="Green">Green</Option>
          </Select>
          <Select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
            <Option value="">Size</Option>
            <Option value="XS">XS</Option>
            <Option value="S">S</Option>
            <Option value="M">M</Option>
            <Option value="L">L</Option>
            <Option value="XL">XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <Option value="Newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;