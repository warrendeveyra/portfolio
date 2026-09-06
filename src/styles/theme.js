import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import ElipseVector from "./../assets/elipse.svg";

export const getTheme = (mode) => createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: 'background-color 0.3s ease, color 0.3s ease',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.3s ease, color 0.3s ease',
        },
        colorDefault: {
          backgroundColor: mode === 'light' ? "#F8F8FF" : "#121212",
          color: mode === 'light' ? "#000" : "#fff",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.04)",
        },
        colorPrimary: {
          backgroundColor: "#9B09DF",
          color: "#fff",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.04)",
        },
      },
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          marginTop: "0px",
          marginBottom: "0px",
          boxShadow: "none"
        }
      },
    },
    MuiTimelineContent: {
      styleOverrides: {
        root: {
          paddingTop: "0px"
        }
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          width: "4px",
          backgroundColor: "#9B09DF"
        },
      },
    },
    MuiTimelineItem: {
      styleOverrides: {
        missingOppositeContent: {
          "&:before": {
            display: "none"
          }
        }
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: '14px',
          padding: '11px 21px 11px 21px',
        },
        containedSecondary: {
          background: '#FAC036',
          boxShadow: 'none',
          borderRadius: '42px',
          "&:hover": {
            transition: "0.4s",
            backgroundColor: '#FBC33E',
            boxShadow: '0px 4px 4px rgba(250, 192, 54, 0.32)',
          }
        }
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
        },
        elevation1: {
          padding: "32px 48px 32px 48px",
          marginTop: "22px",
          marginBottom: "110px",
          background: mode === 'light' ? "#FAFAFF" : "#1E1E1E",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
          borderRadius: "6px",
        },
        elevation2: {
          marginTop: "22px",
          marginBottom: "22px",
          padding: "32px 48px 32px 48px",
          background: '#9D57D3',
          boxShadow: '0px 7px 20px -7px #9D57D3',
          borderRadius: '20px',
          color: '#FFFFFF'
        },
        elevation3: {
          marginTop: "22px",
          marginBottom: "22px",
          padding: "32px 48px 32px 48px",
          background: '#F8D350',
          boxShadow: '0px 7px 20px -7px #F8D350',
          borderRadius: '20px',
          color: '#4F545B'
        },
        elevation4: {
          marginTop: "22px",
          marginBottom: "22px",
          padding: "32px 48px 32px 48px",
          background: '#FC7281',
          boxShadow: '0px 7px 20px -7px #FC7281',
          borderRadius: '20px',
          color: '#FFFFFF'
        },
        elevation5: {
          cursor: 'pointer',
          padding: "32px 48px 32px 48px",
          marginTop: "22px",
          marginBottom: "22px",
          background: mode === 'light' ? "#FAFAFF" : "#1E1E1E",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
          borderRadius: "6px",
          "&:hover": {
            boxShadow: mode === 'light' ? '0px 16px 38px -8px rgba(0, 0, 0, 0.05)' : '0px 16px 38px -8px rgba(0, 0, 0, 0.3)'
          }
        }
      },
    },
  },
  palette: {
    mode,
    background: {
      default: mode === 'light' ? "#F8F8FF" : "#121212",
      paper: mode === 'light' ? "#FAFAFF" : "#1E1E1E",
    },
    text: {
      primary: mode === 'light' ? "#373C44" : "#E0E0E0",
      secondary: mode === 'light' ? "#666" : "#AAA",
    }
  },
  typography: {
    fontFamily: ['"Montserrat"', "Open Sans"].join(","),
  },
});

export const theme = getTheme('light');


export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fafafa",
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
    transitionDelay: ".2s",
  },
  titleText: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "2rem",
    lineHeight: "2rem",
    color: theme.palette.text.primary,
    paddingLeft: theme.spacing(0.5),
    transition: 'color 0.3s ease',
    "&:before": {
      zIndex: -1,
      content: '""',
      backgroundImage: `url(${ElipseVector})`,
      backgroundRepeat: "no-repeat",
      display: "block",
      height: "37px",
      width: "37px",
      top: "35px",
      left: "-4px",
      position: "relative",
    },
  },
  navBarMd: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  navBarSm: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  textBlack: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 800,
  },
  textMain: {
    color: theme.palette.text.primary,
    transition: 'color 0.3s ease',
  },
  textExtraBold: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 900,
  },
  bannerTextSmall: {
    fontSize: "2.1rem",
    lineHeight: "3.6rem",
  },
  downloadButtonText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px'
  },
  bannerTextSmallPurple: {
    color: "#9B09DF",
    fontSize: "2.2rem",
    lineHeight: "3.6rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
    },
  },
  bannerTextNormal: {
    color: theme.palette.text.primary,
    fontSize: "3rem",
    lineHeight: "4rem",
    transition: 'color 0.3s ease',
  },
  bannerTextPurple: {
    color: "#9B09DF",
    fontSize: "3.0rem",
    lineHeight: "4rem",
  },
  bannerTextPink: {
    color: "#DF09CA",
  },
  buttonLink: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "15px",
    lineHeight: "17px",
    color: theme.palette.text.primary,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textDecoration: "none",
    letterSpacing: "0.05em",
    transition: 'color 0.3s ease',
    "&:hover": {
      textDecoration: "none",
      transition: "0.2s",
      color: "#FAC036",
    },
    "&:link": {
      textDecoration: "none",
    },
    "&:visited": {
      textDecoration: "none",
    },
  },
  activeButtonLink: {
    color: "#FAC036",
  },
  githubButton: {
    fill: theme.palette.text.primary,
    transition: 'fill 0.3s ease',
    "&:hover": {
      transition: "0.2s",
      fill: "#6e5494",
    },
  },
  gitlabButton: {
    fill: theme.palette.text.primary,
    transition: 'fill 0.3s ease',
    "&:hover": {
      transition: "0.2s",
      fill: "#FCA326",
    },
  },
  linkedInButton: {
    fill: theme.palette.text.primary,
    transition: 'fill 0.3s ease',
    "&:hover": {
      transition: "0.2s",
      fill: "#0077b5",
    },
  },
  colorCardTitle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '15px',
    lineHeight: '18px'
  },
  colorCardSubtitle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '13px',
    lineHeight: '16px',
    textAlign: 'center'
  },
  mb0: {
    marginBottom: 0
  },
  mb3: {
    marginBottom: '3vh'
  },
  mt8: {
    marginTop: '8vh'
  },
  mt14: {
    marginTop: '14vh'
  }
}));
