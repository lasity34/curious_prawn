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
  useMediaQuery,
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
  dietryList,
  dietryRestrictions,
  setDietryRestrictions,
}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(`(min-width:800px)`);
  const [autoComplete, setAutoComplete] = useState([]);

  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };

  const [itemExpand, setItemExpand] = useState(false);

  function handleChange() {
    return setItemExpand((item) => !item);
  }

  return (
    <div>
      <AppBar className={classes.app} position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.topHead} style={{ width: "100%" }}>
            <Typography variant="h4" className={classes.title}>
              Curious Prawn
            </Typography>
            <Link to="../../">
              <Box className={classes.box} display="flex">
                {isDesktop ? (
                  <Box display="flex" justifycontent='center'>
                    <Link to="../../Login" className={classes.linksign}>
                      Log Out
                    </Link>
                    <Link to="../../SignUp" className={classes.linksign}>
                      Sign Up
                    </Link>
                    <Autocomplete
                      onLoad={onLoad}
                      onPlaceChanged={onPlaceChanged}
                    >
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
                ) : itemExpand ? (
                  <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <div className={classes.search}>
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                      <InputBase
                        onBlur={handleChange}
                        placeholder="Search..."
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                      />
                    </div>
                  </Autocomplete>
                ) : (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    className={classes.signs}
                  >
                    <Link to="../../Login" className={classes.linksign}>
                      Log Out
                    </Link>
                    <Link to="../../SignUp" className={classes.linksign}>
                      Sign Up
                    </Link>
                    <SearchIcon onClick={handleChange} />
                  </Box>
                )}
              </Box>
            </Link>
          </div>
          <Box
            display="flex"
            margin=" 0.5em 0.2em"
            justifyContent="space-around"
          >
            <Box display="flex" alignItems="center">
              <p variant="overline" className={classes.title}>
                Cuisines
              </p>
              <FormControl>
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
              <FormControl>
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
            <Box display="flex" alignItems="center">
              <FormControl>
                <Select
                  className={classes.select}
                  value={dietryRestrictions}
                  onChange={(e) => setDietryRestrictions(e.target.value)}
                >
                  {dietryList?.map((item, i) => {
                    return (
                      <MenuItem key={i} value={item.name}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Toolbar>

        <List className={classes.listHeader}>
          <Link to="../../" className={classes.linkButton}>
            Map
          </Link>
          <Link to="../../List/List" className={classes.linkButton}>
            List
          </Link>
        </List>
      </AppBar>
    </div>
  );
};

export default Header;

{
  /* <Box display="flex">
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
            </Box> */
}
