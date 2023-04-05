import { Grid, List, ListItem } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { SiFreelancer } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

const Container = styled(Grid)`
  background: ${props => props.theme.colors.black};
  padding: 1em;
  background: ${props => props.theme.colors.black};
  .logoContainer {
    display: flex;
    align-items:center;
  }
  .logoContainer .logo{
    font-size: 1.5rem;
    color: ${props => props.theme.colors.backgroundLight};
    
  }
  .logoContainer .logoName{
    font-size: 1.5rem;
    color: #fff
  }
  .logoContainer a {
    text-decoration:none;
    display:flex;
  }
  .menu ul{
    display: flex;
    
    li a {
      padding: 0px;
      margin: 0px;
      color: ${props => props.theme.colors.white};
      font-size: 1.1em;
      cursor: pointer;
      text-decoration: none;
    }

    li a:hover {
      color: #20c997;
    }
  }

  .footer {
    display:flex;
  }
`;
const Header = () => {

  const onResumeClick = () => {
    window.open("https://drive.google.com/file/d/1Mtdv6jik0hTOwgM4CI4gTIJLFGRjiENZ/view?usp=sharing");
  }

  return (
    <Container spacing={0}>
      <Grid container spacing={0} item xs={12}>
        <Grid xs={4} className='logoContainer'>
          <NavLink to='/'>
            <SiFreelancer className='logo p-r-10'/>
            <div className="logoName">LOKESH JANGID</div>
          </NavLink>
        </Grid>
        <Grid xs={5} className='menu'>
          <List>
            <ListItem>
              <NavLink to='/'>Home</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='/about'>About</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='/projects'>Projects</NavLink>
            </ListItem> 
            <ListItem>
              <NavLink to ='/contact'>Contact</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to ='#' onClick={onResumeClick}>Resume</NavLink>
            </ListItem>
          </List>
        </Grid>
        <Grid xs={3} item className='footer'>
            <Footer />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Header