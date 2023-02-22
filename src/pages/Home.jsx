import React from 'react'
import CarouselX from '../components/CarouselX'
import { SliderImages } from '../images'
import styled from 'styled-components'
import SingleService from '../components/SingleService'
import { services } from '../data'
import Form from '../components/Form'

const Home = () => {
  return (
    <>
    <Car>
    <br></br>
    <CarouselX images= {SliderImages}/>
    <br></br>
    <Button>Take a Brief Look at the LookBook</Button>
    <Heading>Services</Heading>
    <ServiceMain>
    <SingleService data={services}/>
    </ServiceMain>
    <Form/>
    </Car>
    </>
  )
}

export default Home

const Car = styled.div`
  margin-top: 100px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`
const Text = styled.p`
  font-size: 24px;
  color: #373635;
`
const Button = styled.button`
  background-color: #4E1757;
  color: white;
  padding: 10px 20px;
`

const HomeTextMain = styled.div`
  font-size: 20px;
  margin: auto;
  margin-top: 30px;
  background-color: lightpink;
  padding: 40px;
`
const Heading = styled.div`
  font-size: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
`
const ServiceMain = styled.div`
    display: flex;
    flex-wrap:wrap;
    margin: 20px;
`
