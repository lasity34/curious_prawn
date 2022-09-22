import { alpha, makeStyles } from "@material-ui/core/styles";

import Image from "../../images/Header-image.jpg";

const themes = {
  palette: {
    primary: {
      main: "#0d7507",
    },
  },
};

export default makeStyles((theme) => ({
  title: {
    fontSize: "1.2rem",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.8rem",
    },
  },
  inputBox: {
   display: 'block',
 
    
    
  },
  app: {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Image})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.35),
    "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.55) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "white",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: { width: "20ch" },
    color: "white",
  },
  toolbar: {
    display: "flex",
    flexDirection: "column",
    padding: "1em",
  },
  topHead: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "flex",
  },
  formControl: {
    margin: theme.spacing(2),
    backgroundColor: alpha(theme.palette.common.white, 0.75),
    "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.75) },
    color: "white",
    borderRadius: theme.shape.borderRadius,
  },
  select: {
    paddingLeft: "0.5em",
  },
}));
