import { createTheme } from "@material-ui/core/styles";
import { FormControlLabel, Switch } from "@material-ui/core";
import { useState } from "react";
import { getTranslations as t } from "../../locales";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#9C27B0",
    },
    white: {
      main: "#FFFFFF",
    },

    alabaster: {
      main: "#FFF8E1",
      dark: "#000000",
    },

    mountainMist: {
      main: "#FF6F00",
    },
    gallery: {
      main: "#FFE082",
    },
    cinnabar: {
      main: "#E91E63",
    },
    denim: {
      main: "#673AB7",
    },
    hawkesBlue: {
      main: "#E1BEE7",
      light: "#CE93D8",
    },
    mineShaft: {
      main: "#4A148C",
    },
    emperor: {
      main: "#6A1B9A",
    },
    mercury: {
      main: "#FFF9C4",
      light: "#FFFDE7",
    },
    alto: {
      main: "#FFECB3",
      light: "#FFF8E1",
    },
    flower: {
      main: "#FCE4EC",
      light: "#F8BBD0",
      text: "#880E4F",
    },
    cottonBoll: {
      main: "#F3E5F5",
      light: "#E1BEE7",
      text: "#4A148C",
    },
    diamondBlack : {
      main: "#4A148C",
    }
  },
});

export const checkTheme = () => {
  
  if (typeof window !== "undefined") {
    // Force light mode - always use white background
    if (localStorage) {
      localStorage.setItem("darkTheme", "0");
    }
    document.querySelector("html").classList.remove("darkStyle");
  }

}


export const DarkMode = () => {
  const [checked, setchecked] = useState(document.querySelector("html").classList.contains("darkStyle"))

  const changeTheme = () => {
    if (localStorage) {
      if (!checked) {
        localStorage.setItem("darkTheme", "1");
        document.querySelector("html").classList.add("darkStyle");
        setchecked(true)
      } else {
        localStorage.setItem("darkTheme", "0");
        document.querySelector("html").classList.remove("darkStyle");
        setchecked(false)
      }
    }
  };

  return (
    <FormControlLabel
      value="darkModeEnabled"
      control={<Switch color="primary" checked={checked}  onChange={() => changeTheme()} />}
      label={t('dark_mode')}
      labelPlacement="start"
    />
  );
};

