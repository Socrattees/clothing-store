import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Orders Over R1000
    </Container>
  )
}

export default Announcement;