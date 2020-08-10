import React, { useState } from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons';

export default () => {
  const [modal, setModal] = useState(false)

  return (
    <Main>
      <Content>
        <Description>
        The Trading Ground
        </Description>
        <Text>Education. News. Community.</Text>
        <br/>
        <Button href="https://community.thetradingground.com/signup">Enter</Button>
      </Content>
      <Footer>
      <div >
        <SocialIcon fgColor="#000" bgColor="#fff" url="http://twitter.com/tradingground" />
        <br/>
        <FooterLink target="" href="https://community.thetradingground.com/about">About</FooterLink>
        <FooterLink target="" href="https://community.thetradingground.com/faq">FAQ</FooterLink>
        <FooterLink target="" href="https://community.thetradingground.com/t/contact-us">Contact</FooterLink>
        <FooterLink target="" href="https://community.thetradingground.com/privacy">Privacy</FooterLink>
        <FooterLink target="" href="https://community.thetradingground.com/tos">Terms of service</FooterLink>
        <FooterLink target="" href="https://community.thetradingground.com/t/disclaimer">Disclaimer</FooterLink>
        <FooterLink target="" href="https://thetradingground.com/sitemap">Sitemap</FooterLink>
      </div>
      </Footer>
    </Main>
  )
}


const Main = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 100%;
  width: 100%;
  height: 100vh;
  padding: 5rem 6rem;
  background-position: center;
  background-repeat: no-repeat, no-repeat;
  background-size: auto 95%, cover;
  box-sizing: border-box;
  color: #000;
  padding-top: 8rem;
  @media (min-width: 768px) {
    padding: 10rem 12rem;
    background-position: center;
  }
`
const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #FFF;
  color: #000;
  text-align: center;
  padding-bottom: 10px;
`

const Content = styled.div`
  margin-top: 8rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`

const FooterLink = styled.a`
  text-decoration: none;
  font-size: 1.0rem;
  color: #000;
  padding:10px;
`

const Description = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  span {
    font-size: 2.8rem;
  }
  @media (min-width: 768px) {
    font-size: 3.4rem;
    span {
      font-size: 3.4rem;
    }
  }
`

const Button = styled.a`
background: #000;
color: #fff;
padding: 10px;
text-align:center;
text-decoration: none;
 font-weight: bold;
    font-size: 1.3rem;
`

const Text = styled.p`
  font-size: 1.8rem;
  margin-top: 0.8rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
  padding-bottom: 20px;
`

