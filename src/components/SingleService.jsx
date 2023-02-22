import React from 'react'
import styled from 'styled-components'
import commision from './../assets/images/custom-commision.jpg'

const SingleService = ({data}) => {
    return (
        <>
            {
                data.map((p) => (
                    <SingleServiceMain>
                        <SingleServiceInside>
                            <Img src={p.img} alt="" />
                            <Header>{p.header}</Header>
                            <Text>
                                    {
                                        p.submenu.map((d)=> (
                                            <p>{d}</p>
                                        ))
                                    }
                            </Text>
                            <Button>Get in Touch</Button>
                        </SingleServiceInside>
                    </SingleServiceMain>
                ))
            }
        </>
    )
}

export default SingleService

const SingleServiceMain = styled.div`
    width: 300px;
    margin: auto;
    margin: 20px auto;
    background-color: #ebccff;
`
const SingleServiceInside = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Heading = styled.h2`
    font-size: 30px;
    font-weight: 600;
`
const Text = styled.p`
    font-size: 15px;
    font-weight: 300;
    text-align: center;
    margin-top: 20px;
`
const Button = styled.button`
    background-color: #4E1757;
    color: white;
    padding: 12px 20px;
    margin-top: 30px;
`

const Image = styled.img`

    margin-top: 20px;

`
const Header = styled.h1`
    font-size: 25px;
    text-align: center;
    margin: top: 20px;
`
const Img = styled.img`
    margin-bottom: 30px;
`