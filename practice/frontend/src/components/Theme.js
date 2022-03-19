import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#8560d4",
    secondary: "#262429",
    cta: "#65BAA9",
    dark: "#262429",
    medium: "#5d4a82",
    light: "#FFFFFF",
    darkGrey: "#eeeeee",
    mediumGrey: "#cccccc",
    lightGrey: "#888888",
    success: "green",
    warning: "yellow",
    error: "red",
    hoverHighlight: "#b89cf1",
    primaryHighlight: " #a585e5",
    secondaryHighlight: "#4b4750",
    ctaHighlight: "#7bd4c2",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
