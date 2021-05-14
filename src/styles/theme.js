import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import ElipseVector from "./../assets/elipse.svg";

export const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: "#F8F8FF",
        color: "#000",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.04)",
      },
      colorPrimary: {
        backgroundColor: "#9B09DF",
        color: "#fff",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.04)",
      },
    },
    MuiPaper: {
      elevation1: {
        padding: "32px 48px 32px 48px",
        marginTop: "22px",
        marginBottom: "110px",
        background: "#FAFAFF",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: "6px",
      },
    },
  },
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
      default: "#F8F8FF",
    },
  },
  typography: {
    fontFamily: ['"Montserrat"', "Open Sans"].join(","),
  },
});

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
  cardPurple: {
    background: '#9D57D3',
    boxShadow: '0px 7px 20px -7px #9D57D3',
    borderRadius: '20px',
    color: '#FFFFFF'
  },
  cardYellow: {
    background: '#F8D350',
    boxShadow: '0px 7px 20px -7px #F8D350',
    borderRadius: '20px',
    color: '#4F545B'
  },
  cardPink: {
    background: '#FC7281',
    boxShadow: '0px 7px 20px -7px #FC7281',
    borderRadius: '20px',
    color: '#FFFFFF'
  },
  titleText: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "2rem",
    lineHeight: "2rem",
    color: "#373C44",
    paddingLeft: theme.spacing(0.5),
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
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  navBarSm: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  textBlack: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 800,
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
    fontSize: "2.4rem",
    lineHeight: "3.6rem",
  },
  bannerTextNormal: {
    color: "#373C44",
    fontSize: "3rem",
    lineHeight: "4rem",
  },
  bannerTextPurple: {
    color: "#9B09DF",
    fontSize: "3.2rem",
    lineHeight: "4rem",
  },
  bannerTextPink: {
    color: "#DF09CA",
  },
  downloadButton: {
    background: '#FAC036',
    boxShadow: 'none',
    borderRadius: '42px',
    padding: '11px 21px 11px 21px',
    "&:hover": {
      transition: "0.4s",
      background: '#FBC33E',
      boxShadow: '0px 4px 4px rgba(250, 192, 54, 0.32)',
    },
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
    fill: "#373C44",
    "&:hover": {
      transition: "0.2s",
      fill: "#6e5494",
    },
  },
  gitlabButton: {
    fill: "#373C44",
    "&:hover": {
      transition: "0.2s",
      fill: "#FCA326",
    },
  },
  linkedInButton: {
    fill: "#373C44",
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
