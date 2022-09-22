import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@mui/material";

import useStyles from "./styles";

const Map = ({ setCoords, setBounds, coords, places, setChildClicked }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(`(min-width:600px)`);

  return (
    <div className={isDesktop ? classes.mapContainer : classes.mobileMap}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAUFsJ-sdQtILh7X70aTfSw4LGeCrMHxjQ" }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {isDesktop ? (
              <Paper elevation={3} className={classes.paper}>
                <p className={classes.name}>
                  {place.name}
                </p>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://unsplash.com/photos/GXXYkSwndP4"
                  }
                  alt={place.name}
                />
                <Rating
                  sx={{
                    fontSize: "0.9rem",
                  }}
                  value={Number(place.rating)}
                  readOnly
                />
              </Paper>
            ) : (
              <div>
                <LocationOnOutlinedIcon  />
                <Paper elevation={3} className={classes.paperMobile}>
                  <p className={classes.name}> {place.name}</p>
                  <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.small.url
                      : "https://unsplash.com/photos/GXXYkSwndP4"
                  } />
              
                </Paper>
                
              </div>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
