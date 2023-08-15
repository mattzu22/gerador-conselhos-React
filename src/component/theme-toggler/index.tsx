import React, { useContext } from "react";
import { ThemeContext, ThemeContextType, themes } from "../../context";
import { Button } from "../button";
import { StyleDiv } from "./style";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <StyleDiv theme={theme}>
      <Button
        onClick={() =>
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }
        className="btn"
      >
        {theme.mode}
      </Button>
    </StyleDiv>
  );
};