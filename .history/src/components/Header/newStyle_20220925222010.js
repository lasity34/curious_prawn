import { alpha, makeStyles } from "@material-ui/core/styles";

import Image from "../../images/Header-image.jpg";

export default makeStyles((theme) => ({
  title: {
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
  },

  app: {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Image})`,
    backgroundSize: "100%",
    height: "100%",
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
  listHeader: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: 0,
 
  },
  linkButton: {
    width: '40%',
    fontSize: '1.2rem',
    backgroundColor: alpha(theme.palette.common.black, 0.55),
    "&:hover": { backgroundColor: alpha(theme.palette.common.black, 0.75) },
    color: "white",
    padding: '0.5em 0',
    textAlign: 'center',
    textDecoration: 'none',
    border: 'solid 1px white',
    borderRadius: theme.shape.borderRadius
  },
 
  // select: {
  //   paddingLeft: "0.5em",
  //   border: "none",
  //   outline: "none",
  //   color: "#fff",
  //   background: "#111",
  //   cursor: "pointer",
  //   position: "relative",
  //   zIndex: "0",
  //   borderRadius: "10px",
  //   "&:before": {
  //     content: "",
  //     background:
  //       "linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)",
  //     position: "absolute",
  //     top: "-2px",
  //     left: "-2px",
  //     backgroundSize: "400%",
  //     zIndex: "-1",
  //     filter: "blur(5px)",
  //     width: "calc(100% + 4px)",
  //     height: "calc(100% + 4px)",
  //     animation: "glowing 20s linear infinite",
  //     opacity: "0",
  //     transition: "opacity .3s ease-in-out",
  //     borderRadius: "10px",
  //   },
  //   "&:active": {
  //     color: "#000",
  //   },
  //   "&active:after": {
  //     background: "transparent",
  //   },
  //   "&hover:before": {
  //     opacity: "1",
  //   },
  //   after: {
  //     zIndex: "-1",
  //     content: "",
  //     position: "absolute",
  //     width: "100%",
  //     height: "100%",
  //     background: "#111",
  //     left: "0",
  //     top: "0",
  //     borderRadius: "10px",
  //   },
  //   "@keyframes glowing": {
  //     " 0%": { backgroundPosition: "0 0" },
  //     " 50%": { backgroundPosition: " 400% 0" },
  //     "100%": { backgroundPosition: "0 0" },
  //   },
  // },
}));
