import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#051444",
        color: "#CFD2DC",
        fontFamily: "Open Sans, sans-serif",
        fontSize: "15px",
        lineHeight: "20px",
        fontWeight: 400,
      },
    },
  },
  colors: {
    primary: "#0F1E4E",
    gradient: "linear-gradient(90.11deg, #E239F1 0%, #2296CB 101.9%);"
  },
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
    Menu: {
      baseStyle: {
        item: {
          bg: "#0F1E4E",
          color: "#FFFFFF",
          padding: "10px 20px",
          _focus: {
            backgroundColor: "rgba(255,255,255, 0.08)",
          },
          _hover: {
            backgroundColor: "rgba(255,255,255, 0.08)",
          },
        },
        list: {
          minWidth: "156px",
          padding: "10px 0",
          borderRadius: "0",
          bg: "#0F1E4E",
          boxShadow: "0px 0px 19px rgba(0, 0, 0, 0.17)",
        },
      },
    },
    Card: {
      variants: {
        outline: {
          container: {
            borderRadius: "0",
            border: "0",
            bg: "#0F1E4E",
            padding: "22px 30px 28px",
            height: "100%"
          },
        },
      },
      defaultProps: {
        variant: "outline",
      },
    },
    Table: {
      baseStyle: {
        container: {
          minWidth: "calc(100vw - 64px)",
        },
      },
      variants: {
        simple: {
          th: {
            padding: "14px 14px 14px 0",
            fontSize: "15px",
            linbeHeight: "20px",
            textTransform: "uppercase",
            color: "#9B9B9B",
            fontWeight: "400",
            borderColor: "rgba(255,255,255,0.2)",
          },
          td: {
            padding: "12px 14px 12px 0",
            fontSize: "15px",
            fontWeight: 400,
            color: "#CFD2DC",
            verticalAlign: "middle",
            borderColor: "rgba(255,255,255,0.2)",
          },
          tr: {
            "&:last-child": {
              td: { borderBottom: "0", }
            },
          }
        },
      },
      defaultProps: {
        variant: "simple",
      },
    },
  },
});
export default theme;
