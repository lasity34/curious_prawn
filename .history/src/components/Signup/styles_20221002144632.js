import { makeStyles, alpha } from "@material-ui/core/styles";


import Image from "../../images/Sign-up.jpg";

export default makeStyles((theme) => ({
 

  signUpBody: {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Image})`,
    height: '100vh',
   
  },
  container: {
   backgroundColor: "#f7f6eb",
    margin: "  auto",
   
  },
  contentContainer: {
    padding: " 3em 2em",
    textAlign: "center",
  
  },
  formContent: {
    textIndent: "5px",
    borderRadius: "5px",
    margin: 0
  },
  formInput: {
    borderRadius: theme.shape.borderRadius,
    border: "1px solid grey",

  },
  formTitle: {
   marginBottom: '0.5em'
  },
  formSubtitle: {
    color: '#849188',
    fontWeight: 600,
    
  },
  button: {
  
    width: "100%",
    margin: "2em auto",
    padding: "0.5em 4em",
    color: "white",
    backgroundColor: alpha(theme.palette.success.main, 0.95),
    "&:hover": { backgroundColor: alpha(theme.palette.success.main, 0.65) },
    textTransform: 'capitalize'
    
  },
}));
