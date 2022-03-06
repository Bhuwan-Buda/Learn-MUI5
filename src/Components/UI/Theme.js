import { createTheme } from "@mui/material/styles";

const headerColor = "#0487e2";
const facebookColor = "#3b5998";
const instagramColor = "#bc2a8d";
const twitterColor = " #00acee";

const theme = createTheme({
  palette: {
    facebook: {
      main: `${facebookColor}`,
    },
    instagram: {
      main: `${instagramColor}`,
    },
    twitter: {
      main: `${twitterColor}`,
    },
  },
  typography: {
    subtitle1: {
      color: "#999",
    },
    body2: {
      color: "#444",
    },
    h4: {
      color: `${headerColor}`,
    },
    h1: {
      color: "red",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        root: {
          backgroundColor: "#e3e3e3",
        }
      }
    }
  }
});

export default theme;
