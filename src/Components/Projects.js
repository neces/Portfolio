import React from 'react';
import OpenDayDashboard from '../Assets/open-day-dashboard.png';
import DesignSprintDashboard from '../Assets/design-sprint-dashboard.png';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as Book } from '../Assets/book.svg';
import { Link } from "react-router-dom";

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
          <div><Link to="/honoursproject"><img src={DesignSprintDashboard} width="550" alt="Final year project Design Sprint dahsboard" /></Link></div>
          <h3>FINAL YEAR PROJECT</h3>
          <Link to="/honoursproject"><h1>Web Application to Support the Design Sprint Process</h1></Link>
          <div className='subtitle'>
            <p>Project that supports the planning stage of a Design Sprint and helps facilitators focus on the people, rather than the process.</p>
            <h3>DESIGN THINKING ⋅ USER RESEARCH ⋅ REQUIREMENTS GATHERING ⋅ PROTOTYPING ⋅ USER EXPERIENCE DESIGN ⋅ JAVASCRIPT ⋅ REACT ⋅ NODE.JS</h3>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
        <div><Link to="/ux"><img src={OpenDayDashboard} width="550" alt="Virtual open day dashboard" /></Link></div>
          <h3>INTERACTIVE DESIGN</h3>
          <Link to="/ux"><h1>Virtual University Open Day Concept</h1></Link>
          <div className='subtitle-extra-space'>
            <p>Ideating with a Design Sprint to create an interactive solution for bringing the University Open Day experience to people remotely.</p>
            <h3>DESIGN THINKING ⋅ DESIGN SPRINT ⋅ MIRO ⋅ USER EXPERIENCE ⋅ INTERACTIVE DESIGN ⋅ DESIGN SYSTEM ⋅ ADOBE XD</h3>
        </div>
        </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Projects