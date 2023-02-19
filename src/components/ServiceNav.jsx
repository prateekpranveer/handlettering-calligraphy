import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ServiceNav = () => {
  return (
    <ServiceNavMain>
    <nav>
            <ul>
                <Li><Link to="/wedding-invite-sample">Wedding Calligraphy/Design</Link></Li>
                <Li><Link to="/commision-sample">Custom Calligraphy Commisions</Link></Li>
                <Li><Link to="/engraving-service">Engraving & Foiling Service</Link></Li>
                <Li><Link to="/logo-design">Logo Designing</Link></Li>
                <Li><Link to="/digital-calligraphy">Digital Calligraphy</Link></Li>
                <Li><Link to="/calligraphy-styles">Callipgrahy Styles</Link></Li>
            </ul>
        </nav>
        
    </ServiceNavMain>  
    )
}

export default ServiceNav

const ServiceNavMain = styled.div`
    box-shadow: 0px 0px 8px 0px;
    width: 300px;
    padding: 12px;
    float: right;
`
const Li = styled.div`
    border-bottom: 1px solid black;
`
