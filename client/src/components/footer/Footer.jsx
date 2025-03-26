import React from "react";
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
  display: flex;
`

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1`

`

const Description = styled.p`
  margin: 20px 0;
`

const SocialContainer = styled.div`
  display: flex;
  gap: 10px;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
`

const MiddleSection = styled.div`
  flex: 1;
  padding: 20px;
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const ListItem = styled.li`
  margin-bottom: 10px;
`

const RightSection = styled.div`
  flex: 1;
  padding: 20px;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
`

const Payment = styled.img`
  width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <LeftSection>
        <Logo>LOGO</Logo>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          consectetur, metus et ultrices sollicitudin, elit odio ultricies
        </Description>
        <SocialContainer>
          <SocialIcon $color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon $color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon $color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon $color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </LeftSection>
      <MiddleSection>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms and Conditions</ListItem>
        </List>
      </MiddleSection>
      <RightSection>
        <Title>Contact</Title>
        <ContactItem>
          <b>Address:</b>123 Street, City, Country
        </ContactItem>
        <ContactItem>
          <b>Phone:</b>+123 456 789
        </ContactItem>
        <ContactItem>
          <EmailIcon />contact@logo.co.za
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </RightSection>
    </Container>
  )
}

export default Footer;