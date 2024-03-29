import React, { Component } from "react";
import "./home.css";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// import splashImg from '../../public/images/meetingRoom.jpg'

import NavBar from "./navBar.js";

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <NavBar></NavBar>

        {/* The main content area of the home page. */}
        <div className="main-content-area" >
          <Grid
            container
            spacing={3}
            direction="column"
            justify="center"
            alignItems="center"
            className="home-container-grid"
          >
            <Grid item xs={12}>
              <h1 className="home-title">Spartan Meet</h1>
              <h3 className="home-subtext">Productivity software: Track the costs of your meetings. </h3>
              <h3 className="home-subtext">Do your meetings provide the results that justify the cost?</h3>
            </Grid>
            <Grid item xs={12}>
              <div className="home-buttons">
                <Grid container spacing={3} direction="row" justify="center">
                  <Grid item xs={3}>
                    <Button
                      variant="contained"
                      color="primary"
                      href="/schedule-meet"
                    >
                      Schedule Meeting
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      variant="contained"
                      color="primary"
                      href="/view-meet"
                    >
                      View Meetings
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant="contained" color="primary" href="/metrics">
                      Meeting Metrics
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;
