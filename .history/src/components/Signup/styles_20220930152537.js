import { makeStyles, alpha } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
   
    border: "1px solid grey",
    margin: "1em auto",
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
  
    width: "10%",
    margin: "2em auto",
    padding: "0.5em 4em",
    color: "white",
    backgroundColor: alpha(theme.palette.secondary.main, 0.75),
    "&:hover": { backgroundColor: alpha(theme.palette.primary.main, 0.75) },
    
  },
}));
