import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { Toolbar, AppBar, Box, InputBase, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search"
import { useState } from "react";
import useStyles from './newStyle'

const Header = ({ setCoords }) => {
  const classes = useStyles()
  const [autoComplete, setAutoComplete] = useState(null)

  const onLoad = (autoC) => setAutoComplete(autoC)

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat()
    const lng = autoComplete.getPlace().geometry.location.lng()

    setCoords({ lat, lng})
  }

  return (
    <AppBar className={classes.app} position="static">
      <Toolbar className={classes.toolbar}>

        <Typography variant="h5" className={classes.title}>
            Elegant Travels
        </Typography>
        <Box className={classes.box} display="flex">
          <Typography variant="subtitle1" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                        <SearchIcon />
                </div>
                <InputBase placeholder="Search..."  classes={ { root: classes.inputRoot, input: classes.inputInput}}/>
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
