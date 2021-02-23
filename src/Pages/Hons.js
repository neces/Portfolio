import React from 'react';
import { ReactComponent as Mail } from '../Assets/mail.svg';
import { ReactComponent as Linkedin } from '../Assets/logo-linkedin.svg';
import { ReactComponent as Cv } from '../Assets/cv.svg';
import Pdf from '../Assets/CV.pdf';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { Link } from "react-router-dom";

const Hons = ({ }) => {

    return (
      <div>
      <Container>
      <div className='icons'>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
      >
      <div className='icon'>
        <a target="_blank" rel="noopener noreferrer" href="mailto:neja.cesnik@gmail.com"><Mail /></a>
      </div>
      <div className='icon'>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/neja-cesnik/"><Linkedin /></a>
      </div>
      <div className='icon'>
        <a target="_blank" rel="noopener noreferrer" href={Pdf}><Cv /></a>
      </div>
      </Grid>
      </div>

      <div className='logo'>
        <Link to="/">Neja</Link>
      </div>

      <h1>Web Application to Support the Design Sprint Process</h1>
      </Container>
      </div>
    )
  }
  
  export default Hons