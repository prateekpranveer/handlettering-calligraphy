import React, { useRef } from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import emailjs from '@emailjs/browser';

const Form = () => {

    const form = useRef();
    const [params, setparams] = useState({
        from_name: "",
        from_email: "",
        message: ""
    })
    const service_ID = "service_2kjv8ig";
    const template_ID = "template_gj50opq";
    const public_Key = "EDYmdTRzQOrlm60h0"
    const emailinit = () => {
        emailjs.init("EDYmdTRzQOrlm60h0")
    }
    emailinit();

    const SendEmail = (e) => {
        e.preventDefault();
        emailjs.send(service_ID, template_ID, params, public_Key)
            .then(
                res => {
                    console.log(res);
                    alert("You have sent the message")
                }
            )
    }

    return (
        <FormMain>
            <FormInside>
                <FormHeading>Send Us Your Requirements</FormHeading>
                <FormTagline>"Transform words into works of art - submit your calligraphy request today!"</FormTagline>
                <FormX>
                    <FormDiv ref={form} onSubmit={SendEmail}>
                        <Input type="text" name="from_name" placeholder='Full Name' />
                        <Input type="email" name="from_email" placeholder='Your Email Id' />
                        <Input type="text" name="subject" placeholder='Requirement' />
                        <TextArea name="html_message" placeholder='Requirements Overview' />
                        <Input type="submit" value="send" />
                    </FormDiv>
                </FormX>
                <FormFooter></FormFooter>
            </FormInside>
        </FormMain>
    )
}

export default Form

const FormMain = styled.div`
    width: 100%;
    height: 74vh;
`
const FormInside = styled.div`
    width: 80%;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
`
const FormHeading = styled.div`
    Font-size: 30px;
    text-align: center;
`
const FormTagline = styled.div`
    text-align: center;
    color: gray;
`
const FormX = styled.div`
    padding: 50px;
`
const FormFooter = styled.div``
const Input = styled.input`
    padding: 10px 20px;
    border: 1px solid gray;
`
const FormDiv = styled.form`
    display: flex;
    flex-direction: column;
    height: 500px;
    justify-content: space-between;
`
const Button = styled.button`
    background-color: #4E1757;
    color: white;
    padding: 15px 30px;
`
const TextArea = styled.textarea`
    height: 200px;
    padding: 10px 20px;
    border: 1px solid gray;

`