declare module "@mui/material/styles" {
  import { LinkProps } from "@mui/material/Link";

  interface Theme {
    palette: {
      primary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      success: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      background: {
        paper: string;
        default: string;
        drawer: string;
      };
    };
    components: {
      MuiLink: {
        defaultProps: LinkProps;
      };
    };
    typography: {
      button: {
        textTransform: "none" | "capitalize" | "uppercase" | "lowercase";
      };
    };
    MuiButton?: {
      styleOverrides?: {
        root?: {
          textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
        };
      };
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    palette?: {
      primary?: {
        main?: string;
        light?: string;
        dark?: string;
        contrastText?: string;
      };
      secondary?: {
        main?: string;
        light?: string;
        dark?: string;
        contrastText?: string;
      };
      success?: {
        main?: string;
        light?: string;
        dark?: string;
        contrastText?: string;
      };
      background?: {
        paper?: string;
        default?: string;
        drawer?: string;
      };
    };
    components?: {
      MuiLink?: {
        defaultProps?: LinkProps;
      };
    };
    typography?: {
      button?: {
        textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
      };
    };

    MuiButton?: {
      styleOverrides?: {
        root?: {
          textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
        };
      };
    }
  }
}
