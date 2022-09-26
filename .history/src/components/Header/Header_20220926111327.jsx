import React from "react";
import { Autocomplete } from "@react-google-maps/api";

import {
  Toolbar,
  AppBar,
  Box,
  InputBase,
  Typography,
  FormControl,
  MenuItem,
  Select,
  List,
  ListItem,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import useStyles from "./newStyle";
import { Link } from "react-router-dom";

const Header = ({
  setCoords,
  setRating,
  rating,
  cuisine,
  setCuisine,
  cuisineList,
}) => {
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
              Curious Prawn
            </Typography>
            <Box className={classes.box} display="flex">
              <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
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
              </Autocomplete>
            </Box>
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
            }}
          >
            {/* <Box display="flex">
              <Typography variant="h3" className={classes.title}>
                Type
              </Typography>
              <FormControl className={classes.formControl}>
                <Select
                  className={classes.select}
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <MenuItem value="Select Type">Restaurants</MenuItem>
                  <MenuItem value="restaurants">Restaurants</MenuItem>
                  <MenuItem value="hotels">Hotels</MenuItem>
                  <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
              </FormControl>
            </Box> */}

            <Box display="flex" alignItems="center">
              <Typography variant="subtitle2" className={classes.title}>
                Cuisines
              </Typography>
              <FormControl  className={classes.formControl}>
                <Select
                
                  className={classes.select}
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                >
              
                  {cuisineList?.map((item, i) => {
                    return (
                      <MenuItem key={i} value={item.name}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box display="flex" alignItems="center">
              <FormControl className={classes.formControl}>
                <Select
                  className={classes.select}
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <MenuItem value={1}>All Ratings</MenuItem>
                  <MenuItem value={3}>Above 3.0</MenuItem>
                  <MenuItem value={4}>Above 4.0</MenuItem>
                  <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Toolbar>

        <List className={classes.listHeader}>
          <Link to="../../" className={classes.linkButton}>
            Map
          </Link>
          <Link to="../../pages/List/List" className={classes.linkButton}>
            List
          </Link>
        </List>
      </AppBar>
    </div>
  );
};

export default Header;
