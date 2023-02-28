import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#f50057",
    },
    // primary: {
    //   main: "#1D1D1D",
    // },
    // secondary: {
    //   main: "#f50057",
    // },
    // background: {
    //   default: "#121212",
    //   paper: "#1D1D1D",
    // },
    // text: {
    //   primary: "#f3f3f3",
    //   secondary: "rgba(255,255,255,0.54)",
    //   disabled: "rgba(255,255,255,0.38)",
    //   hint: "rgba(255,255,255,0.38)",
    // },
  },
});

export default theme;
