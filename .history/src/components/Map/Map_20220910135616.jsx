import React from "react";
import GoogleMapReact from "google-map-react";
import { paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import { Rating } from "@mui/material";


import useStyles from './styles'

const Map = ( { setCoordinates, setBounds, coordinates}) => {
    const classes = useStyles()
    const isMobile = useMediaQuery(`(min-width:600px)`)

   


    return (
        <div className={classes.mapContainer}>
          <GoogleMapReact
          bootstrapURLKeys={ { key: 'AIzaSyDZqk-GXkfcFZMVBVhieTUE3aXIb9i1-JE'}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={ '' }
          onChange={(e) => {
            setCoordinates({ lat: e.center.lat, lng: e.center.lat})
          }}
          onChildClick={''}
          >

          </GoogleMapReact>
        </div>
    )
}

export default Map;