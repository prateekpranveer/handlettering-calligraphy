import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'
import ServiceNav from '../components/ServiceNav'
import Banner from './Banner'

const Navbar = () => {
    const [serviceOpen, setserviceOpen] = useState(false)
    const handleMouseEnter = () => {
        console.log(serviceOpen);
        setserviceOpen(!serviceOpen);
    }
  return (
    <>
    <Banner/>
    <NavMain>
        <NavLeft>
            <Logo><Link to="">Handlettering && Calligraphy</Link> </Logo>
            <Author><Link to="about">by <Name>Rahul Ryachand</Name></Link></Author>
        </NavLeft>
        <NavRight>
        <nav>
            <Ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="blog">Blog</Link></li>
                <li><Link to="contact">Contact</Link></li>
                <li><Link to="workshop">Workshop</Link></li>
                <li onClick={handleMouseEnter}><Link to="service">Services</Link></li>
                <li><Link to="about">About</Link></li>
            </Ul>
        </nav>
        </NavRight>
    </NavMain>
    </>  
    )
}

export default Navbar

const NavMain = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
`
const NavLeft = styled.div``
const NavRight = styled.div``
const Logo = styled.div`
    font-size: 25px;
`
const Author = styled.div`
    color: blue;
`
const Name = styled.p`
    text-decoration: underline;
    display: inline;
`
const Ul = styled.ul`
    display: flex;
    width: 400px;
    justify-content: space-between;
`
