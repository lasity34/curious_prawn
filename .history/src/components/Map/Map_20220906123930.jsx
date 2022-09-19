import React from "react";
import googleMapReact from "google-map-react";
import { paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import { Rating } from "@mui/material";


import useStyles from './styles'

const Map = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery(`(min-width:600px)`)

    const coordinates = { lat: 0, lng: 0}


    return (
        <div className={classes.mapContainer}>
          <googleMapReact
          bootstrapURLKeys={ { key: 'AIzaSyDZqk-GXkfcFZMVBVhieTUE3aXIb9i1-JE'}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={ '' }
          onChange={''}
          onChildClick={''}
          >

          </googleMapReact>
        </div>
    )
}

export default Map;