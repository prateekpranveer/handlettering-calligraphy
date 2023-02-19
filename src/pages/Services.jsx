import React from 'react'
import styled from 'styled-components'
import ServiceNav from '../components/ServiceNav'
import SingleService from '../components/SingleService'
import { services } from '../data'

const Services = () => {
  return (
    <>
    <ServiceMain>
    <SingleService data={services}/>
    </ServiceMain>
    </>
  )
}   

export default Services

const ServiceMain = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    display: flex;
    flex-wrap:wrap;
`
