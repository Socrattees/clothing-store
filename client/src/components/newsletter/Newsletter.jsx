import React from "react";
import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
  height: 60vh;
  background-color: #f5fbfd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.2rem;
`

const Description = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1.1rem;
`

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;

  background-color: white;
`

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 1.2rem;
`

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #008B8B;
  }
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter;