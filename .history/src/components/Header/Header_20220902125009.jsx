import React from "react";
import{ Autocomplete} from "@react-google-maps/api";
import { Toolbar, AppBar, Box, InputBase, Typography } from "@material-ui/core";




const Header = () => {
    return (
       <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5">

                </Typography>
            </Toolbar>
       </AppBar>
    )
}

export default Header;