import React, { Component } from "react";
import { Container, Grid, Hidden } from "@material-ui/core";
import {
  NavigationHeader,
  BannerText,
  BannerIllustration,
} from "./../components/";

export class MainPage extends Component {
  render() {
    return (
      <>
        <NavigationHeader />
        <Container component="main" maxWidth="lg">
          <Container maxWidth="lg">
            <Grid container spacing={2} style={{ height: "90vh" }}>
              <BannerText />
              <Hidden smDown>
                <BannerIllustration />
              </Hidden>
            </Grid>
          </Container>
        </Container>
      </>
    );
  }
}

export default MainPage;
