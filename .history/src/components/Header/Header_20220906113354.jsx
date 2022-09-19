import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { Toolbar, AppBar, Box, InputBase, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search"

import useStyles from './newStyle'

const Header = () => {
  const classes = useStyles()


  return (
    <AppBar className={classes.app} position="static">
      <Toolbar className={classes.toolbar}>

        <Typography variant="h6" className={classes.title}>
            Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="subtitle1" className={classes.title}>
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                        <SearchIcon />
                </div>
                <InputBase placeholder="Search..."  classes={ { root: classes.inputRoot, input: classes.inputInput}}/>
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
