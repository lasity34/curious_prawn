import { makeStyles, alpha } from "@material-ui/core/styles";



export default makeStyles((theme) => ({
    container: {
        width: '50%',
        border: '1px solid black',
        margin: '1em auto'
    },
    contentContainer: {
        padding: ' 3em 2em',
        textAlign: 'center'
    },
    formContent: {
        textIndent: '5px',
        borderRadius: '5px'
    },
    formInput: {
        borderRadius: theme.shape.borderRadius,
        border: "1px solid black"
    },
    button: {
        width: '20%',
        margin:  "2em auto",
        backgroundColor: alpha(theme.palette.primary.main)
    }
}))