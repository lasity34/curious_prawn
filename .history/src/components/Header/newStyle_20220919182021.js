import { alpha, makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({

    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        },
      width: '70%'
    },
    box: {
        alignItems: 'center'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25)},
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        height: '70%',
        [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto'},
        display: 'flex',
        jalignItems: 'center'
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '60%',
        
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '80%',
        [theme.breakpoints.up('md')]: { width: '20ch'}

    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
       
        
    }

    })
)