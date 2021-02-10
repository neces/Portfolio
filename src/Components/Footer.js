import React from 'react'
import { ReactComponent as Mail } from '../Image/mail.svg';
import { ReactComponent as Linkedin } from '../Image/logo-linkedin.svg';
import { ReactComponent as Cv } from '../Image/cv.svg';
import Pdf from '../Files/CV.pdf';
import Grid from '@material-ui/core/Grid';

const Footer = ({ }) => {

  return (
    <div className='footer'>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
    >
    <div className='icon'>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/neja-cesnik/"><Linkedin /></a>
    </div>
    <div className='icon'>
      <a target="_blank" rel="noopener noreferrer" href="mailto:neja.cesnik@gmail.com"><Mail /></a>
    </div>
    <div className='icon'>
      <a target="_blank" rel="noopener noreferrer" href={Pdf}><Cv /></a>
    </div>
    </Grid>
    <div>
        I can't believe I finally made myself a portfolio! © Neja Cesnik 2021
    </div>
    </div>
  )
}

export default Footer