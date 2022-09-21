import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { Toolbar, AppBar, Box, InputBase, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search"
import { useState } from "react";
import  useStyles  from './newStyle'


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
    <div>

   

    
    <AppBar className={classes.app} position="static">
      <Toolbar className={classes.toolbar}>
        <div className={classes.topHead} style={{ width: '100%' }}>
        <Typography variant="h5" className={classes.title}>
            Elegant Travels
        </Typography>
        <Box className={classes.box} display="flex">
          <Typography variant="subtitle1" className={classes.title}>
            Explore new places
          </Typography>
          {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                        <SearchIcon />
                </div>
                <InputBase placeholder="Search..."  classes={ { root: classes.inputRoot, input: classes.inputInput}}/>
            </div>
          {/* </Autocomplete> */}
        </Box>
        </div>
        
        <Typography variant="h5" style={{ width: '100%'}}>
      `Restaurant goes here`
        </Typography>
      </Toolbar>
    </AppBar>
      
      </div>
  );
};

export default Header;
