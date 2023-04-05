import React from 'react'
import styled from 'styled-components';
import Header from '../Components/Header'
import { Grid, TextField } from '@mui/material';
import { MdCall } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import Footer from '../Components/Footer';

const Container = styled(Grid)`
  
  padding : 2em;
  .contactHeader {
    padding: 3rem 0rem;
    text-align: center; 
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 1px;
  }

  .contForm {
    
  }
  .contactDes {
    padding-top: 1rem;
    text-align: center;
    font-size: 16px;
    letter-spacing: 1px;
    padding-bottom: 1rem;
  }
  .contactBtn {
    display: block;
    margin: 0 auto;
    width: 150px;
    height: 50px;
    border: solid 2px #20c997;
    background-color: transparent;
    border-radius: 5px;
    letter-spacing: 2px;
    color: #fff;
    font-size: 1rem;
    cursor:pointer;
    margin-top:3em;
  }
  .contactBtn:hover {
    background-color: #fff;
    color: #000;
    border: none;
  }
`;
const Contact = () => {

  const handleContact = () => {
    window.open("https://wa.me/+919784477117");
  }

  return (
    <>
      <Container container spacing={0}>
        <Grid item xs={12}>
          <h2 className='contactHeader'>Get In Touch</h2>
          <p className='contactDes'>
          I’m currently working as a full time freelancer.
          <br /> If there is any vacancy my inbox is always open. Whether 
          <br /> you have any further questions or just want to say hi, 
          <br /> I’ll try my best to get back to you!
        </p>
        </Grid>
        <Grid xs={12} item>
          <button className='contactBtn' onClick={handleContact}>Contact Me</button>
        </Grid>
      </Container>
    </>
  )
}

export default Contact