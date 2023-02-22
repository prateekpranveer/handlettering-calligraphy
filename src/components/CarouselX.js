import React from 'react'
import styled from 'styled-components'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselX = ({images}) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <CarouselMain>
    <Carousel swipeable={true}
  draggable={true}
  showDots={true} responsive={responsive}>
        
        
        {
            
            images.map((p)=> (
                
                <img src={p.image}></img>
                
            ))
            
        }
        
</Carousel>
    </CarouselMain>
  )
}

export default CarouselX

const ImgDiv = styled.div`
    
`

const CarouselMain = styled.div`
`