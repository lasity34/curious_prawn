import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

import useStyles from "./styles";
import { createRef } from "react";

const List = ({
  places,
  childClicked,
  isLoading,
  type
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
            <Typography>
                List of {type}
            </Typography>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
