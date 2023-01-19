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
    customGradient: "linear-gradient(90.11deg, #E239F1 0%, #2296CB 101.9%);",
  },
  components: {
    Text: {
      baseStyle: {
        color: "#CFD2DC",
      },
    },
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
          transition: "all 0.3s",
          padding: "12px 30px",
          _hover: {
            bg: "linear-gradient(91.14deg, #2B36E7 -67.41%, #E35FED 100.81%)",
          },
          _focus: {
            bg: "linear-gradient(91.14deg, #2B36E7 -80.41%, #E35FED 100.81%)",
          },
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
            height: "auto",
            padding: "11px 0",
            color: "#FFFFFF",
            boxShadow: "none !important",
            _placeholder: {
              color: "#B2B2B2",
            },
            _focus: {
              borderColor: "#A555FF",
            },
            _disabled: {
              borderBottom: "1px dashed #B2B2B2",
            },
            _invalid: {
              borderColor: "#FF3535",
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
    Select: {
      variants: {
        flushed: {
          field: {
            borderColor: "#B2B2B2",
            borderRadius: "0",
            boxShadow: "none !important",
            color: "#FFFFFF",
            _focus: {
              borderColor: "#A555FF",
            },
          },
        },
      },
    },
    Textarea: {
      variants: {
        flushed: {
          borderColor: "#B2B2B2",
          borderRadius: "0",
          boxShadow: "none !important",
          color: "#FFFFFF",
          _placeholder: {
            color: "#B2B2B2",
          },
          _focus: {
            borderColor: "#A555FF",
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
            height: "100%",
            "@media(max-width:1399px)": {
              padding: "20px",
            },
            "@media(max-width:991px)": {
              padding: "16px",
            },
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
              td: { borderBottom: "0" },
            },
          },
        },
      },
      defaultProps: {
        variant: "simple",
      },
    },
    Radio: {
      sizes: {
        md: {
          label: {
            fontSize: "15px",
          },
        },
      },
      baseStyle: {
        label: {
          fontSize: "15px",
          marginLeft: "9px",
          color: "#B2B2B2",
        },
        control: {
          backgroundColor: "transparent",
          borderColor: "#B2B2B2",
          "&:before": {
            width: "6px",
            height: "6px",
          },
          _checked: {
            backgroundColor: "transparent",
            borderColor: "#A555FF",
            "&:before": {
              backgroundColor: "#A555FF",
              width: "6px",
              height: "6px",
            },
            _hover: {
              boxShadow: "none",
              backgroundColor: "transparent",
              borderColor: "#A555FF",
            },
          },
        },
      },
    },
    Checkbox: {
      baseStyle: {
        label: {
          marginLeft: "9px",
          color: "#B2B2B2",
        },
        control: {
          padding: "1",
          borderColor: "#B2B2B2",
          borderWidth: "2px",
          borderRadius: "2px",
          _focus: {
            boxShadow: "none",
            borderColor: "#A555FF",
          },
          _checked: {
            background: "transparent",
            borderColor: "#A555FF",
            _hover: {
              background: "transparent",
              borderColor: "#A555FF",
            },
          },
        },
      },
      sizes: {
        md: {
          label: {
            fontSize: "15px",
          },
        },
      },
    },
    Alert: {
      variant: {
        success: {
          background: "red",
        },
      },
      baseStyle: {
        container: {
          border: "1px solid",
          padding: "9px 10px",
          "&.alert-error": {
            bg: "rgba(255, 53, 53, 0.2)",
            borderColor: "#FF3535",
            color: "#FF3535",
          },
          "&.alert-info": {
            bg: "rgba(55, 219, 255, 0.2)",
            borderColor: "#37DBFF",
            color: "#37DBFF",
          },
          "&.alert-warning": {
            bg: "rgba(255, 199, 55, 0.2)",
            borderColor: "#FFC737",
            color: "#FFC737",
          },
          "&.alert-success": {
            bg: "rgba(101, 255, 135, 0.2)",
            borderColor: "#65FF87",
            color: "#65FF87",
          },
        },
        description: {
          lineHeight: "20px",
          marginLeft: "8px",
        },
      },
    },
    Tabs: {
      variants: {
        line: {
          tab: {
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "26px",
            color: "#CFD2DC",
            borderBottomWidth: "3px",
            padding: "10px 20px",
            "@media (max-width:767px)": {
              fontSize: "16px",
              lineHeight: "20px",
              padding: "8px 16px",
            },
            "&:not(:first-of-type)": { marginLeft: "10px" },
            _selected: {
              color: "#A555FF",
            },
            _focus: {
              boxShadow: "none",
              color: "#A555FF",
            },
            _hover: {
              color: "#A555FF",
            },
            _active: {
              backgroundColor: "transparent",
            },
          },
          tablist: {
            borderBottom: "1px solid rgba(255,255,255,0.5)",
            borderColor: "rgba(255,255,255,0.5)",
          },
          tabpanel: {
            color: "#FFFFFF",
            lineHeight: "25px",
            padding: "24px 0 0",
          },
        },
      },
      defaultProps: {
        variant: "line",
      },
    },
  },
});
export default theme;
