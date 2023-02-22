import React from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com';

const Form = () => {
    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <FormMain>
            <FormInside>
                <FormHeading>Send Us Your Requirements</FormHeading>
                <FormTagline>"Transform words into works of art - submit your calligraphy request today!"</FormTagline>
                <FormX>
                    <FormDiv onSubmit={sendEmail}>
                        <Input type="text" name="from_name" placeholder='Full Name'/>
                        <Input type="email" name="from_email" placeholder='Your Email Id'/>
                        <Input type="text" name="subject" placeholder='Requirement'/>
                        <TextArea name="html_message" placeholder='Requirements Overview'/>
                        <Button>Submit</Button>
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