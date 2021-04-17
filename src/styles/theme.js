import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#9B09DF",
        contrastText: "#fff",
      },
      secondary: {
        main: "#FAC036",
        contrastText: "#fff",
      },
      background: {
        default: "#F8F8FF"
      }
    },
    typography: {
        fontFamily: ['"Montserrat"', 'Open Sans'].join(',')
    }
});

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      logo: {
        width: "8.7rem",
    },
    animateTransition: {
        transition: "0.4s",
        transitionDelay: '.2s'
    },
    textBlack: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 800
    },
    textExtraBold: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 900
    },
    bannerTextSmall: {
        fontSize: "2.1rem",
        lineHeight: "3.6rem"
    },
    bannerTextSmallPurple: {
        color: "#9B09DF",
        fontSize: "2.4rem",
        lineHeight: "3.6rem"
    },
    bannerTextNormal: {
        color: "#373C44",
        fontSize: "3rem",
        lineHeight: "4rem"

    },
    bannerTextPurple: {
        color: "#9B09DF",
        fontSize: "3.2rem",
        lineHeight: "4rem"
    },
    bannerTextPink: {
        color: "#DF09CA",
    },
    navBar: {
        color: "#000",
        backgroundColor: "#F8F8FF",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.04)",
    },
    buttonLink: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "15px",
        lineHeight: "17px",
        color: "#373C44",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        textDecoration: "none",
        letterSpacing: "0.05em",
        "&:hover": {
          textDecoration: "none",
          transition: "0.2s",
          color: "#FAC036"
        },
        "&:link": {
          textDecoration: "none",
        },
        "&:visited": {
          textDecoration: "none",
        },
    },
    activeButtonLink: {
        color: "#FAC036"
    },
    githubButton: {
        fill: "#373C44",
        "&:hover": {
            transition: "0.2s",
            fill: "#6e5494"
        },
    },
    gitlabButton: {
        fill: "#373C44",
        "&:hover": {
            transition: "0.2s",
            fill: "#FCA326"
        },
    },
    linkedInButton: {
        fill: "#373C44",
        "&:hover": {
            transition: "0.2s",
            fill: "#0077b5"
        },
    },
    
}));
  