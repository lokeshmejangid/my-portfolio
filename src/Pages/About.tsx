import { Button, Card, CardActions, CardContent, Grid, List, ListItem, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const Container = styled(Grid)`
  padding: 1.5em;
 
  .aboutmeText {
    color: #20c997;
    padding-bottom: 1em;
  }
  p {
    font-size: 1.1rem;
    align:justify;
  }

  .card {
    background: #343a40;
    margin-top: 1em;
    border: 1px solid;
    border-radius: 5px;
    padding: 1em;
    min-height: 270px;
    h4 {
      color: #20c997;
    }
    .heading {
      margin-top: 10px;
    }
  }
`;
const About = () => {
  return (
    <Container container spacing={0}>
      <Grid item xs={12}>
        <h2 className='aboutmeText'>About <span>Me</span></h2>
        <p >
          Senior Software Engineer having 8+ years of experience in front end coding for Android and Web development. <br />
          I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices.
        </p>
      </Grid>
      <Grid container spacing={0}>
        <Grid item md={4} sm={4} lg={4} xs={12} className='p-5'>
          <Grid container spacing={0} className="card">
            <Grid item xs={12}>
              <h4>Hybrid Development</h4>
              <div className="heading">Technologies:</div>
            </Grid>
            <Grid item xs={6}>
              <List>
                <ListItem>React JS</ListItem>
                <ListItem>Typescript</ListItem>
                <ListItem>Styled Components</ListItem>
                <ListItem>Node JS</ListItem>
                <ListItem>Bootstrap</ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List>
                <ListItem>Mongo DB</ListItem>
                <ListItem>Prime Vue</ListItem>
                <ListItem>Vue JS</ListItem>
                <ListItem>Electron JS</ListItem>
                <ListItem>Redux</ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} sm={4} lg={4} xs={12} className='p-5'>
          <Grid container spacing={0} className="card">
            <Grid item xs={12}>
              <h4>Web Development</h4>
              <div className="heading">Technologies:</div>
            </Grid>
            <Grid item xs={12}>
              <List>
                <ListItem>HTML</ListItem>
                <ListItem>CSS</ListItem>
                <ListItem>Java Script</ListItem>
                <ListItem>Ajax</ListItem>
                <ListItem>Bootstrap</ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} sm={4} lg={4} xs={12} className='p-5'>
          <Grid container spacing={0} className="card">
            <Grid item xs={12}>
              <h4>Mobile App Development</h4>
              <div className="heading">Technologies:</div>
            </Grid>
            <Grid item xs={12}>
              <List>
                <ListItem>Android</ListItem>
                <ListItem>Core Java</ListItem>
                <ListItem>XML</ListItem>
                <ListItem>My Sql</ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        
      </Grid>
    </Container>
  )
}

export default About