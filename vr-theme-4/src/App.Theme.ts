import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Ubuntu, sans-serif",
  },
  colors: {
    primary: "#59B997",
    body: "#4b4b4b",
    green: {
      300: "#262626",
      500: "#59B997",
    },
  },
  components: {},
});
export default theme;
