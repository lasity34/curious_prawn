import { makeStyles, alpha } from "@material-ui/core/styles";

import Image from "../../extras/images/Sign-up.jpg";

export default makeStyles((theme) => ({
  signUpBody: {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Image})`,
    height: "100vh",
    padding: "100px",
  },
  signContainer: {
    backgroundColor: "#f7f6eb",
    margin: "0 auto",
  },
  contentContainer: {
    padding: " 3em 2em",
    textAlign: "center",
  },
  formContent: {
    textIndent: "5px",
    borderRadius: "5px",
  },
  formInput: {
    borderRadius: theme.shape.borderRadius,
    border: "1px solid grey",
  },
  formTitle: {
    marginBottom: "0.5em",
    fontStyle: "italic",
  },
  formSubtitle: {
    color: "#849188",
    fontWeight: 600,
  },
  button: {
    width: "100%",
    margin: "2em auto",
    padding: "0.5em 4em",
    color: "white",
    backgroundColor: alpha(theme.palette.success.dark, 0.95),
    "&:hover": { backgroundColor: alpha(theme.palette.success.main, 0.65) },
    textTransform: "capitalize",
  },
  link: {
    textDecoration: "none",
    color: alpha(theme.palette.success.dark, 0.95),
    "&:hover": { color: alpha(theme.palette.success.main, 0.65) },
  },
  forgot: {
    textAlign: 'center',
   
    textDecoration: "none",
    color: alpha(theme.palette.success.dark, 0.95),
    "&:hover": { color: alpha(theme.palette.success.main, 0.65) },
  },
  bottomBox: {
    marginTop: '1em'
  },
  colorSign: {
      color: 'pink'
  }
}));
