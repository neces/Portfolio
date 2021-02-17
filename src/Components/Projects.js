import React from 'react'
import Neja from '../Assets/neja.png';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as Book } from '../Assets/book.svg';

const Projects = ({ }) => {

  return (
    <div className='projects'>
      <Container>
      <Grid container spacing={6}
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={6}>
          <div><img src={Neja} width="200" alt="Neja's profile picture" /></div>
          <h3>FINAL YEAR PROJECT</h3>
          <h1>Web Application to Support the Design Sprint Process</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae diam porttitor, lobortis elit id, dapibus nibh. Fusce posuere mi sit amet nibh suscipit efficitur. Aenean a sapien in est ornare luctus suscipit non lectus. Curabitur ut nunc quam. Ut eget rutrum risus. Vestibulum vel ipsum at ante suscipit venenatis. Mauris aliquet sed quam vitae fermentum. Cras sapien metus, pharetra quis hendrerit in, consectetur vel odio. Donec iaculis magna nisi, ut pretium sem feugiat sed.</p>
        </Grid>
        <Grid item xs={12} sm={6}>
        <div><img src={Neja} width="200" alt="Neja's profile picture" /></div>
          <h3>INTERACTIVE DESIGN</h3>
          <h1>Virtual University Open Day Concept</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae diam porttitor, lobortis elit id, dapibus nibh. Fusce posuere mi sit amet nibh suscipit efficitur. Aenean a sapien in est ornare luctus suscipit non lectus. Curabitur ut nunc quam. Ut eget rutrum risus. Vestibulum vel ipsum at ante suscipit venenatis. Mauris aliquet sed quam vitae fermentum. Cras sapien metus, pharetra quis hendrerit in, consectetur vel odio. Donec iaculis magna nisi, ut pretium sem feugiat sed.</p>
        </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Projects