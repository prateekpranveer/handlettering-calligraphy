import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import facebook from './../assets/images/facebook.png'
import instagram from './../assets/images/instagram.png'
import linkedin from './../assets/images/linkedin.png'

const Contact = () => {
  return (
    <ContactMain>
      <ContactInside>
        <SendMail>
          <Text>Please Write me a Mail to intiate a interaction</Text>
          <Button><Link to="/sendmain">Click to Send an Email</Link></Button>
        </SendMail>
        <Social>
          <Text>Connect Me</Text>
          <SocialIcons>
            <img width="25px" height="25px" src={facebook}></img>
            <img width="25px" height="25px" src={instagram}></img>
            <img width="25px" height="25px" src={linkedin}></img>
          </SocialIcons>
        </Social>
        <Physical>
          <Text>Reach me at:</Text>
          <ContactInfo>
            <Location>Dhalua Main Road, Navapalli, <br /> Kolkata, India, 700150</Location>
            <Info>Contact No. 9649024998</Info>
          </ContactInfo>
        </Physical>
      </ContactInside>
    </ContactMain>
  )
}

export default Contact

const ContactMain = styled.div`
  margin-top: 40px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: 70vh;
  background-color:  #ece5ff;
`

const ContactInside = styled.div`

`
const SendMail = styled.div`
  width: 70%;
  height: 300px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Social = styled.div`
  width: 400px;
  margin: auto;
  text-align: center;
`
const Button = styled.button`
  font-size: 30px;
  background-color: purple;
  color: white;
  padding: 20px 60px;
  margin-top: 30px;'
`

const Text = styled.p`
  font-size: 15px;
  margin-bottom: 30px;
  font-weight: 500;
  color: gray;
`
const Physical = styled.div`
width: 400px;
margin: auto;
text-align: center;
margin-top: 50px;

`

const SocialIcons = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  margin: 20px auto;
  cursor: pointer;
`

const ContactInfo = styled.div`
width: 400px;
margin: auto;
text-align: center;
`
const Location = styled.div``
const Info = styled.div`
  margin-top: 10px;
`