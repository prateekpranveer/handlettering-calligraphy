import React from 'react'
import { Link } from 'react-router-dom'

const ServiceNav = () => {
  return (
    <>
    <nav>
            <ul>
                <li><Link to="/wedding-invite-sample">Wedding Calligraphy/Design</Link></li>
                <li><Link to="/commision-sample">Custom Calligraphy Commisions</Link></li>
                <li><Link to="/engraving-service">Engraving & Foiling Service</Link></li>
                <li><Link to="/logo-design">Logo Designing</Link></li>
                <li><Link to="/digital-calligraphy">Digital Calligraphy</Link></li>
                <li><Link to="/calligraphy-styles">Callipgrahy Styles</Link></li>
            </ul>
        </nav>
    </>  
    )
}

export default ServiceNav