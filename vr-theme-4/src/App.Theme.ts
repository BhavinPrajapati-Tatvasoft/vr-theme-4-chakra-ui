import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#0F1E4E",
        color: "#CFD2DC",
        fontFamily: "Open Sans, sans-serif",
        fontSize: "15px",
        lineHeight: "20px",
        fontWeight: 400,
      },
    },
  },

  colors: {
    primary: "#59B997",
    body: "#CFD2DC",
    backgroundColor: "red",
    green: {
      300: "#262626",
      500: "#59B997",
    },
  },
  components: {},
});
export default theme;
