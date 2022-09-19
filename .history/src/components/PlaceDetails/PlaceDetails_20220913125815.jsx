import React from "react";
import {
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Phone } from "@material-ui/icons";
import { Rating } from "@mui/material";

import useStyles from "./styles";
import { PriceChange } from "@mui/icons-material";
import { useState } from "react";

const PlaceDetails = ({ place, id }) => {
  const classes = useStyles();

    console.log(place)

  return (
    <Card elevation={8}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://unsplash.com/photos/GXXYkSwndP4"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography variant="subtitle1">{place.ranking}</Typography>
        </Box>
 
          {place?.cuisine?.slice(0.1).map(({ name }) => (
            <Chip
              key={name}
              size="small"
              label={name}
              className={classes.chip}
            />
          ))}
          
          {place?.address && (
            <Typography gutterBottom  variant="body2" color="textSecondary" className={classes.subtitle} >
              <LocationOnIcon style={{ marginRight: 10}} />  {place.address}
                </Typography>
          )}
        {place?.phone && (
            <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle} >
              <Phone style={{ marginRight: 10}}/>  {place.phone}
                </Typography>
          )}
       <CardActions>
          <Button size="small" color="primary">
            
          </Button>  
       </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
