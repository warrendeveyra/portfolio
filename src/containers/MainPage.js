import React, { Component } from "react";
import { Container, Grid } from "@mui/material";
import {
  NavigationHeader,
  BannerText,
  BannerIllustration,
} from "./../components/";
import { AboutMe, Experience, RecentWorks, Achievements, TechStackMarquee, Footer } from "./../components/sections";

export class MainPage extends Component {
  render() {
    return (
      <>
        <NavigationHeader />
        <Container component="main" maxWidth="lg" sx={{ paddingTop: '9vh' }}>
          <Container maxWidth="lg">
            <Grid container spacing={2} style={{ height: "100vh", marginTop: "-8vh" }}>
              <BannerText />
              <BannerIllustration />
            </Grid>
            <Grid container spacing={2}>
              <TechStackMarquee />
              <RecentWorks />
              <Experience />
              <Achievements />
              <AboutMe />
            </Grid>
          </Container>
        </Container>
        <Footer />
      </>
    );
  }
}

export default MainPage;
