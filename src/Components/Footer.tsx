import { Grid } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import {AiFillGithub} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {GrInstagram} from 'react-icons/gr';
import {BsTwitter, BsFacebook} from 'react-icons/bs';

// interface ISocial {
//   e: any,
//   value: String
// }
const Container = styled(Grid)`
  div {
    display: flex;
    justify-content: end;
  }
  .iconBtn {
    background-color: transparent;
    color: #fff;
    cursor:pointer;
    border: none;
    padding: 0px 0.5em;
  }

  .iconBtn: hover {
    color: #20c997;
  }
  .icon {
    font-size: 1.5em;
  }
`;

const Footer = () => {
  const handleItemClick = (e: any, value: string) => {
    window.open(value);
  }

  return (
    <Container container spacing={0}>
      <Grid item xs={12}>
        <button className="iconBtn" onClick={e => {handleItemClick(e, 'https://github.com/lokeshmejangid')}}>
          <AiFillGithub className='icon' />
        </button>
        <button className="iconBtn" onClick={e => {handleItemClick(e, 'https://www.linkedin.com/in/lokesh-jangid-a9b1161ab/')}}>
          <FaLinkedinIn className='icon' />
        </button>
        <button className="iconBtn" onClick={e => {handleItemClick(e, 'https://twitter.com/')}}>
          <BsTwitter className='icon' />
        </button>
        <button className="iconBtn" onClick={e => {handleItemClick(e, 'https://www.instagram.com/lokeshjangid7323/')}}>
          <GrInstagram className='icon' />
        </button>
        <button className="iconBtn" onClick={e => {handleItemClick(e, 'https://www.facebook.com/profile.php?id=100011437129111')}}>
          <BsFacebook className='icon' />
        </button>
      </Grid>
    </Container>
  )
}

export default Footer