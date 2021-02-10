import React from 'react'
import { ReactComponent as Mail } from '../Image/mail.svg';
import { ReactComponent as Linkedin } from '../Image/logo-linkedin.svg';
import { ReactComponent as Cv } from '../Image/cv.svg';
import { ReactComponent as Speak } from '../Image/speaking.svg';
import Pdf from '../Files/CV.pdf';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';

const Head = ({ }) => {

  return (
    <div>
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

    <div className='greeting'>
      <Container maxWidth="sm">
      <h1>Hi, I'm Neja!</h1>
      <h2><Speak />⋅ [ne-yah]</h2>
      <p>Computer Scientist fascinated by the intersection of design, engineering and business. Interested in technology but more excited about the people using it. Creative problem-solver, global citizen and advocate for Women in STEM.</p>

      <p>Looking for a summer internship before starting a masters degree in HCI.</p>
      <Link to="#projects"><h3>View Projects ↓</h3></Link>
      </Container>
    </div>
    </div>
  )
}

export default Head