import { Grid } from '@mui/material';
import Footer from './Footer'
import Header from './Header'

import styled from 'styled-components';
import TypeWriterText from '../Components/TypeWriterText';

const Container = styled(Grid)`
  background: ${props => props.theme.colors.black};
  height: 100-150vh;
  .leftContent {
    padding: 7em 2em;
    color: #fff;
    letter-spacing: 3px
  }

  .headerText {
    font-size: 2em;
    margin-bottom: 1em;
  }

  .nameText {
    font-size: 1.5em;
  }

  .contactBtn {
    display: block;
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

const Home = () => {
  const handleContact = () => {
    window.open("https://wa.me/+919784477117");
  }

  return (
    <Container container spacing={0}>
      <Grid item xs={7} className='leftContent'>
        <h3 className='headerText'>Hii... <span className='wave'>👋 </span></h3>
        <TypeWriterText />
        <h4 className='nameText m-t-10 m-b-10'>based in Jaipur, India</h4>
        <button className='contactBtn' onClick={handleContact}>Hire Me</button>
      </Grid>
      <Grid item xs={5}>
        <img src='./my-portfolio/assests/images/home.jpg' alt='home' height="350px" width="100%"/>
      </Grid>
    </Container>
  )
}

export default Home