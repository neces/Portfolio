import React from 'react'
import { ReactComponent as Mail } from '../Assets/mail.svg';
import { ReactComponent as Linkedin } from '../Assets/logo-linkedin.svg';
import { ReactComponent as Cv } from '../Assets/cv.svg';
import { ReactComponent as Speak } from '../Assets/speaking.svg';
import { ReactComponent as Arrow } from '../Assets/arrow.svg';
import Pdf from '../Assets/CV.pdf';
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
      <h2><Speak />⋅ [ney-a]</h2>
      <div className='bio'>Computer Scientist fascinated by the intersection of design, engineering and business. Interested in technology but more excited about the people using it. Creative problem-solver, global citizen and advocate for Women in STEM.</div>

      <p>Looking for a summer internship in Frontend Engineering, User Experience or Product Design before starting a masters degree in HCI.</p>
      </Container>
    </div>
    <div className='more-projects'>
        <h3>View Projects</h3>
        <Arrow />
    </div>
    </div>
  )
}

export default Head