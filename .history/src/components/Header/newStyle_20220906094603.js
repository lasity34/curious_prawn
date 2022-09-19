import { makeStyles } from "@material-ui/core/styles";
import { display } from "@mui/system";

export default makeStyles((theme) => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    search

    })
)