import { alpha, makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    search: {
        position: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25)},
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3)}
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%'
    }

    })
)