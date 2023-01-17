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
  colors: {},
  components: {
    Button: {
      baseStyle: {
        fontWeight: 600,
        display: "flex",
        borderRadius: "0",
        letterSpacing: "0.1em",
        _focus: {
          boxShadow: "none",
        },
      },
      sizes: {
        md: {
          fontSize: "15px",
          lineHeight: "20px",
          height: "auto",
        },
      },
      variants: {
        primary: {
          bg: "linear-gradient(91.14deg, #E35FED -67.41%, #2B36E7 100.81%)",
          color: "#FFFFFF",
          textTransform: "uppercase",
          padding: "12px 30px",
        },
        outline: {
          bg: "transparent",
          color: "#ffffff",
          border: "1px solid #FFFFFF",
          textTransform: "uppercase",
          padding: "11px 30px",
        },
      },
      defaultProps: {},
    },
    Input: {
      variants: {
        flushed: {
          field: {
            borderColor: "#B2B2B2",
            borderRadius: "0",
            pr: "10",
            color: "#FFFFFF",
            _focus: {
              borderColor: "#A555FF",
              boxShadow: "none",
            },
            _disabled: {
              borderBottom: "1px dashed #B2B2B2",
            },
            _invalid: {
              borderColor: "#FF3535",
              boxShadow: "none",
              _focus: {
                borderColor: "#cc0000",
              },
            },
          },
        },
      },
      defaultProps: {
        variant: "flushed",
      },
    },
  },
});
export default theme;
