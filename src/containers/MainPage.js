import React, { Component } from "react";
import { Container, Grid, Hidden } from "@material-ui/core";
import {
  NavigationHeader,
  BannerText,
  BannerIllustration,
} from "./../components/";
import { AboutMe, Experience, RecentWorks, Achievements} from "./../components/sections";

export class MainPage extends Component {
  render() {
    return (
      <>
        <NavigationHeader />
        <Container component="main" maxWidth="lg">
          <Container maxWidth="lg">
            <Grid container spacing={2} style={{ height: "100vh", marginTop: "-8vh" }}>
              <BannerText />
              <Hidden smDown>
                <BannerIllustration />
              </Hidden>
            </Grid>
            <Grid container spacing={2}>
              <AboutMe />
              <Experience/>
              <RecentWorks/>
              <Achievements/>
            </Grid>
          </Container>
        </Container>
      </>
    );
  }
}

export default MainPage;
