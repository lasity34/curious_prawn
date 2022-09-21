import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { Toolbar, AppBar, Box, InputBase, Typography, FormControl, MenuItem, InputLabel, Select } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import useStyles from "./newStyle";

const Header = ({ setCoords, type, setType, setRating, rating }) => {
  const classes = useStyles();
  const [autoComplete, setAutoComplete] = useState(null);

  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };

  return (
    <div>
      <AppBar className={classes.app} position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.topHead} style={{ width: "100%" }}>
            <Typography variant="h4" className={classes.title}>
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
                <InputBase
                  placeholder="Search..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
              {/* </Autocomplete> */}
            </Box>
          </div>
          <Box display="flex">
          <Typography variant="subtitle1" className={classes.title}>
               Type
              </Typography>
          <FormControl className={classes.formControl}>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
