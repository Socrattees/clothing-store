import React, { useState } from "react";
import styled from "styled-components";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { sliderItems } from "../../dummyData";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.$slideindex * -100}vw);
  transition: all 1s ease;
`

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 80vh;
  background-color: ${props => props.$bg};
`

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
`

const Image = styled.img`
  height: 80%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 4.5rem;
`

const Description = styled.p`
  margin: 50px 0;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 2px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 1.2rem;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else if (direction === "right"){
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    } else {
      console.log("Invalid direction");
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeftIcon />
      </Arrow>
      <Wrapper $slideindex={slideIndex}>
        {sliderItems.map(item => (
          <Slide key={item.id} $bg={item.bg}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{ item.title }</Title>
              <Description>{ item.desc }</Description>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRightIcon />
      </Arrow>
    </Container>
  )
}

export default Slider;