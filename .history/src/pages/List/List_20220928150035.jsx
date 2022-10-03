import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import PlaceDetails from "../../components/PlaceDetails/PlaceDetails";
import Map from "../Map/Map";
import useStyles from "./styles";
import { createRef } from "react";

const List = ({
  places,
  childClicked,
  isLoading,
  
}) => {
  const classes = useStyles();

  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <div className={classes.container}>
    
      {isLoading ? (
        <div className={classes.isLoading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
            <Typography variant="h5" gutterBottom style={{ textAlign: 'center'}}>
                List of Restaurants
            </Typography>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={6} md={3}>
                <PlaceDetails
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                />
              </Grid>
            ))}
          </Grid>
        
      )}
      </>
         <Map />
    </div>
  );
};

export default List;
