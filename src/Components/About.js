import React from 'react'
import Neja from '../Assets/neja.png';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as Book } from '../Assets/book.svg';

const About = ({ }) => {

  return (
    <div className='about-me'>
      <Container>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <h1>About me</h1>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae diam porttitor, lobortis elit id, dapibus nibh. Fusce posuere mi sit amet nibh suscipit efficitur. Aenean a sapien in est ornare luctus suscipit non lectus. Curabitur ut nunc quam. Ut eget rutrum risus. Vestibulum vel ipsum at ante suscipit venenatis. Mauris aliquet sed quam vitae fermentum. Cras sapien metus, pharetra quis hendrerit in, consectetur vel odio. Donec iaculis magna nisi, ut pretium sem feugiat sed.</p> */}
          <p>Aside from designing experiences and developing new products you can find me travelling and taking photos around the world, reading plenty of books in bed, trying out new vegetarian recipes and training dogs.</p>
          {/* <div className='recommendation'><Book /> <b>Visited</b> <a target="_blank" rel="noopener noreferrer" href="https://www.goodreads.com/book/show/41104077-invisible-women">30 countries!</a></div> */}
          {/* <div className='recommendation'><Book /> <b>Recommendation</b> <a target="_blank" rel="noopener noreferrer" href="https://www.goodreads.com/book/show/41104077-invisible-women">Invisible Women</a></div> */}
          {/* <div className='recommendation'><Book /> <b>Recipe</b> <a target="_blank" rel="noopener noreferrer" href="https://www.goodreads.com/book/show/41104077-invisible-women">Baked gnocchi</a></div> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={Neja} width="600" alt="Neja's profile picture" />
        </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default About