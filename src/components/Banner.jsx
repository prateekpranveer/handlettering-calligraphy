import React from 'react'
import styled from 'styled-components'

const Banner = () => {
  return (
    <BannerMain>
        <BannerInside>
            <Text>Do You Want to Learn Calligraphy?</Text>
            <Button>Click Here</Button>
        </BannerInside>
    </BannerMain>
  )
}

export default Banner

const BannerMain = styled.div`
    width: 100%;
    background-color: #FF6D9E;
    padding: 20px;
    color: white;
`
const BannerInside = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Text = styled.div``
const Button = styled.button`
    background-color: pink;
    padding: 10px 20px;
    margin-left: 30px;

    &:hover {
        background-color: #D23282;
        transition: 0.5s;
    }
`