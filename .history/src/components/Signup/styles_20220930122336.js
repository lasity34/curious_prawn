import { makeStyles, alpha } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    width: "45%",
    border: "1px solid black",
    margin: "1em auto",
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
    border: "1px solid black",
  },
  button: {
  
    width: "30%",
    margin: "2em auto",
    padding: "0.5em 4em",
    color: "white",
    backgroundColor: alpha(theme.palette.primary.main, 0.95),
    "&:hover": { backgroundColor: alpha(theme.palette.primary.main, 0.75) },
  },
}));
