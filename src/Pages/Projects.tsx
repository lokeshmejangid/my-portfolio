import { Grid } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import projectList from '../Utils/Projects.json';

const Container = styled(Grid)`
padding: 1em;
.aboutmeText {
    color: #20c997;
    padding-bottom: 1em;
  }
  p {
    font-size: 1.1rem;
    align:justify;
  }
  .card {
    margin-top: 1em;
    border: 1px solid;
    border-radius: 5px;
    padding: 1em;
    min-height: 490px;
    position: relative;
    background: #343a40;

    img {
      height: 150px;
      width: 100%;
    }
  }

  .title {
    padding-top: 1em;
    color: #20c997;
  }

  .tech {
    padding: 0.7em 0em;
    color: #20c997;
    font-weight: bold;
  }

  .tech span {
    color: #ffffff !important;
    font-style: italic;
  }

  .viewBtn {
    display: block;
    margin: 0 auto;
    width: 100px;
    height: 30px;
    border: solid 2px #20c997;
    background-color: transparent;
    letter-spacing: 2px;
    color: #fff;
    cursor:pointer;
    position: absolute;
    bottom: 2%;
    left: 30%;
  }
  .viewBtn:hover {
    background-color: #fff;
    color: #000;
    border-color: transparent;
  }
`;

const Projects = () => {
  const handleClick = (url: string) => {
    console.log(url);
    if(url && url !== ""){
      window.open(url);
    }
  }

  return (
    <Container container spacing={0}>
        <Grid item xs={12}>
            <h2 className='aboutmeText'>Projects</h2>
            <p>
              During my tenure with sysquare, unbreakable and freelancing, I've got chance to work on multiple projects. <br />
              High level summary listed below :
            </p>
        </Grid>
        <Grid container spacing={0}>
          {projectList.map((item, index) => {
            return(
              <Grid item md={3} sm={3} lg={3} xs={12} className='p-5' key={item.id}>
                <div className="card">
                  <img src={item.proImage} alt="" className="projectImg" />
                  <h4 className="title">{item.projectTitle}</h4>
                  <div className="tech">Technology - <span>{item.technology}</span></div>
                  <div className="proDes p-b-20">
                    <p>
                    {item.proDes}
                    </p>
                  </div>
                  <button className="viewBtn"  onClick={() => handleClick(item.proUrl)}>View</button>
              </div>
          </Grid>
            )
            
          })}
            
      </Grid>
    </Container>
  )
}

export default Projects