import React, { useContext } from "react";
import { ThemeContext, themes } from "../../context";
import { Button } from "../button";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <Button
        onClick={() =>
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }
        style={{color: theme.colorMode, backgroundColor: theme.bgMode, position: 'absolute', top: 40, right: 40, padding: '10px 20px', border: 'none', borderRadius: '5px', fontWeight: '900', fontSize: '15px'}}
      >
        {theme.mode}
      </Button>
    </div>
  );
};
