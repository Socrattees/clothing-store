import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { popularProducts } from "../../dummyData";

const Container = styled.div`

`

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`

const ImgContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  max-height: 90vh;
  object-fit: cover;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 20px 0;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 2.5rem;
`

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 200;
`

const FilterColour = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.$color};
  margin: 0 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  gap: 10px;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AddToCartButton = styled.button`
  align-self: flex-start;
  padding: 15px;
  border: 1px solid teal;
  background-color: white;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: teal;
    color: white;
  }
`

const ProductDetails = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={popularProducts[0].img} alt="Product" />
        </ImgContainer>
        <InfoContainer>
          <Title>Product Title</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus lacinia odio vitae vestibulum.
          </Desc>
          <Price>R 400.00</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Colour</FilterTitle>
              <FilterColour $color="black" />
              <FilterColour $color="darkblue" />
              <FilterColour $color="lightgray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon style={{ cursor: "pointer" }} />
              <Amount>1</Amount>
              <AddIcon style={{ cursor: "pointer" }} />
            </AmountContainer>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductDetails;